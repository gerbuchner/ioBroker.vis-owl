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
        "oidValIst": { "en": "Act. Value", "de": "Ist Wert", "ru": "" },
        "valColorIst": { "en": "Color Actual Value", "de": "Farbe Ist Wert", "ru": "" },
        "dacIst": { "en": "Digits after comma (act)", "de": "Stellen nach Komma (Ist)", "ru": "" },
        "valEinheitIst": { "en": "Unit", "de": "Einheit", "ru": "" },
        "oidValSoll": { "en": "Set Value", "de": "Soll Wert", "ru": "" },
        "dacSoll": { "en": "Digits after comma (set)", "de": "Stellen nach Komma (Soll)", "ru": "" },
        "minSoll": { "en": "Min Set Value", "de": "Min Soll Wert", "ru": "" },
        "maxSoll": { "en": "Max Set Value", "de": "Max Soll Wert", "ru": "" },
        "valEinheitSoll": { "en": "Unit", "de": "Einheit", "ru": "" },
        "valStep": { "en": "Step", "de": "Step", "ru": "" },
        "numOpMode": { "en": "Number of Operating Modes", "de": "Anzahl Betriebsmodi", "ru": "" },
        "opModeMarkActive": { "en": "Mark active Mode", "de": "Markiere aktiven Modus", "ru": "" },

        "group_opmode": { "en": "Operating Modes ", "de": "Betriebsmodus ", "ru": "" },
        "nameOpMode": { "en": "Name", "de": "Name", "ru": "" },
        "oidOpMode": { "en": "Object ID", "de": "Objekt ID", "ru": "" },
        "valOpMode": { "en": "Value(s)", "de": "Wert(e)", "ru": "" },
        "imgOpModeOn": { "en": "Image Mode On", "de": "Bild Modus Ein", "ru": "" },
        "imgOpModeOff": { "en": "Image Mode Off", "de": "Bild Modus Aus", "ru": "" },

        "headerText": { "en": "Headline", "de": "Überschrift", "ru": "" },

        "group_onoff": { "en": "On/Off", "de": "Ein/Aus", "ru": "" },
        "oidOnOff": { "en": "Object ID", "de": "Objekt ID", "ru": "" },
        "imgOn": { "en": "Image On", "de": "Bild Ein", "ru": "" },
        "imgOff": { "en": "Image Off", "de": "Bild Aus", "ru": "" },

        "group_mode": { "en": "Settings ", "de": "Eigenschaften ", "ru": "" },
        "showMode": { "en": "Visible", "de": "Anzeigen", "ru": "" },
        "oidMode": { "en": "Object ID", "de": "Objekt ID", "ru": "" },
        "condMode": { "en": "Condition", "de": "Bedingung", "ru": "" },
        "valueMode": { "en": "Value Mode", "de": "Wert Modus", "ru": "" },
        "imgModeOn": { "en": "Image Mode On", "de": "Bild Modus Ein", "ru": "" },
        "imgModeOff": { "en": "Image Mode Off", "de": "Bild Modus Aus", "ru": "" },

        "group_info": { "en": "Info ", "de": "Info ", "ru": "" },
        "showInfo": { "en": "Visible", "de": "Sichtbar", "ru": "" },
        "imgInfo": { "en": "Image", "de": "Bild", "ru": "" },
        "oidInfo": { "en": "Object ID", "de": "Objekt ID", "ru": "" },
        "dacInfo": { "en": "Digits after comma", "de": "Stellen nach Komma", "ru": "" },
        "valEinheitInfo": { "en": "Unit", "de": "Einheit", "ru": "" },
        "valMultiplier": { "en": "Multiplier", "de": "Multiplikator", "ru": "" },
        "valColorInfo": { "en": "Fore Color", "de": "Vordergrundfarbe", "ru": "" }
    }
);

// this code can be placed directly in vis-owl.html

