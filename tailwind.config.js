// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}', 
//     './public/index.html', 
//   ],
//    theme: {
//     extend: {
//       backgroundSize: {
//         '200%': '200% 100%',
//       },
//       animation: {
//         shine: 'shine 2s linear infinite',
//       },
//       keyframes: {
//         shine: {
//           '0%': { backgroundPosition: '200% center' },
//           '100%': { backgroundPosition: '-200% center' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html', 
  ],
   theme: {
  extend: {
    animation: {
      shine: 'shine 2s linear infinite',
    },
    keyframes: {
      shine: {
        '0%': { backgroundPosition: '200% center' },
        '100%': { backgroundPosition: '-200% center' },
      },
    },
  },
},
  plugins: [],
};
