# Node Image Uploader + Resizer API

This is a simple Node.js/Express API that allows users to upload image files via a basic Bootstrap frontend. Uploaded images are automatically resized using [Sharp](https://sharp.pixelplumbing.com/) and saved to a separate folder for optimized usage.

## ✨ Features

- Image upload using `multer`
- Image resizing via `sharp` (default: width 300px)
- Bootstrap-based upload form
- Serves original and resized images
- Clean and minimal Express setup

## 📁 Project Structure

image-resizer-api/
├── uploads/ # Raw uploaded images
├── resized/ # Resized output images
├── middleware/
│ └── uploadMiddleware.js
├── routes/
│ └── upload.js
├── public/
│ └── index.html # Frontend with Bootstrap form
├── app.js # Express app setup
├── server.js # Entry point
├── package.json


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/NodeImgUploadResize.git
cd NodeImgUploadResize


🛠 Tech Stack
Node.js

Express

Multer for handling file uploads

Sharp for image processing

Bootstrap 5 for the frontend

🧪 API Endpoint
POST /api/upload
Form field: image
Returns:

json
Copy
Edit
{
  "message": "File uploaded and resized successfully",
  "filename": "yourfile.jpg",
  "resizedUrl": "/resized/yourfile.jpg"
}

🧑‍💻 Author
Matt Feinstein
GitHub

📄 License
This project is open-source and free to use under the MIT License.