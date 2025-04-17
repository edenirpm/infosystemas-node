const chai = require('chai');
const vehicleService = require('../services/vehicleService');
const expect = chai.expect;

describe('Vehicle Service', () => {
  let id;

  it('should create a vehicle', () => {
    const data = { placa: 'AAA1234', chassi: 'X1', renavam: '123', modelo: 'Fusca', marca: 'VW', ano: 1980 };
    const vehicle = vehicleService.create(data);
    id = vehicle.id;
    expect(vehicle).to.include(data);
  });

  it('should get all vehicles', () => {
    const vehicles = vehicleService.getAll();
    expect(vehicles).to.be.an('array');
  });

  it('should get vehicle by id', () => {
    const vehicle = vehicleService.getById(id);
    expect(vehicle).to.have.property('id', id);
  });

  it('should update vehicle', () => {
    const updated = vehicleService.update(id, { modelo: 'Brasilia' });
    expect(updated.modelo).to.equal('Brasilia');
  });

  it('should delete vehicle', () => {
    const deleted = vehicleService.remove(id);
    expect(deleted).to.be.true;
  });
});