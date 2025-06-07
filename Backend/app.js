const express = require('express');
const app = express();
const captinRoutes = require('./routes/captinRoutes');
const rideRoutes = require('./routes/rideRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const connectToSQLServer = require('./config/sql');

app.use(cors({
    origin: 'http://localhost:3001', // Adjust this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
}))
app.use(express.json());

app.use('/captins', captinRoutes);
app.use('/rides',rideRoutes);
app.use('/users',userRoutes)

app.listen(3004, () => {
  console.log('Server is running on port 3004');
})