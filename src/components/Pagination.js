import React from "react";
import styles from "../styles/Pagination.module.css";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Pagination = ({ active, callback }) => {
  const clickLeftArrow = (e) => {
    active + 1 > 1 && callback(active - 1);
  };
  const clickRightArrow = (e) => {
    active + 1 < 9 && callback(active + 1);
  };
  const clickElement = (e, n) => {
    callback(n - 1);
  };

  return (
    <div className={styles.container}>
      <button className={styles.element} onClick={clickLeftArrow}>
        <img src={leftArrow} alt="Left Arrow" />
      </button>
      {range.map((n) => (
        <button
          key={n}
          className={`${styles.element} ${active + 1 === n && styles.active}`}
          onClick={(e) => clickElement(e, n)}
        >
          {n}
        </button>
      ))}
      <button className={styles.element} onClick={clickRightArrow}>
        <img src={rightArrow} alt="Right Arrow" />
      </button>
    </div>
  );
};

export default Pagination;
