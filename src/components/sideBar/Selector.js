const Selector = ({ info1, title,  list, onSelect }) => {
  console.log(info1)
  let content;
  content = (
    <div className="border-gray-300 border-b-2 flex flex-col justify-evenly items-center gap-2 w-full rounded-none px-2 py-4">
      <div className=" text-white   text-lg bg-black   ">{title}</div>
      <select
        name="parentId"
        className=" rounded text-lg px-4 py-1 w-[90%]"
        value={info1}
        onChange={(e) => {
          onSelect(e.target.value);
        }}
      >
        {list.map((itm) => (
          <option value={itm} key={itm}>{itm}</option>
        ))}
      </select>
    </div>
  );
  return content;
};
export default Selector;
