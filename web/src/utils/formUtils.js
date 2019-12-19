function getFormData(form, name) {
  return form.elements.namedItem(name).value;
}

function setFormData(form, name, value) {
  // eslint-disable-next-line no-param-reassign
  form.elements.namedItem(name).value = value;
}

function changeToFormDataFormat(form, password, isSignin = true) {
  const username = getFormData(form, 'username');
  const formData = `username=${username}&password=${password}`;
  if (isSignin) return formData;

  const name = getFormData(form, 'name');
  const email = getFormData(form, 'email');
  const cellPhone = getFormData(form, 'cellPhone');

  return formData.concat(`&name=${name}&email=${email}&cellPhone=${cellPhone}`);
}

export { getFormData, setFormData, changeToFormDataFormat };
