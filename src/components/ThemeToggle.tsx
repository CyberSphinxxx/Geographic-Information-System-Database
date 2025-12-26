import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * Theme toggle button component
 * Toggles between light and dark mode, persists preference to localStorage
 * Default: Dark mode
 */
export function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage first, default to dark if no preference
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('theme');
            if (stored) {
                return stored === 'dark';
            }
            // Default to dark mode
            return true;
        }
        return true;
    });

    useEffect(() => {
        // Update the HTML element class and localStorage
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    // Initialize theme on mount - default to dark
    useEffect(() => {
        const stored = localStorage.getItem('theme');

        // If no stored preference, default to dark
        if (!stored || stored === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}

export default ThemeToggle;
