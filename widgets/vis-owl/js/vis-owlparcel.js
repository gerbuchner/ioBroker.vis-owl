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
        "instanz":                  {"en": "Instance",          "de": "Instanz",                "ru": ""},
        "imgProgress1":             {"en": "Pic progress 1",    "de": "Bild Fortschritt 1",     "ru": ""},
        "imgProgress2":             {"en": "Pic progress 2",    "de": "Bild Fortschritt 2",     "ru": ""},
        "imgProgress3":             {"en": "Pic progress 3",    "de": "Bild Fortschritt 3",     "ru": ""},
        "imgProgress4":             {"en": "Pic progress 4",    "de": "Bild Fortschritt 4",     "ru": ""},
        "imgProgress5":             {"en": "Pic progress 5",    "de": "Bild Fortschritt 5",     "ru": ""},
        
        "group_amazon":             {"en": "Amazon",            "de": "Amazon",                 "ru": ""},
        "showCarrier-amazon":       {"en": "Show parcels",      "de": "Sendungen anzeigen",     "ru": ""},
        "imgCarrier-amazon":        {"en": "Logo",              "de": "Logo",                   "ru": ""},
        "showDelivered-amazon":     {"en": "Show delivered",    "de": "Gelieferte anzeigen",    "ru": ""},
        "numParcels-amazon":        {"en": "Number parcels",    "de": "Anzahl Sendungen",       "ru": ""},

        
        "group_dhl":                {"en": "DHL",               "de": "DHL",                    "ru": ""},
        "showCarrier-dhl":          {"en": "Show parcels",      "de": "Sendungen anzeigen",     "ru": ""},
        "imgCarrier-dhl":           {"en": "Logo",              "de": "Logo",                   "ru": ""},
        "showDelivered-dhl":        {"en": "Show delivered",    "de": "Gelieferte anzeigen",    "ru": ""},
        "numParcels-dhl":           {"en": "Number parcels",    "de": "Anzahl Sendungen",       "ru": ""},
        
        "group_dpd":                {"en": "DPD",               "de": "DPD",                    "ru": ""},
        "showCarrier-dpd":          {"en": "Show parcels",      "de": "Sendungen anzeigen",     "ru": ""},
        "imgCarrier-dpd":           {"en": "Logo",              "de": "Logo",                   "ru": ""},
        "showDelivered-dpd":        {"en": "Show delivered",    "de": "Gelieferte anzeigen",    "ru": ""},
        "numParcels-dpd":           {"en": "Number parcels",    "de": "Anzahl Sendungen",       "ru": ""},

        "group_gls":                {"en": "GLS",               "de": "GLS",                    "ru": ""},
        "showCarrier-gls":          {"en": "Show parcels",      "de": "Sendungen anzeigen",     "ru": ""},
        "imgCarrier-gls":           {"en": "Logo",              "de": "Logo",                   "ru": ""},
        "showDelivered-gls":        {"en": "Show delivered",    "de": "Gelieferte anzeigen",    "ru": ""},
        "numParcels-gls":           {"en": "Number parcels",    "de": "Anzahl Sendungen",       "ru": ""},

        "group_ups":                {"en": "UPS",               "de": "UPS",                    "ru": ""},
        "showCarrier-ups":          {"en": "Show parcels",      "de": "Sendungen anzeigen",     "ru": ""},
        "imgCarrier-ups":           {"en": "Logo",              "de": "Logo",                   "ru": ""},
        "showDelivered-ups":        {"en": "Show delivered",    "de": "Gelieferte anzeigen",    "ru": ""},
        "numParcels-ups":           {"en": "Number parcels",    "de": "Anzahl Sendungen",       "ru": ""},
        
        "group_hermes":             {"en": "Hermes",            "de": "Hermes",                 "ru": ""},
        "showCarrier-hermes":       {"en": "Show parcels",      "de": "Sendungen anzeigen",     "ru": ""},
        "imgCarrier-hermes":        {"en": "Logo",              "de": "Logo",                   "ru": ""},
        "showDelivered-hermes":     {"en": "Show delivered",    "de": "Gelieferte anzeigen",    "ru": ""},
        "numParcels-hermes":        {"en": "Number parcels",    "de": "Anzahl Sendungen",       "ru": ""},
        
        "group_17track":            {"en": "17TRACK",           "de": "17TRACK",                "ru": ""},
        "showCarrier-17track":      {"en": "Show parcels",      "de": "Sendungen anzeigen",     "ru": ""},
        "imgCarrier-17track":       {"en": "Logo",              "de": "Logo",                   "ru": ""},
        "showDelivered-17track":    {"en": "Show delivered",    "de": "Gelieferte anzeigen",    "ru": ""},
        "numParcels-17track":       {"en": "Number parcels",    "de": "Anzahl Sendungen",       "ru": ""}
    }
);
 
// this code can be placed directly in vis-owl.html



vis.binds["vis-owlParcel"] = {
    version: "0.2.0",
    showVersion: function () {
        if (vis.binds["vis-owlParcel"].version) {
            console.log('Version vis-owlParcel: ' + vis.binds["vis-owlParcel"].version);
            vis.binds["vis-owlParcel"].version = null;
        }
    },

    createParcel: function (widgetID, view, data, style) {
        let $div = $('#' + widgetID);
        let itemTop = 20;

        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds["vis-owlParcel"].createPLTable(widgetID, view, data, style);
            }, 100);
        }
 
        let text = '';
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