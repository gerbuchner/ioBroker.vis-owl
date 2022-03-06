/*
    ioBroker.vis vis-owl Widget-Set

    version: "0.2.3"

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
        "oidJson": { "en": "DP Json", "de": "DP Json", "ru": "" },
        "numParcels": { "en": "Number parcels", "de": "Anzahl Sendungen", "ru": "" },
        "showDelivered": { "en": "Show delivered", "de": "Zeige zugestellte", "ru": "" },
        "separateEntries": { "en": "Separate entries", "de": "Trennlinie zwischen Sendungen", "ru": "" },
        "separatorHeight": { "en": "Separator height", "de": "Höhe der Trennlinie", "ru": "" },
        "imgProgress1": { "en": "Pic progress 1", "de": "Bild Fortschritt 1", "ru": "" },
        "imgProgress2": { "en": "Pic progress 2", "de": "Bild Fortschritt 2", "ru": "" },
        "imgProgress3": { "en": "Pic progress 3", "de": "Bild Fortschritt 3", "ru": "" },
        "imgProgress4": { "en": "Pic progress 4", "de": "Bild Fortschritt 4", "ru": "" },
        "imgProgress5": { "en": "Pic progress 5", "de": "Bild Fortschritt 5", "ru": "" },

        "group_carrier": { "en": "Carrier", "de": "Paket Dienst", "ru": "" },
        "imgCarrierAmazon": { "en": "Logo Amazon", "de": "Logo Amazon", "ru": "" },
        "imgCarrierDhl": { "en": "Logo DHL", "de": "Logo DHL", "ru": "" },
        "imgCarrierDpd": { "en": "Logo DPD", "de": "Logo DPD", "ru": "" },
        "imgCarrierGls": { "en": "Logo GLS", "de": "Logo GLS", "ru": "" },
        "imgCarrierUps": { "en": "Logo UPS", "de": "Logo UPS", "ru": "" },
        "imgCarrierHermes": { "en": "Logo Hermes", "de": "Logo Hermes", "ru": "" },
        "imgCarrier17track": { "en": "Logo 17TRACK", "de": "Logo 17TRACK", "ru": "" }

        /*
        "group_amazon": { "en": "Amazon", "de": "Amazon", "ru": "" },
        "showCarrier-amazon": { "en": "Show parcels", "de": "Sendungen anzeigen", "ru": "" },
        "showDelivered-amazon": { "en": "Show delivered", "de": "Gelieferte anzeigen", "ru": "" },
        "numParcels-amazon": { "en": "Number parcels", "de": "Anzahl Sendungen", "ru": "" },


        "group_dhl": { "en": "DHL", "de": "DHL", "ru": "" },
        "showCarrier-dhl": { "en": "Show parcels", "de": "Sendungen anzeigen", "ru": "" },
        "showDelivered-dhl": { "en": "Show delivered", "de": "Gelieferte anzeigen", "ru": "" },
        "numParcels-dhl": { "en": "Number parcels", "de": "Anzahl Sendungen", "ru": "" },

        "group_dpd": { "en": "DPD", "de": "DPD", "ru": "" },
        "showCarrier-dpd": { "en": "Show parcels", "de": "Sendungen anzeigen", "ru": "" },
        "showDelivered-dpd": { "en": "Show delivered", "de": "Gelieferte anzeigen", "ru": "" },
        "numParcels-dpd": { "en": "Number parcels", "de": "Anzahl Sendungen", "ru": "" },

        "group_gls": { "en": "GLS", "de": "GLS", "ru": "" },
        "showCarrier-gls": { "en": "Show parcels", "de": "Sendungen anzeigen", "ru": "" },
        "showDelivered-gls": { "en": "Show delivered", "de": "Gelieferte anzeigen", "ru": "" },
        "numParcels-gls": { "en": "Number parcels", "de": "Anzahl Sendungen", "ru": "" },

        "group_ups": { "en": "UPS", "de": "UPS", "ru": "" },
        "showCarrier-ups": { "en": "Show parcels", "de": "Sendungen anzeigen", "ru": "" },
        "showDelivered-ups": { "en": "Show delivered", "de": "Gelieferte anzeigen", "ru": "" },
        "numParcels-ups": { "en": "Number parcels", "de": "Anzahl Sendungen", "ru": "" },

        "group_hermes": { "en": "Hermes", "de": "Hermes", "ru": "" },
        "showCarrier-hermes": { "en": "Show parcels", "de": "Sendungen anzeigen", "ru": "" },
        "showDelivered-hermes": { "en": "Show delivered", "de": "Gelieferte anzeigen", "ru": "" },
        "numParcels-hermes": { "en": "Number parcels", "de": "Anzahl Sendungen", "ru": "" },

        "group_17track": { "en": "17TRACK", "de": "17TRACK", "ru": "" },
        "showCarrier-17track": { "en": "Show parcels", "de": "Sendungen anzeigen", "ru": "" },
        "showDelivered-17track": { "en": "Show delivered", "de": "Gelieferte anzeigen", "ru": "" },
        "numParcels-17track": { "en": "Number parcels", "de": "Anzahl Sendungen", "ru": "" }
        */
    }
);

// this code can be placed directly in vis-owl.html



