const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/send-sms', async (req, res) => {
    const { number, amount, delay } = req.query;
    try {
        const response = await axios.get(`https://joshweb.click/smsb`, {
            params: { number, amount, delay }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error sending SMS');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
