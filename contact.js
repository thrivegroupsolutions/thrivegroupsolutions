document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      
      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
      }
  
            console.log("Form Submitted:", { name, email, message });
      alert("Thank you for your message, " + name + "! We will get back to you soon.");
  
      
      form.reset();
    });
  });
  