vis.binds["vis-owlPLTable"] = {
    version: "0.1.6",
    showVersion: function () {
        if (vis.binds["vis-owlPLTable"].version) {
            console.log('Version vis-owlPLTable: ' + vis.binds["vis-owlPLTable"].version);
            vis.binds["vis-owlPLTable"].version = null;
        }
    },

    createPLTable: function (widgetID, view, data, style) {
        let $div = $('#' + widgetID);
        let itemTop = 20;

        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds["vis-owlPLTable"].createPLTable(widgetID, view, data, style);
            }, 100);
        }

        let text = '';
        text += '<!-- Hintergrund Header -->';
        text += '<div class="vis-widget vis-owl-pltable-header ' + data.class + '" style="background-color: #aaaaaa; overflow: visible; width: 570px; height: 530px; left: 0px; top: 0px; z-index: 2;" id="' + widgetID + '">';
        text += '</div>';


        for (let i = 1; i <= data.numberItems; i++) {
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
        let $div = $('#' + widgetID);
        let itemLeft = 20;
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds["vis-owlFlexControl"].createFlexControl(widgetID, view, data, style);
            }, 100);
        }

        // #region HTML
        let text = '';
        text += '<!-- Hintergrund Header -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-header ' + data.class + '" style="overflow: visible; width: 100%; height: 30px; left: 0px; top: 0px; z-index: 2;" id="' + widgetID + '">';
        text += '</div>';

        text += '<!-- Überschrift -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-header-text-bg ' + data.class + '" style="left: 7px; z-index: 3;">';
        text += '    <div class="vis-widget vis-owl-flexcontrol-comp-header-text ' + data.class + '" style="left: 7px; z-index: 4;">';
        if (data.headerText) { text += '            ' + data.headerText; }
        text += '    </div>';
        text += '</div>';

        if (data.oidValIst) {
            text += '<!-- istWert -->';
            text += '<div class="vis-widget istWert vis-owl-flexcontrol-comp-header-ist ' + data.class + '" style="z-index: 3; color: ' + data.valColorIst + '">';
            text += '             ' + vis.states[data.oidValIst + '.val'] + ' ' + data.valEinheitIst;
            text += '</div>';
        }

        text += '<!-- Hintergrund Hauptbereich -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-main ' + data.class + '" style="position: relativ; overflow: visible; width: 100%; height: 92px; left: 0px; top: 30px; z-index: 1;">';
        text += '</div>';

        if (data.imgOpModeOn1) {
            text += '<!-- Ein / Aus -->';
            text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 7px; top: 40px; z-index: 2; cursor: pointer;">';
            text += '            <img class="einaus" src="' + data.imgOpModeOn1 + '" width="100%">';
            text += '</div>';
        }

        // Popup
        if (data.numOpMode > 1) {
            text += '<!-- Betriebsmodus Popup -->';
            text += '<div class="vis-widget eaPopup vis-owl-flexcontrol-comp-popup-hintergrund ' + data.class + '" style="width: 300px; height: 80px; left: 0px; top: 0px; z-index: 90; display: none;">';

            for (let i = 1; i <= data.numOpMode; i++) {
                if (data['imgOpModeOn' + i]) {
                    text += '<div class="vis-widget" style="top: 15px; left: ' + itemLeft + 'px; width: 35px; z-index: 99; cursor: pointer;">';
                    text += '            <img class="opMode' + i + '" src="' + data['imgOpModeOn' + i] + '" width="100%">';
                }
                text += '</div>';
                if (data.opModeMarkActive) {
                    text += '<div class="vis-widget fcc-pu-activ' + i + ' vis-owl-flexcontrol-comp-popup-activ ' + data.class + '" style="top: 55px; left: ' + (itemLeft + 3) + 'px; width: 29px; height: 2px; z-index: 99;">';
                    text += '</div>';
                }
                text += '<div class="vis-widget vis-owl-flexcontrol-comp-popup-desc ' + data.class + '" style="top: 60px; left: ' + (itemLeft - 15) + 'px; width: 65px; height: 14px; z-index: 99;">';
                text += '             ' + data['nameOpMode' + i];
                text += '</div>';

                itemLeft += 75;
            }
            text += '</div>';
        }

        if (data.oidValSoll) {
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
        }

        text += '<!-- Modus 1 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 7px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode1" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';

        text += '<!-- Modus 2 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 37px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode2" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';

        text += '<!-- Modus 3 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 67px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode3" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';

        text += '<!-- Modus 4 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 97px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode4" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';

        text += '<!-- Modus 5 -->';
        text += '<div class="vis-widget" style="width: 30px; height: 30px; left: 127px; top: 80px; z-index: 2;">';
        text += '        <img class="imgMode5" src="" width="100%" style="cursor: pointer;">';
        text += '</div>';

        text += '<!-- Hintergrund Infopanel -->';
        text += '<div class="vis-widget vis-owl-flexcontrol-comp-info ' + data.class + '" style="overflow: visible; width: 100%; height: 20px; left: 0px; top: 122px; z-index: 1;">';
        text += '</div>';

        if (data.oidInfo1) {
            text += '<!-- Info 1 Bild -->';
            text += '<div class="vis-widget" style="width: 15px; height: 15px; left: 10px; top: 124px; z-index: 2;">';
            text += '        <img class="imgInfo1" src="' + data.imgInfo1 + '" width="100%">';
            text += '</div>';
        }

        if (data.oidInfo1) {
            text += '<!-- Info 1 Wert -->';
            text += '<div class="vis-widget info1Wert vis-owl-flexcontrol-comp-info-value ' + data.class + '" style="top: 125px; left: 35px; z-index: 3; color: ' + data.valColorInfo1 + '">';
            text += '             ' + vis.states[data.oidInfo1 + '.val'] + ' ' + data.valEinheitInfo1;
            text += '</div>';
        }

        if (data.oidInfo2) {
            text += '<!-- Info 2 Bild -->';
            text += '<div class="vis-widget" style="width: 15px; height: 15px; left: 90px; top: 124px; z-index: 2;">';
            text += '        <img class="imgInfo2" src="' + data.imgInfo2 + '" width="100%">';
            text += '</div>';
        }

        if (data.oidInfo2) {
            text += '<!-- Info 2 Wert -->';
            text += '<div class="vis-widget info2Wert vis-owl-flexcontrol-comp-info-value ' + data.class + '" style="top: 125px; left: 110px; z-index: 3; color: ' + data.valColorInfo2 + '">';
            text += '             ' + vis.states[data.oidInfo2 + '.val'] + ' ' + data.valEinheitInfo2;
            text += '</div>';
        }

        $('#' + widgetID).html(text);
        // #endregion

        // subscribe on updates of value

        // #region IstWert        
        function onChangeIst(e, newVal, oldVal) {
            let val = '';
            val = newVal;
            let vEinheit = '';
            if (data.valEinheitIst) { vEinheit = ' ' + data.valEinheitIst; }
            if (typeof val == 'boolean' || isNaN(val) == true) { val = val; }
            else { val = parseFloat(val).toFixed(data.dacIst); }
            $div.find('.istWert').html(val + vEinheit);
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
            let val = '';
            let vEinheit = '';
            if (data.valEinheitSoll) { vEinheit = ' ' + data.valEinheitSoll; }
            if (isNaN(newVal) == false) { val = parseFloat(newVal).toFixed(data.dacSoll); } else { val = newVal; }
            $div.find('.sollWert').html(val + vEinheit);
        }
        if (data.oidValSoll) {
            vis.states.bind(data.oidValSoll + '.val', onChangeSoll);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data.oidValSoll + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeSoll);
        }

        $div.find('.sollMinus').on('click', function (e) {
            let value;
            if ((parseFloat(vis.states[data.oidValSoll + '.val']) - parseFloat(data.valStep)).toFixed(data.dacSoll) < data.minSoll) {
                value = data.minSoll;
            } else {
                value = (parseFloat(vis.states[data.oidValSoll + '.val']) - parseFloat(data.valStep)).toFixed(data.dacSoll);
            }
            vis.setValue(data.oidValSoll, value);
        })

        $div.find('.sollPlus').on('click', function (e) {
            let value;
            if ((parseFloat(vis.states[data.oidValSoll + '.val']) + parseFloat(data.valStep)).toFixed(data.dacSoll) > data.maxSoll) {
                value = data.maxSoll;
            }
            else {
                value = (parseFloat(vis.states[data.oidValSoll + '.val']) + parseFloat(data.valStep)).toFixed(data.dacSoll);
            }
            vis.setValue(data.oidValSoll, value);
        });

        // #endregion

        // #region Ein / Aus
        $div.find('.einaus').on('click', function (e) {
            if (data.numOpMode == 1) {
                const { on, off } = getOnOff(data['valOpMode1']);
                if (on != vis.states[data['oidOpMode1'] + '.val']) { vis.setValue(data.oidOpMode1, on); } else { vis.setValue(data.oidOpMode1, off); };
            } else {
                // berechne Position für Popup
                let childPos = $div.find('.vis-owl-flexcontrol-comp-main').offset();
                let parentPos = $div.find('.vis-owl-flexcontrol-comp-main').parent().offset();
                let _top = childPos.top - parentPos.top - 10;
                let _left = childPos.left - parentPos.left - 10;
                let _width = data.numOpMode * 70 + 20;

                // find maximal z-index
                /* var zindexMax = 900;
                for (var z = 0; z < vis.binds.owl.zindex.length; z++) {
                    if (vis.binds.owl.zindex[z] > zindexMax) zindexMax = vis.binds.owl.zindex[z];
                }
                zindexMax++;
                alert(zindexMax);
                */

                // prüfen ob ausserhalb des Fensters
                if (parentPos.left - 10 + _width > window.innerWidth - 5) { _left = window.innerWidth - parentPos.left - 5 - _width }
                if (parentPos.left - 10 < 0) { _left = parentPos.left }
                //if (_top + 80 > window.innerHeight - 5) {_top = window.innerHeight - 5 - 80}
                //if (_top < 5) {_top = 5}
                $div.find('.eaPopup').css({ left: _left + 'px', top: _top + 'px' });
                $div.find('.eaPopup').css({ width: _width + 'px' });
                $div.find('.eaPopup').fadeIn(500);

                $(document).mouseup(function (e) {
                    let container = $($div.find('.eaPopup'));

                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        container.fadeOut(500);
                    }
                });
            }
        })

        if (data.numOpMode > 1) {
            for (let i = 1; i <= data.numOpMode; i++) {
                $div.find('.opMode' + i).on('click', function (e) {
                    const { on, off } = getOnOff(data['valOpMode' + i]);
                    if (on != vis.states[data['oidOpMode' + i] + '.val']) {
                        vis.setValue(data['oidOpMode' + i], on);
                    } else {
                        vis.setValue(data['oidOpMode' + i], off);
                    };
                    setOnOffImage();
                });
            }
        }

        function setOnOffImage() {
            let _img;
            for (let i = 1; i <= data.numOpMode; i++) {
                const { on, off } = getOnOff(data['valOpMode' + i]);
                if (on == vis.states[data['oidOpMode' + i] + '.val']) {
                    _img = data['imgOpModeOn' + i];
                };
            }
            if (!_img) {
                for (let i = 1; i <= data.numOpMode; i++) {
                    const { on, off } = getOnOff(data['valOpMode' + i]);
                    if (off == vis.states[data['oidOpMode' + i] + '.val']) {
                        _img = data['imgOpModeOff' + i];
                    };
                }
            }
            $div.find('.einaus').attr('src', _img);
        }

        function onChangeOpMode1(e, newVal, oldVal) {
            let img;
            const { on, off } = getOnOff(data['valOpMode1']);
            if (newVal == on) {
                img = data['imgOpModeOn1'];
                $div.find('.fcc-pu-activ1').show();
            } else {
                img = data['imgOpModeOff1'];
                $div.find('.fcc-pu-activ1').hide();
            }
            $div.find('.opMode1').attr('src', img);
            setOnOffImage();
        }
        if (data['oidOpMode1']) {
            vis.states.bind(data['oidOpMode1'] + '.val', onChangeOpMode1);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data['oidOpMode1'] + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeOpMode1);
        }

        function onChangeOpMode2(e, newVal, oldVal) {
            let img;
            const { on, off } = getOnOff(data['valOpMode2']);
            if (newVal == on) { img = data['imgOpModeOn2']; $div.find('.fcc-pu-activ2').show(); } else { img = data['imgOpModeOff2']; $div.find('.fcc-pu-activ2').hide(); }
            $div.find('.opMode2').attr('src', img);
            setOnOffImage();
        }
        if (data['oidOpMode2']) {
            vis.states.bind(data['oidOpMode2'] + '.val', onChangeOpMode2);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data['oidOpMode2'] + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeOpMode2);
        }

        function onChangeOpMode3(e, newVal, oldVal) {
            let img;
            const { on, off } = getOnOff(data['valOpMode3']);
            if (newVal == on) { img = data['imgOpModeOn3']; $div.find('.fcc-pu-activ3').show(); } else { img = data['imgOpModeOff3']; $div.find('.fcc-pu-activ3').hide(); }
            $div.find('.opMode3').attr('src', img);
            setOnOffImage();
        }
        if (data['oidOpMode3']) {
            vis.states.bind(data['oidOpMode3'] + '.val', onChangeOpMode3);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data['oidOpMode3'] + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeOpMode3);
        }

        function onChangeOpMode4(e, newVal, oldVal) {
            let img;
            const { on, off } = getOnOff(data['valOpMode4']);
            if (newVal == on) { img = data['imgOpModeOn4']; $div.find('.fcc-pu-activ4').show(); } else { img = data['imgOpModeOff4']; $div.find('.fcc-pu-activ4').hide(); }
            $div.find('.opMode4').attr('src', img);
            setOnOffImage();
        }
        if (data['oidOpMode4']) {
            vis.states.bind(data['oidOpMode4'] + '.val', onChangeOpMode4);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data['oidOpMode4'] + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeOpMode4);
        }

        function onChangeOpMode5(e, newVal, oldVal) {
            let img;
            const { on, off } = getOnOff(data['valOpMode5']);
            if (newVal == on) { img = data['imgOpModeOn5']; $div.find('.fcc-pu-activ5').show(); } else { img = data['imgOpModeOff5']; $div.find('.fcc-pu-activ5').hide(); }
            $div.find('.opMode5').attr('src', img);
            setOnOffImage();
        }
        if (data['oidOpMode5']) {
            vis.states.bind(data['oidOpMode5'] + '.val', onChangeOpMode5);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data['oidOpMode5'] + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeOpMode5);
        }

        $div.find('.eaPopup').on('click', function (e) {
            $div.find('.eaPopup').fadeOut(500);
        });
        // #endregion

        // #region Modus1
        function onChangeMode1(e, newVal, oldVal) {
            let img = '';
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

        $div.find('.imgMode1').on('click', function (e) {
            vis.setValue(data.oidMode1, parseInt(data.valueMode1));
        });
        // #endregion

        // #region Modus2
        function onChangeMode2(e, newVal, oldVal) {
            let img = '';
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

        $div.find('.imgMode2').on('click', function (e) {
            vis.setValue(data.oidMode2, parseInt(data.valueMode2));
        });
        // #endregion

        // #region Modus3
        function onChangeMode3(e, newVal, oldVal) {
            let img = '';
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

        $div.find('.imgMode3').on('click', function (e) {
            vis.setValue(data.oidMode3, parseInt(data.valueMode3));
        });
        // #endregion

        // #region Modus4
        function onChangeMode4(e, newVal, oldVal) {
            let img = '';
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

        $div.find('.imgMode4').on('click', function (e) {
            vis.setValue(data.oidMode4, parseInt(data.valueMode4));
        });
        // #endregion

        // #region Modus5
        function onChangeMode5(e, newVal, oldVal) {
            let img = '';
            if (newVal == data.valueMode5) { img = data.imgModeOn5; } else { img = data.imgModeOff5; }
            if (data.showMode5) {
                $div.find('.imgMode5').attr('src', img);
            }
            else {
                $div.find('.imgMode5').hide();
            }
        }
        if (data.oidMode5) {
            vis.states.bind(data.oidMode5 + '.val', onChangeMode5);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data.oidMode5 + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeMode5);
        }

        $div.find('.imgMode5').on('click', function (e) {
            vis.setValue(data.oidMode5, parseInt(data.valueMode5));
        });
        // #endregion

        // #region Info 1        
        function onChangeInfo1(e, newVal, oldVal) {
            let wert;
            let vEinheit = '';
            if (data.valEinheitInfo1) { vEinheit = ' ' + data.valEinheitInfo1; }
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
                $div.find('.info1Wert').html(wert + vEinheit);
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
            let wert;
            let vEinheit = '';
            if (data.valEinheitInfo2) { vEinheit = ' ' + data.valEinheitInfo2; }
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
                $div.find('.info2Wert').html(wert + vEinheit);
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

        function getOnOff(strValues) {
            let _on = strValues;
            let _off = '';
            if (/;/.test(strValues) == true) {
                _on = strValues.split(';')[0];
                if (isNaN(_on) == false) { _on = parseInt(_on); };
                _off = strValues.split(';')[1];
                if (isNaN(_off) == false) { _off = parseInt(_off); };
            }
            else {
                if (isNaN(_on) == false) { _on = parseInt(_on); };
            }

            return {
                on: _on,
                off: _off,
            }

        }

        //onChangeOO(null, vis.states[data.oidOnOff + '.val'], 0);
        onChangeIst(null, vis.states[data.oidValIst + '.val'], 0);
        onChangeSoll(null, vis.states[data.oidValSoll + '.val'], 0);
        onChangeMode1(null, vis.states[data.oidMode1 + '.val'], 0);
        onChangeMode2(null, vis.states[data.oidMode2 + '.val'], 0);
        onChangeMode3(null, vis.states[data.oidMode3 + '.val'], 0);
        onChangeMode4(null, vis.states[data.oidMode4 + '.val'], 0);
        onChangeMode5(null, vis.states[data.oidMode5 + '.val'], 0);
        onChangeInfo1(null, vis.states[data.oidInfo1 + '.val'], 0);
        onChangeInfo2(null, vis.states[data.oidInfo2 + '.val'], 0);
        setOnOffImage();
        onChangeOpMode1(null, vis.states[data.oidOpMode1 + '.val'], 0);
        onChangeOpMode2(null, vis.states[data.oidOpMode2 + '.val'], 0);
        onChangeOpMode3(null, vis.states[data.oidOpMode3 + '.val'], 0);
        onChangeOpMode4(null, vis.states[data.oidOpMode4 + '.val'], 0);
        onChangeOpMode5(null, vis.states[data.oidOpMode5 + '.val'], 0);
    }
};


vis.binds["vis-owlFlexControl"].showVersion();