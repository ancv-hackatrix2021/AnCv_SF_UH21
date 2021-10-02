const { ERROR } = require('../common/constants');
const { responseError, responseSuccess, responseSuccessWithData } = require('./base.controller');
const plantProtectionService = require('../service/plantProtection.service');

class PlantProtectionController {
  async getAll(req, res) {
    try {
      const data = await plantProtectionService.getAll();
      return responseSuccessWithData(res, data);
    } catch (error) {
      console.log(error);
      return responseError(res, ERROR.CanNotGetPlantProtection);
    }
  }

  async getById(req, res) {
    try {
      const data = await plantProtectionService.getById(req.params.id);
      return responseSuccessWithData(res, data);
    } catch (error) {
      console.log(error);
      return responseError(res, ERROR.CanNotGetPlantProtection);
    }
  }

  async create(req, res) {
    try {
      await plantProtectionService.create(req.body);
      return responseSuccess(res);
    } catch (error) {
      console.log(error);
      return responseError(res, ERROR.CanNotCreateOrder);
    }
  }

  async delete(req, res) {}
}

module.exports = new PlantProtectionController();
