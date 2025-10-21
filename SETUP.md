# Innovative Developer - Quick Start Guide

## 🚀 Quick Start (Windows)

### Option 1: Using npm

```bash
# Navigate to the project directory
cd "G:\Kunal\MCA I\MCA .( INT) 2020-2025\Innovative Developer"

# Install dependencies
npm install

# Start the development server
npm start
```

### Option 2: Using yarn

```bash
# Navigate to the project directory
cd "G:\Kunal\MCA I\MCA .( INT) 2020-2025\Innovative Developer"

# Install dependencies
yarn install

# Start the development server
yarn start
```

## 📦 What Gets Installed

The following packages will be installed:
- **React & React DOM** (18.2.0) - Core framework
- **GSAP** (3.12.5) - Animation library
- **@gsap/react** (2.1.0) - GSAP React hooks
- **Framer Motion** (10.18.0) - Additional animations
- **React Icons** (5.0.1) - Icon library
- **Tailwind CSS** (3.4.1) - Styling framework
- **PostCSS & Autoprefixer** - CSS processing

## ⚡ First Time Setup

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Recommended: LTS version (v18 or higher)

2. **Open Terminal** (Git Bash or PowerShell)
   ```bash
   # Check Node.js installation
   node --version
   
   # Check npm installation
   npm --version
   ```

3. **Navigate to Project Directory**
   ```bash
   cd "G:\Kunal\MCA I\MCA .( INT) 2020-2025\Innovative Developer"
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```
   
   This will take 2-3 minutes. You'll see a progress bar.

5. **Start Development Server**
   ```bash
   npm start
   ```
   
   The browser will automatically open at http://localhost:3000

## 🎨 Development Tips

- The app auto-reloads when you save changes
- Check the terminal for any errors
- Press `Ctrl + C` to stop the development server
- Use Chrome DevTools for debugging

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain optimized files
```

## 🐛 Troubleshooting

### Port 3000 Already in Use?
```bash
# Kill the process on port 3000 (Windows)
npx kill-port 3000

# Or use a different port
set PORT=3001 && npm start
```

### Dependencies Not Installing?
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found Errors?
```bash
# Reinstall specific package
npm install gsap @gsap/react

# Or reinstall all dependencies
npm install
```

## 📞 Support

If you encounter any issues:
1. Check the terminal for error messages
2. Ensure Node.js version is 14+
3. Try clearing cache and reinstalling
4. Check the README.md for detailed documentation

---

**Happy Coding! 🚀**
