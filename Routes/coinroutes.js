const express = require('express');
const axios = require('axios');
const router = express.Router();

// Ruta para /coin/:coinName
router.get('/:coinName', async (req, res) => {
    try {
        const coinName = req.params.coinName.toLowerCase(); // Convertir el nombre de la moneda a minúsculas
        const response = await axios.get(`https://api.coincap.io/v2/assets/${coinName}`);

        if (response.data.data) {
            const priceUSD = response.data.data.priceUsd;
            res.send(`El precio en dólares de ${coinName.toUpperCase()} para el día de hoy es ${priceUSD}`);
        } else {
            res.status(404).send(`El nombre de la moneda ${coinName.toUpperCase()} no fue encontrado en la base de datos`);
        }
    } catch (error) {
        console.error('Error al consultar la API de CoinCap:', error);
        res.status(500).send(`El nombre de la moneda no fue encontrado en la base de datos`);
    }
});

module.exports = router;
