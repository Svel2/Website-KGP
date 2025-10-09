/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-hs-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Brand Colors - Professional Blue
        brand: {
          50: '#f0f9ff',    // Light blue
          100: '#e0f2fe',   // Light blue
          200: '#bae6fd',   // Light blue
          300: '#7dd3fc',   // Medium blue
          400: '#38bdf8',   // Medium blue
          500: '#0ea5e9',   // Primary blue
          600: '#0284c7',   // Dark blue
          700: '#0369a1',   // Darker blue
          800: '#075985',   // Dark blue
          900: '#0c4a6e',   // Darkest blue
        },
        // Neutral Colors
        neutral: {
          50: '#f8fafc',    // Light gray
          100: '#f1f5f9',   // Light gray
          200: '#e2e8f0',   // Medium gray
          300: '#cbd5e1',   // Medium gray
          400: '#94a3b8',   // Medium gray
          500: '#64748b',   // Medium gray
          600: '#475569',   // Dark gray
          700: '#334155',   // Dark gray
          800: '#1e293b',   // Dark gray
          900: '#0f172a',   // Darkest gray
        },
        // Primary Colors
        primary: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
          light: '#f0f9ff',
        },
        // Secondary Colors
        secondary: {
          DEFAULT: '#64748b',
          dark: '#334155',
          light: '#f1f5f9',
        },
        // Text Colors
        text: {
          primary: '#0f172a',
          secondary: '#475569',
          muted: '#64748b',
          inverse: '#ffffff',
        },
        // Background Colors
        background: {
          DEFAULT: '#ffffff',
          secondary: '#f8fafc',
          muted: '#f1f5f9',
        },
        // Border Colors
        border: {
          DEFAULT: '#e2e8f0',
          focus: '#0ea5e9',
        },
        // Legacy support
        teks: {
          DEFAULT: '#64748b',
          Gelap: '#0f172a',
          Terang: '#ffffff',
        }
      },
    },
  },
  plugins: [
    import('preline/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
}