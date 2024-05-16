const PAGINATE_DEFAULT = {
    currentPage: 1,
    rows: [],
    size: 10,
    pages: 0,
    totalItems: 0
}

const paginate = (rows = [], option = {}) => {
    const config = { ...PAGINATE_DEFAULT, ...option };
    if (!rows.length) return config;
    const page = parseInt(config.currentPage || PAGINATE_DEFAULT.currentPage);
    const size = parseInt(config.size || PAGINATE_DEFAULT.size);
    // Calculate the start and end indexes for the requested page
    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    // Slice the products array based on the indexes
    const paginatedRows = rows.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(rows.length / size);

    return {
        rows: paginatedRows,
        currentPage: page,
        size,
        pages: totalPages,
        totalItems: rows.length
    }
}

module.exports = {
    paginate
}