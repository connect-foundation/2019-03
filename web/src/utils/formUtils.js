function getFormData(form, name) {
  return form.elements.namedItem(name).value;
}

function setFormData(form, name, value) {
  // eslint-disable-next-line no-param-reassign
  form.elements.namedItem(name).value = value;
}

function changeToFormDataFormat(form, password) {
  const formData = Object.entries(form.elements).reduce((result, elem) => {
    if (elem[1].tagName === 'BUTTON') return result;
    const input = elem[1];
    if (input.name === 'password') return result;
    return `${result}${input.name}=${input.value}&`;
  }, '');
  return formData.concat(`password=${password}`);
}

export { getFormData, setFormData, changeToFormDataFormat };
