const spinner2 = function() {
  let rotation = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];    //Created array to contain symbols for animation
  let delay = 100;

  for (const char of rotation) {           // Loop through array, printing each character and incrementing delay by 200ms with each iteration
    setTimeout(() => {process.stdout.write(`\r${[char]}    `)}, delay);
    delay += 200;
  };
};

spinner2();