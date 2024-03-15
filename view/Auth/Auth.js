import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();
const API = "http://192.168.100.74:8000";
import useUserStore from './AuthGlobal';

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

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
        console.log(tokenDecodificado);

        // Almacenamos el token en el store global de Zustand
        useUserStore.getState().setUserData(tokenDecodificado);

        // Almacenamos el token en el estado local
        setToken(tokenDecodificado);
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
    // Limpiamos el token del store global de Zustand
    useUserStore.getState().setUserData(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext);
  };