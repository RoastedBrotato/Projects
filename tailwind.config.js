/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "var(--bg-primary)",
        "primary-light": "var(--bg-primary-light)",
        "primary-lighter": "var(--bg-primary-lighter)",
        "secondary": "var(--bg-secondary)",
        "secondary-light": "var(--bg-primary-light)",
        "secondary-lighter": "var(--bg-primary-lighter)",
        "primary-invert": "var(--bg-primary-invert)",
    }
    }
  },
  plugins: []
};