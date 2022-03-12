![Logo](admin/vis-owl.png)
# ioBroker.vis-owl

[![NPM version](https://img.shields.io/npm/v/iobroker.vis-owl.svg)](https://www.npmjs.com/package/iobroker.vis-owl)
[![Downloads](https://img.shields.io/npm/dm/iobroker.vis-owl.svg)](https://www.npmjs.com/package/iobroker.vis-owl)
![Number of Installations](https://iobroker.live/badges/vis-owl-installed.svg)
![Current version in stable repository](https://iobroker.live/badges/vis-owl-stable.svg)
[![Dependency Status](https://img.shields.io/david/gerbuchner/iobroker.vis-owl.svg)](https://david-dm.org/gerbuchner/iobroker.vis-owl)

[![NPM](https://nodei.co/npm/iobroker.vis-owl.png?downloads=true)](https://nodei.co/npm/iobroker.vis-owl/)

**Tests:** ![Test and Release](https://github.com/gerbuchner/ioBroker.vis-owl/workflows/Test%20and%20Release/badge.svg)

## vis-owl adapter for ioBroker

Odd Widget Library

## Flexible Control
<img src="widgets/vis-owl/img/vis-owlfcc.png">
Widget zur Steuerung von Klimaanlagen, Luftreinigern, Heizungen, Motoren usw.

Ich nutze es um unsere Fußbodenheizung (3 Steuerungen), normalen Heizkörper (2 Stück), die Klimaanlage (3 Steuerungen) und die Luftreiniger (4 Steuerungen) in der VIS regeln und steuern zu können. Anfänglich über Gruppen realisiert, wurde schnell klar dass es bei Updates keinen Sinn mehr macht und ein Widget der wesentlich bessere Weg ist. Deswegen entstand das "Flexible Control". Sicher kann da noch wesentlich mehr damit gesteuert werden, da sind der Phantasie kaum Grenzen gesetzt.

Aktuell noch in einem sehr frühen aber (bei mir) stabilen Zustand. Über Feedback und gerne auch Änderungswünsche würde ich mich freuen.

## Parcel Control
Widget zur Anzeige von Sendungen (Sendungsverfolgung).

Dank dem [parcel adapter](https://github.com/TA2k/ioBroker.parcel) von [tombox](https://forum.iobroker.net/user/tombox) können von verschiedensten Paket Versendern die Daten zu dem Status von Sendungen ausgelesen und in Datenpunkten gespeichert werden. Das Widget setzt auf dem Adapter auf und stellt eine einfache Möglichkeit zur Verfügung die Daten in der VIS anzuzeigen.

## Diskussion und Fragen
[https://forum.iobroker.net/topic/53045/test-widget-vis-owl-v0-2-x-github](https://forum.iobroker.net/topic/53045/test-widget-vis-owl-v0-2-x-github)
## Dokumentation
Siehe Github Wiki


## Changelog
### 0.2.7 (2022-03-12)
* [Sendungsverfolgung] Bug bei der automatischen Aktualisierung behoben
* [Sendungsverfolgung] Klick auf Logo öffnet Webseite mit der Sendungsverfolgung
### 0.2.6 (2022-03-10)
* [Sendungsverfolgung] Titelzeile und Anordnung optimiert
### 0.2.5 (2022-03-10)
* [Sendungsverfolgung] Sortierung der Sendungen nach Status
* [Sendungsverfolgung] Ein- / ausblenden von gelieferten Sendungen verbessert
* [Sendungsverfolgung] Titelzeile eingebaut
* [Sendungsverfolgung] Bilder als PNG bereitgestellt wegen Problemen mit SVG

### 0.2.4 (2022-03-06)
* [Sendungsverfolgung] Rücksendungen (ohne ID) herausgefiltert
### 0.2.3 (2022-03-06)
* [Sendungsverfolgung] Trennlinie zwischen Sendungen
### 0.2.2 (2022-03-05)
* [Sendungsverfolgung] Bilddimensionen korrigiert
* [Sendungsverfolgung] Zugestellte ein-/ausblendbar
### 0.2.1 (2022-03-05)
* [Sendungsverfolgung] Erste Tabellenversion
### 0.2.0 (2022-03-03)
* [Sendungsverfolgung] Initial upload
### 0.1.7 (2022-03-01)
* [Flexible Control comp] Kleinere Bugfixes
### 0.1.6 (2022-02-28)
* [Flexible Control comp] Kleinere Bugfixes
* [Flexible Control comp] Fehlebehandlung erweitert
* [Flexible Control comp] Rechtschreibfehler behoben
### 0.1.5 (2022-02-17)
* [Flexible Control comp] Erweiterung Betriebsmodus durch Popup
* [Flexible Control comp] Eigenschaften im VIS-Editor angepasst
* [Flexible Control comp] CSS Möglichkeiten weiter ausgebaut
* [Flexible Control comp] Codeoptimierungen
### 0.1.4 (2022-02-10)
* [Flexible Control comp] Bugfix Anzeige Werte im Infopanel
### 0.1.3 (2022-02-09)
* [Flexible Control comp] Info Panel hinzugefügt
### 0.1.2 (2022-02-07)
* [Flexible Control comp] Textfarbe für Ist-Wert in Eigenschaften übernommen (zur Nutzung von Bindings)
* [Flexible Control comp] Min & Max für Sollwert hinzugefügt
### 0.1.1 (2022-02-06)
* [Flexible Control comp] HTML & CSS Optimierungen
### 0.1.0 (2022-02-03)
* [Flexible Control comp] Erste öffentliche Beta

Placeholder for the next version (at the beginning of the line):
### **WORK IN PROGRESS**


## License
MIT License

Copyright (c) 2022 Buchi <temp1@act4you.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
