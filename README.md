# 🎨 PLP Task Manager - React.js & Tailwind CSS Assignment

A modern, responsive task management application built with React.js, Tailwind CSS, and integrated with external APIs. This project demonstrates component architecture, state management, hooks usage, and API integration.

## 🚀 Features

- **Task Management**: Create, complete, and delete tasks with local storage persistence
- **API Integration**: Fetch and display data from JSONPlaceholder API with search and pagination
- **Responsive Design**: Beautiful interface that works on mobile, tablet, and desktop
- **Dark/Light Mode**: Theme switching with system preference detection
- **Modern UI**: Built with Tailwind CSS for consistent, accessible design
- **React Router**: Client-side routing for seamless navigation

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **JSONPlaceholder API** - External API for data fetching
- **Local Storage** - Data persistence

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd react-task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.jsx       # Customizable button component
│   ├── Card.jsx         # Card layout component
│   ├── Navbar.jsx       # Navigation component
│   ├── Footer.jsx       # Footer component
│   ├── Layout.jsx       # Main layout wrapper
│   ├── TaskManager.jsx  # Task management component
│   └── ApiData.jsx      # API integration component
├── pages/               # Page components
│   ├── Home.jsx         # Home page
│   └── Tasks.jsx        # Tasks page
├── context/             # React context providers
│   └── ThemeContext.jsx # Theme management context
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎯 Key Features Implemented

### 1. Component Architecture
- **Button Component**: Reusable with variants (primary, secondary, danger) and sizes
- **Card Component**: Flexible container with hover effects and padding options
- **Navbar Component**: Responsive navigation with mobile menu
- **Footer Component**: Links, social media, and copyright information

### 2. State Management & Hooks
- **useState**: Managing component state (tasks, filters, search terms)
- **useEffect**: Side effects (localStorage, API calls)
- **useContext**: Theme management across components
- **Custom Hook**: `useLocalStorageTasks` for task persistence

### 3. API Integration
- **JSONPlaceholder API**: Fetching posts with pagination
- **Loading States**: Spinner and skeleton loading
- **Error Handling**: User-friendly error messages with retry functionality
- **Search Functionality**: Real-time filtering of API data
- **Pagination**: Navigate through multiple pages of data

### 4. Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Tailwind CSS**: Utility classes for consistent styling
- **Dark Mode**: Complete theme switching with localStorage persistence
- **Animations**: Smooth transitions and hover effects

## 🎨 Design Features

- **Modern UI**: Clean, professional interface
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Animations**: Smooth transitions and micro-interactions
- **Typography**: Consistent font hierarchy and spacing
- **Color Scheme**: Carefully chosen color palette for both light and dark modes

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Deployment

The application can be deployed to various platforms:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your GitHub repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📸 Screenshots

*Note: Screenshots would be added here showing the application in both light and dark modes, on different screen sizes, and demonstrating the key features.*

## 🔧 Customization

### Adding New Components
1. Create component file in `src/components/`
2. Follow the existing pattern with PropTypes
3. Use Tailwind classes for styling
4. Export as default

### Modifying Themes
- Edit `src/context/ThemeContext.jsx` for theme logic
- Update `tailwind.config.js` for custom colors
- Modify `src/index.css` for global styles

### API Integration
- Update `src/components/ApiData.jsx` for different endpoints
- Modify pagination logic as needed
- Add new search/filter functionality

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   npm run dev -- --port 3001
   ```

2. **Dependencies not installing**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   npm run lint
   # Fix any linting errors
   npm run build
   ```

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the Power Learn Project (PLP) MERN Stack curriculum.

## 👨‍💻 Author

**Student Name** - *Power Learn Project Student*

---

*This project was completed as part of Week 3 of the MERN Stack development course, demonstrating proficiency in React.js, JSX, Tailwind CSS, component architecture, state management, and API integration.* 