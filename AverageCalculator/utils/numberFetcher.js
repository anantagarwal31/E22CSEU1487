const axios = require('axios');

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNzQ0Mzc3LCJpYXQiOjE3NDM3NDQwNzcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImRjOGY3NTNhLThmOTQtNDk4Yi1hNmM1LTU0ZDg0MzQ1NDg0ZSIsInN1YiI6ImUyMmNzZXUxNDg3QGJlbm5ldHQuZWR1LmluIn0sImVtYWlsIjoiZTIyY3NldTE0ODdAYmVubmV0dC5lZHUuaW4iLCJuYW1lIjoiYW5hbnQgYWdhcndhbCIsInJvbGxObyI6ImUyMmNzZXUxNDg3IiwiYWNjZXNzQ29kZSI6InJ0Q0haSiIsImNsaWVudElEIjoiZGM4Zjc1M2EtOGY5NC00OThiLWE2YzUtNTRkODQzNDU0ODRlIiwiY2xpZW50U2VjcmV0IjoiYm5EVm16eXlRanRSTWdQWCJ9.nkNKzyloSS8qLBTqYt2VeM-7qsl-6w9aoaO6YWopKoQ";

const fetchNumbers = async (url) => {
    try {
        const response = await axios.get(url, {
        headers: { Authorization: TOKEN },
        timeout: 5000
        });
        return response.data.numbers || [];
    } catch (err) {
        console.warn("Error or timeout in fetching", err.message);
        return [];
    }
};

module.exports = fetchNumbers;