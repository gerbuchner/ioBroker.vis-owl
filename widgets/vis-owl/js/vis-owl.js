/*
    ioBroker.vis vis-owl Widget-Set

    version: "0.1.1"

    Copyright 2022 Buchi temp1@act4you.de
*/
"use strict";

 

// add translations for edit mode
$.extend(
    true,
    systemDictionary,
    {
        // Add your translations here, e.g.:
        // "size": {
        // 	"en": "Size",
        // 	"de": "Größe",
        // 	"ru": "Размер",
        // 	"pt": "Tamanho",
        // 	"nl": "Grootte",
        // 	"fr": "Taille",
        // 	"it": "Dimensione",
        // 	"es": "Talla",
        // 	"pl": "Rozmiar",
        // 	"zh-cn": "尺寸"
        // }
    }
);
 
// this code can be placed directly in vis-owl.html
vis.binds["vis-owl"] = {
    version: "0.1.1",
    showVersion: function () {
        if (vis.binds["vis-owl"].version) {
            console.log('Version vis-owl: ' + vis.binds["vis-owl"].version);
            vis.binds["vis-owl"].version = null;
        }
    },
    createFlexControl: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds["vis-owl"].createFlexControl(widgetID, view, data, style);
            }, 100);
        }
 
        var text = '';
        text += '<!-- Hintergrund Header -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-header ' + data.class + '" style="overflow: visible; width: 170px; height: 30px; left: 0px; top: 0px; z-index: 2;" id="' + widgetID + '">';
        text += '</div>';

        text += '<!-- Überschrift -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-header-text ' + data.class + '" style="top: 8px; left: 7px; width: 100px; z-index: 3;">';
        text += '            ' + data.headerText;
        text += '</div>';
        
        text += '<!-- istWert -->';
        text += '<div class="vis-widget istWert vis-owl-flexcontrol-comp-header-ist ' + data.class + '" style="top: 8px; left: 110px; width: 50px; height: 14px; z-index: 3;">';
        text += '             ' + vis.states[data.oidValIst + '.val'] + ' ' + data.valEinheitIst;
        text += '</div>';

        text += '<!-- Hintergrund Hauptbereich -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-main ' + data.class + '" style="overflow: visible; width: 170px; height: 90px; left: 0px; top: 30px; z-index: 1;">';
        text += '</div>';

        text += '<!-- Ein / Aus -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 7px; top: 40px; z-index: 2; cursor: pointer;">';
        text += '            <img class="einaus" src="' + data.imgOn + '" width="100%">';
        text += '</div>';
        
        text += '<!-- sollWert -->';
        text += '<div class="vis-widget sollWert vis-owl-flexcontrol-comp-main-soll ' + data.class + '" style="top: 44px; left: 40px; width: 74px; z-index: 3;">';
        text += '             ' + vis.states[data.oidValSoll + '.val'] + ' ' + data.valEinheitSoll;
        text += '</div>';

        text += '<!-- Minus -->';
        text += '<div class="vis-widget sollMinus vis-owl-button" style="width: 20px; height: 20px; position: absolute; left: 120px; top: 40px; z-index: 3; font-size: medium; text-align: center; line-height: 20px; cursor: pointer;">';
        text += '        -';
        text += '</div>';

        text += '<!-- Plus -->';
        text += '<div class="vis-widget sollPlus vis-owl-button" style="width: 20px; height: 20px; position: absolute; left: 145px; top: 40px; z-index: 3; font-size: medium; text-align: center; line-height: 20px; cursor: pointer;">';
        text += '        +';
        text += '</div>';

        text += '<!-- Modus 0 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 7px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode0" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';

        text += '<!-- Modus 1 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 37px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode1" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';

        text += '<!-- Modus 2 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 67px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode2" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';

        text += '<!-- Modus 3 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 97px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode3" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';

        text += '<!-- Modus 4 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 127px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode4" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';


        $('#' + widgetID).html(text);

        // subscribe on updates of value

// #region IstWert        
        function onChangeIst(e, newVal, oldVal) {
            $div.find('.istWert').html(parseFloat(newVal).toFixed(data.dacIst) + ' ' + data.valEinheitIst);
        }
        if (data.oidValIst) {
            vis.states.bind(data.oidValIst + '.val', onChangeIst);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data.oidValIst + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeIst);
        }
// #endregion

// #region SollWert        
function onChangeSoll(e, newVal, oldVal) {
    $div.find('.sollWert').html(parseFloat(newVal).toFixed(data.dacSoll) + ' ' + data.valEinheitSoll);
}
if (data.oidValSoll) {
    vis.states.bind(data.oidValSoll + '.val', onChangeSoll);
    //remember bound state that vis can release if didnt needed
    $div.data('bound', [data.oidValSoll + '.val']);
    //remember onchange handler to release bound states
    $div.data('bindHandler', onChangeSoll);
}

$div.find('.sollMinus').on('click', function (e){
    vis.setValue(data.oidValSoll, (parseFloat(vis.states[data.oidValSoll + '.val']) - parseFloat(data.valStep)).toFixed(1)); 
})

$div.find('.sollPlus').on('click', function (e){
    vis.setValue(data.oidValSoll, (parseFloat(vis.states[data.oidValSoll + '.val']) + parseFloat(data.valStep)).toFixed(1)); 
});

// #endregion


