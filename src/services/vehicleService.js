const fs = require('fs');
const path = require('path');
const Vehicle = require('../models/vehicleModel');

const filePath = path.join(__dirname, '../data/vehicles.json');

const readData = () => {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch {
    return [];
  }
};

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const getAll = () => readData();

const getById = (id) => readData().find(v => v.id === id);

const create = (data) => {
  const vehicles = readData();
  const newVehicle = new Vehicle(data);
  vehicles.push(newVehicle);
  writeData(vehicles);
  return newVehicle;
};

const update = (id, newData) => {
  const vehicles = readData();
  const index = vehicles.findIndex(v => v.id === id);
  if (index === -1) return null;
  vehicles[index] = { ...vehicles[index], ...newData };
  writeData(vehicles);
  return vehicles[index];
};

const remove = (id) => {
  let vehicles = readData();
  const exists = vehicles.some(v => v.id === id);
  vehicles = vehicles.filter(v => v.id !== id);
  writeData(vehicles);
  return exists;
};

module.exports = { getAll, getById, create, update, remove };