"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRoute = _interopRequireDefault(require("./server/src/v1/routes/userRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 3001;
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use('/api/v1/auth', _userRoute["default"]);
app.get('/user', function (req, res) {
  res.send('hello world');
});
app.listen(port);
console.log('app running on port ', port);
var _default = app;
exports["default"] = _default;