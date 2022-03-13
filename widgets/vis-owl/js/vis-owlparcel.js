/*
    ioBroker.vis vis-owl Widget-Set

    version: "0.2.8"

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
        "txtHeader": { "en": "Headline", "de": "Überschrift", "ru": "" },
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
    version: "0.2.8",
    showVersion: function () {
        if (vis.binds["vis-owlParcel"].version) {
            console.log('Version vis-owlParcel: ' + vis.binds["vis-owlParcel"].version);
            vis.binds["vis-owlParcel"].version = null;
        }
    },

    createParcel: function (widgetID, view, data, style) {
            let $div = $('#' + widgetID);

            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["vis-owlParcel"].createParcel(widgetID, view, data, style);
                }, 100);
            }


        function buildTable() {

            let urlTrackingDHL = "http://nolp.dhl.de/nextt-online-public/set_identcodes.do?lang=de&rfn=&extendedSearch=true&idc=";
            let urlTrackingDPD = "https://tracking.dpd.de/parcelstatus?locale=de_DE&query=";
            let urlTrackingGLS = "https://gls-group.eu/DE/de/paketverfolgung?match=";
            let urlTrackingHermes = "https://tracking.hermesworld.com/?TrackID=";
            let urlTrackingUPS = "http://wwwapps.ups.com/ietracking/tracking.cgi?IATA=de&Lang=ge&tracknum=";
            //let urlTrackingAmazon = "https://www.amazon.de" + vis.states[data['signInRedirectUrl'] + '.val'];
            //let urlTracking17Track = "";
            //console.log(urlTrackingAmazon);

            //let itemTop = 20;

            //console.log('Start Funktion');
            // if nothing found => wait

            let x = 1;
            let text = '';
            //let top = parseInt(data.distFirstDivTop);
            let top = 0;
            //let left = 10;

            let imgAMZ = data.imgCarrierAmazon;
            if (imgAMZ == '' || imgAMZ == null) { imgAMZ = 'widgets/vis-owl/img/logo-amazon.png'; }
            let imgDHL = data.imgCarrierDhl;
            if (imgDHL == '' || imgDHL == null) { imgDHL = 'widgets/vis-owl/img/logo-dhl.png'; }
            let imgDPD = data.imgCarrierDpd;
            if (imgDPD == '' || imgDPD == null) { imgDPD = 'widgets/vis-owl/img/logo-dpd.png'; }
            let imgGLS = data.imgCarrierGls;
            if (imgGLS == '' || imgGLS == null) { imgGLS = 'widgets/vis-owl/img/logo-gls.png'; }
            let imgUPS = data.imgCarrierUps;
            if (imgUPS == '' || imgUPS == null) { imgUPS = 'widgets/vis-owl/img/logo-ups.png'; }
            let imgHERMES = data.imgCarrierHermes;
            if (imgHERMES == '' || imgHERMES == null) { imgHERMES = 'widgets/vis-owl/img/logo-hermes.png'; }
            let img17T = data.imgCarrier17track;
            //if (img17T == '') {img17T = 'widgets/vis-owl/img/logo-17track.svg';}

            let maxEntries = data['numParcels'];
            if (maxEntries == 0 || maxEntries == null) { maxEntries = 9999; }
            let parFull = JSON.parse(vis.states[data.oidJson + '.val']);
            let par = parFull.filter(ent => ent.id.length > 0);

            console.log(par.length);
            let filtered = par.filter(ent => ent.delivery_status > 1);
            //console.log(filtered.length);
            if (data.showDelivered == false) { var parcels = [].concat(filtered); } else { var parcels = [].concat(par); }
            //console.log(parcels);
            //console.log(parcels.length);
            if (maxEntries > parcels.length) { maxEntries = parcels.length; }
            let byStatus = parcels.slice(0);
            byStatus.sort((a, b) => {
                return b.delivery_status - a.delivery_status;
            });

            //console.log("Sortiert:");
            //console.log(byStatus);

            if (data.txtHeader) {
                text += '<div class="vis-widget vis-owl-parcel-headline ' + data.class + '"><div class="vis-widget vis-owl-parcel-headline-text ' + data.class + '">' + data.txtHeader + '</div></div>';
            }
            text += '<div class="vis-widget vis-owl-parcel-container ' + data.class + '">';
            for (x = 0; x < maxEntries; x++) {
                let classInDelievery = byStatus[x].delivery_status > 1 ? "-inDelivery" : "";
                text += '<div class="vis-widget vis-owl-parcel ' + data.class + '" style="top: ' + top + 'px;">';
                // Bild des Paketdienstes
                text += '<div class="vis-widget vis-owl-parcel-source ' + data.class + '">';

                switch (byStatus[x].source.toUpperCase()) {
                    case 'AMZ':
                        break;
                    case 'DHL':
                        text += '<a href="' + urlTrackingDHL + byStatus[x].id + '" target="_blank">';
                        break;
                    case 'DPD':
                        text += '<a href="' + urlTrackingDPD + byStatus[x].id + '" target="_blank">';
                        break;
                    case 'GLS':
                        text += '<a href="' + urlTrackingGLS + byStatus[x].id + '" target="_blank">';
                        break;
                    case 'UPS':
                        text += '<a href="' + urlTrackingUPS + byStatus[x].id + '" target="_blank">';
                        break;
                    case 'HERMES':
                        text += '<a href="' + urlTrackingHermes + byStatus[x].id + '" target="_blank">';
                        break;
                    case '17TRACK':
                        break;
                }



                text += '<img class="vis-owl-parcel-source" src="';
                switch (byStatus[x].source.toUpperCase()) {
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
                text += '">';
                text += '</div>';

                if (byStatus[x].source.toUpperCase() == 'DHL' || byStatus[x].source.toUpperCase() == 'DPD' || byStatus[x].source.toUpperCase() == 'GLS' || byStatus[x].source.toUpperCase() == 'UPS' || byStatus[x].source.toUpperCase() == 'HERMES') {
                    text += '</a>';
                }

                //left += 60;
                text += '<div class="vis-widget vis-owl-parcel-id' + classInDelievery + ' ' + data.class + '">' + byStatus[x].id + '</div>';
                //left += 200;
                text += '<div class="vis-widget vis-owl-parcel-name' + classInDelievery + ' ' + data.class + '">' + byStatus[x].name + '</div>';
                top += 20;
                //left = 70;
                text += '<div class="vis-widget vis-owl-parcel-status' + classInDelievery + ' ' + data.class + '">' + byStatus[x].status + '</div>';
                text += '</div>';
                //left = 10;
                top += 35;
                if (data.separateEntries) {
                    text += '<div class="vis-widget vis-owl-parcel-sepline ' + data.class + '" style="height: ' + data.separatorHeight + 'px; top: ' + top + 'px;"></div>';
                    top += parseInt(data.separatorHeight);
                }
            }
            text += '</div>';

            $('#' + widgetID).html(text);

        }



        function onChangeAllProviderJson(e, newVal, oldVal) {
            buildTable();
        }

        if (data['oidJson']) {
            vis.states.bind(data['oidJson'] + '.val', onChangeAllProviderJson);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data['oidJson'] + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChangeAllProviderJson);
        }
        buildTable();
        onChangeAllProviderJson(null, vis.states[data.oidJson + '.val'], 0);
    }
}


vis.binds["vis-owlParcel"].showVersion();