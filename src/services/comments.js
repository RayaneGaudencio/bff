const axios = require('axios');

class CommentsService {
  constructor() {
        this.baseUrl = 'http://localhost:3002';
  }

  /**
   * @param {number} postId
   * @param {number} limit 
   */
  async getComments(postId, limit = 5) {
    try {
      const response = await axios.get(`${this.baseUrl}/comments`, {
        params: {
            postId: postId
        }
      });
      const comments = [];

      const data = response.data;

      for (const comment of data) {
        if (comments.length >= limit) continue;

        comments.push({
            id: comment.id,
            text: comment.text,
            userId: comment.userId
        })
      }

      return comments;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
}

module.exports = CommentsService;
