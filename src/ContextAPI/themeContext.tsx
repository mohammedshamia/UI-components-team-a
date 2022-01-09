import { createContext } from "react";

interface ThemeContextInterface {
  dark: boolean;
  toggelTheme: () => void;
}

const ContextTheme = createContext<ThemeContextInterface | null>(null);

export default ContextTheme;
