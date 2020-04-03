for(var i = 0; i < 236; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u34').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u34'); });
else {
    document.getElementById('u34').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u34'); }, true);
    document.getElementById('u34').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u34'); }, true);
}

widgetIdToDragFunction['u34'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u34',widgetDragInfo.xDelta,0,'none',100);

}

}
gv_vAlignTable['u70'] = 'center';u71.tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	SetPanelState('u18', 'pd1u18','none','',500,'none','',500);

}
});
gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u80'] = 'center';u81.tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

	SetPanelState('u18', 'pd2u18','none','',500,'none','',500);

}
});
gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u90'] = 'center';u91.tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

	SetPanelState('u18', 'pd3u18','none','',500,'none','',500);

}
});
gv_vAlignTable['u93'] = 'center';u122.tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

	SetPanelState('u18', 'pd2u18','swing','left',500,'swing','right',500);

}
});
u123.tabIndex = 0;

u123.style.cursor = 'pointer';
$axure.eventManager.click('u123', function(e) {

if (true) {

	SetPanelState('u18', 'pd1u18','none','',500,'none','',500);

}
});
gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u135'] = 'center';u136.tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	SetPanelState('u18', 'pd4u18','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u136', function(e) {
if (!IsTrueMouseOver('u136',e)) return;
if (true) {

	SetPanelState('u133', 'pd1u133','none','',200,'fade','',100);

}
});

