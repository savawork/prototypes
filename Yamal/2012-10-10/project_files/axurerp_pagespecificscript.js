for(var i = 0; i < 480; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u16').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u16'); });
else {
    document.getElementById('u16').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u16'); }, true);
    document.getElementById('u16').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u16'); }, true);
}

widgetIdToDragFunction['u16'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u16',widgetDragInfo.xDelta,0,'none',100);

}

}
gv_vAlignTable['u271'] = 'bottom';gv_vAlignTable['u273'] = 'center';gv_vAlignTable['u275'] = 'bottom';gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u280'] = 'bottom';gv_vAlignTable['u282'] = 'center';gv_vAlignTable['u284'] = 'bottom';gv_vAlignTable['u286'] = 'center';gv_vAlignTable['u288'] = 'bottom';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u102'] = 'center';u103.tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

}
});
u104.tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','swing','left',500,'swing','right',500);

}
});
u105.tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u297'] = 'bottom';gv_vAlignTable['u299'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u117'] = 'center';u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u118', function(e) {
if (!IsTrueMouseOver('u118',e)) return;
if (true) {

	SetPanelState('u115', 'pd1u115','none','',200,'fade','',100);

}
});

$axure.eventManager.mouseout('u118', function(e) {
if (!IsTrueMouseOut('u118',e)) return;
if (true) {

	SetPanelState('u115', 'pd0u115','fade','',200,'none','',200);

}
});
gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u145'] = 'center';u146.tabIndex = 0;

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u146', function(e) {
if (!IsTrueMouseOver('u146',e)) return;
if (true) {

	SetPanelState('u147', 'pd1u147','none','',200,'fade','',100);

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u146', function(e) {
if (!IsTrueMouseOut('u146',e)) return;
if (true) {

	SetPanelState('u147', 'pd0u147','fade','',200,'none','',500);

	SetPanelState('u110', 'pd0u110','none','',500,'none','',500);

}
});
gv_vAlignTable['u149'] = 'center';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

	SetPanelState('u147', 'pd0u147','none','',500,'none','',500);

	SetPanelState('u150', 'pd0u150','none','',500,'none','',500);

	SetPanelState('u154', 'pd0u154','none','',500,'none','',500);

	SetPanelState('u158', 'pd0u158','none','',500,'none','',500);

	SetPanelState('u161', 'pd0u161','none','',500,'none','',500);

	SetPanelState('u115', 'pd0u115','none','',500,'none','',500);

	SetPanelState('u167', 'pd0u167','none','',500,'none','',500);

	SetPanelState('u171', 'pd0u171','none','',500,'none','',500);

}
});
gv_vAlignTable['u13'] = 'top';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
u15.tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u152'] = 'center';u153.tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u153', function(e) {
if (!IsTrueMouseOver('u153',e)) return;
if (true) {

	SetPanelState('u150', 'pd1u150','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u153', function(e) {
if (!IsTrueMouseOut('u153',e)) return;
if (true) {

	SetPanelState('u150', 'pd0u150','fade','',200,'none','',500);

}
});
gv_vAlignTable['u156'] = 'center';u157.tabIndex = 0;

u157.style.cursor = 'pointer';
$axure.eventManager.click('u157', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u157', function(e) {
if (!IsTrueMouseOver('u157',e)) return;
if (true) {

	SetPanelState('u154', 'pd1u154','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u157', function(e) {
if (!IsTrueMouseOut('u157',e)) return;
if (true) {

	SetPanelState('u154', 'pd0u154','none','',500,'fade','',200);

}
});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u163'] = 'center';u164.tabIndex = 0;

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

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

	SetPanelState('u161', 'pd0u161','fade','',200,'none','',500);

}
});
u165.tabIndex = 0;

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u165', function(e) {
if (!IsTrueMouseOver('u165',e)) return;
if (true) {

	SetPanelState('u158', 'pd1u158','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u165', function(e) {
if (!IsTrueMouseOut('u165',e)) return;
if (true) {

	SetPanelState('u158', 'pd0u158','fade','',200,'none','',500);

}
});
u166.tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u166', function(e) {
if (!IsTrueMouseOver('u166',e)) return;
if (true) {

	SetPanelState('u167', 'pd1u167','none','',200,'fade','',100);

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u166', function(e) {
if (!IsTrueMouseOut('u166',e)) return;
if (true) {

	SetPanelState('u167', 'pd0u167','fade','',200,'none','',500);

	SetPanelState('u110', 'pd0u110','none','',500,'none','',500);

}
});
gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u39'] = 'top';u170.tabIndex = 0;

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u170', function(e) {
if (!IsTrueMouseOver('u170',e)) return;
if (true) {

	SetPanelState('u171', 'pd1u171','none','',200,'fade','',100);

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u170', function(e) {
if (!IsTrueMouseOut('u170',e)) return;
if (true) {

	SetPanelState('u171', 'pd0u171','fade','',200,'none','',500);

	SetPanelState('u110', 'pd0u110','none','',500,'none','',500);

}
});
gv_vAlignTable['u173'] = 'center';u174.tabIndex = 0;

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

}
});
u175.tabIndex = 0;

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u187'] = 'center';gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';u53.tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u194'] = 'top';gv_vAlignTable['u196'] = 'center';gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u62'] = 'center';u63.tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u72'] = 'center';u73.tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u401'] = 'bottom';gv_vAlignTable['u403'] = 'center';gv_vAlignTable['u405'] = 'bottom';gv_vAlignTable['u407'] = 'center';gv_vAlignTable['u410'] = 'bottom';gv_vAlignTable['u412'] = 'center';gv_vAlignTable['u414'] = 'bottom';gv_vAlignTable['u416'] = 'center';gv_vAlignTable['u418'] = 'bottom';gv_vAlignTable['u420'] = 'center';gv_vAlignTable['u423'] = 'bottom';gv_vAlignTable['u425'] = 'center';gv_vAlignTable['u427'] = 'bottom';gv_vAlignTable['u429'] = 'center';gv_vAlignTable['u290'] = 'center';gv_vAlignTable['u293'] = 'bottom';gv_vAlignTable['u295'] = 'center';gv_vAlignTable['u431'] = 'bottom';gv_vAlignTable['u433'] = 'center';gv_vAlignTable['u436'] = 'bottom';gv_vAlignTable['u438'] = 'center';gv_vAlignTable['u440'] = 'bottom';gv_vAlignTable['u442'] = 'center';gv_vAlignTable['u444'] = 'bottom';gv_vAlignTable['u446'] = 'center';gv_vAlignTable['u449'] = 'bottom';gv_vAlignTable['u451'] = 'center';gv_vAlignTable['u453'] = 'bottom';gv_vAlignTable['u455'] = 'center';gv_vAlignTable['u457'] = 'bottom';gv_vAlignTable['u459'] = 'center';u460.tabIndex = 0;

