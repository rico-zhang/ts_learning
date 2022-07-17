enum Level {
  level1 = 2,
  level2 = 4,
  level3,
}

enum Color {
  redTag = 'red',
  greenTag = 'green',
}

// console.log(Level);
// console.log(Color);

let le: Level = Level.level1;
le = Level.level2;
let le2: Level = 2;
console.log(le);
console.log(le2);

let co: Color = Color.greenTag;
console.log(co);

/* 编译后的结果
var Level;
(function (Level) {
    Level[Level["level1"] = 2] = "level1";
    Level[Level["level2"] = 4] = "level2";
    Level[Level["level3"] = 5] = "level3";
})(Level || (Level = {}));
var Color;
(function (Color) {
    Color["redTag"] = "red";
    Color["greenTag"] = "green";
})(Color || (Color = {})); 
*/
