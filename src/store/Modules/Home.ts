import { EnumRecoilKeys } from 'src/store/Types';
import { atom } from 'recoil';

export const StoreHome = atom({
  key: EnumRecoilKeys.HOME_STORE,
  default: {
    name: '',
    age: 0,
    sex: 0
  }
});
