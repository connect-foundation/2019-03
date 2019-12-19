function getFormData(form, name) {
  return form.elements.namedItem(name).value;
}

function setFormData(form, name, value) {
  // eslint-disable-next-line no-param-reassign
  form.elements.namedItem(name).value = value;
}

function changeToFormDataFormat(form, password, isSignin = true) {
  // const formData = Object.entries(form.elements).reduce((result, elem) => {
  //   if (elem[1].tagName === 'BUTTON') return result;
  //   const input = elem[1];
  //   if (input.name === 'password') return result;
  //   return `${result}${input.name}=${input.value}&`;
  // }, '');

  const username = getFormData(form, 'username');
  const formData = `username=${username}&password=${password}`;
  if (isSignin) return formData;

  const name = getFormData(form, 'name');
  const email = getFormData(form, 'email');
  const cellPhone = getFormData(form, 'cellPhone');
  formData.concat(`&name=${name}&email=${email}&cellPhone=${cellPhone}`);

  return formData;
}

export { getFormData, setFormData, changeToFormDataFormat };
