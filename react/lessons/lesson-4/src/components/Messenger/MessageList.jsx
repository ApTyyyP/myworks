import { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';

function MessageList({ messages, onLike }) {
  const endRef = useRef(null);

  // Фокус тільки на додавання останнього повідомлення
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return (
    <ul className="list-unstyled mb-0 p-2">
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} onLike={onLike} />
      ))}
      <div ref={endRef} />
    </ul>
  );
}

export default MessageList;