u460.style.cursor = 'pointer';
$axure.eventManager.click('u460', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('about.html');

}
});

$axure.eventManager.mouseover('u460', function(e) {
if (!IsTrueMouseOver('u460',e)) return;
if ((GetPanelState('u382')) != ('pd2u382')) {

	SetPanelState('u382', 'pd1u382','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u460', function(e) {
if (!IsTrueMouseOut('u460',e)) return;
if ((GetPanelState('u382')) != ('pd2u382')) {

	SetPanelState('u382', 'pd0u382','none','',500,'none','',500);

}
});
u461.tabIndex = 0;

u461.style.cursor = 'pointer';
$axure.eventManager.click('u461', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('legal.html');

}
});

$axure.eventManager.mouseover('u461', function(e) {
if (!IsTrueMouseOver('u461',e)) return;
if ((GetPanelState('u395')) != ('pd2u395')) {

	SetPanelState('u395', 'pd1u395','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u461', function(e) {
if (!IsTrueMouseOut('u461',e)) return;
if ((GetPanelState('u395')) != ('pd2u395')) {

	SetPanelState('u395', 'pd0u395','none','',500,'none','',500);

}
});
u462.tabIndex = 0;

u462.style.cursor = 'pointer';
$axure.eventManager.click('u462', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('eco.html');

}
});

$axure.eventManager.mouseover('u462', function(e) {
if (!IsTrueMouseOver('u462',e)) return;
if ((GetPanelState('u408')) != ('pd2u408')) {

	SetPanelState('u408', 'pd1u408','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u462', function(e) {
if (!IsTrueMouseOut('u462',e)) return;
if ((GetPanelState('u408')) != ('pd2u408')) {

	SetPanelState('u408', 'pd0u408','none','',500,'none','',500);

}
});
u463.tabIndex = 0;

u463.style.cursor = 'pointer';
$axure.eventManager.click('u463', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('social.html');

}
});

$axure.eventManager.mouseover('u463', function(e) {
if (!IsTrueMouseOver('u463',e)) return;
if ((GetPanelState('u421')) != ('pd2u421')) {

	SetPanelState('u421', 'pd1u421','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u463', function(e) {
if (!IsTrueMouseOut('u463',e)) return;
if ((GetPanelState('u421')) != ('pd2u421')) {

	SetPanelState('u421', 'pd0u421','none','',500,'none','',500);

}
});
u464.tabIndex = 0;

u464.style.cursor = 'pointer';
$axure.eventManager.click('u464', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('progress.html');

}
});

$axure.eventManager.mouseover('u464', function(e) {
if (!IsTrueMouseOver('u464',e)) return;
if ((GetPanelState('u434')) != ('pd2u434')) {

	SetPanelState('u434', 'pd1u434','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u464', function(e) {
if (!IsTrueMouseOut('u464',e)) return;
if ((GetPanelState('u434')) != ('pd2u434')) {

	SetPanelState('u434', 'pd0u434','none','',500,'none','',500);

}
});
u465.tabIndex = 0;

u465.style.cursor = 'pointer';
$axure.eventManager.click('u465', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('contacts.html');

}
});

$axure.eventManager.mouseover('u465', function(e) {
if (!IsTrueMouseOver('u465',e)) return;
if ((GetPanelState('u447')) != ('pd2u447')) {

	SetPanelState('u447', 'pd1u447','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u465', function(e) {
if (!IsTrueMouseOut('u465',e)) return;
if ((GetPanelState('u447')) != ('pd2u447')) {

	SetPanelState('u447', 'pd0u447','none','',500,'none','',500);

}
});
u466.tabIndex = 0;

u466.style.cursor = 'pointer';
$axure.eventManager.click('u466', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('press_centre.html');

}
});

$axure.eventManager.mouseover('u466', function(e) {
if (!IsTrueMouseOver('u466',e)) return;
if (true) {

	SetPanelState('u239', 'pd2u239','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u466', function(e) {
if (!IsTrueMouseOut('u466',e)) return;
if (true) {

	SetPanelState('u239', 'pd0u239','none','',500,'none','',500);

}
});
u467.tabIndex = 0;

u467.style.cursor = 'pointer';
$axure.eventManager.click('u467', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('about.html');

}
});

$axure.eventManager.mouseover('u467', function(e) {
if (!IsTrueMouseOver('u467',e)) return;
if (true) {

	SetPanelState('u239', 'pd1u239','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u467', function(e) {
if (!IsTrueMouseOut('u467',e)) return;
if (true) {

	SetPanelState('u239', 'pd0u239','none','',500,'none','',500);

}
});
u468.tabIndex = 0;

u468.style.cursor = 'pointer';
$axure.eventManager.click('u468', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('procurements.html');

}
});

$axure.eventManager.mouseover('u468', function(e) {
if (!IsTrueMouseOver('u468',e)) return;
if (true) {

	SetPanelState('u239', 'pd3u239','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u468', function(e) {
if (!IsTrueMouseOut('u468',e)) return;
if (true) {

	SetPanelState('u239', 'pd0u239','none','',500,'none','',500);

}
});
u469.tabIndex = 0;

u469.style.cursor = 'pointer';
$axure.eventManager.click('u469', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('careers.html');

}
});

$axure.eventManager.mouseover('u469', function(e) {
if (!IsTrueMouseOver('u469',e)) return;
if (true) {

	SetPanelState('u239', 'pd4u239','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u469', function(e) {
if (!IsTrueMouseOut('u469',e)) return;
if (true) {

	SetPanelState('u239', 'pd0u239','none','',500,'none','',500);

}
});
gv_vAlignTable['u472'] = 'center';gv_vAlignTable['u474'] = 'center';gv_vAlignTable['u476'] = 'center';gv_vAlignTable['u477'] = 'top';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u301'] = 'bottom';gv_vAlignTable['u303'] = 'center';u304.tabIndex = 0;

u304.style.cursor = 'pointer';
$axure.eventManager.click('u304', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('procurements.html');

}
});

$axure.eventManager.mouseover('u304', function(e) {
if (!IsTrueMouseOver('u304',e)) return;
if ((GetPanelState('u252')) != ('pd2u252')) {

	SetPanelState('u252', 'pd1u252','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u304', function(e) {
if (!IsTrueMouseOut('u304',e)) return;
if ((GetPanelState('u252')) != ('pd2u252')) {

	SetPanelState('u252', 'pd0u252','none','',500,'none','',500);

}
});
u305.tabIndex = 0;

u305.style.cursor = 'pointer';
$axure.eventManager.click('u305', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('plans.html');

}
});

$axure.eventManager.mouseover('u305', function(e) {
if (!IsTrueMouseOver('u305',e)) return;
if ((GetPanelState('u265')) != ('pd2u265')) {

	SetPanelState('u265', 'pd1u265','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u305', function(e) {
if (!IsTrueMouseOut('u305',e)) return;
if ((GetPanelState('u265')) != ('pd2u265')) {

	SetPanelState('u265', 'pd0u265','none','',500,'none','',500);

}
});
u306.tabIndex = 0;

u306.style.cursor = 'pointer';
$axure.eventManager.click('u306', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('results.html');

}
});

$axure.eventManager.mouseover('u306', function(e) {
if (!IsTrueMouseOver('u306',e)) return;
if ((GetPanelState('u278')) != ('pd2u278')) {

	SetPanelState('u278', 'pd1u278','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u306', function(e) {
if (!IsTrueMouseOut('u306',e)) return;
if ((GetPanelState('u278')) != ('pd2u278')) {

	SetPanelState('u278', 'pd0u278','none','',500,'none','',500);

}
});
u307.tabIndex = 0;

u307.style.cursor = 'pointer';
$axure.eventManager.click('u307', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('registration.html');

}
});

$axure.eventManager.mouseover('u307', function(e) {
if (!IsTrueMouseOver('u307',e)) return;
if ((GetPanelState('u291')) != ('pd2u291')) {

	SetPanelState('u291', 'pd1u291','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u307', function(e) {
if (!IsTrueMouseOut('u307',e)) return;
if ((GetPanelState('u291')) != ('pd2u291')) {

	SetPanelState('u291', 'pd0u291','none','',500,'none','',500);

}
});
gv_vAlignTable['u309'] = 'center';gv_vAlignTable['u312'] = 'bottom';gv_vAlignTable['u314'] = 'center';gv_vAlignTable['u316'] = 'bottom';gv_vAlignTable['u318'] = 'center';gv_vAlignTable['u320'] = 'bottom';gv_vAlignTable['u322'] = 'center';gv_vAlignTable['u325'] = 'bottom';gv_vAlignTable['u327'] = 'center';gv_vAlignTable['u329'] = 'bottom';gv_vAlignTable['u331'] = 'center';gv_vAlignTable['u333'] = 'bottom';gv_vAlignTable['u335'] = 'center';gv_vAlignTable['u338'] = 'bottom';gv_vAlignTable['u340'] = 'center';gv_vAlignTable['u342'] = 'bottom';gv_vAlignTable['u344'] = 'center';gv_vAlignTable['u346'] = 'bottom';gv_vAlignTable['u348'] = 'center';gv_vAlignTable['u351'] = 'bottom';gv_vAlignTable['u353'] = 'center';gv_vAlignTable['u355'] = 'bottom';gv_vAlignTable['u357'] = 'center';gv_vAlignTable['u359'] = 'bottom';gv_vAlignTable['u260'] = 'center';gv_vAlignTable['u361'] = 'center';gv_vAlignTable['u364'] = 'bottom';gv_vAlignTable['u366'] = 'center';gv_vAlignTable['u368'] = 'bottom';gv_vAlignTable['u370'] = 'center';gv_vAlignTable['u372'] = 'bottom';gv_vAlignTable['u374'] = 'center';u375.tabIndex = 0;

u375.style.cursor = 'pointer';
$axure.eventManager.click('u375', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('press_centre.html');

}
});

$axure.eventManager.mouseover('u375', function(e) {
if (!IsTrueMouseOver('u375',e)) return;
if ((GetPanelState('u310')) != ('pd2u310')) {

	SetPanelState('u310', 'pd1u310','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u375', function(e) {
if (!IsTrueMouseOut('u375',e)) return;
if ((GetPanelState('u310')) != ('pd2u310')) {

	SetPanelState('u310', 'pd0u310','none','',500,'none','',500);

}
});
u376.tabIndex = 0;

u376.style.cursor = 'pointer';
$axure.eventManager.click('u376', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('press_releases.html');

}
});

$axure.eventManager.mouseover('u376', function(e) {
if (!IsTrueMouseOver('u376',e)) return;
if ((GetPanelState('u323')) != ('pd2u323')) {

	SetPanelState('u323', 'pd1u323','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u376', function(e) {
if (!IsTrueMouseOut('u376',e)) return;
if ((GetPanelState('u323')) != ('pd2u323')) {

	SetPanelState('u323', 'pd0u323','none','',500,'none','',500);

}
});
u377.tabIndex = 0;

u377.style.cursor = 'pointer';
$axure.eventManager.click('u377', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('media.html');

}
});

$axure.eventManager.mouseover('u377', function(e) {
if (!IsTrueMouseOver('u377',e)) return;
if ((GetPanelState('u336')) != ('pd2u336')) {

	SetPanelState('u336', 'pd1u336','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u377', function(e) {
if (!IsTrueMouseOut('u377',e)) return;
if ((GetPanelState('u336')) != ('pd2u336')) {

	SetPanelState('u336', 'pd0u336','none','',500,'none','',500);

}
});
u378.tabIndex = 0;

u378.style.cursor = 'pointer';
$axure.eventManager.click('u378', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('presentations.html');

}
});

$axure.eventManager.mouseover('u378', function(e) {
if (!IsTrueMouseOver('u378',e)) return;
if ((GetPanelState('u349')) != ('pd2u349')) {

	SetPanelState('u349', 'pd1u349','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u378', function(e) {
if (!IsTrueMouseOut('u378',e)) return;
if ((GetPanelState('u349')) != ('pd2u349')) {

	SetPanelState('u349', 'pd0u349','none','',500,'none','',500);

}
});
u379.tabIndex = 0;

u379.style.cursor = 'pointer';
$axure.eventManager.click('u379', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('investors.html');

}
});

$axure.eventManager.mouseover('u379', function(e) {
if (!IsTrueMouseOver('u379',e)) return;
if ((GetPanelState('u362')) != ('pd2u362')) {

	SetPanelState('u362', 'pd1u362','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u379', function(e) {
if (!IsTrueMouseOut('u379',e)) return;
if ((GetPanelState('u362')) != ('pd2u362')) {

	SetPanelState('u362', 'pd0u362','none','',500,'none','',500);

}
});
gv_vAlignTable['u381'] = 'center';gv_vAlignTable['u384'] = 'bottom';gv_vAlignTable['u386'] = 'center';gv_vAlignTable['u388'] = 'bottom';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u390'] = 'center';gv_vAlignTable['u392'] = 'bottom';gv_vAlignTable['u394'] = 'center';gv_vAlignTable['u397'] = 'bottom';gv_vAlignTable['u399'] = 'center';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u212'] = 'center';u213.tabIndex = 0;

u213.style.cursor = 'pointer';
$axure.eventManager.click('u213', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u213', function(e) {
if (!IsTrueMouseOver('u213',e)) return;
if (true) {

	SetPanelState('u180', 'pd1u180','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u213', function(e) {
if (!IsTrueMouseOut('u213',e)) return;
if (true) {

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

}
});
u214.tabIndex = 0;

u214.style.cursor = 'pointer';
$axure.eventManager.click('u214', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u214', function(e) {
if (!IsTrueMouseOver('u214',e)) return;
if (true) {

	SetPanelState('u191', 'pd1u191','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u214', function(e) {
if (!IsTrueMouseOut('u214',e)) return;
if (true) {

	SetPanelState('u191', 'pd0u191','none','',500,'none','',500);

}
});
u215.tabIndex = 0;

u215.style.cursor = 'pointer';
$axure.eventManager.click('u215', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u215', function(e) {
if (!IsTrueMouseOver('u215',e)) return;
if (true) {

	SetPanelState('u202', 'pd1u202','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u215', function(e) {
if (!IsTrueMouseOut('u215',e)) return;
if (true) {

	SetPanelState('u202', 'pd0u202','none','',500,'none','',500);

}
});
gv_vAlignTable['u216'] = 'top';gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u221'] = 'center';gv_vAlignTable['u223'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u227'] = 'center';document.getElementById('u228_img').tabIndex = 0;

u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u229'] = 'center';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u235'] = 'center';gv_vAlignTable['u237'] = 'center';u238.tabIndex = 0;

u238.style.cursor = 'pointer';
$axure.eventManager.click('u238', function(e) {

if (true) {

	SetPanelStateNext('u233',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u240'] = 'top';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u248'] = 'top';gv_vAlignTable['u251'] = 'center';gv_vAlignTable['u254'] = 'bottom';gv_vAlignTable['u256'] = 'center';gv_vAlignTable['u258'] = 'bottom';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u262'] = 'bottom';gv_vAlignTable['u264'] = 'center';gv_vAlignTable['u267'] = 'bottom';gv_vAlignTable['u269'] = 'center';