import React from "react";

const Pagination = ({ currentPage, setCurrentPage, numbers, pages }) => {
  //function to move to the previous page
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  //function to move to the next page
  function nextPage() {
    if (currentPage !== pages) {
      setCurrentPage(currentPage + 1);
    }
  }

  //function to change the current page
  function changeCurrentPage(id) {
    setCurrentPage(id);
  }

  return (
    <div className="flex">
      <nav className="flex">
        <ul className="pagination">
          <li className="page-item text-sm md:text-lg inline-block">
            <a href="#" className="page-link " onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item inline-block text-sm md:text-lg ${
                currentPage === n ? "active" : ""
              }`}
              key={i}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changeCurrentPage(n)}
              >
                {n}
              </a>
            </li>
          ))}
          <li className="page-item inline-block text-sm md:text-lg">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
