const { v4: uuidv4 } = require('uuid');

class Vehicle {
  constructor({ placa, chassi, renavam, modelo, marca, ano }) {
    this.id = uuidv4();
    this.placa = placa;
    this.chassi = chassi;
    this.renavam = renavam;
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
  }
}

module.exports = Vehicle;