﻿$axure.internal(function($ax) {
    var _style = {};
    $ax.style = _style;

    var _disabledWidgets = {};
    var _selectedWidgets = {};

    // A table to cache the outerHTML of the _rtf elements before the rollover state is applied.
    var _originalTextCache = {};
    // A table to exclude the normal style from adaptive overrides
    var _shapesWithSetRichText = {};

    // just a listing of shape ids
    var _adaptiveStyledWidgets = {};

    var _setLinkStyle = function(id, styleName) {
        var textId = $ax.style.GetTextIdFromLink(id);
        var style = _computeAllOverrides(id, textId, styleName, $ax.adaptive.currentViewId);
        if(!_originalTextCache[textId]) {
            $ax.style.CacheOriginalText(textId);
        }
        if($.isEmptyObject(style)) return;

        var parentObjectCache = _originalTextCache[textId].styleCache;

        _transformTextWithVerticalAlignment(textId, function() {
            var cssProps = _getCssStyleProperties(style);
            $('#' + id).find('*').andSelf().each(function(index, element) {
                element.setAttribute('style', parentObjectCache[element.id]);
                _applyCssProps(element, cssProps);
            });
        });
    };

    var _resetLinkStyle = function(id) {
        var textId = $ax.style.GetTextIdFromLink(id);
        var parentObjectCache = _originalTextCache[textId].styleCache;

        _transformTextWithVerticalAlignment(textId, function() {
            $('#' + id).find('*').andSelf().each(function(index, element) {
                element.style.cssText = parentObjectCache[element.id];
            });
        });
        if($ax.event.mouseDownObjectId) {
            $ax.style.SetWidgetMouseDown($ax.event.mouseDownObjectId, true);
        } else if($ax.event.mouseOverObjectId) {
            $ax.style.SetWidgetHover($ax.event.mouseOverObjectId, true);
        }
    };

    $ax.style.SetLinkHover = function(id) {
        _setLinkStyle(id, "mouseOver");
    };

    $ax.style.SetLinkNotHover = function(id) {
        _resetLinkStyle(id);
    };

    $ax.style.SetLinkMouseDown = function(id) {
        _setLinkStyle(id, "mouseDown");
    };

    $ax.style.SetLinkNotMouseDown = function(id) {
        _resetLinkStyle(id);
        //var style = _getStyleForState(id, $ax.event.mouseOverObjectId, "mouseOver");
        var style = _computeAllOverrides(id, $ax.event.mouseOverObjectId, "mouseOver");

        if(!$.isEmptyObject(style)) $ax.style.SetLinkHover(id);
        //we dont do anything here because the widget not mouse down has taken over here
    };

    var _widgetHasState = function(id, state) {
        if($ax.style.getElementImageOverride(id, state)) return true;
        var diagramObject = $ax.getObjectFromElementId(id);

        var adaptiveIdChain = $ax.adaptive.getAdaptiveIdChain($ax.adaptive.currentViewId);

        for(var i = 0; i < adaptiveIdChain.length; i++) {
            var viewId = adaptiveIdChain[i];
            var adaptiveStyle = diagramObject.adaptiveStyles[viewId];
            if(adaptiveStyle && adaptiveStyle.stateStyles && adaptiveStyle.stateStyles[state]) return true;
        }

        if(diagramObject.style.stateStyles) return diagramObject.style.stateStyles[state];

        return false;
    };

    var _canHover = function(id) {
        if($ax.style.IsWidgetDisabled(id) || $ax.style.IsWidgetSelected(id)) return false;
        var obj = $ax.getObjectFromElementId(id);
        if(!obj.isContained) return true;
        var path = $ax.getPathFromScriptId($ax.repeater.getScriptIdFromElementId(id));
        path[path.length - 1] = obj.parent.id;
        var itemId = $ax.repeater.getItemIdFromElementId(id);
        return _canHover($ax.getElementIdFromPath(path, { itemNum: itemId }));
    };

    $ax.style.SetWidgetHover = function(id, value) {
        if(!_canHover(id)) return;
        if(!_widgetHasState(id, 'mouseOver')) return;

        var valToSet = value || _isRolloverOverride(id);
        var state = valToSet ? 'mouseOver' : 'normal';
        _applyImageAndTextJson(id, state);
        _updateElementIdImageStyle(id, state);
    };

    var _rolloverOverrides = [];
    var _isRolloverOverride = function(id) {
        return _rolloverOverrides.indexOf(id) != -1;
    };

    $ax.style.AddRolloverOverride = function(id) {
        if(_isRolloverOverride(id)) return;
        _rolloverOverrides[_rolloverOverrides.length] = id;
        if($ax.event.mouseOverIds.indexOf(id) == -1) $ax.style.SetWidgetHover(id, true);
    };

    $ax.style.RemoveRolloverOverride = function(id) {
        var index = _rolloverOverrides.indexOf(id);
        if(index == -1) return;
        _rolloverOverrides.splice(index, 1);
        if($ax.event.mouseOverIds.indexOf(id) == -1) $ax.style.SetWidgetHover(id, false);
    };

    //    function GetWidgetCurrentState(id) {
    //        if($ax.style.IsWidgetDisabled(id)) return "disabled";
    //        if($ax.style.IsWidgetSelected(id)) return "selected";
    //        if($ax.event.mouseOverObjectId == id) return "mouseOver";
    //        if($ax.event.mouseDownObjectId == id) return "mouseDown";

    //        return "normal";
    //    }

    $ax.style.ObjHasMouseDown = function(id) {
        var obj = $obj(id);
        return $ax.style.getElementImageOverride(id, 'mouseDown') || obj.style && obj.style.stateStyles && obj.style.stateStyles.mouseDown;
    };

    $ax.style.SetWidgetMouseDown = function(id, value) {
        if($ax.style.IsWidgetSelected(id) || $ax.style.IsWidgetDisabled(id)) return;
        if(!_widgetHasState(id, 'mouseDown')) return;

        //    ApplyImageAndTextJson(id, value ? 'mouseDown' : !$.isEmptyObject(GetStyleForState(id, null, 'mouseOver')) ? 'mouseOver' : 'normal');
        var state = value ? 'mouseDown' : 'mouseOver';
        _applyImageAndTextJson(id, state);
        _updateElementIdImageStyle(id, state);
    };

    var _setWidgetSelected = $ax.style.SetWidgetSelected = function(id, value) {
        if($ax.style.IsWidgetDisabled(id)) return;

        if(value) {
            var group = $('#' + id).attr('selectiongroup');
            if(group) {
                $("[selectiongroup='" + group + "']").each(function() {
                    var otherId = this.id;
                    if(otherId == id) return;
                    $ax.style.SetWidgetSelected(otherId, false);
                });
            }
        }

        var obj = $obj(id);
        if(obj) {
            if(obj.type == 'dynamicPanel') {
                var children = $axure('#' + id).getChildren()[0].children;
                for(var i = 0; i < children.length; i++) {
                    var childId = children[i];
                    // Special case for trees
                    var childObj = $jobj(childId);
                    if(childObj.hasClass('treeroot')) {
                        var treenodes = childObj.find('.treenode');
                        for(var j = 0; j < treenodes.length; j++) {
                            $axure('#' + treenodes[j].id).selected(value);
                        }
                    } else $axure('#' + childId).selected(value);
                }
            } else {
                while(obj.isContained && !_widgetHasState(id, 'selected')) obj = obj.parent;
                var itemId = $ax.repeater.getItemIdFromElementId(id);
                var path = $ax.getPathFromScriptId($ax.repeater.getScriptIdFromElementId(id));
                path[path.length - 1] = obj.id;
                id = $ax.getElementIdFromPath(path, { itemNum: itemId });
                if(value) {
                    if(_widgetHasState(id, 'selected')) {
                        _applyImageAndTextJson(id, 'selected');
                        _updateElementIdImageStyle(id, 'selected');
                    }
                } else {
                    // set it back to mosue over if the mouse is over
                    var state = $ax.event.mouseOverObjectId == id && _widgetHasState(id, 'mouseOver') ? 'mouseOver' : 'normal';
                    _applyImageAndTextJson(id, state);
                    _updateElementIdImageStyle(id, state);
                }
            }
        }

        //    ApplyImageAndTextJson(id, value ? 'selected' : 'normal');
        _selectedWidgets[id] = value;
    };

    var _isWidgetSelected = $ax.style.IsWidgetSelected = function(id) {
        return Boolean(_selectedWidgets[id]);
    };

    var _setWidgetEnabled = $ax.style.SetWidgetEnabled = function(id, value) {
        _disabledWidgets[id] = !value;

        var state = !value ? 'disabled' : $ax.style.IsWidgetSelected(id) ? 'selected' : 'normal';

        if(state == 'selected') $ax.style.SetWidgetSelected(id, true);
        else _applyImageAndTextJson(id, state);
        $('#' + id).find('a').css('cursor', value ? 'pointer' : 'default');
        _updateElementIdImageStyle(id, state);
    };

    $ax.style.SetWidgetPlaceholder = function(id, value, text, password) {
        var inputId = $ax.repeater.applySuffixToElementId(id, '_input');

        // Right now this is the only style on the widget. If other styles (ex. Rollover), are allowed
        //  on TextBox/TextArea, or Placeholder is applied to more widgets, this may need to do more.
        var obj = $jobj(inputId);
        if(!value) {
            obj.attr('style', '');
            if(password) document.getElementById(inputId).type = 'password';
        } else {
            //var style = _getStyleForState(id, null, 'hint');
            var style = _computeAllOverrides(id, null, 'hint');
            var styleProperties = _getCssStyleProperties(style);

            //moved this out of GetCssStyleProperties for now because it was breaking un/rollovers with gradient fills
            if(style.fill) styleProperties.runProps.backgroundColor = _getColorFromFill(style.fill);

            _applyCssProps($('#' + inputId)[0], styleProperties);
            if(password) document.getElementById(inputId).type = 'text';
        }
        obj.val(text);
    };

    var _isWidgetDisabled = $ax.style.IsWidgetDisabled = function(id) {
        return Boolean(_disabledWidgets[id]);
    };

    var _elementIdsToImageOverrides = {};
    $ax.style.mapElementIdToImageOverrides = function(elementId, override) {
        _elementIdsToImageOverrides[elementId] = override;
    };

    $ax.style.deleteElementIdToImageOverride = function(elementId) {
        delete _elementIdsToImageOverrides[elementId];
    };

    $ax.style.getElementImageOverride = function(elementId, state) {
        var url = _elementIdsToImageOverrides[elementId] && _elementIdsToImageOverrides[elementId][state];
        return url;
    };

    $ax.style.elementHasAnyImageOverride = function(elementId) {
        return Boolean(_elementIdsToImageOverrides[elementId]);
    };

    var _updateElementIdImageStyle = _style.updateElementIdImageStyle = function(elementId, state) {
        if(!_style.elementHasAnyImageOverride(elementId)) return;

        if(!state) {
            state = 'normal';
            if(_style.IsWidgetDisabled(elementId)) state = 'disabled';
            else if(_style.IsWidgetSelected(elementId)) state = 'selected';
            else if($ax.event.mouseDownObjectId == elementId) state = 'mouseDown';
            else if($ax.event.mouseOverIds.indexOf(elementId) != -1) state = 'mouseOver';
        }

        var style = $obj(elementId).style;
        var stateStyle = state == 'normal' ? style : style && style.stateStyles && style.stateStyles[state];
        if(!stateStyle && !_style.getElementImageOverride(elementId, state)) {
            if(state != 'normal') {
                var bubbleState = 'normal';
                if(state == 'mouseDown') bubbleState = 'mouseOver';
                _updateElementIdImageStyle(elementId, bubbleState);
                return;
            }
        }

        var computedStyle = _style.computeAllOverrides(elementId, undefined, state, $ax.adaptive.currentViewId);

        var query = $jobj($ax.repeater.applySuffixToElementId(elementId, '_img'));
        var borderId = $ax.repeater.applySuffixToElementId(elementId, '_border');
        var borderQuery = $jobj(borderId);
        if(!borderQuery.length) {
            borderQuery = $('<div></div>');
            borderQuery.attr('id', borderId);
            query.after(borderQuery);
        }

        borderQuery.attr('style', '');
        borderQuery.css('position', 'absolute');
        query.attr('style', '');

        var borderWidth = computedStyle.borderWidth;
        if(borderWidth) {
            borderQuery.css('border-style', 'solid');
            borderQuery.css('border-width', borderWidth + 'px');
            borderQuery.css('width', style.size.width - borderWidth * 2);
            borderQuery.css('height', style.size.height - borderWidth * 2);
        }

        var linePattern = computedStyle.linePattern;
        if(linePattern) borderQuery.css('border-style', linePattern);

        var borderFill = computedStyle.borderFill;
        if(borderFill) {
            var color = borderFill.fillType == 'solid' ? borderFill.color :
                borderFill.fillType == 'linearGradient' ? borderFill.colors[0].color : 0;

            var alpha = Math.floor(color / 256 / 256 / 256);
            color -= alpha * 256 * 256 * 256;
            alpha = alpha / 255;

            var red = Math.floor(color / 256 / 256);
            color -= red * 256 * 256;
            var green = Math.floor(color / 256);
            var blue = color - green * 256;

            borderQuery.css('border-color', _rgbaToFunc(red, green, blue, alpha));
        }

        var cornerRadiusTopLeft = computedStyle.cornerRadiusTopLeft;
        if(cornerRadiusTopLeft) {
            query.css('border-radius', cornerRadiusTopLeft + 'px');
            borderQuery.css('border-radius', cornerRadiusTopLeft + 'px');
        }

        var outerShadow = computedStyle.outerShadow;
        if(outerShadow && outerShadow.on) {
            var arg = '';
            arg += outerShadow.offsetX + 'px' + ' ' + outerShadow.offsetY + 'px' + ' ';
            var rgba = outerShadow.color;
            arg += outerShadow.blurRadius + 'px' + ' 0px ' + _rgbaToFunc(rgba.r, rgba.g, rgba.b, rgba.a);
            query.css('-moz-box-shadow', arg);
            query.css('-wibkit-box-shadow', arg);
            query.css('box-shadow', arg);
            query.css('width', style.size.width);
            query.css('height', style.size.height);
            query.css('left', '0px');
            query.css('top', '0px');
        }
    };

    var _removeCss = function(query, prop) {
        prop += ':';
        var style = query.attr('style');

        // todo: Maybe this should be a regex...
        var propIndex = style.indexOf(prop);
        if(propIndex == -1) return;

        var startStyle = style.substr(0, propIndex);
        var beginningIndex = startStyle.lastIndexOf(';') + 1;
        var endIndex = style.indexOf(';', propIndex);

        startStyle = startStyle.substr(0, beginningIndex);
        query.attr('style', startStyle + style.substr(endIndex));
    };

    var _rgbaToFunc = function(red, green, blue, alpha) {
        return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
    };

    //function $ax.style.GetTextIdFromShape(id) {
    //    return $.grep(
    //        $('#' + id).children().map(function (i, obj) { return obj.id; }), // all the child ids
    //        function (item) { return item.indexOf(id) < 0; })[0]; // that are not similar to the parent
    //}

    var _getButtonShape = function(id) {
        var obj = $obj(id);

        // some treeNodeObjects don't have button shapes
        return $jobj(obj.type == 'treeNodeObject' && obj.buttonShapeId ? $ax.getElementIdFromPath([obj.buttonShapeId], { relativeTo: id }) : id);
    };

    var _getTextIdFromShape = $ax.style.GetTextIdFromShape = function(id) {
        return _getButtonShape(id).find('.text').attr('id');
    };

    $ax.style.GetTextIdFromLink = function(id) {
        return $jobj(id).parentsUntil('.text').parent().attr('id');
    };

    var _getShapeIdFromText = $ax.style.GetShapeIdFromText = function(id) {
        if(!id) return undefined; // this is to prevent an infinite loop.
        //return $jobj(id).parent().attr('id');
        var current = $jobj(id).parent();
        while(!current.is("body")) {
            var id = current.attr('id');
            if(id) return id;
            current = current.parent();
        }

        return undefined;
    };

    $ax.style.GetImageIdFromShape = function(id) {
        var image = _getButtonShape(id).find('img[id$=img]');
        if(!image.length) image = $jobj(id).find('img[id$=image_sketch]');
        return image.attr('id');
    };

    var _applyImageAndTextJson = function(id, event) {
        var textId = $ax.style.GetTextIdFromShape(id);
        _resetTextJson(id, textId);

        if(event != '') {
            var imgQuery = $jobj($ax.style.GetImageIdFromShape(id));
            var e = imgQuery.data('events');
            if(e && e[event]) imgQuery.trigger(event);


            var imageUrl = $ax.adaptive.getImageForStateAndView(id, event);
            if(imageUrl) _applyImage(id, imageUrl, event);

            var style = _computeAllOverrides(id, null, event, $ax.adaptive.currentViewId);
            if(!$.isEmptyObject(style)) {
                _applyTextStyle(textId, style);
            }
        }
    };


    /* -------------------

    here's the algorithm in a nutshell:
    [DOWN] -- refers to navigation down the view inheritance heirarchy (default to most specific)
    [UP] -- navigate up the heirarchy

    ComputeAllOverrides (object):
    All view styles [DOWN]
    If hyperlink
    - DO ComputeStateStyle for parent object
    - if (MouseOver || MouseDown) 
    - linkMouseOver Style
    - if (MouseDown) 
    - linkMouseDown style
    - ComputeStateStyleForViewChain (parent, STATE)
    
    if (MouseDown) DO ComputeStateStyleForViewChain for object, mouseOver
    DO ComputeStateStyleForViewChain for object, style


    ComputeStateStyleForViewChain (object, STATE)
    FIRST STATE state style [UP] the chain OR default object STATE style

    ------------------- */

    var FONT_PROPS = {
        'typeface': true,
        'fontName': true,
        'fontWeight': true,
        'fontStyle': true,
        'fontStretch': true,
        'fontSize': true,
        'underline': true,
        'foreGroundFill': true,
        'horizontalAlignment': true
    };

    var _computeAllOverrides = $ax.style.computeAllOverrides = function(id, parentId, state, currentViewId) {
        var computedStyle = {};

        var diagramObject = $ax.getObjectFromElementId(id);
        var viewIdChain = $ax.adaptive.getAdaptiveIdChain(currentViewId);

        var excludeFont = _shapesWithSetRichText[id];
        for(var i = 0; i < viewIdChain.length; i++) {
            var viewId = viewIdChain[i];
            var style = diagramObject.adaptiveStyles[viewId];
            if(style) {
                // we want to exclude the normal font style for shapes where the rich text has been set with an interaction
                // so we copy the style so we don't modify the original, then delete all the font props.
                if(excludeFont) {
                    style = $ax.deepCopy(style);
                    for(var prop in FONT_PROPS) delete style[prop];
                }
                $.extend(computedStyle, style);
            }
        }

        //var isHyperlink = $('#' + id).is('a');
        if(parentId) { // this is a hyperlink
            if(state == 'mouseDown' || state == 'mouseOver') $.extend(computedStyle, $ax.document.stylesheet.defaultStyles.hyperlinkMouseOver);
            if(state == 'mouseDown') {
                $.extend(computedStyle, _computeStateStyleForViewChain(diagramObject, 'mouseOver', viewIdChain));
                $.extend(computedStyle, $ax.document.stylesheet.defaultStyles.hyperlinkMouseDown);
            }
            $.extend(computedStyle, _computeStateStyleForViewChain(diagramObject, state, viewIdChain));
        }

        if(state == 'mouseDown') $.extend(computedStyle, _computeStateStyleForViewChain(diagramObject, 'mouseOver', viewIdChain));
        $.extend(computedStyle, _computeStateStyleForViewChain(diagramObject, state, viewIdChain, excludeFont));

        return _removeUnsupportedProperties(computedStyle, diagramObject.type);
    };

    var _computeStateStyleForViewChain = function(diagramObject, state, viewIdChain, excludeNormal) {
        var styleObject = diagramObject;
        while(styleObject.isContained) styleObject = styleObject.parent;

        var adaptiveStyles = styleObject.adaptiveStyles;

        for(var i = viewIdChain.length - 1; i >= 0; i--) {
            var viewId = viewIdChain[i];
            var viewStyle = adaptiveStyles[viewId];
            var stateStyle = viewStyle && _getFullStateStyle(viewStyle, state, excludeNormal);
            if(stateStyle) return $.extend({}, stateStyle);
        }

        // we dont want to actually include the object style because those are not overrides, hence the true for "excludeNormal" and not passing the val through
        var stateStyleFromDefault = _getFullStateStyle(styleObject.style, state, true);
        return $.extend({}, stateStyleFromDefault);
    };

    // returns the full effective style for an object in a state state and view
    var _computeFullStyle = function(id, state, currentViewId) {
        var obj = $obj(id);
        var overrides = _computeAllOverrides(id, undefined, state, currentViewId);
        // todo: account for image box
        var objStyle = obj.style;
        var customStyle = objStyle.baseStyle && $ax.document.stylesheet.stylesById[objStyle.baseStyle];
        var returnVal = $.extend({}, $ax.document.stylesheet.defaultStyles[obj.styleType], customStyle, objStyle, overrides);
        return _removeUnsupportedProperties(returnVal, obj.type);
    };

    var _removeUnsupportedProperties = function(style, objectType) {
        // for now all we need to do is remove padding from checkboxes and radio buttons
        if(objectType == 'radioButton' || objectType == 'checkbox') {
            style.paddingTop = 0;
            style.paddingLeft = 0;
            style.paddingRight = 0;
            style.paddingBottom = 0;
        }
        return style;
    };

    var _getFullStateStyle = function(style, state, excludeNormal) {
        //'normal' is needed because now DiagramObjects get their image from the Style and unapplying a rollover needs the image
        var stateStyle = state == 'normal' && !excludeNormal ? style : style && style.stateStyles && style.stateStyles[state];
        if(stateStyle) {
            var customStyle = stateStyle.baseStyle && $ax.document.stylesheet.stylesById[stateStyle.baseStyle];
            //make sure not to extend the customStyle this can mutate it for future use
            return $.extend({}, customStyle, stateStyle);
        }
        return undefined;
    };

    // commented this out for now... we actually will probably need it for ie
    var _applyOpacityFromStyle = $ax.style.applyOpacityFromStyle = function(id, style) {
        return;
        var opacity = style.opacity || '';
        $jobj(id).children().css('opacity', opacity);
    };

    var _initTextAlignment = $ax.style.initTextAlignment = function(elementId, style) {
        var vAlign = style.verticalAlignment || 'middle';
        var paddingTop = style.paddingTop || 0;
        var paddingBottom = style.paddingBottom || 0;

        //var textId = 'u' + (Number("123".substring(1, 20)) + 1);
        var textId = _getTextIdFromShape(elementId);
        _idToAlignProps[textId] = { vAlign: vAlign, paddingTop: paddingTop, paddingBottom: paddingBottom };

        // now handle vertical alignment
        if(_getObjVisible(textId)) {
            _setTextAlignment(textId, _idToAlignProps[textId]);
        }
    };

    var ALL_STATES = ['mouseOver', 'mouseDown', 'selected', 'disabled'];
    var _applyImage = $ax.style.applyImage = function(id, imgUrl, state) {
        var imgQuery = $jobj($ax.style.GetImageIdFromShape(id));
        var idQuery = $jobj(id);
        imgQuery.attr('src', imgUrl);
        if(imgQuery.parents('a.basiclink').length > 0) imgQuery.css('border', 'none');
        if(imgUrl.indexOf(".png") > -1) $ax.utils.fixPng(imgQuery[0]);

        for(var i = 0; i < ALL_STATES.length; i++) {
            idQuery.removeClass(ALL_STATES[i]);
            imgQuery.removeClass(ALL_STATES[i]);
        }
        if(state != 'normal') {
            idQuery.addClass(state);
            imgQuery.addClass(state);
        }
    };

    var _resetTextJson = function(id, textid) {
        // reset the opacity
        $jobj(id).children().css('opacity', '');

        var cacheObject = _originalTextCache[textid];
        if(cacheObject) {
            _transformTextWithVerticalAlignment(textid, function() {
                var styleCache = cacheObject.styleCache;
                var textQuery = $('#' + textid);
                textQuery.find('*').each(function(index, element) {
                    element.style.cssText = styleCache[element.id];
                });
            });
        }
    };

    // Preserves the alingment for the element textid after executing transformFn

    var _getRtfElementHeight = function(rtfElement) {
        if(rtfElement.innerHTML == '') rtfElement.innerHTML = '&nbsp;';

        // To handle render text as image
        var images = $(rtfElement).children('img');
        if(images.length) return images.height();
        return rtfElement.offsetHeight;
    };

    // why microsoft decided to default to round to even is beyond me...
    var _roundToEven = function(number) {
        var numString = number.toString();
        var parts = numString.split('.');
        if(parts.length == 1) return number;
        if(parts[1].length == 1 && parts[1] == '5') {
            var wholePart = Number(parts[0]);
            return wholePart % 2 == 0 ? wholePart : wholePart + 1;
        } else return Math.round(number);
    };

    var _transformTextWithVerticalAlignment = $ax.style.transformTextWithVerticalAlignment = function(textId, transformFn) {
        if(!_originalTextCache[textId]) {
            $ax.style.CacheOriginalText(textId);
        }

        var rtfElement = window.document.getElementById(textId);
        if(!rtfElement) return;

        var shapeId = _getShapeIdFromText(textId);
        var state = 'normal';
        if(_isWidgetDisabled(shapeId)) state = 'disabled';
        if(_isWidgetSelected(shapeId)) state = 'selected';

        transformFn();

        var style = _computeFullStyle(shapeId, state, $ax.adaptive.currentViewId);
        var vAlign = style.verticalAlignment || 'middle';
        var paddingTop = style.paddingTop || 0;
        var paddingBottom = style.paddingBottom || 0;
        _idToAlignProps[textId] = { vAlign: vAlign, paddingTop: paddingTop, paddingBottom: paddingBottom };

        // now handle vertical alignment
        if(_getObjVisible(textId)) {
            _setTextAlignment(textId, _idToAlignProps[textId]);
        }
    };

    // this is for vertical alignments set on hidden objects
    var _idToAlignProps = {};

    $ax.style.updateTextAlignmentForVisibility = function(textId) {
        var alignProps = _idToAlignProps[textId];
        if(!alignProps || !_getObjVisible(textId)) return;
        delete _idToAlignProps[textId];

        _setTextAlignment(textId, alignProps);
    };

    var _getObjVisible = _style.getObjVisible = function(id) {
        return $('#' + id).css('visibility') != 'hidden';
    };

    var _setTextAlignment = function(textId, alignProps) {
        if(!alignProps) return;

        var vAlign = alignProps.vAlign;
        var paddingTop = Number(alignProps.paddingTop);
        var paddingBottom = Number(alignProps.paddingBottom);

        var textObj = $jobj(textId);
        var textHeight = _getRtfElementHeight(textObj[0]);
        var containerHeight = textObj.parent().height();

        var newTop = 0;
        if(vAlign == "middle") {
            newTop = _roundToEven((containerHeight - textHeight + paddingTop - paddingBottom) / 2);
        } else if(vAlign == "bottom") {
            newTop = _roundToEven(containerHeight - textHeight - paddingBottom);
        } else { // else top align
            newTop = _roundToEven(paddingTop);
        }
        //$('#' + textId).css('top', newTop + 'px');
    };

    var _clearAdaptiveStyles = $ax.style.clearAdaptiveStyles = function() {
        for(var shapeId in _adaptiveStyledWidgets) {
            var textId = $ax.style.GetTextIdFromShape(shapeId);
            _resetTextJson(shapeId, textId);
            if(_isWidgetDisabled(shapeId)) _applyImageAndTextJson(shapeId, 'disabled');
            if(_isWidgetSelected(shapeId)) _applyImageAndTextJson(shapeId, 'selected');
        }

        _adaptiveStyledWidgets = {};
    };

    var _setAdaptiveStyle = $ax.style.setAdaptiveStyle = function(shapeId, style) {
        _adaptiveStyledWidgets[shapeId] = style;

        var textId = $ax.style.GetTextIdFromShape(shapeId);
        _applyTextStyle(textId, style);

        // removing this for now
        //        if(style.location) {
        //            $jobj(shapeId).css('top', style.location.x + "px")
        //                .css('left', style.location.y + "px");
        //        }
    };

    //-------------------------------------------------------------------------
    // _applyTextStyle
    //
    // Applies a rollover style to a text element.
    //       id : the id of the text object to set.
    //       styleProperties : an object mapping style properties to values. eg:
    //                         { 'fontWeight' : 'bold',
    //                           'fontStyle' : 'italic' }
    //-------------------------------------------------------------------------
    var _applyTextStyle = function(id, style) {
        _transformTextWithVerticalAlignment(id, function() {
            var styleProperties = _getCssStyleProperties(style);
            $('#' + id).find('*').each(function(index, element) {
                _applyCssProps(element, styleProperties);
            });
        });
    };

    var _applyCssProps = function(element, styleProperties) {
        var nodeName = element.nodeName.toLowerCase();
        if(nodeName == 'p') {
            var parProps = styleProperties.parProps;
            for(var prop in parProps) element.style[prop] = parProps[prop];
        } else if(nodeName != 'a') {
            var runProps = styleProperties.runProps;
            for(prop in runProps) element.style[prop] = runProps[prop];
        }
    };

    var _getCssShadow = function(shadow) {
        return shadow.on
            ? shadow.offsetX + "px " + shadow.offsetY + "px " + shadow.blurRadius + "px " + _getCssColor(shadow.color)
            : "";
    };

    var _getCssStyleProperties = function(style) {
        var toApply = {};
        toApply.runProps = {};
        toApply.parProps = {};

        if(style.fontName) toApply.runProps.fontFamily = style.fontName;
        // we need to set font size on both runs and pars because otherwise it well mess up the measure and thereby vertical alignment
        if(style.fontSize) toApply.runProps.fontSize = toApply.parProps.fontSize = style.fontSize;
        if(style.fontWeight !== undefined) toApply.runProps.fontWeight = style.fontWeight;
        if(style.fontStyle !== undefined) toApply.runProps.fontStyle = style.fontStyle;
        if(style.underline !== undefined) toApply.runProps.textDecoration = style.underline ? 'underline' : 'none';
        if(style.foreGroundFill) {
            toApply.runProps.color = _getColorFromFill(style.foreGroundFill);
            if(style.foreGroundFill.opacity) toApply.runProps.opacity = style.foreGroundFill.opacity;
        }
        if(style.horizontalAlignment) toApply.parProps.textAlign = style.horizontalAlignment;
        if(style.lineSpacing) toApply.parProps.lineHeight = style.lineSpacing;
        if(style.textShadow) {
            var cssShadow = _getCssShadow(style.textShadow);
            toApply.parProps.textShadow = cssShadow; // we need this dumb hyphe
        }

        return toApply;
    };

    var _getColorFromFill = function(fill) {
        var fillString = '00000' + fill.color.toString(16);
        return '#' + fillString.substring(fillString.length - 6);
    };

    var _getCssColor = function(rgbaObj) {
        return "rgba(" + rgbaObj.r + ", " + rgbaObj.g + ", " + rgbaObj.b + ", " + rgbaObj.a + ")";
    };

    //    //--------------------------------------------------------------------------
    //    // ApplyStyleRecursive
    //    //
    //    // Applies a style recursively to all span and div tags including elementNode
    //    // and all of its children.
    //    //
    //    //     element : the element to apply the style to
    //    //     styleName : the name of the style property to set (eg. 'font-weight')     
    //    //     styleValue : the value of the style to set (eg. 'bold')
    //    //--------------------------------------------------------------------------
    //    function ApplyStyleRecursive(element, styleName, styleValue) {
    //        var nodeName = element.nodeName.toLowerCase();

    //        if (nodeName == 'div' || nodeName == 'span' || nodeName == 'p') {
    //            element.style[styleName] = styleValue;
    //        }

    //        for (var i = 0; i < element.childNodes.length; i++) {
    //            ApplyStyleRecursive(element.childNodes[i], styleName, styleValue);
    //        }
    //    }

    //    //---------------------------------------------------------------------------
    //    // ApplyTextProperty
    //    //
    //    // Applies a text property to rtfElement.
    //    //
    //    //     rtfElement : the the root text element of the rtf object (this is the
    //    //                  element named <id>_rtf
    //    //     prop : the style property to set.
    //    //     value : the style value to set.
    //    //---------------------------------------------------------------------------
    //    function ApplyTextProperty(rtfElement, prop, value) {
    //        /*
    //        var oldHtml = rtfElement.innerHTML;
    //        if (prop == 'fontWeight') {
    //            rtfElement.innerHTML = oldHtml.replace(/< *b *\/?>/gi, "");
    //        } else if (prop == 'fontStyle') {
    //            rtfElement.innerHTML = oldHtml.replace(/< *i *\/?>/gi, "");
    //        } else if (prop == 'textDecoration') {
    //            rtfElement.innerHTML = oldHtml.replace(/< *u *\/?>/gi, "");
    //        }
    //        */

    //        for (var i = 0; i < rtfElement.childNodes.length; i++) {
    //            ApplyStyleRecursive(rtfElement.childNodes[i], prop, value);
    //        }
    //    }
    //}

    //---------------------------------------------------------------------------
    // GetAndCacheOriginalText
    //
    // Gets the html for the pre-rollover state and returns the Html representing
    // the Rich text.
    //---------------------------------------------------------------------------
    var CACHE_COUNTER = 0;

    $ax.style.CacheOriginalText = function(textId, hasRichTextBeenSet) {
        var rtfQuery = $('#' + textId);
        if(rtfQuery.length > 0) {

            var styleCache = {};
            rtfQuery.find('*').each(function(index, element) {
                var elementId = element.id;
                if(!elementId) element.id = elementId = 'cache' + CACHE_COUNTER++;
                styleCache[elementId] = element.style.cssText;
            });

            _originalTextCache[textId] = {
                styleCache: styleCache
            };
            if(hasRichTextBeenSet) {
                var shapeId = _getShapeIdFromText(textId);
                _shapesWithSetRichText[shapeId] = true;
            }
        }
    };


});