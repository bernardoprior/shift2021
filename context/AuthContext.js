import React, { useEffect, useReducer } from "react";
import { Alert } from "react-native";

import { createCtx } from "./createContext";

const initial_state = {
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "check auth state":
      return {
        ...state,
        token: "",
        loading: false,
      };

    case "login":
      return { ...state, token: action.token, loading: false };

    case "logout":
      return { ...state, token: null, loading: false };
  }
};

const [useAuth, CtxProvider] = createCtx();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);

  useEffect(() => {
    dispatch({ type: "check auth state" });
  }, []);

  const logout = () => {
    dispatch({ type: "logout" });
  };

  const login = (username, password) => {
    dispatch({ type: "login", token: "token" });
  };

  const signup = (email, username, password) => {
    dispatch({ type: "login", token: "token" });
  };

  const value = { login, logout, state };

  return <CtxProvider value={value}>{!state.loading && children}</CtxProvider>;
};

export { useAuth, AuthContextProvider };
