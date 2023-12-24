import { createContext, useContext, useState, useLayoutEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () =>
		setTheme(theme => (theme === 'dark' ? 'light' : 'dark'));
	useLayoutEffect(() => {
		if (theme === 'dark') {
			document.body.classList.add('light');
		} else {
			document.body.classList.remove('light');
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

export { ThemeProvider, useTheme };
