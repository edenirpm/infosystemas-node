const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicleController');

/**
 * @swagger
 * tags:
 *   name: Veículos
 *   description: API para gerenciamento de veículos
 */

/**
 * @swagger
 * /api/vehicles:
 *   get:
 *     summary: Listar todos os veículos
 *     tags: [Veículos]
 *     responses:
 *       200:
 *         description: Lista de veículos
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /api/vehicles/{id}:
 *   get:
 *     summary: Buscar veículo por ID
 *     tags: [Veículos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Veículo encontrado
 *       404:
 *         description: Veículo não encontrado
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /api/vehicles:
 *   post:
 *     summary: Criar novo veículo
 *     tags: [Veículos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicle'
 *     responses:
 *       201:
 *         description: Veículo criado com sucesso
 */
router.post('/', controller.create);

/**
 * @swagger
 * /api/vehicles/{id}:
 *   put:
 *     summary: Atualizar veículo
 *     tags: [Veículos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vehicle'
 *     responses:
 *       200:
 *         description: Veículo atualizado com sucesso
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /api/vehicles/{id}:
 *   delete:
 *     summary: Remover veículo
 *     tags: [Veículos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Veículo removido com sucesso
 */
router.delete('/:id', controller.remove);

module.exports = router;