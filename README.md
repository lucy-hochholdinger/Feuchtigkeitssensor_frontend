# Feuchtigkeitssensor Frontend
Dies ist unser Semesterprojekt in dem Fach: Softwareentwurf-und-Anwendung-verteilter-Systeme. Es besteht aus mehreren Repositories.
Das hier ist der Frontend-Code unseres Projektes. Wir haben, für Landwirte, eine Webapp entwickelt, die anhand der Messungen der Feuchtigkeitssensoren, dem Landwirt visualisiert wie die Bodenfeuchte seiner Felder ist. Dementsprechend weiß er ob er noch zusätzlich bewässern muss oder nicht.

## Benutzung
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<h2>Energiebedarf</h2>
ESP8266 LUA Amica V2<br> 
Elektrische Kennlinie:<p>
- 3.3V betrieben<br>
- 15mA Ausgangsstrom pro GPIO-Pin<br>
- 12 - 200 mA Arbeitsstrom<br>
- weniger als 200 uA Standby-Strom<p>
ESP32 DevKit C V4<br>
Elektrische Kennlinie:<p>
- 3.3V betrieben<br>
- 15mA Ausgangsstrom pro GPIO-Pin<br>
- 80 mA durchschnittlicher Arbeitsstrom<p>
Unsere Messbereiche: 0 - 4095 (nass: 0, trocken: 4095)<br>
Unserer Messinterval: 6 Stunden (4mal täglich)<br>
Stromversorgung: Solarset 20W mit Akku "https://www.amazon.de/Esotec-120005-Solar-Set-Anschlusskabel-Laderegler/dp/B01GNOFKEM"
-> Dieser hat eine Akkukapazität von 8Ah<br>
Da der ESP8266 den Sleep-Modus hat kann man dadurch sehr viel Strom sparen. 
<p>

<h2>Future Work</h2>
Um das Produkt für mehrere Nutzer zu verwenden müsste man einziges noch verändern.<br>
Hülle:<br>
- wasserfest, da die Elektronik nicht unter gewissen Wetterbedienungen leiden darf<br>
- das Material muss stabil sein, sodass man es gut in die Erde bekommt, am besten sollte es aus Verbundwerkstoffe oder feste Resine hergestellt sein<br>
- das komplette Produkt darf auch nicht zu dimensional sein, wegen Diebstahlsicherheit<br>
Datenbank:<br>
- unsere Datenbank macht erst Sinn wenn man für mehrere Jahre die Prognose sieht, deswegen benötigen wir eine Datenbank mit einer großen Kapazität, zum Beispiel MySQL oder Team Desk(Enterprise Edition -> unlimited database)<br>
Ausfallsicherheit:<br>
- falls die Solaranlage nicht genügend Energie produziert, bekommt der Nutzer eine Benachrichtigung + den Standort<br>
- eventuell noch zusätzlichen Speicher,  sodass der ESP trotzdem weiter messen kann<br>
- Backups anlegen<br>
(Sicherheits-)Update:<br>
- nur die nötigsten Daten angeben lassen und nicht alles<br>
- nur Standort von den Messstationen anzeigen, nicht den Home Standort<br>
- Software aktuell halten<br>

