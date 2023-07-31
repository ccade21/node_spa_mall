const express = require("express");
const router = express.Router();
router.use(express.json());
const Goods = require("../schemas/goods");
const Cart = require("../schemas/cart");

// 상품 등록 API
router.post("/goods", async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });
  if (goods.length) {
    return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

  const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

  res.json({ goods: createdGoods });
});

// 장바구니에 상품 추가 API
router.post("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
  if (existsCarts.length) {
    return res.json({ success: false, errorMessage: "이미 장바구니에 존재하는 상품입니다." });
  }

  await Cart.create({ goodsId: Number(goodsId), quantity: quantity });

  res.json({ result: "success" });
});

// 상품 목록 조회 API
router.get("/goods", (req, res) => {
  // 기존 코드에서 상품 데이터를 DB에서 가져오도록 변경해야합니다.
  // (이 예제에서는 DB 대신 goods 배열을 사용하고 있으므로, DB에서 데이터를 가져오도록 변경해야 합니다.)
  res.json({ goods: goods });
});

router.get("/goods/:goodsId", (req, res) => {
  // 기존 코드에서 상품 상세 데이터를 DB에서 가져오도록 변경해야합니다.
  // (이 예제에서는 DB 대신 goods 배열을 사용하고 있으므로, DB에서 데이터를 가져오도록 변경해야 합니다.)
  const { goodsId } = req.params;
  const [detail] = goods.filter((goods) => goods.goodsId === Number(goodsId));
  res.json({ detail });
});

router.put("/goods/:goodsId/cart", async (req, res) => {
    const { goodsId } = req.params;
    const { quantity } = req.body;
  
    const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
    if (existsCarts.length) {
      await Cart.updateOne({ goodsId: Number(goodsId) }, { $set: { quantity } });
    }
  
    router.delete("/goods/:goodsId/cart", async (req, res) => {
        const { goodsId } = req.params;
      
        const existsCarts = await Cart.find({ goodsId });
        if (existsCarts.length > 0) {
          await Cart.deleteOne({ goodsId });
        }
      
        res.json({ result: "success" });
      });
      
    res.json({ success: true });
  })

module.exports = router;
