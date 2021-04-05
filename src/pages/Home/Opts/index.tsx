import React from 'react';
import { StoreHome } from 'src/store';
import { useRecoilValue } from 'recoil';

const Wrap: React.FC = () => {
  const StateStoreHome = useRecoilValue(StoreHome);

  return <>opts {StateStoreHome.age}</>;
};

export default Wrap;
