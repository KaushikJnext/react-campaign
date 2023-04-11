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

// import React, { useState, useEffect } from "react";
// import style from "./pagination.scss";

// const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
//   const [pageNumbers, setPageNumbers] = useState([]);
//   const [visiblePages, setVisiblePages] = useState([]);

//   useEffect(() => {
//     const newPageNumbers = [];
//     for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//       newPageNumbers.push(i);
//     }
//     setPageNumbers(newPageNumbers);
//   }, [totalItems, itemsPerPage]);

//   useEffect(() => {
//     const visiblePages = [];
//     const numberOfVisiblePages = 9;
//     const halfVisiblePages = Math.floor(numberOfVisiblePages / 2);
//     let startPage = currentPage - halfVisiblePages;
//     let endPage = currentPage + halfVisiblePages;

//     if (startPage < 1) {
//       endPage += Math.abs(startPage) + 1;
//       startPage = 1;
//     }

//     if (endPage > pageNumbers.length) {
//       startPage -= endPage - pageNumbers.length;
//       endPage = pageNumbers.length;
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       visiblePages.push(i);
//     }

//     setVisiblePages(visiblePages);
//   }, [currentPage, pageNumbers]);

//   const handleClick = (event, number) => {
//     event.preventDefault();
//     paginate(number);
//   };

//   return (
//     <nav>
//       <ul className={style.pagination}>
//         <li className={style.page_item}>
//           <a
//             onClick={(e) => handleClick(e, currentPage - 1)}
//             href="!#"
//             className={style.page_link}
//           >
//             Previous
//           </a>
//         </li>
//         {visiblePages.map((number) => (
//           <li
//             key={number}
//             className={`${style.page_item} ${
//               number === currentPage ? "active" : ""
//             }`}
//           >
//             <a
//               onClick={(e) => handleClick(e, number)}
//               href="!#"
//               className={style.page_link}
//             >
//               {number}
//             </a>
//           </li>
//         ))}
//         <li className={style.page_item}>
//           <a
//             onClick={(e) => handleClick(e, currentPage + 1)}
//             href="!#"
//             className={style.page_link}
//           >
//             Next
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
