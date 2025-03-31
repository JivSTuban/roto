const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

// Read and parse .env file
const envPath = path.join(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = {};

envContent.split('\n').forEach(line => {
  if (line && !line.startsWith('#')) {
    const [key, value] = line.split('=');
    if (key && value) {
      envVars[key.trim()] = value.trim().replace(/["']/g, '');
    }
  }
});

// Configure Cloudinary with the parsed values
cloudinary.config({
  cloud_name: envVars.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: envVars.CLOUDINARY_API_KEY,
  api_secret: envVars.CLOUDINARY_API_SECRET,
});

async function uploadVideo() {
  try {
    console.log('Starting upload...');
    const result = await cloudinary.uploader.upload(
      '/Users/jeremiatuban/Downloads/creative-agency-portfolio/public/videos/IMG_8169.MOV',
      {
        resource_type: "video",
        folder: "testimonials",
        use_filename: true,
        unique_filename: false,
        overwrite: true
      }
    );
    console.log('Upload successful!');
    console.log('Public ID:', result.public_id);
    console.log('URL:', result.secure_url);
  } catch (error) {
    console.error('Upload failed:', error);
  }
}

uploadVideo(); 