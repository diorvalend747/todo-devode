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
      data-cy="modal-add"
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
          <Input handleFormChange={handleFormChange} />
          <div className="mt-9">
            <p className="text-xs font-semibold">PRIORITY</p>
            <div className="relative w-64 mt-3">
              <Dropdown options={options} handleFormChange={handleFormChange} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-4" />
        <footer className="flex justify-end px-9 py-5">
          <Button
            disabled={!todoData?.title || !todoData?.priority}
            text="Simpan"
            color="primary"
            onClick={onConfirm}
          />
        </footer>
      </div>
    </div>
  );
};

export default ModalAdd;
