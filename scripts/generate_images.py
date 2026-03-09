import os

# Pfad zum events Ordner
events_dir = 'events'

# Liste alle .jpg Dateien
images = [f for f in os.listdir(events_dir) if f.endswith('.jpg')]

# Sortiere sie alphabetisch
images.sort()

# Erstelle URLs für Platzhalter
image_urls = [f"https://via.placeholder.com/800x400?text={os.path.splitext(img)[0]}" for img in images]

# Erstelle das JS File
js_content = f"const eventImages = {image_urls};"

with open('js/images.js', 'w') as f:
    f.write(js_content)

print("images.js generiert.")