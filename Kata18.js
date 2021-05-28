const squareCode = function(message) {
  let noSpace = message.replaceAll(" ", "");
  let column = Math.ceil(Math.sqrt(noSpace.length));
  let splitMessage = noSpace.split("");
  let modCode = [];
  let code = "";
  
  for (let char = 0; char < splitMessage.length; char++) {
    code += splitMessage[char];
    if (code.length === column) {
      modCode.push(code);
      code = "";
    }
  }
  modCode.push(code);

  code = "";

  let finalCode = [];

  for (let i = 0; i < modCode.length; i++) {
    if (i === 0) {
      for (const char of modCode[i]) {
        finalCode.push(char);
      }
    } else {
      let word = modCode[i];
      let h = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[j] !== undefined) {
          finalCode[h] += word[j];
          h++;
        }
      }
    }
  }

  code = finalCode.join(" ");

  return code;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

// Expected output:
// clu hlt io
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau