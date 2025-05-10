import React, { useState, useMemo } from 'react';
import styles from './table.module.css';

export type Column<T> = {
  key: keyof T;
  header: string;
  className?: string;
  render?: (value: T[keyof T]) => React.ReactNode;
};

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  pageSize?: number;
  searchable?: boolean;
  filterKey?: keyof T;
  filterOptions?: string[];
  filterLabel?: string;
}

export function Table<T extends { [key: string]: any }>({
  columns,
  data,
  pageSize = 5,
  searchable = false,
  filterKey,
  filterOptions = [],
  filterLabel = 'Filter',
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('All');

  const filteredData = useMemo(() => {
    let filtered = [...data];

    if (filterKey && filterValue !== 'All') {
      filtered = filtered.filter(row => String(row[filterKey]) === filterValue);
    }

    if (searchable && searchQuery.trim()) {
      filtered = filtered.filter(row =>
        columns.some(col =>
          String(row[col.key]).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    return filtered;
  }, [data, columns, searchQuery, filterValue, filterKey, searchable]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = filteredData.slice(startIndex, startIndex + pageSize);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className={styles.tableContainer}>
      {(searchable || filterKey) && (
        <div className={styles.searchBar}>
          {searchable && (
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          )}

          {filterKey && filterOptions.length > 0 && (
           <select
           value={filterValue}
           onChange={(e) => {
             setFilterValue(e.target.value);
             setCurrentPage(1);
           }}
           className={styles.filterSelect}
         >
              <option value="All">{filterLabel}</option>
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      <table className={styles.customTable}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className={col.className}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={styles.noData}>
                No data available
              </td>
            </tr>
          ) : (
            currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col) => (
                  <td key={String(col.key)} className={col.className}>
                    {col.render ? col.render(row[col.key]) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
