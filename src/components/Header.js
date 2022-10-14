import { toggleShowSidebar, setquery } from "../features/itms/itmsSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaHackerrank } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
const Header = () => {
   const dispatch = useDispatch();
  const content = (
    <div className="flex justify-between  items-center w-full px-1 py-1 bg-cyan-500 text-white">
      <div className="flex justify-between  items-center px-1 py-1">
        <FaHackerrank className="text-3xl text-red-500 px-1 py-1" />
        <h1 className="px-1 py-1">Hacker News Search</h1>
      </div>
      <div className="px-1 py-2 text-2xl">
        <BsFillGearFill
          onClick={() => {
            dispatch(toggleShowSidebar());
          }}
        />
      </div>
    </div>
  );

  return content;
};
export default Header;
