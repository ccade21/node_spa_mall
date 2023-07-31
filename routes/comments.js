const mongoose = require('mongoose');

// 댓글 스키마 정의
const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 댓글 모델 생성
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
