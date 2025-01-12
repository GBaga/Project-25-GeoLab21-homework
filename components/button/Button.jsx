import "./button.css";

export const Button = (props) => {
  return (
    <div className="btn-div">
      <button
        onClick={props.onClickHandler}
        style={{ ...props.style }}
        className="btn-style"
      >
        {props.btnLabel}
      </button>
      {props.isVisible && <h3>{props.colorName}</h3>}{" "}
    </div>
  );
};
