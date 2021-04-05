import React, { FC } from 'react';

import styles from './menu.module.less';

export const CompWrap: FC<{ options?: unknown }> = (props) => {
  return (
    <div>
      <ul className="flex">
        <li className={styles.hh}>menu</li>
        <li>menu</li>
        <li>menu</li>
      </ul>
    </div>
  );
};

export default CompWrap;
