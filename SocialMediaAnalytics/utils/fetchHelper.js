export const fetchJSON = async (url) => {
    const response = await fetch(url, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNzQ0Mzc3LCJpYXQiOjE3NDM3NDQwNzcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImRjOGY3NTNhLThmOTQtNDk4Yi1hNmM1LTU0ZDg0MzQ1NDg0ZSIsInN1YiI6ImUyMmNzZXUxNDg3QGJlbm5ldHQuZWR1LmluIn0sImVtYWlsIjoiZTIyY3NldTE0ODdAYmVubmV0dC5lZHUuaW4iLCJuYW1lIjoiYW5hbnQgYWdhcndhbCIsInJvbGxObyI6ImUyMmNzZXUxNDg3IiwiYWNjZXNzQ29kZSI6InJ0Q0haSiIsImNsaWVudElEIjoiZGM4Zjc1M2EtOGY5NC00OThiLWE2YzUtNTRkODQzNDU0ODRlIiwiY2xpZW50U2VjcmV0IjoiYm5EVm16eXlRanRSTWdQWCJ9.nkNKzyloSS8qLBTqYt2VeM-7qsl-6w9aoaO6YWopKoQ',
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
};