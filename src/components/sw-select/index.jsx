export const Select = ({ tab, handleChangeTab }) => {
  return (
    <select
      placeholder="Choose your path"
      className="select-item"
      value={tab}
      onChange={handleChangeTab}
    >
      <option>Players</option>
      <option>Coach</option>
      <option>Clubs</option>
    </select>
  );
};
