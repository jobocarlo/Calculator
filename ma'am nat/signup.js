const textbox = document.querySelector('.textbox');
textbox.addEventListener('click', function() {
    textbox.focus();
    textbox.value = "";
    textbox.classList.add("hidden");
});


document.getElementById("form-scream").addEventListener("click", function() {
    alert("Form submitted successfully!");
  });