const vehicleService = require('../services/vehicleService');

exports.getAll = (req, res) => {
  res.json(vehicleService.getAll());
};

exports.getById = (req, res) => {
  const vehicle = vehicleService.getById(req.params.id);
  vehicle ? res.json(vehicle) : res.status(404).send('Veículo não encontrado');
};

exports.create = (req, res) => {
  const newVehicle = vehicleService.create(req.body);
  res.status(201).json(newVehicle);
};

exports.update = (req, res) => {
  const updated = vehicleService.update(req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).send('Veículo não encontrado');
};

exports.remove = (req, res) => {
  const deleted = vehicleService.remove(req.params.id);
  deleted ? res.status(204).send() : res.status(404).send('Veículo não encontrado');
};