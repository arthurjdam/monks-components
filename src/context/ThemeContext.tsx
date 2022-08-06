import * as React from "react";
import { createContext, useContext } from "react";

export type ThemeType = "light" | "dark";

export interface ThemeContext {
  theme: ThemeType;
}

const MonkContext = createContext<ThemeContext>({
  theme: "light",
});

export const useMonk = () => {
  return useContext(MonkContext);
};

interface ProviderProps {
  theme?: ThemeType;
  children?: React.ReactNode;
}

export const MonkProvider: React.FC<ProviderProps> = ({
  children,
  theme = "light",
}) => {
  return (
    <MonkContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </MonkContext.Provider>
  );
};
