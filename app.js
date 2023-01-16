var djur = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(djur);
var o = {
    name: "Gugge",
    age: 57,
    isAwesome: true
};
console.log(o);
function greeter(input) {
    if (input === "X") {
        return "Hej ".concat(input);
    }
}
for (var _i = 0, djur_1 = djur; _i < djur_1.length; _i++) {
    var animal = djur_1[_i];
    console.log(greeter(animal));
}
