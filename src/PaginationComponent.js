import React from "react";

export default function PaginationComponent({ page, setPage, totalPage }) {
 
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className={"page-link"+(page===0 ? ' disabled':'')} href="#" onClick={e => {
                    e.preventDefault();
                    setPage(page-1)
                }}>
              <span>&laquo;</span>
            </a>
          </li>
          {[...Array(totalPage)].map((e, i) => {
            return (
              <li key={i} className={"page-item" + (page === i ? " active" : "")}>
                <a className="page-link" href="#" onClick={e => {
                    e.preventDefault();
                    setPage(i)
                }}>
                  {i+1}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a className={"page-link"+(page===(totalPage-1) ? ' disabled':'')} onClick={e => {
                    e.preventDefault();
                    setPage(page+1)
                }} href="#">
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
