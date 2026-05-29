import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        lg: '32px',
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
    },

    extend: {
      fontFamily: {
        sans: ['var(--font-sfpro)'],
      },
      borderWidth: {
        thin: '0.6px',
      },
    },
  },

  plugins: [],
};

export default config;
