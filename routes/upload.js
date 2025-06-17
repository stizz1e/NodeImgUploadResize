const express = require('express');
const router = express.Router();
const sharp = require('sharp');
const path = require('path');
const upload = require('../middleware/uploadMiddleware');

router.post('/upload', upload.single('image'), async (req, res) => {
    if(!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    const inputPath = path.join(__dirname, '..', 'uploads', req.file.filename);
    const outputPath = path.join(__dirname, '..', 'resized', req.file.filename);

    try{
        await sharp(inputPath)
            .resize({width: 300})
            .toFile(outputPath);
       
        res.status(200).json({
            message: 'File uploaded successfully',
            filename: req.file.filename,
            resizedUrl: `/resized/${req.file.filename}`,
        });
    }catch(err){
        console.error('Image resize failed: ', err);
        return res.status(500).json({ message: 'Failed to resize image'});
    }

    
});

module.exports = router;