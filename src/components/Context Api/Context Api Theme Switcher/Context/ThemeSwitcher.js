import { createContext, useContext } from "react";

export const ThemeToogle = createContext({
    themeMode: 'light',
    lightTheme: () => { },
    DarkTheme: () => { },
})

export const ThemeToogleProvider = ThemeToogle.Provider

export function useThemeToogle() {
    return useContext(ThemeToogle)
}


