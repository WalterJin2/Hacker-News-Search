import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Selector from './Selector'
import {
  toggleShowSidebar,
  setsearchType,
  setsortOrder,
  setdataRange,
  sethitsPerPage,
} from "../../features/itms/itmsSlice";
  

const Sidebar = () => {
const showSidebar = useSelector((state) => state.itms.showSidebar);
const searchType = useSelector((state) => state.itms.searchType);
const sortOrder = useSelector((state) => state.itms.sortOrder);
const dataRange = useSelector((state) => state.itms.dataRange);
const hitsPerPage = useSelector((state) => state.itms.hitsPerPage);
console.log(searchType);


const dispatch = useDispatch();

  const setsearchType1 = (v) => {
    dispatch(setsearchType(v))
  }
  const sethitsPerPage1 = (v) => {
    dispatch(sethitsPerPage(v));
  };
    const setsortOrder1 = (v) => {
      dispatch(setsortOrder(v));
    };
  let content;
  content = (
    <div
      className={` top-0 right-0 w-[20vw] bg-black   fixed  z-40  ease-in-out duration-300 ${
        showSidebar ? "block translate-x-0" : "hidden translate-x-full"
      }`}
    >
      <div className=" bg-black  flex flex-col justify-around items-center w-full h-full   py-1 text-lg   ">
          <AiOutlineCloseCircle
            className=" text-white   text-right w-full"
            onClick={() => {
              dispatch(toggleShowSidebar());
            }}
          />
        <Selector
          info1={searchType}
          title="Search type"
          list={["All", "Stories", "Comments"]}
          onSelect={setsearchType1}
        />
        <Selector
          info1={sortOrder}
          title="Sort Order"
          list={["Popularity", "Date"]}
          onSelect={setsortOrder1}
        />
        <Selector
          info1={hitsPerPage}
          title="hits Per Page"
          list={[10, 20, 30, 50]}
          onSelect={sethitsPerPage1}
        />
      </div>
    </div>
  );
  return content;
};
export default Sidebar;
