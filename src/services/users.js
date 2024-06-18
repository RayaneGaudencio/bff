const axios = require('axios');

class UsersService {
  constructor() {
        this.baseUrl = 'http://localhost:3003';
  }

  /**
   * @param {number[]} ids
   */
  async getUsers(ids) {
      const response = await axios.get(`${this.baseUrl}/users`, {
        params: {
            id: ids
        }
      });
      const data = await response.data;

      const users = new Map();

      for (const comment of data) {
          users.set(comment.id, comment.name);
      }

      return users;
  }
}

module.exports = UsersService;
