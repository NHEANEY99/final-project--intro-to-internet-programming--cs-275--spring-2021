window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);

       // let sign = prompt("Enter a number:");
        const aValue = Number(window.prompt("Enter a number", ""));

    for (let i = 1; i < 30; i++) {
        for (let j = 1; j < i; j++) {
            console.log("*");
        }
        console.log("\n");
    }
};
