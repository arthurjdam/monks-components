/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      yellow: {
        100: "#270F0F",
        500: "#FFCB16",
        900: "#FFF0A9",
      },
      orange: {
        100: "#360E0B",
        500: '#FB961F',
        900: '#FFDDAB',
      },
      red: {
        100: '#440035',
        500: '#FF245B',
        900: '#FFCACA',
      },
      pink: {
        100: '#371534',
        500: '#FF2CE4',
        900: '#FFB2E8',
      },
      purple: {
        100: '#3C0C60',
        500: '#7D26C9',
        900: '#DFBBFE',
      },
      blue: {
        100: '#001D38',
        500: '#4F24EE',
        900: '#CBF6FF',
      },
      teal: {
        100: '#0D3842',
        500: '#4DBAC1',
        900: '#BCFFEF',
      },
      green: {
        100: '#002838',
        500: '#00DC7C',
        900: '#E1FF9A',
      },
      tan: {
        100: '#2D2D2D',
        500: '#6C6962',
        900: '#EAE8E4',
      },
      steel: {
        100: '#2C2D38',
        500: '#656982',
        900: '#DEDFE5',
      },
      grey: {
        500: '#E4E4E5',
      }
    },
    fontFamily: {
      sans: [],
      serif: [],
    },
    extend: {},
  },
  plugins: [],
};
