const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production'){
  dotenv.config();
}

const express = require('express');
const cors = require('cors');
const productsRoutes = require( './routes/productsRoutes.js' ) 

const PORT = process.env.PORT// hacemos esto para 

const app = express();
app.use(express.json());
app.use(cors()); // Nos permite recibir peticiones cuando este en production
app.use(productsRoutes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
