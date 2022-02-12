/*
    ioBroker.vis vis-owl Widget-Set

    version: "0.2.0"

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


vis.binds["vis-owlPLTable"] = {
    version: "0.1.2",
    showVersion: function () {
        if (vis.binds["vis-owlPLTable"].version) {
            console.log('Version vis-owlPLTable: ' + vis.binds["vis-owlPLTable"].version);
            vis.binds["vis-owlPLTable"].version = null;
        }
    },

    createPLTable: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        var itemTop = 20;

        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds["vis-owlPLTable"].createPLTable(widgetID, view, data, style);
            }, 100);
        }
 
        var text = '';
        text += '<!-- Hintergrund Header -->';
        text += '<div class="vis-widget vis-owl-pltable-header ' + data.class + '" style="background-color: #aaaaaa; overflow: visible; width: 570px; height: 530px; left: 0px; top: 0px; z-index: 2;" id="' + widgetID + '">';
        text += '</div>';


        for (var i = 1; i <= data.numberItems; i++) {
            itemTop += 15;

            if (data['showItem' + i] == true) {
                // text += i + ': ' + data['itemName' + i] + '<br>';
                text += '<div class="vis-widget vis-owl-pltable-header ' + data.class + '" style="top: ' + itemTop + 'px; left: 35px; width: 35px; z-index: 3;">';
                text += '            <img class="einaus" src="' + data.imgOn + '" width="100%">';
                text += '</div>';

                itemTop += 10;

                text += '<div class="vis-widget vis-owl-pltable ' + data.class + '" style="top: ' + itemTop + 'px; left: 85px; width: 100px; z-index: 3;">';
                text += '            ' + data['itemName' + i];
                text += '</div>';
                text += '<div class="vis-widget istWert vis-owl-pltable ' + data.class + '" style="top: ' + itemTop + 'px; left: 216px; width: 50px; height: 14px; z-index: 3;">';
                text += '             ' + vis.states[data['oidItemAct' + i] + '.val'];
                text += '</div>';
                text += '<div class="vis-widget istWert vis-owl-pltable ' + data.class + '" style="top: ' + itemTop + 'px; left: 340px; width: 50px; height: 14px; z-index: 3;">';
                text += '             ' + vis.states[data['oidItemDay' + i] + '.val'];
                text += '</div>';
                text += '<div class="vis-widget istWert vis-owl-pltable ' + data.class + '" style="top: ' + itemTop + 'px; left: 465px; width: 50px; height: 14px; z-index: 3;">';
                text += '             ' + vis.states[data['oidItemMonth' + i] + '.val'];
                text += '</div>';

                itemTop += 20;

                if (data.divider == true) {
                    text += '<div class="vis-widget istWert vis-owl-pltable ' + data.class + '" style="top: ' + itemTop + 'px; width: 461px; height: 2px; left: 85px; background-color: #ffffff; z-index: 2;">';
                    text += '</div>';
                }
            }

        }


        $('#' + widgetID).html(text);

    }
}

vis.binds["vis-owlFlexControl"] = {
    version: "0.2.0",
    showVersion: function () {
        if (vis.binds["vis-owlFlexControl"].version) {
            console.log('Version vis-owlFlexControl: ' + vis.binds["vis-owlFlexControl"].version);
            vis.binds["vis-owlFlexControl"].version = null;
        }
    },

    // Flex Control compact
    createFlexControl: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds["vis-owlFlexControl"].createFlexControl(widgetID, view, data, style);
            }, 100);
        }
 
        // #region HTML
        var text = '';
        text += '<!-- Hintergrund Header -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-header ' + data.class + '" style="overflow: visible; width: 170px; height: 30px; left: 0px; top: 0px; z-index: 2;" id="' + widgetID + '">';
        text += '</div>';

        text += '<!-- Überschrift -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-header-text ' + data.class + '" style="top: 8px; left: 7px; width: 100px; z-index: 3;">';
        text += '            ' + data.headerText;
        text += '</div>';
        
        text += '<!-- istWert -->';
        text += '<div class="vis-widget istWert vis-owl-flexcontrol-comp-header-ist ' + data.class + '" style="top: 8px; left: 110px; width: 50px; height: 14px; z-index: 3; color: ' + data.valColorIst + '">';
        text += '             ' + vis.states[data.oidValIst + '.val'] + ' ' + data.valEinheitIst;
        text += '</div>';

        text += '<!-- Hintergrund Hauptbereich -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-main ' + data.class + '" style="position: relativ; overflow: visible; width: 170px; height: 90px; left: 0px; top: 30px; z-index: 1;">';
        text += '</div>';

        text += '<!-- Ein / Aus -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 7px; top: 40px; z-index: 2; cursor: pointer;">';
        text += '            <img class="einaus" src="' + data.imgOn + '" width="100%">';
        text += '</div>';
        
        // Test mit Popup
        text += '<div class="vis-widget eaPopup" style="width: 300px; height: 300px; left: 7px; top: 40px; z-index: 99; background-color:rgba(255, 255, 255, 0.5);">';
        //text += '            <img class="einaus" src="' + data.imgOn + '" width="100%">';
        text += '</div>';
        text += '';
        text += '';
        text += '';
        text += '';
        text += '';
        text += '';
        text += '';
        text += '';
        text += '';
        text += '';





        text += '<!-- sollWert -->';
        text += '<div class="vis-widget sollWert vis-owl-flexcontrol-comp-main-soll ' + data.class + '" style="top: 44px; left: 40px; width: 74px; z-index: 3;">';
        text += '             ' + vis.states[data.oidValSoll + '.val'] + ' ' + data.valEinheitSoll;
        text += '</div>';

        text += '<!-- Minus -->';
        text += '<div class="vis-widget sollMinus vis-owl-flexcontrol-comp-btnStep ' + data.class + '" style="width: 20px; height: 20px; position: absolute; left: 120px; top: 40px; z-index: 3; cursor: pointer;">';
        text += '        -';
        text += '</div>';

        text += '<!-- Plus -->';
        text += '<div class="vis-widget sollPlus vis-owl-flexcontrol-comp-btnStep ' + data.class + '" style="width: 20px; height: 20px; position: absolute; left: 145px; top: 40px; z-index: 3; cursor: pointer;">';
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

        text += '<!-- Hintergrund Infopanel -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-info ' + data.class + '" style="overflow: visible; width: 170px; height: 20px; left: 0px; top: 120px; z-index: 1;">';
        text += '</div>';

        text += '<!-- Info 1 Bild -->';
        text += '<div class="vis-widget" style="width: 15px; height: 15px; left: 10px; top: 123px; z-index: 2;">';
        text += '        <img class="imgInfo1" src="' + data.imgInfo1 + '" width="100%">';
        text += '</div>';
        
        text += '<!-- Info 1 Wert -->';
        text += '<div class="vis-widget info1Wert vis-owl-flexcontrol-comp-info-value ' + data.class + '" style="top: 123px; left: 35px; width: 50px; z-index: 3; color: ' + data.valColorInfo1 + '">';
        text += '             ' + vis.states[data.oidInfo1 + '.val'] + ' ' + data.valEinheitInfo1;
        text += '</div>';

        text += '<!-- Info 2 Bild -->';
        text += '<div class="vis-widget" style="width: 15px; height: 15px; left: 90px; top: 123px; z-index: 2;">';
        text += '        <img class="imgInfo2" src="' + data.imgInfo2 + '" width="100%">';
        text += '</div>';
        
        text += '<!-- Info 2 Wert -->';
        text += '<div class="vis-widget info2Wert vis-owl-flexcontrol-comp-info-value ' + data.class + '" style="top: 123px; left: 110px; width: 50px; z-index: 3; color: ' + data.valColorInfo2 + '">';
        text += '             ' + vis.states[data.oidInfo2 + '.val'] + ' ' + data.valEinheitInfo2;
        text += '</div>';

        $('#' + widgetID).html(text);
        // #endregion

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
            var value;
            if ((parseFloat(vis.states[data.oidValSoll + '.val']) - parseFloat(data.valStep)).toFixed(data.dacIst) < data.minSoll) {
                value = data.minSoll;
            } else {
                value = (parseFloat(vis.states[data.oidValSoll + '.val']) - parseFloat(data.valStep)).toFixed(data.dacIst);
            }
            vis.setValue(data.oidValSoll, value); 
        })

        $div.find('.sollPlus').on('click', function (e){
            var value;
            if ((parseFloat(vis.states[data.oidValSoll + '.val']) + parseFloat(data.valStep)).toFixed(data.dacSoll) > data.maxSoll) {
                value = data.maxSoll;} 
            else {
                value = (parseFloat(vis.states[data.oidValSoll + '.val']) + parseFloat(data.valStep)).toFixed(data.dacSoll);
            }
            vis.setValue(data.oidValSoll, value); 
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

        $div.find('.einaus').on('click', function (e) {
            if (vis.states[data.oidOnOff + '.val'] == 1) { vis.setValue(data.oidOnOff, false); } else { vis.setValue(data.oidOnOff, true); }

            // berechne Position für Popup
            $div.find('.eaPopup').css({left: '-50px', top: '-50px'});
            $div.find('.eaPopup').show();
        })
        
        $div.find('.eaPopup').on('click', function (e) {
            $div.find('.eaPopup').hide();
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
 
        // #region Info 1        
        function onChangeInfo1(e, newVal, oldVal) {
            var wert;
            if (data.showInfo1) {
                $div.find('.imgInfo1').show();
                $div.find('.info1Wert').show();
                if (isNaN(newVal)) {
                    wert = newVal;
                }
                else {
                    if (isNaN(data.valMultiplier1) == false && data.valMultiplier1 != '') {
                        wert = (parseFloat(newVal) * parseFloat(data.valMultiplier1)).toFixed(data.dacInfo1);
                    } else {
                        wert = parseFloat(newVal).toFixed(data.dacInfo1);
                    }
                }
                $div.find('.info1Wert').html(wert + ' ' + data.valEinheitInfo1);
            }
            else {
                $div.find('.imgInfo1').hide();
                $div.find('.info1Wert').hide();
            }
        }
        if (data.oidInfo1) {
            vis.states.bind(data.oidInfo1 + '.val', onChangeInfo1);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data.oidInfo1 + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeInfo1);
        } 
        // #endregion
 
        // #region Info 2        
        function onChangeInfo2(e, newVal, oldVal) {
            var wert;
            if (data.showInfo2) {
                $div.find('.imgInfo2').show();
                $div.find('.info2Wert').show();
                if (isNaN(newVal)) {
                    wert = newVal;
                }
                else {
                    if (isNaN(data.valMultiplier2) == false && data.valMultiplier2 != '') {
                        wert = (parseFloat(newVal) * parseFloat(data.valMultiplier2)).toFixed(data.dacInfo2);
                    } else {
                        wert = parseFloat(newVal).toFixed(data.dacInfo2);
                    }
                }
                $div.find('.info2Wert').html(wert + ' ' + data.valEinheitInfo2);
            }
            else {
                $div.find('.imgInfo2').hide();
                $div.find('.info2Wert').hide();
            }
        }
        if (data.oidInfo2) {
            vis.states.bind(data.oidInfo2 + '.val', onChangeInfo2);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data.oidInfo2 + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeInfo2);
        } 
        // #endregion

        onChangeOO(null, vis.states[data.oidOnOff + '.val'], 0);
        onChangeIst(null, vis.states[data.oidValIst + '.val'], 0);
        onChangeSoll(null, vis.states[data.oidValSoll + '.val'], 0);
        onChangeMode0(null, vis.states[data.oidMode0 + '.val'], 0);
        onChangeMode1(null, vis.states[data.oidMode1 + '.val'], 0);
        onChangeMode2(null, vis.states[data.oidMode2 + '.val'], 0);
        onChangeMode3(null, vis.states[data.oidMode3 + '.val'], 0);
        onChangeMode4(null, vis.states[data.oidMode4 + '.val'], 0);
        onChangeInfo1(null, vis.states[data.oidInfo1 + '.val'], 0);
        onChangeInfo2(null, vis.states[data.oidInfo2 + '.val'], 0);
    }
};


vis.binds["vis-owl"].showVersion();