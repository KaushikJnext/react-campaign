import React, { useState } from "react";
import style from "./pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
    paginate(number);
  };

  return (
    <nav>
      <ul className={style.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={style.page_item}>
            <a
              onClick={(e) => handleClick(e, number)}
              href="!#"
              className={style.page_link}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
