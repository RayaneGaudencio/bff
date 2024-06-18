const axios = require('axios');

class PostsService {
  constructor() {
        this.baseUrl = 'http://localhost:3001';
  }

  /**
   * @param {number} limit
   */
  async getPosts(limit) {
      const response = await axios.get(`${this.baseUrl}/posts`);
  
      const data = response.data;

      const posts = [];
  
      for (const post of data) {
        if (posts.length >= limit) continue; 
  
        posts.push({
          id: post.id,
          title: post.title,
          authorId: post.authorId
        });
      }
  
      return posts;
  }

  /**
   * @param {number} id
   */
  async getPost(id) {
      const response = await axios.get(`${this.baseUrl}/posts/${id}`);
  
      const data = response.data;

      return {
        id: data.id,
        title: data.title,
        text: data.text,
        authorId: data.authorId
      }
  }
}

module.exports = PostsService;
