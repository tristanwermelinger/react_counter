const Decrement = (props) => {
  return (
    <button
      className={props.counter === 0 && "none"}
      onClick={() => {
        props.setCounter(props.counter - 1);
      }}
    >
      -
    </button>
  );
};

export default Decrement;
