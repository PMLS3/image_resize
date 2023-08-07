const fs = require('fs');
const sharp = require('sharp');

// Function to resize images and save them to different folders
async function resizeImages(inputFolder, outputFolder1, outputFolder2) {
  try {
    // Read all files in the input folder
    const files = await fs.promises.readdir(inputFolder);

    // Loop through each file and resize it to 2796x1290 and 2688x1242
    for (const file of files) {
      const inputPath = `${inputFolder}/${file}`;

      // Resize image to 2796x1290
      const outputFilename1 = `${outputFolder1}/${file}`;
      await sharp(inputPath).resize(1290, 2796).toFile(outputFilename1);

      // Resize image to 2688x1242
      const outputFilename2 = `${outputFolder2}/${file}`;
      await sharp(inputPath).resize(1242, 2688).toFile(outputFilename2);
    }

    console.log('Image resizing completed successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Define input and output folder paths
const inputFolder = './input'; // Replace with the path to your input folder containing images
const outputFolder1 = './output_folder_1'; // Replace with the path to the first output folder
const outputFolder2 = './output_folder_2'; // Replace with the path to the second output folder

// Call the function to resize the images
resizeImages(inputFolder, outputFolder1, outputFolder2);
