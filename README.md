
# Feuchtigkeitssensor Frontend
Dies ist unser Semesterprojekt in dem Fach: Softwareentwurf-und-Anwendung-verteilter-Systeme. Es besteht aus mehreren Repositories.
Das hier ist der Frontend-Code unseres Projektes. Wir haben, für Landwirte, eine Webapp entwickelt, die anhand der Messungen der Feuchtigkeitssensoren, dem Landwirt visualisiert wie die Bodenfeuchte seiner Felder ist. Dementsprechend weiß er ob er noch zusätzlich bewässern muss oder nicht.

## Benutzung
### Projekt einrichten
```
npm install
```

### Kompilieren und Hot-Reload für die Entwicklung
```
npm run serve
```

### Kompiliert und minifiziert für die Produktion
```
npm run build
```

### Lints und korrigiert Dateien
```
npm run lint
```

### Anpassen der Konfiguration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Aufbau
Dadurch das es ein Vue.js Projekt ist gibt es mehrere Dateien.
### App.vue
* Hier wird die Registration.vue, LogIn.vue und die `<router-view>` eingebunden 

### Registration