const Button = (props) => {
  return (
    <button
      data-cy="button"
      onClick={props.onClick}
      disabled={props.disabled}
      className={`bg-[${props.color}] text-${
        props.color === "greyBg" ? "softBlack" : "white"
      } rounded-full py-3.5 px-8 text-lg font-semibold flex ${
        !props.icon && "w-[150px]"
      } text-center flex justify-center disabled:bg-[#D0EEFD]`}
    >
      {props.icon && (
        <div className="mr-2 mt-0.5">
          <img src={props.icon} alt="button-icon" />
        </div>
      )}
      {props.text}
    </button>
  );
};

export default Button;
