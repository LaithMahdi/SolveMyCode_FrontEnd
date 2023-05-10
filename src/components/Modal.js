import React, { useState } from 'react';
import axios from 'axios';

function PostModal({ showModal, onClose }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('content', content);
    formData.append('image', image);
    formData.append('timestamp', new Date().toISOString());

    try {
      const response = await axios.post('/api/posts', formData);
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={showModal ? "modal display-block" : "modal display-none"}>
      <div className="modal-content">
        <h2>Add Post</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />

          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" value={content} onChange={(event) => setContent(event.target.value)} />

          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={(event) => setImage(event.target.files[0])} />

          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export default PostModal;

// function OtherComponent() {
//     const [showModal, setShowModal] = useState(false);
  
//     const handleModalOpen = () => {
//       setShowModal(true);
//     };
  
//     const handleModalClose = () => {
//       setShowModal(false);
//     };
  
//     return (
//       <div>
//         <button onClick={handleModalOpen}>Add Post</button>
//         <PostModal showModal={showModal} onClose={handleModalClose} />
//       </div>
//     );
//   }
  
//   export default OtherComponent;