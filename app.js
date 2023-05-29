const express = require("express")
const app = express();

const users = []

app.post('register', async (req, res) => {
    
    const { username, password } = req.body;

    users.push({ username, password });
    res.send("Ro'yxatdan o'tish muvaffaqiyatli!");
});


app.post('login', (req, res) => {
    const { username, password } = req.body;

    const foydalanuvchi = users.find(foydalanuvchi => foydalanuvchi.username === username && foydalanuvchi.password === password);
    if (foydalanuvchi) {
        res.send('Kirish muvaffaqiyatli!');
    } else {
        res.send('Foydalanuvchi nomi yoki paroli notogri!');
    }
});

app.listen(3000, () => {
    console.log('Server succes');
});
