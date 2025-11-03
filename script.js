//your JS code here. If required.
const form = document.getElementById("votingForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();

      // Validation
      if (!name || !age) {
        alert("Please enter valid details.");
        return;
      }

      // Creating a Promise
      const checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(age) > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      // Handling the Promise
      checkAge
        .then((message) => alert(message))
        .catch((error) => alert(error));
    });