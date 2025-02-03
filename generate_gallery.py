import os
import json

# Define the directory where your images are stored
image_dir = "images/gallery"

# Get a list of image files in the directory
images = [os.path.join(image_dir, f) for f in os.listdir(image_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp'))]

# Save as gallery.json
with open("gallery.json", "w") as f:
    json.dump(images, f, indent=2)

print("gallery.json has been generated successfully!")