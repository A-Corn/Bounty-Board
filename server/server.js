const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 8000;


app.use(express.json(), express.urlencoded({extended: true}));

app.use(cors({ 
    credentials: true,
    origin: 'http://localhost:3000' 
    })
);

app.use(cookieParser());

require('./config/mongoose.config');
require('./routes/resume.routes')(app);
require('./routes/user.routes')(app);

app.listen(PORT, () => {
    console.log(`The server is all ready to go on port ${PORT}`)
});
