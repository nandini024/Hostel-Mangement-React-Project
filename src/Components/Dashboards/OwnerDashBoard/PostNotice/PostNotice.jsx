import React, { useState } from 'react';

function PostNotification({ onPost }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) {
      alert('Please fill in both Title and Message!');
      return;
    }
    // Pass notification data to parent or API handler
    onPost({ title: title.trim(), message: message.trim() });

    // Clear form after posting
    setTitle('');
    setMessage('');
  };

  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4 text-center">Post Notification</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="notificationTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="notificationTitle"
            className="form-control"
            placeholder="Enter notification title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="notificationMessage" className="form-label">
            Message
          </label>
          <textarea
            id="notificationMessage"
            className="form-control"
            rows="4"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Post Notification
        </button>
      </form>
    </div>
  );
}

export default PostNotification;
