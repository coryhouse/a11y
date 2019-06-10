function submit() {
  if (!document.getElementById("email").value)
    document.getElementById("email-error").innerHTML = "Email required.";

  if (!document.getElementById("message").value)
    document.getElementById("message-error").innerHTML = "Message required.";

  return false;
}
