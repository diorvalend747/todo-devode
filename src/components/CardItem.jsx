import IconEdit from "../assets/icons/icon-edit-p.svg";
import IconDelete from "../assets/icons/icon-delete.svg";
import { useEffect, useState } from "react";

const CardItem = (props) => {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
    props.changeStatus(props.id, checked);
  };

  useEffect(() => {
    if (props.isActive === 0) {
      setChecked(true);
    }
  }, []);

  return (
    <div
      className="flex justify-between bg-white mb-[10px] p-[27px] rounded-xl shadow-lg"
      data-cy="item-card"
    >
      <div className="flex items-center gap-7">
        <label className="flex items-center gap-7 cursor-pointer">
          <input
            checked={checked}
            onChange={handleOnChange}
            type="checkbox"
            className="checked:bg-primary w-5 h-5 border-gray-300"
          />

          <div
            className={`h-[14px] w-[14px] rounded-full label_indicator 
            ${
              props.priority === "very-high"
                ? "bg-[#ED4C5C]"
                : props.priority === "high"
                ? "bg-[#F8A541]"
                : props.priority === "normal"
                ? "bg-[#00A790]"
                : props.priority === "low"
                ? "bg-[#428BC1]"
                : "bg-[#8942C1]"
            }
          `}
          ></div>
          <span className={`span ${checked ? "line-through" : ""}`}>
            {props.title}
          </span>
        </label>
        <img
          onClick={() => {
            props.onClickEdit();
            props.setTodoData();
          }}
          className="cursor-pointer"
          src={IconEdit}
          alt="button-edit"
        />
      </div>
      <img
        onClick={() => {
          props.onClickDelete();
          props.setTodoData();
        }}
        className="cursor-pointer"
        src={IconDelete}
        alt="delete-icon"
      />
    </div>
  );
};

export default CardItem;
