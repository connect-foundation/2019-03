const readFile = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};

const isFileTypeImage = filename => {
  const extensionRegex = /(.jpg|.gif|.jpeg|.png)$/i;
  return extensionRegex.test(filename);
};

export { readFile, isFileTypeImage };
