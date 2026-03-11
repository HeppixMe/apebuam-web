# Apebuam – Webseite

Willkommen auf der offiziellen Webseite von **Apebuam**, einem neu gegründeten Unternehmen, das sich auf die Organisation und Gestaltung unvergesslicher Veranstaltungen spezialisiert hat.

## Beschreibung

Diese Webseite präsentiert das Unternehmen Apebuam und bietet einen Überblick über vergangene Veranstaltungen. Die Seite enthält:

- **Logo & Header** – Unternehmenslogo im oberen Bereich der Seite
- **Bildslider** – Automatisch wechselnde Bilder vergangener Events mit Navigationspunkten
- **Über uns** – Kurze Beschreibung des Unternehmens und seiner Dienstleistungen
- **Kontaktbereich** – Links zu Instagram, Telefon und WhatsApp

## Technologien

- **HTML5** – Struktur der Webseite
- **CSS3** – Gestaltung und responsives Layout
- **JavaScript** – Bildslider-Funktionalität
- **Font Awesome 6** – Icons für den Kontaktbereich
- **Python** – Hilfsskript zur Generierung der Bildliste (`scripts/generate_images.py`)

## Projektstruktur

```
apebuam-web/
├── index.html              # Hauptseite
├── css/
│   └── style.css           # Stylesheet
├── js/
│   ├── images.js           # Liste der Event-Bilder (automatisch generiert)
│   └── script.js           # Slider-Logik
├── events/
│   ├── event1.jpg          # Event-Bilder
│   ├── event2.jpg
│   ├── event3.jpg
│   ├── event4.jpg
│   └── event5.jpg
├── images/
│   └── logo.png            # Unternehmenslogo
└── scripts/
    └── generate_images.py  # Skript zur Generierung von images.js
```

## Installation und Nutzung

Da es sich um eine statische Webseite handelt, ist keine besondere Installation erforderlich.

1. Repository klonen oder herunterladen:
   ```bash
   git clone https://github.com/HeppixMe/apebuam-web.git
   ```

2. Die Datei `index.html` in einem Webbrowser öffnen.

### Event-Bilder aktualisieren

Um die Liste der Event-Bilder zu aktualisieren, lege neue `.jpg`-Dateien im Ordner `events/` ab und führe anschließend das Python-Skript aus:

```bash
python scripts/generate_images.py
```

Dadurch wird die Datei `js/images.js` automatisch neu generiert.

## Kontakt

- **Instagram:** [instagram.com/apebuam](https://instagram.com/apebuam)
- **Telefon:** +49 123 456789
- **WhatsApp:** [wa.me/49123456789](https://wa.me/49123456789)
