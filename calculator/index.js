let output = document.getElementById("output");
        let currentInput = "";
        function appendToOutput(value) {
            currentInput += value;
            output.textContent = currentInput;
        }
        function clearOutput() {
            currentInput = "";
            output.textContent = "0";
        }
        function backspace() {
            if (currentInput.length > 0) {
                currentInput = currentInput.slice(0, -1);
                output.textContent = currentInput;
            }
        }
function calculate() {
            try {
                currentInput = eval(currentInput).toString();
                output.textContent = currentInput;
            } catch (error) {
                output.textContent = "Error";
            }
        }