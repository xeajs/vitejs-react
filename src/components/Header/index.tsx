import React, { FC } from 'react';

import style from './style.module.less';

export const CompWrap: FC<{ options?: unknown }> = (props) => {
  return <footer className={style.header}>HEADER</footer>;
};

export default CompWrap;
