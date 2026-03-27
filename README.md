# Portfolio

A React-based personal portfolio website.

## Project Structure

```
portfolio/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, icons, logos
│   ├── components/   # Reusable UI components
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── sections/     # Main page sections
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── pages/        # Page components
│   │   └── Home.js
│   ├── styles/       # CSS files
│   │   └── global.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

## Features

- Responsive design
- Multiple sections (Hero, About, Skills, Projects, Contact)
- Reusable components
- Global styling

## Getting Started

1. Fill in each section component with your content
2. Add images and assets to the `src/assets` folder
3. Customize the styling in `src/styles/global.css` and component-specific CSS
4. Update `package.json` with your project information

---

Built with React
