import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let randomNumber = Math.round(Math.random() * 100);
let counter = 0;

const guessNumber = () => {
  rl.question("Choose a number between 0 and 100\n", (number) => {
    if (!Number(number)) {
      console.log("\nYou don't entered a number");
      return guessNumber();
    }

    counter++;

    if (Number(number) !== randomNumber) {
      if (Number(number) < randomNumber)
        console.log("\nYour number is lower\n");
      else console.log("\nYour number is higher\n");
      guessNumber();
    } else {
      console.log(
        `\nCongrats! You guessed the number in ${counter} attempts\n`
      );
      rl.question("Wanna play again? (y = yes | n = no)\n", (response) => {
        if (response.toLowerCase() === "y") {
          randomNumber = Math.round(Math.random() * 100);
          counter = 0;
          guessNumber();
        } else rl.close();
      });
    }
  });
};

guessNumber();
