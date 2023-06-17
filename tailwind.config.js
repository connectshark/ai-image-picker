/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'background': 'rgb(var(--background) / <alpha-value>)',
        'primary': 'rgb(var(--primary) / <alpha-value>)',
        'secondary-button': 'rgb(var(--secondary-button) / <alpha-value>)',
        'accent': 'rgb(var(--accent) / <alpha-value>)',
        'main-black': 'rgb(var(--main-black) / <alpha-value>)',
      }
    },
    fontFamily: {
      'ubuntu': ['"Ubuntu"','"Noto Sans TC"', 'sans-serif', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}