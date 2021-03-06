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

## Aufbau
Dadurch das es ein Vue.js Projekt ist gibt es mehrere Dateien.
Mit **`axios`** wird mit dem Backend kommuniziert.
### App.vue
* Hier wird die Registration.vue, LogIn.vue und die `<router-view>` eingebunden 

### Registration.vue
* Dies ist die Registrierung, also die erste Anmeldung, in unserer Webapp.
    * `registerUser` Hier wird die E-Mailadresse, Benutzername und Passwort abgespeichert. Das Passwort wird allerdings direkt verschlüsselt.
    * `const uri = '/api/register'` Das ist der Endpunkt an dem die Registrierungsdaten abgespeichert werden.

### LogIn.vue
* Hier meldet man sich nach der Registrierung an. Es werden Benutzername und das verschlüsselte Passwort überprüft und wenn das übereinstimmt wird ein token erstellt. Jeder Benutzer hat ein anderes token, dass sich bei jeder Anmeldung ändert.
    * `loginUser` Hier wird der Benutzername und das verschlüsselte Passwort abgespeichert.
    * `const uri = '/api/login'` Das ist der Endpunkt an dem die Anmeldedaten überprüft werden und der `token` erstellt wird.

### Homepage.vue
* Hier findet momentan lediglich die Abmeldung statt. 
    * `logout`Der token wird hier entfernt und der Benutzer kommt wieder zu Anmeldeseite.

### SensorOne.vue
* Die Daten des Feuchtigkeitssensors werden hiereingebunden und visualisiert.
    * `const uri = '/api/getLastWeek'` Das ist der Endpunkt an dem die Sensordaten abgerufen werden und ins Frontend eingebunden werden.
    * `calcHeight` Ist dafür zuständig das die Snesordaten visualisiert werden. 

## Energiebedarf

### ESP8266 LUA Amica V2
* Elektrische Kennlinie:
    * 3.3V betrieben
    * 15mA Ausgangsstrom pro GPIO-Pin
    * 12 - 200 mA Arbeitsstrom
    * weniger als 200 uA Standby-Strom

### ESP32 DevKit C V4
* Elektrische Kennlinie:
    * 3.3V betrieben
    * 15mA Ausgangsstrom pro GPIO-Pin
    * 80 mA durchschnittlicher Arbeitsstrom

* Unsere Messbereiche: 0 - 4095 (nass: 0, trocken: 4095)
* Unserer Messinterval: 6 Stunden (4mal täglich)
* Stromversorgung: Solarset 20W mit Akku "https://www.amazon.de/Esotec-120005-Solar-Set-Anschlusskabel-Laderegler/dp/B01GNOFKEM"
-> Dieser hat eine Akkukapazität von 8Ah
Da der ESP8266 den Sleep-Modus hat kann man dadurch sehr viel Strom sparen. 

## Future Work
Um das Produkt für mehrere Nutzer zu verwenden müsste man einziges noch verändern.
* Hülle:
    * wasserfest, da die Elektronik nicht unter gewissen Wetterbedienungen leiden darf
    * das Material muss stabil sein, sodass man es gut in die Erde bekommt, am besten sollte es aus Verbundwerkstoffe oder feste Resine hergestellt sein
    * das komplette Produkt darf auch nicht zu dimensional sein, wegen Diebstahlsicherheit
* Datenbank:
    * unsere Datenbank macht erst Sinn wenn man für mehrere Jahre die Prognose sieht, deswegen benötigen wir eine Datenbank mit einer großen Kapazität, zum Beispiel MySQL oder Team Desk(Enterprise Edition -> unlimited database)
* Ausfallsicherheit:
    * falls die Solaranlage nicht genügend Energie produziert, bekommt der Nutzer eine Benachrichtigung + den Standort
    * eventuell noch zusätzlichen Speicher,  sodass der ESP trotzdem weiter messen kann
    * Backups anlegen
* (Sicherheits-)Update:
    * nur die nötigsten Daten angeben lassen und nicht alles
    * nur Standort von den Messstationen anzeigen, nicht den Home Standort
    * Software aktuell halten
* Code:
    * die Wetter Api muss noch eingebunden werden, damit man das aktuelle Wetter sehen kann
    * Pairing- Prozess: Wie werden Erfassungsmodule Nutzern zugeordnet
    * Der Nutzer soll die Sensoren einzelnen Felder zu weisen können und die jeweilige Pflanzenart eintragen können, dass wenn zu viel oder zu wenig Wasser vorhanden ist ein Alarm ausgelöst wird.
    * Einen Ruhemodus für die ESPs -> weniger Energiebedarf
    * Den Menüpunkt hinzufügen ausarbeiten, mehrere Sensoren einpflegen und ihre räumlich Verteilung darstellen
    * Den Menüpunkt Profil ausarbeiten, Benutzername von der Registrierung/Anmeldung übernehmen, Profilbild hinzufügen etc.

