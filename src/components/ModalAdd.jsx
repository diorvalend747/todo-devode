import CloseIcon from "../assets/icons/icon-close.svg";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import { options } from "../utils";

const ModalAdd = ({
  isOpen,
  todoData,
  onClose = () => {},
  onConfirm = () => {},
  handleFormChange = () => {},
}) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOnClose}
      id="container"
      data-cy="todo-add-button"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white rounded-xl w-[830px]">
        <div className="flex justify-between px-9 py-5">
          <h2 className="text-lg font-semibold">Tambah List Item</h2>
          <button onClick={onClose}>
            <img src={CloseIcon} alt="cancel-icon" />
          </button>
        </div>
        <div className="border-b border-gray-300 " />
        <div className="flex flex-col px-9 py-5 mt-7">
          <div data-cy="modal-add-name-input">
            <Input handleFormChange={handleFormChange} />
          </div>
          <div className="mt-9">
            <p className="text-xs font-semibold">PRIORITY</p>
            <div className="relative w-64 mt-3">
              <Dropdown options={options} handleFormChange={handleFormChange} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-4" />
        <footer
          data-cy="modal-add-save-button"
          className="flex justify-end px-9 py-5"
        >
          <button
            onClick={onConfirm}
            disabled={!todoData?.title || !todoData?.priority}
            className={`bg-primary text-white rounded-full py-3.5 px-8 text-lg font-semibold flex $w-[150px] text-center justify-center disabled:bg-[#D0EEFD]`}
          >
            Simpan
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ModalAdd;
