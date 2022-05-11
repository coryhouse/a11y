function submit() {
  if (!document.getElementById("email").value)
    document.getElementById("email-error").innerHTML = "Email required.";

  if (!document.getElementById("message").value)
    document.getElementById("message-error").innerHTML = "Message required.";

  return false;
}

function validate(id, label) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + "-error");
  if (document.getElementById(id).value) {
    // Clear previous errors, since it's valid
    error.innerHTML = "";
    input.setAttribute("aria-invalid", "false");
    error.setAttribute("aria-role", "alert");
  } else {
    error.innerHTML = label + " required.";
    input.setAttribute("aria-invalid", "true");
    error.removeAttribute("aria-role");
  }
}
