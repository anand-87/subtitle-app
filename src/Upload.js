import React, { useState } from 'react';

const Upload = () => {
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!video) return;

    const formData = new FormData();
    formData.append('video', video);

    setMessage('Uploading...');

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setMessage(result.message || 'Upload complete!');
    } catch (error) {
      console.error('Upload failed:', error);
      setMessage('Upload failed');
    }
  };

  return (
    <div>
      <h2>Upload Video for Subtitle Generation</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Upload;