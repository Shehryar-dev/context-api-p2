import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    themeMode: 'light', // Default theme mode
    darkTheme: () => { }, // Placeholder function for toggling theme
    lightTheme: () => { },
});


export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}