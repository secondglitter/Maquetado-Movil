import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();
const API = "http://10.10.63.121:3000";
import useUserStore from './AuthGlobal';

export const AuthProvider = ({ children }) => {

  const login = async (nombre, matricula) => {
    try {
      const response = await axios.post(`${API}/auth/Login`, {
        nombre,
        matricula
      });
      const token = response.data.token;
      if (token) {
        const response = await axios.post(`${API}/auth/Verify`, {
            token
        });

        const tokenDecodificado = response.data

        useUserStore.getState().setUserData(tokenDecodificado);

        return true; 
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false;
    }
  };

  const logout = () => {
    useUserStore.getState().setUserData(null);
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