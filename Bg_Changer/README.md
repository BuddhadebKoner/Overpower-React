# Bg Changer Simple App
## Create Project
```bash
npm create vite@latest my-project -- --template react
cd my-project
```
### Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p  
```

### Configure your template paths
```js
// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```
### Add Tailwind CSS to your CSS
```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
