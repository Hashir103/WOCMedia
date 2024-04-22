import os
import shutil

def move_images_to_special_files(images_folder, special_files_folder):
    # Traverse all subdirectories of special_files_folder
    for root, dirs, files in os.walk(special_files_folder):
        # Filter files ending with '.ajpg'
        special_files = [filename for filename in files if filename.lower().endswith('.ajpg')]

        # Process each special file in the current directory
        for special_file in special_files:
            # Extract the base name of the special file (without extension)
            base_name, ext = os.path.splitext(special_file)

            # Look for corresponding image file with the same base name in images_folder
            for image_file in os.listdir(images_folder):
                image_base_name, image_ext = os.path.splitext(image_file)
                
                # Check if base names match (case insensitive)
                if image_base_name.lower() == base_name.lower():
                    # Construct paths
                    source_image_path = os.path.join(images_folder, image_file)
                    destination_folder = root  # Use current directory as destination
                    destination_image_path = os.path.join(destination_folder, image_file)
                    
                    # Move the image file to the folder containing the special file
                    shutil.move(source_image_path, destination_image_path)
                    print(f"Moved {image_file} to {destination_folder}")


# Example usage:
images_folder = '/Users/hashir/Desktop/ajpg_util/images'
special_files_folder = '/Users/hashir/Documents/GitHub/WOCMedia/WorldOfCarsOnline/worldofcars'

move_images_to_special_files(images_folder, special_files_folder)
