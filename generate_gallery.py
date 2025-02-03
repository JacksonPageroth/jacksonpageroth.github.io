import os
import json

# Set the path to the images folder
image_folder = "images/gallery"
output_file = os.path.join(image_folder, "gallery.js")

# Get a list of image files in the folder
image_files = [f for f in os.listdir(image_folder) if f.lower().endswith((".png", ".jpg", ".jpeg", ".gif", ".webp"))]

# Create JSON structure
gallery_data = {"images": image_files}

# Save to JSON file
with open(output_file, "w") as f:
    json.dump(gallery_data, f, indent=2)

print(f"Gallery JSON updated: {output_file}")