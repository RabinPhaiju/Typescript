var nums = [1, 2, 3, 4];
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
// ----------- For .of -----------
var mixData1 = [1, 'hello', 2, 'world'];
for (var _i = 0, mixData1_1 = mixData1; _i < mixData1_1.length; _i++) {
    var entry = mixData1_1[_i];
    console.log(entry);
}
// .entries and disctructuring
for (var _a = 0, _b = mixData1.entries(); _a < _b.length; _a++) {
    var _c = _b[_a], index = _c[0], item = _c[1];
    console.log("".concat(index, ": ").concat(item));
}
// ---------- For .. in ----------
for (var key in mixData1) {
    console.log("key: ".concat(key));
}
