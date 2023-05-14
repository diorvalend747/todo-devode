import AlertIcon from "../assets/icons/icon-alert-sm.svg";

const Toast = ({ content = "", isOpen, onClose = () => {} }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOnClose}
      data-cy="modal-information"
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white rounded-xl min-w-[500px] flex py-7 px-7 gap-3">
        <img src={AlertIcon} alt="alert-icon" />
        <h2 className="text-lg font-semibold">{content}</h2>
      </div>
    </div>
  );
};

export default Toast;
