import React from 'react';
import style from './LoadMoreBtn.module.css';

type Props = {
  onLoadMore: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ onLoadMore }) => {

  return (
    <button 
      type='button'
      className={style.btn}
      onClick={onLoadMore}
    >
      Load More
    </button>
  );
}

export default LoadMoreBtn