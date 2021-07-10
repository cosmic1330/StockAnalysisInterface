const Wrapper = require("./wrapper");
const Date = require("./date");

// 提供測試資料
const fs = require("fs");
let rawdata = fs.readFileSync("./testData/20210705.json");
let stockdata = JSON.parse(rawdata);

let date = new Date({
    defaultDataCount:19,
    data:stockdata
  });

const wrapper = new Wrapper({date, hightLoss:0.15, capital:300000, handlingFeeRebate:0.28, limitHandlingFee:1});
wrapper.run();
// wrapper.show();
wrapper.show(true);
wrapper.history();
