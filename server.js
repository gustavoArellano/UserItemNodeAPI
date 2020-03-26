const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middleware
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(cors());

require('./config/mongoose.js');
require('./routes/users.js')(app);
require('./routes/items.js')(app);



app.listen(8000, () => {
    console.log("We are live on port 8000")
})

