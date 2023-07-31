// const mongoose = require("mongoose");
// const comment = require('./comment'); 
// const postsRouter = require('./posts');
// const commentsRouter = require('./comments');

// const express = require('express');
// const router = express.Router();

// router.use('/posts', postsRouter);
// router.use('/comments', commentsRouter);

// const goodsRouter = require('./goods');
// const cartsRouter = require('./carts');

// router.use('/goods', goodsRouter);
// router.use('/carts', cartsRouter);

// const connect = () => {
//   mongoose.connect("mongodb://localhost:27017/spa_mall").catch(err => console.log(err));
// };

// mongoose.connection.on("error", err => {
//   console.error("몽고디비 연결 에러", err);
// });

// module.exports = {
//   connect,
//   router
// };
const mongoose = require("mongoose");

// 상품과 장바구니 스키마를 불러옵니다.
require('./goods');
require('./cart');

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/spa_mall")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
