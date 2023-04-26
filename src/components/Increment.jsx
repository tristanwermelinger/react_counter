const Increment = (props) => {
  return (
    <button
      className={props.counter === 10 && "none"}
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      +
    </button>
  );
};

export default Increment;
