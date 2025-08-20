let form = document.getElementById("registerForm");
let msgBox = document.getElementById("message");
let registerBtn = document.querySelector(".btn");

let firstNameInput = document.getElementById("firstName");
let surnameInput = document.getElementById("surname");
let emailInput = document.getElementById("email");
let genderInput = document.getElementById("gender");
let passwordInput = document.getElementById("password");
let confirmInput = document.getElementById("confirmPassword");

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

registerBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let firstName = firstNameInput.value.trim();
  let surname = surnameInput.value.trim();
  let email = emailInput.value.trim();
  let gender = genderInput.value;
  let password = passwordInput.value;
  let confirm = confirmInput.value;

  if (password !== confirm) {
    msgBox.innerHTML = `
      <div class="card error">
        <h3>password not correct</h3>
        <p>please,check the password</p>
      </div> `;
    return;
  }

  msgBox.innerHTML = `
    <div class="card">
      <h3>Hello ${escapeHtml(firstName)} ${escapeHtml(surname)}</h3>
      <p>Thank you for registering!</p>
      
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Gender:</strong> ${escapeHtml(gender)}</p>
      
    </div>
  `;
});