import { useState } from 'react';

function MessageForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  // Блокування кнопки
  const btnSendDisabled = text.trim() === '';

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Відправити повідомлення"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" disabled={btnSendDisabled}>
        Надіслати
      </button>
    </form>
  );
}

export default MessageForm;
