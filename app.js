const express = require('express');
const app = express();
const port = 3000;

const connect = require("./schemas/index.js");
connect();

const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts.js");

app.use(express.json());

// /api 경로로 들어오는 요청을 goodsRouter와 cartsRouter에 정의된 라우팅으로 처리합니다.
app.use("/api", [goodsRouter, cartsRouter]);

// 기본 라우팅 처리
app.get("/", (req, res) => {
    console.log(req.query);
    const obj = {
        "keykey": "value 입니다.",
        "이름입니다.": "이름일까요?",
    }
    res.json(obj);
});

app.get("/:id", (req, res) => {
    console.log(req.params);
    res.send(":id URI에 정상적으로 반환되었습니다.")
});

app.post("/api/goods", (req, res) => {
    console.log(req.body);
    res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
});

// 서버를 시작합니다.
app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 열렸어요!`);
});
