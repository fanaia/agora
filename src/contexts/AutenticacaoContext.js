import React, {createContext, useState} from 'react';

export const AutenticacaoContext = createContext();

export const AutenticacaoProvider = ({children}) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  return (
    <AutenticacaoContext.Provider
      value={{
        autenticado,
        setAutenticado,
        usuarioAutenticado,
        setUsuarioAutenticado,
      }}>
      {children}
    </AutenticacaoContext.Provider>
  );
};
