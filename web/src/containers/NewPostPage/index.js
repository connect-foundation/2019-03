import React, { useState } from 'react';

function NewPostPage() {
  const [state, setstate] = useState(new FormData());

  const inputFile = e => {
    setstate(e.target.files[0]);
  };

  const post = async () => {
    const formData = new FormData();
    formData.append('file', state);

    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
      const { data } = await response.json();
    } catch (e) {}
  };
  return (
    <div>
      <input type="file" name="file" onChange={inputFile} />
      <button type="button" onClick={post}>
        submit
      </button>
    </div>
  );
}

export default NewPostPage;
