const Pagination = ({ page, setPage, totalCount }) => {
  const first = () => setPage(1);
  const next = () => setPage(parseInt(page) + 1);
  const prev = () => setPage(parseInt(page) - 1);
  const last = () => setPage(totalCount);

  return (
    <div className="buttons my-3 d-flex justify-content-evenly">
      <div className="btn-group btn-group-sm" role="group">
        <button
          className={`btn btn-outline-info btn-sm px-3 text-info bg-secondary bg-opacity-25 ${
            parseInt(page) === 1 ? " disabled" : ""
          }`}
          onClick={first}
        >
          {"<<"}
        </button>

        <button
          className={`btn btn-outline-info btn-sm px-3 text-info bg-secondary bg-opacity-25 ${
            parseInt(page) === 1 ? " disabled" : ""
          }`}
          onClick={prev}
        >
          {"<"}
        </button>

        <button className="btn btn-info text-light disabled px-3">
          {page}
        </button>

        <button
          className={`btn btn-outline-info btn-sm px-3 text-info bg-secondary bg-opacity-25 ${
            parseInt(page) === totalCount ? " disabled" : ""
          }`}
          onClick={next}
        >
          {">"}
        </button>

        <button
          className={`btn btn-outline-info btn-sm px-3 text-info bg-secondary bg-opacity-25 ${
            parseInt(page) === totalCount ? " disabled" : ""
          }`}
          onClick={last}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
