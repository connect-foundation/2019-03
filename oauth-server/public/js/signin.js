const signinForm = document.querySelector("form");

signinForm.addEventListener("submit", async e => {
  const password = changeToHashedPassword(signinForm);
  setFormData(signinForm, "enc_password", password);
});

function handleError(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
}

function fetchFormData(url, formData) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      credentials: "include"
    },
    body: formData
  })
    .then(handleError)
    .catch(err => {
      throw err;
    });
}

function changeToHashedPassword(form) {
  const plaintextPassword = getFormData(form, "password");
  const hashedPassword = CryptoJS.SHA256(plaintextPassword);
  return hashedPassword;
}

function getFormData(form, name) {
  return form.elements.namedItem(name).value;
}

function setFormData(form, name, value) {
  form.elements.namedItem(name).value = value;
}

function changeToFormDataFormat(form, password) {
  const formData = Object.entries(form.elements).reduce((result, elem) => {
    if (elem[1].tagName === "BUTTON") return result;
    const input = elem[1];
    if (input.name === "password") return result;
    return `${result}${input.name}=${input.value}&`;
  }, "");
  return formData.concat(`password=${password}`);
}
