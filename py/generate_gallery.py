import os
import json
from PIL import Image

# Set folders
source_folder = "images/gallery"
optimized_folder = os.path.join(source_folder, "optimized")
os.makedirs(optimized_folder, exist_ok=True)

# List all common image files in the source folder (adjust extensions as needed)
image_files = [f for f in os.listdir(source_folder) if f.lower().endswith((".png", ".jpg", ".jpeg", ".gif", ".webp"))]

optimized_images = []
gallery_counter = 1  # Counter for sequential naming

for filename in image_files:
    source_path = os.path.join(source_folder, filename)
    try:
        with Image.open(source_path) as im:
            # Convert the image to RGB mode if necessary (WebP works best with RGB)
            if im.mode in ("RGBA", "P"):
                im = im.convert("RGB")
            # Create a new sequential filename for the WebP image
            optimized_filename = f"gallery{gallery_counter}.webp"
            optimized_path = os.path.join(optimized_folder, optimized_filename)
            # Save the image as WebP with quality settings (adjust quality if needed)
            im.save(optimized_path, "WEBP", quality=80, method=6)
            optimized_images.append(optimized_filename)
            print(f"Converted {filename} -> {optimized_filename}")
            gallery_counter += 1
    except Exception as e:
        print(f"Error processing {filename}: {e}")

# Create a JSON file listing the optimized images (paths relative to the optimized folder)
gallery_data = {"images": optimized_images}
json_output_file = ("gallery.json")
with open(json_output_file, "w") as f:
    json.dump(gallery_data, f, indent=2)

print(f"Gallery JSON updated: {json_output_file}")
