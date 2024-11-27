import React from 'react';
import styles from '../CSS/MovingNumbers.module.css';
import { generateNumbers } from '../utils';

const MovingNumbers = (): JSX.Element => {
  const numbers = generateNumbers(1000);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.numbers}>
          {numbers}
        </div>
        <div className={styles.numbers}>
          {numbers}
        </div>
        <div className={styles.numbers}>
          {numbers}
        </div>
      </div>
      <div className={styles.container}>
      <div className={styles.numbers}>
        {numbers}
      </div>
      <div className={styles.numbers}>
        {numbers}
      </div>
      <div className={styles.numbers}>
        {numbers}
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.numbers}>
        {numbers}
      </div>
      <div className={styles.numbers}>
        {numbers}
      </div>
      <div className={styles.numbers}>
        {numbers}
      </div>
    </div>
      </>
  );
};

export default MovingNumbers;
