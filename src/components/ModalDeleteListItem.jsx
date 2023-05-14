import AlertIcon from "../assets/icons/icon-alert.svg";
import Button from "./Button";

const ModalDeleteListItem = ({
  content,
  isOpen,
  onClose = () => {},
  onConfirm = () => {},
}) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOnClose}
      id="container"
      data-cy="todo-item-delete-button"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded-2xl px-9 py-9">
        <div className="flex flex-col justify-center items-center gap-8">
          <img src={AlertIcon} alt="alert-icon" width={84} />
          <div className="max-w-[500px] text-center px-6">
            <h2 className="text-lg">
              Apakah anda yakin menghapus List Item
              <br />
              <span className="text-lg font-bold">"{content}"?</span>
            </h2>
          </div>
          <div
            className="flex gap-6 mt-7"
            data-cy="modal-delete-confirm-button"
          >
            <button
              onClick={onClose}
              className={`bg-[#f4f4f4] text-[#4A4A4A] rounded-full py-3.5 px-8 text-lg font-semibold flex $w-[150px] text-center justify-center disabled:bg-[#D0EEFD]`}
            >
              Batal
            </button>

            <button
              onClick={onConfirm}
              className={`bg-[#ED4C5C] text-white rounded-full py-3.5 px-8 text-lg font-semibold flex $w-[150px] text-center justify-center disabled:bg-[#D0EEFD]`}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteListItem;
