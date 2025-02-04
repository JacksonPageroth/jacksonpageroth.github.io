import os
import json

# Set the poetry directory
poetry_folder = "poetry"
poetry_files = [f for f in os.listdir(poetry_folder) if f.lower().endswith((".pdf", ".docx"))]

# Create a JSON file listing the poetry files
poetry_data = {"poems": poetry_files}
json_output_file = os.path.join(poetry_folder, "../poetry.json")
with open(json_output_file, "w") as f:
    json.dump(poetry_data, f, indent=2)

print(f"Poetry JSON updated: {json_output_file}")