// #region Ein / Aus
        function onChangeOO(e, newVal, oldVal) {
            var img = '';
            if (newVal == 1) { img = data.imgOn; } else { img = data.imgOff; }
            $div.find('.einaus').attr('src', img);
        }
        if (data.oidOnOff) {
            vis.states.bind(data.oidOnOff + '.val', onChangeOO);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data.oidOnOff + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeOO);
        }

        $div.find('.einaus').on('click', function (e){
            if (vis.states[data.oidOnOff + '.val'] == 1) { vis.setValue(data.oidOnOff, false); } else { vis.setValue(data.oidOnOff, true); }
        });
// #endregion

// #region Modus0
function onChangeMode0(e, newVal, oldVal) {
    var img = '';
    if (newVal == data.valueMode0) { img = data.imgModeOn0; } else { img = data.imgModeOff0; }
    if (data.showMode0) {
        $div.find('.imgMode0').attr('src', img);
    }
    else {
        $div.find('.imgMode0').hide();
    }
}
if (data.oidMode0) {
    vis.states.bind(data.oidMode0 + '.val', onChangeMode0);
    //remember bound state that vis can release if didnt needed
    $div.data('bound', [data.oidMode0 + '.val']);
    //remember onchange handler to release bound states
    $div.data('bindHandler', onChangeMode0);
}

$div.find('.imgMode0').on('click', function (e){
    vis.setValue(data.oidMode0, parseInt(data.valueMode0)); 
});
// #endregion

// #region Modus1
function onChangeMode1(e, newVal, oldVal) {
    var img = '';
    if (newVal == data.valueMode1) { img = data.imgModeOn1; } else { img = data.imgModeOff1; }
    if (data.showMode1) {
        $div.find('.imgMode1').attr('src', img);
    }
    else {
        $div.find('.imgMode1').hide();
    }
}
if (data.oidMode1) {
    vis.states.bind(data.oidMode1 + '.val', onChangeMode1);
    //remember bound state that vis can release if didnt needed
    $div.data('bound', [data.oidMode1 + '.val']);
    //remember onchange handler to release bound states
    $div.data('bindHandler', onChangeMode1);
}

$div.find('.imgMode1').on('click', function (e){
    vis.setValue(data.oidMode1, parseInt(data.valueMode1)); 
});
// #endregion

// #region Modus2
function onChangeMode2(e, newVal, oldVal) {
    var img = '';
    if (newVal == data.valueMode2) { img = data.imgModeOn2; } else { img = data.imgModeOff2; }
    if (data.showMode2 == true) {
        $div.find('.imgMode2').attr('src', img);
    }
    else {
        $div.find('.imgMode2').hide();
    }
}
if (data.oidMode2) {
    vis.states.bind(data.oidMode2 + '.val', onChangeMode2);
    //remember bound state that vis can release if didnt needed
    $div.data('bound', [data.oidMode2 + '.val']);
    //remember onchange handler to release bound states
    $div.data('bindHandler', onChangeMode2);
}

$div.find('.imgMode2').on('click', function (e){
    vis.setValue(data.oidMode2, parseInt(data.valueMode2)); 
});
// #endregion

// #region Mode3
function onChangeMode3(e, newVal, oldVal) {
    var img = '';
    if (newVal == data.valueMode3) { img = data.imgModeOn3; } else { img = data.imgModeOff3; }
    if (data.showMode3) {
        $div.find('.imgMode3').attr('src', img);
    }
    else {
        $div.find('.imgMode3').hide();
    }
}
if (data.oidMode3) {
    vis.states.bind(data.oidMode3 + '.val', onChangeMode3);
    //remember bound state that vis can release if didnt needed
    $div.data('bound', [data.oidMode3 + '.val']);
    //remember onchange handler to release bound states
    $div.data('bindHandler', onChangeMode3);
}

$div.find('.imgMode3').on('click', function (e){
    vis.setValue(data.oidMode3, parseInt(data.valueMode3)); 
});
// #endregion

// #region Mode4
function onChangeMode4(e, newVal, oldVal) {
    var img = '';
    if (newVal == data.valueMode4) { img = data.imgModeOn4; } else { img = data.imgModeOff4; }
    if (data.showMode4) {
        $div.find('.imgMode4').attr('src', img);
    }
    else {
        $div.find('.imgMode4').hide();
    }
}
if (data.oidMode4) {
    vis.states.bind(data.oidMode4 + '.val', onChangeMode4);
    //remember bound state that vis can release if didnt needed
    $div.data('bound', [data.oidMode4 + '.val']);
    //remember onchange handler to release bound states
    $div.data('bindHandler', onChangeMode4);
}

$div.find('.imgMode4').on('click', function (e){
    vis.setValue(data.oidMode4, parseInt(data.valueMode4)); 
});
// #endregion



onChangeOO(null, vis.states[data.oidOnOff + '.val'], 0);
onChangeIst(null, vis.states[data.oidValIst + '.val'], 0);
onChangeSoll(null, vis.states[data.oidValSoll + '.val'], 0);
onChangeMode0(null, vis.states[data.oidMode0 + '.val'], 0);
onChangeMode1(null, vis.states[data.oidMode1 + '.val'], 0);
onChangeMode2(null, vis.states[data.oidMode2 + '.val'], 0);
onChangeMode3(null, vis.states[data.oidMode3 + '.val'], 0);
onChangeMode4(null, vis.states[data.oidMode4 + '.val'], 0);
    }
};


vis.binds["vis-owl"].showVersion();