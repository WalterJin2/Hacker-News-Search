import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  let startPage = 1;
  let endPage = 1;
  for (let i = 1; i <= 3; i++) {
    if (currentPage - i === 0) {
      startPage = 1;
      break;
    }
    startPage = currentPage - i;
  }
  for (let i = 0; i <= 3; i++) {
    if (currentPage + i === nPages) {
      endPage = currentPage + i;
      break;
    }
    endPage = currentPage + i;
  }
  let pageNumbers = [];
  for (var i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  //const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a
            className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={prevPage}
            href="/#"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber}>
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className={`${
                currentPage === pgNumber
                  ? "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              } `}
              href="/#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li>
          <a
            className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={nextPage}
            href="/#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
