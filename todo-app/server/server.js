const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000; 
app.use(cors()); 
app.use(express.json()); 
app.use('/api/tasks', taskRoutes); 
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection failed:', error));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
