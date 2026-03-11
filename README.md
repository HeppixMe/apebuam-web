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

## Inhalte hinzufügen

Dieser Abschnitt erklärt, wie du die einzelnen Bereiche der Webseite mit eigenen Inhalten befüllen kannst.

### 1. Neue Event-Bilder hinzufügen

Der Bildslider liest seine Bilder aus der Datei `js/images.js`. Um neue Fotos vergangener Veranstaltungen einzubinden, gehe wie folgt vor:

1. Lege das neue Bild als `.jpg`-Datei in den Ordner `events/` ab, z. B.:
   ```
   events/event6.jpg
   ```

2. Führe anschließend das Generierungsskript aus dem Wurzelverzeichnis des Projekts aus:
   ```bash
   python scripts/generate_images.py
   ```

3. Die Datei `js/images.js` wird daraufhin automatisch aktualisiert. In der Standardversion des Skripts werden dabei Platzhalter-URLs erzeugt. Für echte Bilder empfiehlt es sich, `js/images.js` direkt mit den lokalen Pfaden zu befüllen:
   ```js
   const eventImages = [
     'events/event1.jpg',
     'events/event2.jpg',
     'events/event6.jpg'
   ];
   ```

> **Hinweis:** Alternativ kannst du `js/images.js` jederzeit manuell bearbeiten und beliebige Bild-URLs oder relative Pfade eintragen, ohne das Skript zu verwenden.

### 2. Unternehmenstexte anpassen

Der Text im Abschnitt „Über Apebuam" befindet sich in `index.html`. Öffne die Datei und passe den Absatz im `<section class="description">`-Bereich an (dies ist der aktuelle Inhalt der Datei):

```html
<!-- Aktueller Text in index.html -->
<p>Apebuam ist ein neu gegründetes Unternehmen, das sich auf innovative Lösungen
in der Veranstaltungsbranche spezialisiert. Wir organisieren unvergessliche Events
und bieten kreative Dienstleistungen für unsere Kunden.</p>

<!-- Beispiel für eigenen Text -->
<p>Apebuam steht für kreative Veranstaltungen mit besonderem Flair.
Von privaten Feiern bis hin zu großen Firmenevents – wir machen jeden Anlass
zu einem unvergesslichen Erlebnis.</p>
```

Den Seitentitel änderst du im `<head>`-Bereich:

```html
<title>Apebuam - Dein Veranstaltungspartner</title>
```

### 3. Logo austauschen

Das Logo wird im `<header>` der `index.html` eingebunden. Lege dein Logo unter `images/logo.png` ab und ersetze das `src`-Attribut:

```html
<!-- Vorher (Platzhalterbild) -->
<img src="https://via.placeholder.com/200x100?text=Apebuam+Logo" alt="Apebuam Logo" class="logo">

<!-- Nachher (eigenes Logo) -->
<img src="images/logo.png" alt="Apebuam Logo" class="logo">
```

### 4. Kontaktdaten aktualisieren

Die Kontakt-Links befinden sich im `<footer>` der `index.html`. Ersetze die Platzhalter durch deine echten Daten:

```html
<!-- Instagram -->
<a href="https://instagram.com/dein-nutzername" title="Instagram">
  <i class="fab fa-instagram"></i>
</a>

<!-- Telefon (Ländervorwahl +49 für Deutschland; 176/177 usw. = Mobilnummer) -->
<a href="tel:+4917612345678" title="Telefon">
  <i class="fas fa-phone"></i>
</a>

<!-- WhatsApp (gleiche Nummer ohne führendes +) -->
<a href="https://wa.me/4917612345678" title="WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>
```

## Kontakt

- **Instagram:** [instagram.com/apebuam](https://instagram.com/apebuam)
- **Telefon:** +49 123 456789
- **WhatsApp:** [wa.me/49123456789](https://wa.me/49123456789)
