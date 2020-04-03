for(var i = 0; i < 249; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u48').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u48'); });
else {
    document.getElementById('u48').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u48'); }, true);
    document.getElementById('u48').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u48'); }, true);
}

widgetIdToDragFunction['u48'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u48',widgetDragInfo.xDelta,0,'none',100);

}

}
gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u72'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u133'] = 'center';u134.tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	SetPanelState('u32', 'pd3u32','none','',500,'none','',500);

}
});
u135.tabIndex = 0;

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

	SetPanelState('u32', 'pd2u32','swing','left',500,'swing','right',500);

}
});
u136.tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

	SetPanelState('u32', 'pd1u32','none','',500,'none','',500);

}
});
gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u138'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u148'] = 'center';u149.tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

	SetPanelState('u32', 'pd4u32','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u149', function(e) {
if (!IsTrueMouseOver('u149',e)) return;
if (true) {

	SetPanelState('u146', 'pd1u146','none','',200,'fade','',100);

}
});

$axure.eventManager.mouseout('u149', function(e) {
if (!IsTrueMouseOut('u149',e)) return;
if (true) {

	SetPanelState('u146', 'pd0u146','fade','',200,'none','',200);

}
});
u44.tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	SetPanelState('u32', 'pd1u32','none','',500,'none','',500);

	SetPanelState('u178', 'pd0u178','none','',500,'none','',500);

	SetPanelState('u181', 'pd0u181','none','',500,'none','',500);

	SetPanelState('u185', 'pd0u185','none','',500,'none','',500);

	SetPanelState('u189', 'pd0u189','none','',500,'none','',500);

	SetPanelState('u192', 'pd0u192','none','',500,'none','',500);

	SetPanelState('u146', 'pd0u146','none','',500,'none','',500);

	SetPanelState('u198', 'pd0u198','none','',500,'none','',500);

	SetPanelState('u202', 'pd0u202','none','',500,'none','',500);

}
});
gv_vAlignTable['u45'] = 'top';u46.tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	SetPanelState('u32', 'pd0u32','none','',500,'none','',500);

}
});
u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	SetPanelState('u32', 'pd1u32','none','',500,'none','',500);

}
});
gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u174'] = 'center';gv_vAlignTable['u176'] = 'center';u177.tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	SetPanelState('u32', 'pd4u32','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u177', function(e) {
if (!IsTrueMouseOver('u177',e)) return;
if (true) {

	SetPanelState('u178', 'pd1u178','none','',200,'fade','',100);

	SetPanelState('u141', 'pd1u141','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u177', function(e) {
if (!IsTrueMouseOut('u177',e)) return;
if (true) {

	SetPanelState('u178', 'pd0u178','fade','',200,'none','',500);

	SetPanelState('u141', 'pd0u141','none','',500,'none','',500);

}
});
gv_vAlignTable['u204'] = 'center';u205.tabIndex = 0;

u205.style.cursor = 'pointer';
$axure.eventManager.click('u205', function(e) {

if (true) {

	SetPanelState('u32', 'pd3u32','none','',500,'none','',500);

}
});
gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u183'] = 'center';u184.tabIndex = 0;

u184.style.cursor = 'pointer';
$axure.eventManager.click('u184', function(e) {

if (true) {

	SetPanelState('u32', 'pd4u32','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u184', function(e) {
if (!IsTrueMouseOver('u184',e)) return;
if (true) {

	SetPanelState('u181', 'pd1u181','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u184', function(e) {
if (!IsTrueMouseOut('u184',e)) return;
if (true) {

	SetPanelState('u181', 'pd0u181','fade','',200,'none','',500);

}
});
gv_vAlignTable['u187'] = 'center';u188.tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

if (true) {

	SetPanelState('u32', 'pd4u32','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u188', function(e) {
if (!IsTrueMouseOver('u188',e)) return;
if (true) {

	SetPanelState('u185', 'pd1u185','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u188', function(e) {
if (!IsTrueMouseOut('u188',e)) return;
if (true) {

	SetPanelState('u185', 'pd0u185','none','',500,'fade','',200);

}
});
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';u86.tabIndex = 0;

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

	SetPanelState('u32', 'pd1u32','none','',500,'none','',500);

}
});
gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u194'] = 'center';u195.tabIndex = 0;

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

	SetPanelState('u32', 'pd4u32','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u195', function(e) {
if (!IsTrueMouseOver('u195',e)) return;
if (true) {

	SetPanelState('u192', 'pd1u192','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u195', function(e) {
if (!IsTrueMouseOut('u195',e)) return;
if (true) {

	SetPanelState('u192', 'pd0u192','fade','',200,'none','',500);

}
});
u196.tabIndex = 0;

u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', function(e) {

if (true) {

	SetPanelState('u32', 'pd4u32','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u196', function(e) {
if (!IsTrueMouseOver('u196',e)) return;
if (true) {

	SetPanelState('u189', 'pd1u189','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u196', function(e) {
if (!IsTrueMouseOut('u196',e)) return;
if (true) {

	SetPanelState('u189', 'pd0u189','fade','',200,'none','',500);

}
});
u197.tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

	SetPanelState('u32', 'pd4u32','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u197', function(e) {
if (!IsTrueMouseOver('u197',e)) return;
if (true) {

	SetPanelState('u198', 'pd1u198','none','',200,'fade','',100);

	SetPanelState('u141', 'pd1u141','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u197', function(e) {
if (!IsTrueMouseOut('u197',e)) return;
if (true) {

	SetPanelState('u198', 'pd0u198','fade','',200,'none','',500);

	SetPanelState('u141', 'pd0u141','none','',500,'none','',500);

}
});
gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u95'] = 'center';u96.tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	SetPanelState('u32', 'pd2u32','none','',500,'none','',500);

}
});
gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	SetPanelState('u32', 'pd0u32','none','',500,'none','',500);

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u105'] = 'center';u106.tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	SetPanelState('u32', 'pd3u32','none','',500,'none','',500);

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u200'] = 'center';u201.tabIndex = 0;

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if (true) {

	SetPanelState('u32', 'pd4u32','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u201', function(e) {
if (!IsTrueMouseOver('u201',e)) return;
if (true) {

	SetPanelState('u202', 'pd1u202','none','',200,'fade','',100);

	SetPanelState('u141', 'pd1u141','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u201', function(e) {
if (!IsTrueMouseOut('u201',e)) return;
if (true) {

	SetPanelState('u202', 'pd0u202','fade','',200,'none','',500);

	SetPanelState('u141', 'pd0u141','none','',500,'none','',500);

}
});
u206.tabIndex = 0;

u206.style.cursor = 'pointer';
$axure.eventManager.click('u206', function(e) {

if (true) {

	SetPanelState('u32', 'pd2u32','none','',500,'none','',500);

}
});
gv_vAlignTable['u208'] = 'center';u30.tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelVisibility('u18','hidden','none',500);

}
});
gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u217'] = 'center';gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u220'] = 'top';gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u233'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u239'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u244'] = 'center';u245.tabIndex = 0;

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if (true) {

	SetPanelState('u32', 'pd1u32','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u245', function(e) {
if (!IsTrueMouseOver('u245',e)) return;
if (true) {

	SetPanelState('u212', 'pd1u212','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u245', function(e) {
if (!IsTrueMouseOut('u245',e)) return;
if (true) {

	SetPanelState('u212', 'pd0u212','none','',500,'none','',500);

}
});
u246.tabIndex = 0;

u246.style.cursor = 'pointer';
$axure.eventManager.click('u246', function(e) {

if (true) {

	SetPanelState('u32', 'pd3u32','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u246', function(e) {
if (!IsTrueMouseOver('u246',e)) return;
if (true) {

	SetPanelState('u223', 'pd1u223','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u246', function(e) {
if (!IsTrueMouseOut('u246',e)) return;
if (true) {

	SetPanelState('u223', 'pd0u223','none','',500,'none','',500);

}
});
u247.tabIndex = 0;

u247.style.cursor = 'pointer';
$axure.eventManager.click('u247', function(e) {

if (true) {

	SetPanelState('u32', 'pd2u32','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u247', function(e) {
if (!IsTrueMouseOver('u247',e)) return;
if (true) {

	SetPanelState('u234', 'pd1u234','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u247', function(e) {
if (!IsTrueMouseOut('u247',e)) return;
if (true) {

	SetPanelState('u234', 'pd0u234','none','',500,'none','',500);

}
});
u248.tabIndex = 0;

u248.style.cursor = 'pointer';
$axure.eventManager.click('u248', function(e) {

if (true) {

	SetPanelState('u32', 'pd0u32','none','',500,'none','',500);

}
});
