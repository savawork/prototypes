for(var i = 0; i < 268; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u251', 'pd1u251','none','',500,'none','',500);

}

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
gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u259'] = 'top';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u28'] = 'top';u130.tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u130', function(e) {
if (!IsTrueMouseOver('u130',e)) return;
if (true) {

	SetPanelState('u127', 'pd1u127','none','',200,'fade','',100);

}
});

$axure.eventManager.mouseout('u130', function(e) {
if (!IsTrueMouseOut('u130',e)) return;
if (true) {

	SetPanelState('u127', 'pd0u127','fade','',200,'none','',200);

}
});
gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u157'] = 'center';u158.tabIndex = 0;

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u158', function(e) {
if (!IsTrueMouseOver('u158',e)) return;
if (true) {

	SetPanelState('u159', 'pd1u159','none','',200,'fade','',100);

	SetPanelState('u122', 'pd1u122','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u158', function(e) {
if (!IsTrueMouseOut('u158',e)) return;
if (true) {

	SetPanelState('u159', 'pd0u159','fade','',200,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}
});
u235.tabIndex = 0;

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('contacts.html');

}
});
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u164'] = 'center';u165.tabIndex = 0;

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u165', function(e) {
if (!IsTrueMouseOver('u165',e)) return;
if (true) {

	SetPanelState('u162', 'pd1u162','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u165', function(e) {
if (!IsTrueMouseOut('u165',e)) return;
if (true) {

	SetPanelState('u162', 'pd0u162','fade','',200,'none','',500);

}
});
gv_vAlignTable['u168'] = 'center';u169.tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u169', function(e) {
if (!IsTrueMouseOver('u169',e)) return;
if (true) {

	SetPanelState('u166', 'pd1u166','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u169', function(e) {
if (!IsTrueMouseOut('u169',e)) return;
if (true) {

	SetPanelState('u166', 'pd0u166','none','',500,'fade','',200);

}
});
gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u175'] = 'center';u176.tabIndex = 0;

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u176', function(e) {
if (!IsTrueMouseOver('u176',e)) return;
if (true) {

	SetPanelState('u173', 'pd1u173','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u176', function(e) {
if (!IsTrueMouseOut('u176',e)) return;
if (true) {

	SetPanelState('u173', 'pd0u173','fade','',200,'none','',500);

}
});
u177.tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u177', function(e) {
if (!IsTrueMouseOver('u177',e)) return;
if (true) {

	SetPanelState('u170', 'pd1u170','none','',500,'fade','',100);

}
});

$axure.eventManager.mouseout('u177', function(e) {
if (!IsTrueMouseOut('u177',e)) return;
if (true) {

	SetPanelState('u170', 'pd0u170','fade','',200,'none','',500);

}
});
u178.tabIndex = 0;

u178.style.cursor = 'pointer';
$axure.eventManager.click('u178', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u178', function(e) {
if (!IsTrueMouseOver('u178',e)) return;
if (true) {

	SetPanelState('u179', 'pd1u179','none','',200,'fade','',100);

	SetPanelState('u122', 'pd1u122','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u178', function(e) {
if (!IsTrueMouseOut('u178',e)) return;
if (true) {

	SetPanelState('u179', 'pd0u179','fade','',200,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}
});
gv_vAlignTable['u253'] = 'top';gv_vAlignTable['u73'] = 'center';u74.tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u181'] = 'center';u182.tabIndex = 0;

u182.style.cursor = 'pointer';
$axure.eventManager.click('u182', function(e) {

if (true) {

	SetPanelState('u0', 'pd4u0','fade','',100,'none','',500);

}
});

$axure.eventManager.mouseover('u182', function(e) {
if (!IsTrueMouseOver('u182',e)) return;
if (true) {

	SetPanelState('u183', 'pd1u183','none','',200,'fade','',100);

	SetPanelState('u122', 'pd1u122','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u182', function(e) {
if (!IsTrueMouseOut('u182',e)) return;
if (true) {

	SetPanelState('u183', 'pd0u183','fade','',200,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}
});
gv_vAlignTable['u185'] = 'center';u186.tabIndex = 0;

u186.style.cursor = 'pointer';
$axure.eventManager.click('u186', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

}
});
u187.tabIndex = 0;

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u189'] = 'center';gv_vAlignTable['u213'] = 'center';gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u195'] = 'top';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u199'] = 'center';gv_vAlignTable['u95'] = 'center';u225.tabIndex = 0;

u225.style.cursor = 'pointer';
$axure.eventManager.click('u225', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u225', function(e) {
if (!IsTrueMouseOver('u225',e)) return;
if (true) {

	SetPanelState('u192', 'pd1u192','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u225', function(e) {
if (!IsTrueMouseOut('u225',e)) return;
if (true) {

	SetPanelState('u192', 'pd0u192','none','',500,'none','',500);

}
});
gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u243'] = 'center';gv_vAlignTable['u245'] = 'center';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

	SetPanelState('u159', 'pd0u159','none','',500,'none','',500);

	SetPanelState('u162', 'pd0u162','none','',500,'none','',500);

	SetPanelState('u166', 'pd0u166','none','',500,'none','',500);

	SetPanelState('u170', 'pd0u170','none','',500,'none','',500);

	SetPanelState('u173', 'pd0u173','none','',500,'none','',500);

	SetPanelState('u127', 'pd0u127','none','',500,'none','',500);

	SetPanelState('u179', 'pd0u179','none','',500,'none','',500);

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

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
gv_vAlignTable['u18'] = 'center';u266.tabIndex = 0;

u266.style.cursor = 'pointer';
$axure.eventManager.click('u266', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('careers.html');

}
});

$axure.eventManager.mouseover('u266', function(e) {
if (!IsTrueMouseOver('u266',e)) return;
if (true) {

	SetPanelState('u251', 'pd5u251','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u266', function(e) {
if (!IsTrueMouseOut('u266',e)) return;
if (true) {

	SetPanelState('u251', 'pd0u251','none','',500,'none','',500);

}
});
gv_vAlignTable['u113'] = 'center';u114.tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u250'] = 'top';u115.tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','swing','left',500,'swing','right',500);

}
});
u116.tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u255'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u202'] = 'center';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u261'] = 'top';gv_vAlignTable['u262'] = 'top';u263.tabIndex = 0;

u263.style.cursor = 'pointer';
$axure.eventManager.click('u263', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('press_centre.html');

}
});

$axure.eventManager.mouseover('u263', function(e) {
if (!IsTrueMouseOver('u263',e)) return;
if (true) {

	SetPanelState('u251', 'pd3u251','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u263', function(e) {
if (!IsTrueMouseOut('u263',e)) return;
if (true) {

	SetPanelState('u251', 'pd0u251','none','',500,'none','',500);

}
});
u264.tabIndex = 0;

u264.style.cursor = 'pointer';
$axure.eventManager.click('u264', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('about.html');

}
});

$axure.eventManager.mouseover('u264', function(e) {
if (!IsTrueMouseOver('u264',e)) return;
if (true) {

	SetPanelState('u251', 'pd2u251','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u264', function(e) {
if (!IsTrueMouseOut('u264',e)) return;
if (true) {

	SetPanelState('u251', 'pd0u251','none','',500,'none','',500);

}
});
u265.tabIndex = 0;

u265.style.cursor = 'pointer';
$axure.eventManager.click('u265', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('procurements.html');

}
});

$axure.eventManager.mouseover('u265', function(e) {
if (!IsTrueMouseOver('u265',e)) return;
if (true) {

	SetPanelState('u251', 'pd4u251','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u265', function(e) {
if (!IsTrueMouseOut('u265',e)) return;
if (true) {

	SetPanelState('u251', 'pd0u251','none','',500,'none','',500);

}
});
gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u217'] = 'top';gv_vAlignTable['u219'] = 'center';u267.tabIndex = 0;

u267.style.cursor = 'pointer';
$axure.eventManager.click('u267', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

$axure.eventManager.mouseover('u267', function(e) {
if (!IsTrueMouseOver('u267',e)) return;
if (true) {

	SetPanelState('u251', 'pd1u251','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u267', function(e) {
if (!IsTrueMouseOut('u267',e)) return;
if (true) {

	SetPanelState('u251', 'pd1u251','none','',500,'none','',500);

}
});
gv_vAlignTable['u257'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u221'] = 'center';gv_vAlignTable['u222'] = 'top';gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u49'] = 'top';u226.tabIndex = 0;

u226.style.cursor = 'pointer';
$axure.eventManager.click('u226', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u226', function(e) {
if (!IsTrueMouseOver('u226',e)) return;
if (true) {

	SetPanelState('u203', 'pd1u203','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u226', function(e) {
if (!IsTrueMouseOut('u226',e)) return;
if (true) {

	SetPanelState('u203', 'pd0u203','none','',500,'none','',500);

}
});
u227.tabIndex = 0;

u227.style.cursor = 'pointer';
$axure.eventManager.click('u227', function(e) {

if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u227', function(e) {
if (!IsTrueMouseOver('u227',e)) return;
if (true) {

	SetPanelState('u214', 'pd1u214','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u227', function(e) {
if (!IsTrueMouseOut('u227',e)) return;
if (true) {

	SetPanelState('u214', 'pd0u214','none','',500,'none','',500);

}
});
gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u59'] = 'center';u84.tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u238'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u63'] = 'center';u64.tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u247'] = 'center';document.getElementById('u248_img').tabIndex = 0;

u248.style.cursor = 'pointer';
$axure.eventManager.click('u248', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u249'] = 'center';