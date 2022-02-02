import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SpotifyPagination = ({
  hasNext,
  hasPrevious,
  onPrevious,
  onNext,
  toPage,
  total,
  limit,
  offset
}) => {
  const [paginationItems, setPaginationItems] = useState([]);

  useEffect(() => {
    console.log('pages', Math.ceil(total / limit));
    const items = [];
    for (let i = 0; i < total / limit; i++) {
      items.push(
        <Pagination.Item key={`page-${i+1}`}
          onClick={() => {
            toPage(i);
          }}
        >{i+1}</Pagination.Item>
      );
    }
    setPaginationItems(items);
    console.log(total, limit, offset);
  }, []);

  return (
    <Pagination>
      {/* <Pagination.First /> */}

      <Pagination.Prev disabled={!hasPrevious} onClick={() => onPrevious()} />
      {paginationItems}
      {/* <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next disabled={!hasNext} onClick={() => onNext()} />
      {/* <Pagination.Last disabled={!hasNext && }/> */}
    </Pagination>
  );
};

SpotifyPagination.propTypes = {
  toPage: PropTypes.func,
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  limit: PropTypes.number,
  total: PropTypes.number,
  offset: PropTypes.number,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
};

export default SpotifyPagination;