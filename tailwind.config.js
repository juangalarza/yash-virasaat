/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
      screens: {
        'xsm': '320px',
         // => @media (min-width: 300px) { ... }

        'sm': '600px',
        // => @media (min-width: 600px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1440px',
        // => @media (min-width: 1440px) { ... }

      }, 
    
    extend: {  
       animation: {
      blob: 'blob 10s infinite',
        
      
    },

    keyframes: {
      blob: {
        '0%, 100%': {
          transform: 'translate(0, 0) scale(1)',
        },
        '25%': {
          transform: 'translate(20px, -50px) scale(1.1)',
        },
        '50%': {
          transform: 'translate(0, 20px) scale(1)',
        },
        '75%': {
          transform: 'translate(-20px, -15px) scale(0.9)',
        },
        },
        
      },
    },
  },
  plugins: [],
  }



