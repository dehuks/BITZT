/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

      extend: {
        backgroundImage: {
            'custom-image': "url('https://plus.unsplash.com/premium_vector-1712161707724-52d6d007b608?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D')",
            'custom-image1': "url('https://i.pinimg.com/564x/e5/5d/39/e55d39aa090868ac9e833c185aad57e0.jpg')",

          },
      },
    },
    plugins: [],
  }