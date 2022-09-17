const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bounty-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log('Connected to Bounty Board Database')
})
.catch((err)=> {
    console.log('Could not connect to database', err)
})



