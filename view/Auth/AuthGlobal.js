import {create} from 'zustand';

const useUserStore = create((set) => ({
  userData: {},
  setUserData: (userData) => set({ userData }),
}));

export default useUserStore;
