document.addEventListener("DOMContentLoaded", function () {
  // Register User
  document.getElementById("registerForm").addEventListener("submit", async function (event) {
      event.preventDefault();
      
      const name = document.getElementById("registerName").value.trim();
      const email = document.getElementById("registerEmail").value.trim();
      const password = document.getElementById("registerPassword").value.trim();

      if (!name || !email || !password) {
          alert("All fields are required!");
          return;
      }

      try {
          const response = await fetch("http://localhost:5000/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, password })
          });

          const data = await response.json();

          if (data.success) {
              document.getElementById("registerForm").reset();
              $("#registerModal").modal("hide"); // Hide the modal
              
              setTimeout(() => {
                  window.location.href = "index.html"; // Redirect without showing alert
              }, 200);
          } else {
              alert(data.message);
          }
      } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong!");
      }
  });

  // Login User
  document.getElementById("loginForm").addEventListener("submit", async function (event) {
      event.preventDefault();
      
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();

      if (!email || !password) {
          alert("All fields are required!");
          return;
      }

      try {
          const response = await fetch("http://localhost:5000/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password })
          });

          const data = await response.json();

          if (data.success) {
              $("#loginModal").modal("hide");

              setTimeout(() => {
                  window.location.href = "dashboard.html"; // Redirect without showing alert
              }, 200);
          } else {
              alert(data.message);
          }
      } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong!");
      }
  });

});
