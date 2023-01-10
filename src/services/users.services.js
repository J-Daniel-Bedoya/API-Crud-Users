const { Users } = require('../models');


class UsersServices {


  static async postUser(body) {
    try {
      const result = await Users.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUsers() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(id) {
    try {
      const result = await Users.findOne({
        where: { id }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, body) {
    try {
      const user = await Users.findOne({
        where: { id } 
      })
      const result = await user.update(body);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const result = await Users.destroy({
        where: { id }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }


}


module.exports = UsersServices;