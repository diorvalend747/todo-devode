import { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import DownArrowIcon from "../assets/icons/icon-dropdown.svg";
import CheckIcon from "../assets/icons/icon-check.svg";

const CustomDropdown = ({
  options,
  defaultValue,
  handleFormChange = () => {},
}) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    handleFormChange("priority", option.value);
    setSelectedOption(option);
    setIsOpen(false);
  };

  const data = options.find((item) => item.value === defaultValue);

  useEffect(() => {
    if (data) {
      setSelectedOption(data);
    }
  }, []);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div id="container" className="relative" data-cy="dropdown-priority">
        <button
          data-cy="modal-add-priority-dropdown"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white py-2 px-4 border border-gray-300 rounded-md flex items-center gap-4 w-[200px] focus:border-[#A1DDFC] focus:ring-[#A1DDFC]"
        >
          {selectedOption.color && (
            <div
              className={`label_indicator 
            ${
              selectedOption.value === "very-high"
                ? "bg-[#ED4C5C]"
                : selectedOption.value === "high"
                ? "bg-[#F8A541]"
                : selectedOption.value === "normal"
                ? "bg-[#00A790]"
                : selectedOption.value === "low"
                ? "bg-[#428BC1]"
                : "bg-[#8942C1]"
            }
          `}
            />
          )}
          <span>{selectedOption.label || "Pilih priority"}</span>
          <div
            className={`absolute right-[73px] text-gray-700  ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <img src={DownArrowIcon} alt="arrow-down-icon" />
          </div>
        </button>
        {isOpen && (
          <div
            data-cy="modal-add-priority-dropdown"
            className="absolute z-10 mt-2 py-2 w-[200px] bg-white rounded-md shadow-lg"
          >
            {options.map((option, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`flex gap-5 items-center px-4 py-2 text-md w-full hover:bg-gray-100`}
                >
                  <div
                    className={`label_indicator 
                    ${
                      option.value === "very-high"
                        ? "bg-[#ED4C5C]"
                        : option.value === "high"
                        ? "bg-[#F8A541]"
                        : option.value === "normal"
                        ? "bg-[#00A790]"
                        : option.value === "low"
                        ? "bg-[#428BC1]"
                        : "bg-[#8942C1]"
                    }
                  `}
                  />
                  <div>{option.label}</div>
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

export default CustomDropdown;
