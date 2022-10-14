
import SearchBar from "../../components/SearchBar";
import ItmsList from './ItmsList';
import { useSelector, useDispatch } from "react-redux";
import { toggleShowSidebar, setquery, setInput } from "./itmsSlice";
const ItmsHome = () => {
   const dispatch = useDispatch();
  // const query = useSelector((state) => state.items.query);
  const handleInputChange = (input) => dispatch(setInput(input));
  const search = () => dispatch(setquery());
 
  
 const content = (
   <div className=" flex flex-col justify-between items-center w-full grow px-6 py-2  ">
     <SearchBar handleInputChange={handleInputChange} search={search} />
     <ItmsList />
   </div>
 );
  return content;
};
export default ItmsHome;
