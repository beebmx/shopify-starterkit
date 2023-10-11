import theme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
        body: 'var(--font-body-family)',
      },

      fontSize: {
        sm: ['var(--font-size-sm)', '1.25'],
        base: ['var(--font-size-base)', '1.5'],
        lg: ['var(--font-size-lg)', '1.75'],
        xl: ['var(--font-size-xl)', '1.475'],
      },

      fontWeight: {
        'w-heading': 'var(--font-heading-weight)',
        'w-body': 'var(--font-body-weight)',
      },

      colors: {
        default: 'rgb(var(--color-text) / <alpha-value>)',
        surface: 'rgb(var(--color-background) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
    },
  },

  plugins: [forms, typography],

  content: ['./layout/**/*.liquid', './sections/**/*.liquid', './snippets/**/*.liquid'],
}
