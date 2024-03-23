const ConfirmDelete = ({ resourceName, onClose, onConfirm, disabled }) => {
  return (
    <div>
      <div className="mb-8 space-y-2">
        <h2 className="font-bold text-base">
          آیا از حذف «{resourceName}» اطمینان دارید؟
        </h2>
        <p className="text-secondary-400 font-bold">
          این اقدام برگشت ناپذیر است
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-2">
        <button
          onClick={onClose}
          disabled={disabled}
          className="btn btn-primary py-3 px-6"
        >
          لغو
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="btn btn--danger py-3 px-5"
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
