function PomodoroCycleSelector() {
  return (
    <label htmlFor="cycles" className="text-black">
      Select Cycles
      <select id="cycles" className="text-white">
        Select Cycles
        <option value="1">1 Cycle</option>
        <option value="2">2 Cycles</option>
      </select>
    </label>
  );
}

export default PomodoroCycleSelector;
