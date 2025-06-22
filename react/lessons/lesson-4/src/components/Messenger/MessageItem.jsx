function MessageItem({ message, onLike }) {
  const isMe = message.author === 'me';

  return (
    <li className={`d-flex mb-2 ${isMe ? 'justify-content-end' : 'justify-content-start'}`}>
      <div
        className={`p-2 text-white ${isMe ? 'bg-primary' : 'bg-dark'}`}
        style={{
          maxWidth: '70%',
          borderTopLeftRadius: isMe ? '1rem' : '0',
          borderTopRightRadius: isMe ? '0' : '1rem',
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
        }}
      >
        {/* Текст повідомлення */}
        <div>{message.text}</div>

        {/* Реакції: змінюємо justify-content */}
        <div
          className={`d-flex align-items-center gap-3 mt-2 ${isMe ? 'justify-content-start' : 'justify-content-end'}`}
          style={{ fontSize: '0.9rem', opacity: 0.9 }}
        >
          {/* Лайк */}
          <span
            role="button"
            className="d-flex align-items-center"
            style={{ cursor: 'pointer', userSelect: 'none' }}
            onClick={() => onLike(message.id, 'like')}
          >
            👍 {message.likes > 0 && <span className="ms-1">{message.likes}</span>}
          </span>

          {/* Дизлайк */}
          <span
            role="button"
            className="d-flex align-items-center"
            style={{ cursor: 'pointer', userSelect: 'none' }}
            onClick={() => onLike(message.id, 'dislike')}
          >
            👎 {message.dislikes > 0 && <span className="ms-1">{message.dislikes}</span>}
          </span>
        </div>
      </div>
    </li>
  );
}

export default MessageItem;
