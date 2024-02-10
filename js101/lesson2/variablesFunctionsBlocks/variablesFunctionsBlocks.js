/*****************************************************************Exercises***************************************************************************************/

/* 1. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let color = "yellow";
      let colors = ["red", "green", "blue"];

      function updateColors(colors) {
        colors.push(color);
      }

      updateColors(colors);
      console.log(colors); */

      // The code logs red green blue yellow

/* 2. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let color = "yellow";
      let colors = ["red", "green", "blue"];

      function updateColors(colors, color) {
        colors.push(color);
      }

      updateColors(colors);
      console.log(colors); */

      // The code returns the colors array with undefined as the last element. 

/* 3. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let color1 = "purple";
      let color2 = "pink";
      let colors = ["red", "green", "blue"];

      function updateColors(colors, color) {
        colors.push(color);
      }

      updateColors(colors, color1);
      updateColors(colors, color2);
      console.log(colors); */

      // the code logs an array with red green blue purple and pink. 

/* 4. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let color1 = "purple";
      let color2 = "pink";
      let colors = ["red", "green", "blue"];

      function updateColors(colors, color) {
        colors.push(color);
        return colors;
      }

      let newColors = updateColors(colors, color1);
      updateColors(newColors, color2);
      console.log(colors); */

      // the code logs an array red green bluw purple and pink. 

/* 5. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let color = "purple";
      let colors = ["red", "green", "blue"];

      function addColor(colors, color) {
        colors.push(color);
        return colors;
      }

      function removeColor(colors) {
        color = colors.pop();
        return colors;
      }

      let newColors = removeColor(colors);
      addColor(colors, color);
      console.log(newColors); 

      // The code logs red green blue.

/* 6. What will the following code log to the console and why? Don't run it until you have tried to answer.

      function capitalize() {
        return word[0].toUpperCase() + word.slice(1);
      }

      function exclaim() {
        return (word += "!!!");
      }

      let word = "hello";
      let capitalizedWord = capitalize(word);
      let exclaimedWord = exclaim(capitalizedWord);

      console.log(word);
      console.log(capitalizedWord);
      console.log(exclaimedWord); */

      // The code logs hello!!!, Hello, and hello!!!

/* 7. What will the following code log to the console and why? Don't run it until you have tried to answer.

      function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
      }

      function exclaim(word) {
        return (word += "!!!");
      }

      let word = "hello";
      let capitalizedWord = capitalize(word);
      let exclaimedWord = exclaim(capitalizedWord);

      console.log(word);
      console.log(capitalizedWord);
      console.log(exclaimedWord); */

      // The code logs hello, Hello, and Hello!!!
