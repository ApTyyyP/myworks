import { useRef, useState } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import 'bootstrap/dist/css/bootstrap.min.css';

function Messenger() {
  const [messages, setMessages] = useState([]);
  // Відстеження чергування автора
  const authorRef = useRef('me');

  const addMessage = (text) => {
    const currentAuthor = authorRef.current;
    const newMessage = {
      id: Date.now(),
      text,
      likes: 0,
      dislikes: 0,
      author: currentAuthor,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    authorRef.current = currentAuthor === 'me' ? 'other' : 'me';

    setMessages([...messages, newMessage]);
  };

  const handleReaction = (id, type) => {
    const updated = messages.map((msg) => {

      if (msg.id === id) {
        return {
          ...msg,
          likes: type === 'like' ? msg.likes + 1 : msg.likes,
          dislikes: type === 'dislike' ? msg.dislikes + 1 : msg.dislikes,
        };
      }

      return msg;
    });

    setMessages(updated);
  };

  return (
    <div className="py-4">
      <div className="card shadow-sm" style={{ maxWidth: '600px', margin: 'auto' }}>
        <div className="card-body d-flex flex-column" style={{ height: '500px' }}>
          <h5 className="card-title text-center mb-3">💬 Мессенджер</h5>
          <div className="flex-grow-1 overflow-auto mb-3 bg-image">
            <MessageList messages={messages} onLike={handleReaction} />
          </div>
          <MessageForm onAdd={addMessage} />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
