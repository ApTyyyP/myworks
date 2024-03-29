import img from './error.gif';

const ErrorMessage = () => {
  return (
    <img
      style={{
        display: 'block',
        margin: '0 auto',
        width: '250px',
        height: '250px',
        objectFit: 'contain',
      }}
      src={img}
      alt="Error"
    />
  );
};

export default ErrorMessage;
