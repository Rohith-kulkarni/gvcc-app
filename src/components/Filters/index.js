import "./index.css";
const Filters = (props) => {
  const {
    productsCount,
    page,
    setPage,
    limit,
    setLimit,
    totalPages,
    category,
    setCategory,
  } = props;

  const changeLimit = (event) => {
    setLimit(Number(event.target.value));
    setPage(1);
  };

  const changeCategory = (event) => {
    setCategory(event.target.value);
    setPage(1);
  };

  const pageButtons = [...Array(totalPages)].map((_, i) => {
    const pageNumber = i + 1;
    return (
      <button
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
        style={{ fontWeight: page === pageNumber ? "bold" : "normal" }}
      >
        {pageNumber}
      </button>
    );
  });

  return (
    <div className="filters-container">
      <h3 className="filters-title">Filters</h3>
      <div className="filter-group">
        <label>Category:</label>
        <select
          value={category}
          onChange={changeCategory}
          className="filter-select"
        >
          <option value="">All</option>
          <option value="sneakers">Sneakers</option>
          <option value="shoes">Shoes</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Items per page:</label>
        <select value={limit} onChange={changeLimit} className="filter-select">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="pagination-section">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="pagination-btn"
        >
          Prev
        </button>

        <div className="pagination-pages">{pageButtons.map((btn) => btn)}</div>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="pagination-btn"
        >
          Next
        </button>
      </div>

      <p className="total-products">Total Products: {productsCount}</p>
    </div>
  );
};

export default Filters;
