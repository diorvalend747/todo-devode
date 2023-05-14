const Input = ({ handleFormChange = () => {}, defaultValue }) => {
  return (
    <>
      <label data-cy="input">
        <p className="text-xs font-semibold">NAMA LIST ITEM</p>
      </label>
      <input
        className="w-full border border-gray-300 px-4 py-3 mt-3 focus:border-[#A1DDFC] focus:ring-[#A1DDFC] rounded-md"
        type="text"
        onChange={(e) => handleFormChange("title", e.target.value)}
        placeholder="Tambahkan nama list"
        required
        value={defaultValue}
      />
    </>
  );
};

export default Input;
