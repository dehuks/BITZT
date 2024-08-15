/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://plus.unsplash.com/premium_photo-1674506653774-6f51d6ebe799?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D')",
        'custom-image1':"url('https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3xlbnwwfHwwfHx8MA%3D%3D')",
      },
    },
  },
  plugins: [],
}