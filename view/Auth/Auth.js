import React, { createContext, useContext } from 'react';
import useUserStore from './AuthGlobal.js';
import API_Metods from '../API/API.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const setUser = useUserStore(state => state.setUserData);

  const login = async (nombre, matricula) => {
    try {
      const token = await API_Metods.Data_Post('/auth/Login', {
        nombre,
        matricula
      });

      if (token) {
        const response = await API_Metods.Data_Post('/auth/Verify', token );
        setUser(response);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