$axure.eventManager.mouseout('u136', function(e) {
if (!IsTrueMouseOut('u136',e)) return;
if (true) {

	SetPanelState('u133', 'pd0u133','fade','',200,'none','',200);

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u159'] = 'center';u235.tabIndex = 0;

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

	SetPanelState('u18', 'pd0u18','none','',500,'none','',500);

}
});
gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u163'] = 'center';u164.tabIndex = 0;

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

	SetPanelState('u18', 'pd4u18','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u164', function(e) {
if (!IsTrueMouseOver('u164',e)) return;
if (true) {

	SetPanelState('u165', 'pd1u165','none','',200,'fade','',100);

	SetPanelState('u128', 'pd1u128','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u164', function(e) {
if (!IsTrueMouseOut('u164',e)) return;
if (true) {

	SetPanelState('u165', 'pd0u165','fade','',200,'none','',500);

	SetPanelState('u128', 'pd0u128','none','',500,'none','',500);

}
});
gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u170'] = 'center';u171.tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	SetPanelState('u18', 'pd4u18','fade','',100,'none','',500);

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
gv_vAlignTable['u174'] = 'center';u175.tabIndex = 0;

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	SetPanelState('u18', 'pd4u18','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u175', function(e) {
if (!IsTrueMouseOver('u175',e)) return;
if (true) {

	SetPanelState('u172', 'pd1u172','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u175', function(e) {
if (!IsTrueMouseOut('u175',e)) return;
if (true) {

	SetPanelState('u172', 'pd0u172','none','',500,'fade','',200);

}
});
gv_vAlignTable['u178'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u181'] = 'center';u182.tabIndex = 0;

u182.style.cursor = 'pointer';
$axure.eventManager.click('u182', function(e) {

if (true) {

	SetPanelState('u18', 'pd4u18','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u182', function(e) {
if (!IsTrueMouseOver('u182',e)) return;
if (true) {

	SetPanelState('u179', 'pd1u179','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u182', function(e) {
if (!IsTrueMouseOut('u182',e)) return;
if (true) {

	SetPanelState('u179', 'pd0u179','fade','',200,'none','',500);

}
});
u183.tabIndex = 0;

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

	SetPanelState('u18', 'pd4u18','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u183', function(e) {
if (!IsTrueMouseOver('u183',e)) return;
if (true) {

	SetPanelState('u176', 'pd1u176','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u183', function(e) {
if (!IsTrueMouseOut('u183',e)) return;
if (true) {

	SetPanelState('u176', 'pd0u176','fade','',200,'none','',500);

}
});
u184.tabIndex = 0;

u184.style.cursor = 'pointer';
$axure.eventManager.click('u184', function(e) {

if (true) {

	SetPanelState('u18', 'pd4u18','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u184', function(e) {
if (!IsTrueMouseOver('u184',e)) return;
if (true) {

	SetPanelState('u185', 'pd1u185','none','',200,'fade','',100);

	SetPanelState('u128', 'pd1u128','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u184', function(e) {
if (!IsTrueMouseOut('u184',e)) return;
if (true) {

	SetPanelState('u185', 'pd0u185','fade','',200,'none','',500);

	SetPanelState('u128', 'pd0u128','none','',500,'none','',500);

}
});
gv_vAlignTable['u187'] = 'center';u188.tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

if (true) {

	SetPanelState('u18', 'pd4u18','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u188', function(e) {
if (!IsTrueMouseOver('u188',e)) return;
if (true) {

	SetPanelState('u189', 'pd1u189','none','',200,'fade','',100);

	SetPanelState('u128', 'pd1u128','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u188', function(e) {
if (!IsTrueMouseOut('u188',e)) return;
if (true) {

	SetPanelState('u189', 'pd0u189','fade','',200,'none','',500);

	SetPanelState('u128', 'pd0u128','none','',500,'none','',500);

}
});
gv_vAlignTable['u211'] = 'center';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u191'] = 'center';u192.tabIndex = 0;

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	SetPanelState('u18', 'pd3u18','none','',500,'none','',500);

}
});
u193.tabIndex = 0;

u193.style.cursor = 'pointer';
$axure.eventManager.click('u193', function(e) {

if (true) {

	SetPanelState('u18', 'pd2u18','none','',500,'none','',500);

}
});
gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	SetPanelState('u18', 'pd0u18','none','',500,'none','',500);

}
});
gv_vAlignTable['u3'] = 'center';u231.tabIndex = 0;

u231.style.cursor = 'pointer';
$axure.eventManager.click('u231', function(e) {

if (true) {

	SetPanelState('u18', 'pd1u18','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u231', function(e) {
if (!IsTrueMouseOver('u231',e)) return;
if (true) {

	SetPanelState('u198', 'pd1u198','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u231', function(e) {
if (!IsTrueMouseOut('u231',e)) return;
if (true) {

	SetPanelState('u198', 'pd0u198','none','',500,'none','',500);

}
});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u203'] = 'center';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u120'] = 'center';u121.tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

	SetPanelState('u18', 'pd3u18','none','',500,'none','',500);

}
});
u30.tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelState('u18', 'pd1u18','none','',500,'none','',500);

	SetPanelState('u165', 'pd0u165','none','',500,'none','',500);

	SetPanelState('u168', 'pd0u168','none','',500,'none','',500);

	SetPanelState('u172', 'pd0u172','none','',500,'none','',500);

	SetPanelState('u176', 'pd0u176','none','',500,'none','',500);

	SetPanelState('u179', 'pd0u179','none','',500,'none','',500);

	SetPanelState('u133', 'pd0u133','none','',500,'none','',500);

	SetPanelState('u185', 'pd0u185','none','',500,'none','',500);

	SetPanelState('u189', 'pd0u189','none','',500,'none','',500);

}
});
gv_vAlignTable['u31'] = 'top';u32.tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelState('u18', 'pd0u18','none','',500,'none','',500);

}
});
u33.tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	SetPanelState('u18', 'pd1u18','none','',500,'none','',500);

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u55'] = 'top';u232.tabIndex = 0;

u232.style.cursor = 'pointer';
$axure.eventManager.click('u232', function(e) {

if (true) {

	SetPanelState('u18', 'pd3u18','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u232', function(e) {
if (!IsTrueMouseOver('u232',e)) return;
if (true) {

	SetPanelState('u209', 'pd1u209','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u232', function(e) {
if (!IsTrueMouseOut('u232',e)) return;
if (true) {

	SetPanelState('u209', 'pd0u209','none','',500,'none','',500);

}
});
u233.tabIndex = 0;

u233.style.cursor = 'pointer';
$axure.eventManager.click('u233', function(e) {

if (true) {

	SetPanelState('u18', 'pd2u18','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u233', function(e) {
if (!IsTrueMouseOver('u233',e)) return;
if (true) {

	SetPanelState('u220', 'pd1u220','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u233', function(e) {
if (!IsTrueMouseOut('u233',e)) return;
if (true) {

	SetPanelState('u220', 'pd0u220','none','',500,'none','',500);

}
});
gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u68'] = 'center';