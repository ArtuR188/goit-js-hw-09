const form = document.querySelector(".feedback-form");

const formData = {
  email: "",
  message: "",
};

form.addEventListener("input", event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

window.addEventListener("load", () => {
  const saved = localStorage.getItem("feedback-form-state");
  if (!saved) return;

  const parsed = JSON.parse(saved);

  form.email.value = parsed.email || "";
  form.message.value = parsed.message || "";

  formData.email = parsed.email || "";
  formData.message = parsed.message || "";
});

form.addEventListener("submit", event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem("feedback-form-state");
  form.reset();
  formData.email = "";
  formData.message = "";
});
