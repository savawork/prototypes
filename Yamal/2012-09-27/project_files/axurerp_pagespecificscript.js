for(var i = 0; i < 242; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u23').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u23'); });
else {
    document.getElementById('u23').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u23'); }, true);
    document.getElementById('u23').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u23'); }, true);
}

widgetIdToDragFunction['u23'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u23',widgetDragInfo.xDelta,0,'none',100);

}

}
gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u233'] = 'top';u70.tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	SetPanelState('u7', 'pd2u7','none','',500,'none','',500);

}
});
gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u109'] = 'center';u80.tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

	SetPanelState('u7', 'pd3u7','none','',500,'none','',500);

}
});
u110.tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

	SetPanelState('u7', 'pd3u7','none','',500,'none','',500);

}
});
gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u124'] = 'center';u125.tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	SetPanelState('u7', 'pd4u7','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u125', function(e) {
if (!IsTrueMouseOver('u125',e)) return;
if (true) {

	SetPanelState('u122', 'pd1u122','none','',200,'fade','',100);

}
});

$axure.eventManager.mouseout('u125', function(e) {
if (!IsTrueMouseOut('u125',e)) return;
if (true) {

	SetPanelState('u122', 'pd0u122','fade','',200,'none','',200);

}
});
gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u152'] = 'center';u153.tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

	SetPanelState('u7', 'pd4u7','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u153', function(e) {
if (!IsTrueMouseOver('u153',e)) return;
if (true) {

	SetPanelState('u154', 'pd1u154','none','',200,'fade','',100);

	SetPanelState('u117', 'pd1u117','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u153', function(e) {
if (!IsTrueMouseOut('u153',e)) return;
if (true) {

	SetPanelState('u154', 'pd0u154','fade','',200,'none','',500);

	SetPanelState('u117', 'pd0u117','none','',500,'none','',500);

}
});
gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u159'] = 'center';u235.tabIndex = 0;

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
u160.tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if (true) {

	SetPanelState('u7', 'pd4u7','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u160', function(e) {
if (!IsTrueMouseOver('u160',e)) return;
if (true) {

	SetPanelState('u157', 'pd1u157','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u160', function(e) {
if (!IsTrueMouseOut('u160',e)) return;
if (true) {

	SetPanelState('u157', 'pd0u157','fade','',200,'none','',500);

}
});
gv_vAlignTable['u163'] = 'center';u164.tabIndex = 0;

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

	SetPanelState('u7', 'pd4u7','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u164', function(e) {
if (!IsTrueMouseOver('u164',e)) return;
if (true) {

	SetPanelState('u161', 'pd1u161','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u164', function(e) {
if (!IsTrueMouseOut('u164',e)) return;
if (true) {

	SetPanelState('u161', 'pd0u161','none','',500,'fade','',200);

}
});
gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u170'] = 'center';u171.tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	SetPanelState('u7', 'pd4u7','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u171', function(e) {
if (!IsTrueMouseOver('u171',e)) return;
if (true) {

	SetPanelState('u168', 'pd1u168','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u171', function(e) {
if (!IsTrueMouseOut('u171',e)) return;
if (true) {

	SetPanelState('u168', 'pd0u168','fade','',200,'none','',500);

}
});
u172.tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

	SetPanelState('u7', 'pd4u7','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u172', function(e) {
if (!IsTrueMouseOver('u172',e)) return;
if (true) {

	SetPanelState('u165', 'pd1u165','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u172', function(e) {
if (!IsTrueMouseOut('u172',e)) return;
if (true) {

	SetPanelState('u165', 'pd0u165','fade','',200,'none','',500);

}
});
u173.tabIndex = 0;

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

	SetPanelState('u7', 'pd4u7','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u173', function(e) {
if (!IsTrueMouseOver('u173',e)) return;
if (true) {

	SetPanelState('u174', 'pd1u174','none','',200,'fade','',100);

	SetPanelState('u117', 'pd1u117','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u173', function(e) {
if (!IsTrueMouseOut('u173',e)) return;
if (true) {

	SetPanelState('u174', 'pd0u174','fade','',200,'none','',500);

	SetPanelState('u117', 'pd0u117','none','',500,'none','',500);

}
});
gv_vAlignTable['u176'] = 'center';u177.tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	SetPanelState('u7', 'pd4u7','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u177', function(e) {
if (!IsTrueMouseOver('u177',e)) return;
if (true) {

	SetPanelState('u178', 'pd1u178','none','',200,'fade','',100);

	SetPanelState('u117', 'pd1u117','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u177', function(e) {
if (!IsTrueMouseOut('u177',e)) return;
if (true) {

	SetPanelState('u178', 'pd0u178','fade','',200,'none','',500);

	SetPanelState('u117', 'pd0u117','none','',500,'none','',500);

}
});
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u180'] = 'center';u181.tabIndex = 0;

u181.style.cursor = 'pointer';
$axure.eventManager.click('u181', function(e) {

if (true) {

	SetPanelState('u7', 'pd3u7','none','',500,'none','',500);

}
});
u182.tabIndex = 0;

u182.style.cursor = 'pointer';
$axure.eventManager.click('u182', function(e) {

if (true) {

	SetPanelState('u7', 'pd2u7','none','',500,'none','',500);

}
});
gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u189'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u16'] = 'center';u19.tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	SetPanelState('u7', 'pd1u7','none','',500,'none','',500);

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u157', 'pd0u157','none','',500,'none','',500);

	SetPanelState('u161', 'pd0u161','none','',500,'none','',500);

	SetPanelState('u165', 'pd0u165','none','',500,'none','',500);

	SetPanelState('u168', 'pd0u168','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	SetPanelState('u174', 'pd0u174','none','',500,'none','',500);

	SetPanelState('u178', 'pd0u178','none','',500,'none','',500);

}
});
u111.tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	SetPanelState('u7', 'pd2u7','swing','left',500,'swing','right',500);

}
});
u112.tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	SetPanelState('u7', 'pd1u7','none','',500,'none','',500);

}
});
gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u20'] = 'top';u21.tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	SetPanelState('u7', 'pd0u7','none','',500,'none','',500);

}
});
u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelState('u7', 'pd1u7','none','',500,'none','',500);

}
});
gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u203'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u211'] = 'center';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u42'] = 'top';u220.tabIndex = 0;

u220.style.cursor = 'pointer';
$axure.eventManager.click('u220', function(e) {

if (true) {

	SetPanelState('u7', 'pd1u7','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u220', function(e) {
if (!IsTrueMouseOver('u220',e)) return;
if (true) {

	SetPanelState('u187', 'pd1u187','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u220', function(e) {
if (!IsTrueMouseOut('u220',e)) return;
if (true) {

	SetPanelState('u187', 'pd0u187','none','',500,'none','',500);

}
});
u221.tabIndex = 0;

u221.style.cursor = 'pointer';
$axure.eventManager.click('u221', function(e) {

if (true) {

	SetPanelState('u7', 'pd3u7','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u221', function(e) {
if (!IsTrueMouseOver('u221',e)) return;
if (true) {

	SetPanelState('u198', 'pd1u198','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u221', function(e) {
if (!IsTrueMouseOut('u221',e)) return;
if (true) {

	SetPanelState('u198', 'pd0u198','none','',500,'none','',500);

}
});
u222.tabIndex = 0;

u222.style.cursor = 'pointer';
$axure.eventManager.click('u222', function(e) {

if (true) {

	SetPanelState('u7', 'pd2u7','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u222', function(e) {
if (!IsTrueMouseOver('u222',e)) return;
if (true) {

	SetPanelState('u209', 'pd1u209','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u222', function(e) {
if (!IsTrueMouseOut('u222',e)) return;
if (true) {

	SetPanelState('u209', 'pd0u209','none','',500,'none','',500);

}
});
gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u48'] = 'center';document.getElementById('u226_img').tabIndex = 0;

u226.style.cursor = 'pointer';
$axure.eventManager.click('u226', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u59'] = 'center';u236.tabIndex = 0;

u236.style.cursor = 'pointer';
$axure.eventManager.click('u236', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('about.html');

}
});
u237.tabIndex = 0;

u237.style.cursor = 'pointer';
$axure.eventManager.click('u237', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('press_centre.html');

}
});
u238.tabIndex = 0;

u238.style.cursor = 'pointer';
$axure.eventManager.click('u238', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('procurements.html');

}
});
u239.tabIndex = 0;

u239.style.cursor = 'pointer';
$axure.eventManager.click('u239', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('careers.html');

}
});
u60.tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

	SetPanelState('u7', 'pd1u7','none','',500,'none','',500);

}
});
gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';