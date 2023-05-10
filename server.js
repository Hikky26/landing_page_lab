const express = require('express');
const app = express();

//points express app to the public folder
app.use(express.static(`$__dirname}/public`))

app.listen(4000, () => console.log(`Server running on 4000`))
