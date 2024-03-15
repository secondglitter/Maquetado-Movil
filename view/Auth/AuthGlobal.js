import {create} from 'zustand';

// Creamos un store global con Zustand para los datos del usuario
const useUserStore = create((set) => ({
  userData: {},
  setUserData: (userData) => set({ userData }),
}));

export default useUserStore;
