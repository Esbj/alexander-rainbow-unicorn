const djur: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"];

console.log(djur);

const o: { name: string; age: number; isAwesome: boolean } = {
  name: "Gugge",
  age: 57,
  isAwesome: true
};

console.log(o);

function greeter(input: string): string | void {
  if (input === "X") {
    return `Hej${input}`;
  }
}

for (const animal of djur) {
  console.log(greeter(animal));
}