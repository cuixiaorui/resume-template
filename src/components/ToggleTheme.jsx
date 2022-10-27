import { createSignal, createEffect } from 'solid-js';

const ToggleTheme = () => {
  const [theme, setTheme] = createSignal(
    localStorage.getItem('theme') ?? 'light'
  );
  createEffect(() => {
    if (theme() === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme());
  });
  return (
    <button onClick={() => setTheme(theme() === 'light' ? 'dark' : 'light')}>
      {theme() === 'light' ? '🌙' : '🌞'}
    </button>
  );
};
export default ToggleTheme;
