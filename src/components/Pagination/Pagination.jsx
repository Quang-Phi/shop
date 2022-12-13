import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";
import uuid from "react-uuid";

export function Pagination(props) {
  const { list, loading } = props;

  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrenItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrenItems(list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(list.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, list]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : currentItems.length === 0 ? (
        <div className="content-wraper">
          <img src="https://i.postimg.cc/vBTVcJpd/page-not-found.jpg" alt="" />
        </div>
      ) : (
        <>
          <div className="content-wraper">
            {currentItems.map((element) => {
              return (
                <div key={uuid()} className=" col-lg-3 col-md-4 col-6">
                  <Product product={element} />
                </div>
              );
            })}
          </div>

          {list.length <= itemsPerPage ? (
            ""
          ) : (
            <div className="pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}
