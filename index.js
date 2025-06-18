const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/upload', uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});