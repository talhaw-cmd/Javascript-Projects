    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calc-btn");
    const equalsButton = document.getElementById("equals");
    const clearButton = document.getElementById("clear");

    function handleButtonClick() {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                display.value += button.value;
            });
        });
    }

    equalsButton.addEventListener("click", () => {
        display.value = eval(display.value);
    });

    clearButton.addEventListener("click", () => {
        display.value = "";
    });

    handleButtonClick();
