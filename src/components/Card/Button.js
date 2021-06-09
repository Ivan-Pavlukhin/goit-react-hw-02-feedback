export const Button = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((option) => (
        <button
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
};
