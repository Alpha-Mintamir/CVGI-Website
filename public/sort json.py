import json
import os

# Check current working directory
print("Current Working Directory:", os.getcwd())

# Path to the original JSON file and output file
input_file_path = './cvgri-website/public/studentData.json'  # Relative path if the files are in the same folder
output_file_path = './cvgri-website/public/sorted_studentData2.json'

# Read the JSON data from the original file
try:
    with open(input_file_path, 'r') as file:
        data = json.load(file)
    
    # Sort the data based on the 'FullName' attribute
    sorted_data = sorted(data, key=lambda x: x['FullName'].strip())

    # Write the sorted data to a new JSON file
    with open(output_file_path, 'w') as file:
        json.dump(sorted_data, file, indent=2)

    print(f"File sorted and saved to {output_file_path}")

except FileNotFoundError:
    print(f"Error: The file {input_file_path} was not found.")
except Exception as e:
    print(f"An error occurred: {e}")
