import AlertIcon from "../assets/icons/icon-alert.svg";
import Button from "./Button";

const ModalDeleteActivity = ({
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
      data-cy="modal-delete-activity"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded-2xl px-9 py-9">
        <div className="flex flex-col justify-center items-center gap-8">
          <img src={AlertIcon} alt="alert-icon" width={84} />
          <div className="max-w-[500px] text-center px-6">
            <h2 className="text-lg">
              Apakah anda yakin menghapus activity
              <br />
              <span className="text-lg font-bold">"{content}"?</span>
            </h2>
          </div>
          <div className="flex gap-6 mt-7">
            <Button onClick={onClose} text="Batal" color="greyBg" />
            <Button onClick={onConfirm} text="Hapus" color="labelVeryHigh" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteActivity;
