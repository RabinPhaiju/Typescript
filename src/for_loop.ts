let nums: number[] = [1, 2, 3, 4];

for(let i:number = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// ----------- For .of -----------
let mixData1: (string|number)[] = [1, 'hello', 2, 'world'];

for (let entry of mixData1) {
    console.log(entry);
}

// .entries and disctructuring
for (let [index,item] of mixData1.entries()) {
    console.log(`${index}- ${item}`);
}

// ---------- For .. in ----------
for (let key in mixData1) {
    console.log(`key: ${mixData1[key]} ${typeof mixData1[key]}`);
}