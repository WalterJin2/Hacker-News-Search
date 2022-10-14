import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { useGetItmsQuery } from "./itmsApiSlice";
import SearchMetadata from "./SearchMetadata";
import SearchList from "./SearchList";
import Pagination from "../../components/Pagination";

const ItmsList = () => {
  const tags = {
    All: "story,comment",
    Stories: "story",
    Comments: "comment",
  };
  const searchType = useSelector((state) => state.itms.searchType);
  const [currentPage, setCurrentPage] = useState(1);
  const pageQuery = currentPage ? `&page=${currentPage - 1}` : "";
  const query = useSelector((state) => state.itms.query);
  const hitsPerPage = useSelector((state) => state.itms.hitsPerPage);
  const sortOrder = useSelector((state) => state.itms.sortOrder);
  const {
    data: itms,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetItmsQuery(
    sortOrder == "Popularity"
      ? `search?query=${query}&tags=(${tags[searchType]})&hitsPerPage=${hitsPerPage}${pageQuery}`
      : `search_by_date?query=${query}&tags=(${tags[searchType]})&hitsPerPage=${hitsPerPage}${pageQuery}`
  );

  let content;

  if (isLoading)
    content = (
      <div className="flex justify-center items-center  w-full grow">
        Loading...
        <PulseLoader />
      </div>
    );

  if (isError) {
    content = (
      <div className=" grid place-items-center w-full border-red-500 border text-2xl test-red-500 px-2 py-2">
        <div className="font-bold  text-xl   ">Sorry, there was an error</div>
        <div className=" "> {error?.data?.message ?? "Error occurred"}</div>
      </div>
    );
  }
  if (isSuccess) {
    console.log(itms);
    const nPages = itms.nbPages;
    content = itms?.hits.length && (
      <div className="flex flex-col justify-between items-center  w-full grow px-1 py-1 gap-4">
        <SearchMetadata itms={itms} />
        <SearchList itms={itms} />
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
  }
  return content;
};
export default ItmsList;
