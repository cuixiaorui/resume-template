import { createSignal, createEffect } from 'solid-js';
const ToggleTheme = () => {
  const [theme, setTheme] = createSignal('light');
  createEffect(() => {
    if (theme() === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme());
  });
  return (
    <button
      className="text-4xl flex-row-reverse"
      onClick={() => setTheme(theme() === 'light' ? 'dark' : 'light')}
    >
      {theme() === 'light' ? '🌛' : '🌞'}
    </button>
  );
};
export default ToggleTheme;
