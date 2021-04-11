const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Gravity Falls'});
    
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contacto'});
    
});

router.get('/video1', (req, res) => {
    res.render('video1.html', { title: 'Video misterioso'});
    
});

module.exports = router;