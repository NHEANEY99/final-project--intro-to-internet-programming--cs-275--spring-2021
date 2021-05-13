window.onload = () => {
    //console.log(`%c JavaScript works!`, `background-color: yellow; font-weight: bold;`);
 
        const aValue = Number(window.prompt("Enter a number", ""));

    // for (let i = 1; i < Number; i++) {
    //     for (let j = 1; j < i; j++) {
    //         document.write("<p>*</p>");
    //     }
    //     document.write("<br />");
    // }

    // JavaScript program to print diamond shape
      // with 2n rows
 
      // Prints diamond pattern with 2n rows
      function printDiamond(n) {
        var space = n - 1;
 
        // run loop (parent loop)
        // till number of rows
        for (var i = 0; i < n; i++) {
          // loop for initially space,
          // before star printing
          for (var j = 0; j < space; j++) document.write("  ");
 
          // Print i+1 stars
          for (var j = 0; j <= i; j++) document.write("*" + "  ");
 
          document.write("<br>");
          space--;
        }
 
        // Repeat again in reverse order
        space = 0;
 
        // run loop (parent loop)
        // till number of rows
        for (var i = n; i > 0; i--)
        {
         
          // loop for initially space,
          // before star printing
          for (var j = 0; j < space; j++) document.write("  ");
 
          // Print i stars
          for (var j = 0; j < i; j++) document.write("*" + "  ");
 
          document.write("<br>");
          space++;
        }
      }
 
      //CSS code to transition diamond
      Number.classList.add("Diamond");

      // Driver code
      printDiamond(Number);
};
