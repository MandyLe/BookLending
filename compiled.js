'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var f = function f(v) {
  return v;
};
var f = function f(m) {
  return m * m;
};
function foo(_ref) {
  var x = _ref.x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 5 : _ref$y;

  console.log(x, y);
}

var str = 'x\uD83D\uDE80y';
[].concat(_toConsumableArray(str)).reverse().join('');

var keys = Object.keys,
    values = Object.values,
    entries = Object.entries;
