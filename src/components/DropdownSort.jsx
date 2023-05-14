import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import CheckIcon from "../assets/icons/icon-check.svg";
import SortIcon from "../assets/icons/icon-sort.svg";
import LatestIcon from "../assets/icons/icon-sort-newest.svg";
import OldestIcon from "../assets/icons/icon-sort-oldest.svg";
import A_Z_Icon from "../assets/icons/icon-sort-a-alpha.svg";
import Z_A_Icon from "../assets/icons/icon-sort-d-alpha.svg";
import UndoneIcon from "../assets/icons/icon-sort-active.svg";

const DropdownSort = ({
  options,
  isOpen,
  setIsOpen = () => {},
  setSortValue = () => {},
}) => {
  const [selectedOption, setSelectedOption] = useState({});

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSortValue(option.value);
    setIsOpen(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div id="sorting" className="relative">
        <button
          data-cy="todo-sort-button"
          onClick={() => setIsOpen(!isOpen)}
          className="border border-gray-300 bg-transparent h-[54px] w-[54px] rounded-full"
        >
          <img className="ml-3" src={SortIcon} alt="sort-icon" width={25} />
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 py-2 w-[250px] bg-white rounded-md shadow-xl">
            {options.map((option, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`flex items-center px-4 py-4 text-md w-full hover:bg-gray-100`}
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={
                        option.value === "latest"
                          ? LatestIcon
                          : option.value === "oldest"
                          ? OldestIcon
                          : option.value === "a-z"
                          ? A_Z_Icon
                          : option.value === "z-a"
                          ? Z_A_Icon
                          : UndoneIcon
                      }
                      alt="icon"
                    />
                    {option.label}
                  </div>
                  {selectedOption?.value === option.value && (
                    <img
                      className="right-5 absolute"
                      src={CheckIcon}
                      alt="check-icon"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default DropdownSort;
