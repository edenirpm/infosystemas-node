const express = require('express');
const vehicleRoutes = require('./routes/vehicleRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();
app.use(express.json());

app.use('/api/vehicles', vehicleRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚗 Servidor rodando na porta ${PORT}`);
});