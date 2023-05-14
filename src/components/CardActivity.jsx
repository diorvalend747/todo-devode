import IconDelete from "../assets/icons/icon-delete.svg";
import { formatCurrentDate } from "../utils";

const CardActivity = (props) => {
  const date = new Date(props.created_at);
  return (
    <div className="pr-[20px]" data-cy="activity-card">
      <div className="h-[234px] bg-white rounded-xl py-[22px] px-[27px] mb-[26px] relative shadow-lg ">
        <div onClick={props.onClick} className="cursor-pointer h-[158px]">
          <h4 className="text-lg font-bold">{props.title}</h4>
        </div>
        <div
          style={{ width: `calc(100% - 54px)` }}
          className="absolute z-2 bottom-[25px] bg-white flex justify-between border-0 p-0"
        >
          <span className="text-[#888888]">{formatCurrentDate(date)}</span>
          <img
            onClick={() => {
              props.setActivityData();
              props.showModalDelete();
            }}
            className="cursor-pointer"
            src={IconDelete}
            alt="delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default CardActivity;
