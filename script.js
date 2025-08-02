 let open = false;
    const menuImg = document.getElementsByTagName("img")[0];
    const navLinks = document.getElementsByClassName("nav-links")[0];
    function toggleMenu() {

      if (!open) {
        menuImg.src = './assets/close.png';
        navLinks.style.display = "flex";
        open = true;
      }
      else {
        menuImg.src = './assets/menu.png';
        navLinks.style.display = "none";
        open = false;
      }
    }
    const navLinks1 = document.querySelectorAll('.nav-links a');

  navLinks1.forEach(link => {
    link.addEventListener('click', function () {
      navLinks1.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const form = document.getElementById("form");
  const btn = document.getElementById("btn");

  function validateForm() {
    const nameValid = nameInput.value.trim().length >= 3;
    const emailValid = emailInput.validity.valid;
    const messageValid = messageInput.value.trim().length > 10;

    btn.disabled = !(nameValid && emailValid && messageValid);
  }

  nameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  messageInput.addEventListener("input", validateForm);

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    alert("Form submitted successfully!");
    form.reset(); 
    btn.disabled = true; 
  });
