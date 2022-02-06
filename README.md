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

Odd Widget Library<br>

<p>Aktuell gibt es nur ein Widget aber ein paar Ideen für weitere Widgets existieren bereits.</p>
<hr>

### Flexible Control
<img src="widgets/vis-owl/img/vis-owl.png">
<p>Widget zur Steuerung von Klimaanlagen, Luftreinigern, Heizungen, Motoren usw.</p>
<p>Ich nutze es um unsere Fußbodenheizung (3 Steuerungen), die Klimaanlage (3 Steuerungen) und die Luftreiniger (4 Steuerungen) in der VIS regeln und steuern zu können. Anfänglich über Gruppen realisiert, wurde schnell klar dass es bei Updates keinen Sinn mehr macht und ein Widget der wesentlich bessere Weg ist. Deswegen entstand das "Flexible Control". Sicher kann da noch wesentlich mehr damit gesteuert werden, da sind der Phantasie wenig Grenzen gesetzt.</p>
<p>Aktuell noch in einem sehr frühen aber (bei mir) stabilen Zustand. Über Feedback und gerne auch Änderungswünsche würde ich mich freuen.</p>


## Anpassungen mit CSS
Um eine ordentliche Kaskadierung der CSS Klassen / Eigenschaften zu erreichen, muss für das Widget unter "General" eine "CSS Class" gesetzt werden. Ich nenne diese "myclass". Dadurch können auch mehrere Designs, z.B. Hell & dunkel definiert und mittels der Klasse einfach umgestellt werden.

Für den Header stehen 2 CSS Klassen zur Verfügung:
```css
.myclass.vis-owl-flexcontrol-comp-header {
    background-color: #63c968; 
    border: 1px solid rgb(136, 136, 136); 
    color:#ffffff;
}

.myclass.vis-owl-flexcontrol-comp-header-text {
    color:#aaaaaa;
    font-size: small;
    height: 14px;
    text-align: left;
}

.myclass.vis-owl-flexcontrol-comp-header-ist {
    color:#aaaaaa;
    font-size: small;
    height: 14px;
    text-align: right;
}
```

Für den Hauptbereich stehen 2 CSS Klassen zur Verfügung:
```css
.vis-owl-flexcontrol-comp-main {
    background-color: #333333; 
    border: 1px solid rgb(136, 136, 136); 
    color:#ffffff;
}

.vis-owl-flexcontrol-comp-main-soll {
    color:#aaaaaa;
    font-size: medium;
    height: 16px;
    text-align: right;
}
```

## Changelog
### 0.1.1 (2022-02-06)
HTML & CSS Optimierungen
### 0.1.0 (2022-02-03)
Erste öffentliche Beta
<!--
    Placeholder for the next version (at the beginning of the line):
    ###- **WORK IN PROGRESS**
-->-

### **WORK IN PROGRESS**
* (Buchi) Code Verbesserungen / Optimierungen

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