vis.binds["vis-owlParcel"] = {
    version: "0.2.2",
    showVersion: function () {
        if (vis.binds["vis-owlParcel"].version) {
            console.log('Version vis-owlParcel: ' + vis.binds["vis-owlParcel"].version);
            vis.binds["vis-owlParcel"].version = null;
        }
    },

    createParcel: function (widgetID, view, data, style) {
        let $div = $('#' + widgetID);
        let itemTop = 20;

        console.log('Start Funktion');
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds["vis-owlParcel"].createParcel(widgetID, view, data, style);
            }, 100);
        }

        let x = 1;
        let text = '';
        let top = 10;
        let left = 10;
        let imgAMZ = data.imgCarrierAmazon;
        if (imgAMZ == '' || imgAMZ == null) {imgAMZ = 'widgets/vis-owl/img/logo-amazon.svg';}
        let imgDHL = data.imgCarrierDhl;
        if (imgDHL == '' || imgDHL == null) {imgDHL = 'widgets/vis-owl/img/logo-dhl.svg';}
        let imgDPD = data.imgCarrierDpd;
        if (imgDPD == '' || imgDPD == null) {imgDPD = 'widgets/vis-owl/img/logo-dpd.svg';}
        let imgGLS = data.imgCarrierGls;
        if (imgGLS == '' || imgGLS == null) {imgGLS = 'widgets/vis-owl/img/logo-gls.svg';}
        let imgUPS = data.imgCarrierUps;
        if (imgUPS == '' || imgUPS == null) {imgUPS = 'widgets/vis-owl/img/logo-ups.svg';}
        let imgHERMES = data.imgCarrierHermes;
        if (imgHERMES == '' || imgHERMES == null) {imgHERMES = 'widgets/vis-owl/img/logo-hermes.svg';}
        let img17T = data.imgCarrier17track;
        //if (img17T == '') {img17T = 'widgets/vis-owl/img/logo-17track.svg';}

        let maxEntries = data['numParcels'];
        if (maxEntries == 0 || maxEntries == null) {maxEntries = 9999;}
        let par = JSON.parse(vis.states[data.oidJson + '.val']);
        console.log(par.length);
        let filtered = par.filter(ent => ent.status.indexOf('Zugestellt') == -1 && ent.status.indexOf('Zustellung erfolgreich') == -1 && ent.status.indexOf('Paket zugestellt') == -1 );
        console.log(filtered.length);
        if (data.showDelivered == false) {var parcels = [].concat(filtered);} else {var parcels = [].concat(par);}
        console.log(parcels);
        console.log(parcels.length);
        if (maxEntries > parcels.length) {maxEntries = parcels.length;}

        text += '<div class="vis-widget vis-owl-parcel-container ' + data.class + '">';
        for (x = 0; x < maxEntries; x++) {
            text += '<div class="vis-widget vis-owl-parcel ' + data.class + '" style="top: ' + top + 'px;">';
            // Bild des Paketdienstes
            text += '<div class="vis-widget vis-owl-parcel-source ' + data.class + '"><img class="vis-owl-parcel-source" src="';
            switch (parcels[x].source.toUpperCase()) {
                case 'AMZ':
                    text += imgAMZ;
                    break;
                case 'DHL':
                    text += imgDHL;
                    break;
                case 'DPD':
                    text += imgDPD;
                    break;
                case 'GLS':
                    text += imgGLS;
                    break;
                case 'UPS':
                    text += imgUPS;
                    break;
                case 'HERMES':
                    text += imgHERMES;
                    break;
                case '17TRACK':
                    text += img17T;
                    break;
            }
            text += '"></div>';
            left += 60;
            text += '<div class="vis-widget vis-owl-parcel-id ' + data.class + '">' + parcels[x].id + '</div>';
            left += 200;
            text += '<div class="vis-widget vis-owl-parcel-name ' + data.class + '">' + parcels[x].name + '</div>';
            top += 20;
            left = 70;
            text += '<div class="vis-widget vis-owl-parcel-status ' + data.class + '">' + parcels[x].status + '</div>';
            text += '</div>';
            left = 10;
            top += 35;
            if(data.separateEntries) {
                text += '<div class="vis-widget vis-owl-parcel-sepline ' + data.class + '" style="height: ' + data.separatorHeight + 'px; top: ' + top + 'px;"></div>';
                top += parseInt(data.separatorHeight);
            }
        }
        text += '</div>';


        /*
                console.log(data['numParcels-dhl']);
                for (x = 1; x <= data['numParcels-dhl']; x++) {
                    //dp = data.oidJson;
                    //console.log(dp);
                    //data['oidTmp' + x] = 'parcel.0.dhl.sendungen0' + x + '.val';
                    sendung = vis.states['parcel.0.dhl.sendungen0' + x + '.val'];
                    console.log(sendung);
                }
        
        
                let carrier = [{
                    "id": "00340434467222410886",
                    "updtDT": "2022-03-03T12:59:00+01:00",
                    "sender": "Sertronics GmbH",
                    "delivered": true,
                    "statusLong": "Die Sendung wurde im Rahmen der kontaktlosen Zustellung zugestellt.",
                    "statusShort": "Zustellung erfolgreich.",
                    "progress": 5,
                    "progressMax": 5
                }];
        
                let dhl = {
                    "id": "4711",
                    "updtDT": "2022-03-03",
                    "sender": "privat",
                    "delivered": false,
                    "statusLong": "Die Sendung wurde im Rahmen der kontaktlosen Zustellung zugestellt.",
                    "statusShort": "Zustellung erfolgreich.",
                    "progress": 3,
                    "progressMax": 5
                };
        
                carrier.unshift(dhl);
        
        
                let list = carrier.filter(parcel => parcel.progressMax === 8);
        
                let i = 0;
                console.log('Start Debug');
                for (i = 0; i < list.length; i++) {
                    console.log(list[i]);
                }
        */

        /* 
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
        */


        $('#' + widgetID).html(text);

    }
}


vis.binds["vis-owlParcel"].showVersion();