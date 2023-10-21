let isLocked = false;

    // Function to update the output based on user input
    function run() {
      if (!isLocked) {
        let htmlCode = document.getElementById("html-code").value;
        let cssCode = document.getElementById("css-code").value;
        let jsCode = document.getElementById("js-code").value;
        let output = document.getElementById("output");

        // Update the content of the output iframe with HTML and CSS
        output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style";
        // Execute the JavaScript code within the output iframe
        output.contentWindow.eval(jsCode);
      }
    }

    // Function to copy the code from the editor to the clipboard
    function copyCode() {
      const codeToCopy = document.querySelector('.code-input');
      codeToCopy.select();
      document.execCommand('copy');
    }

    // Function to show an alert message when "Save" is clicked
    function saveCode() {
      alert('Code saved!');
    }

    // Function to toggle the lock state of the editor
    function toggleLock() {
      isLocked = !isLocked;
      const lockButton = document.querySelector('.lock-btn');
      lockButton.textContent = isLocked ? 'Unlock' : 'Lock';
    }

