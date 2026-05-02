# Amazon Clone

A responsive e-commerce web application built with React that replicates core Amazon shopping functionality including product browsing, search, cart management, and user authentication.

## 🛒 Project Overview

This project is a functional clone of Amazon's e-commerce platform. Users can browse products by category, view product details, add items to their shopping cart, and proceed to checkout. The interface mimics Amazon's signature dark header with navigation, search, and account features.

## ✨ Features

- **Header Navigation** - Responsive navbar with logo, search bar, address selector, sign-in, returns, and shopping cart
- **Pakistan Flag** - Official green flag with white vertical stripe and crescent-star emblem, displayed in navbar
- **Address Selection with Google Maps** - Click "Select your address" to navigate to address page where users can:
  - Manually enter their delivery address
  - Open Google Maps in a new browser tab to find their location
  - Save address to browser localStorage for persistence across sessions
  - View saved address directly in navbar (shows "Deliver to [address]" when set)
- **Product Display** - Grid layout showcasing products with images, titles, prices, and ratings
- **Category Filtering** - Browse products by categories (electronics, fashion, home, etc.)
- **Product Details Page** - Individual product view with full information
- **Shopping Cart** - View and manage cart items with total calculation
- **Sign-In Page** - User authentication interface
- **Responsive Design** - Mobile-friendly interface that adapts to different screen sizes

## 🛠️ Tech Stack

- **Framework**: React 17.0.2
- **Routing**: React Router DOM v5.2.0
- **UI Library**: Material-UI v4.11.4
- **Icons**: Material-UI Icons v4.11.2
- **Backend**: Firebase v8.6.8 (authentication & realtime features)
- **HTTP Client**: Axios v0.21.1
- **Bundler**: Create React App (react-scripts 4.0.3)
- **Styling**: CSS3 with Flexbox layout

## 📁 Project Structure

```
amazon-clone/
├── public/
│   ├── logo.png              # Logo image
│   ├── indian-flag.png       # Flag icon (replaced with inline SVG)
│   └── favicon.png           # Favicon
├── src/
│   ├── components/
│   │   ├── Address.jsx       # Address selection page
│   │   ├── Banner.jsx        # Homepage banner
│   │   ├── BigCard.jsx       # Large promotional card
│   │   ├── Cart.jsx          # Shopping cart page
│   │   ├── Card.jsx          # Product card component
│   │   ├── DisplayPage.jsx   # Product detail page
│   │   ├── Header.jsx        # Main navigation header
│   │   ├── MainBody.jsx      # Homepage main content
│   │   ├── MakeCard.jsx      # Product card creation handler
│   │   ├── Row.jsx           # Category row component
│   │   ├── SideMenu.jsx      # Mobile side navigation
│   │   └── UserLog.jsx       # Sign-in page
│   ├── StateProvider.js      # React Context for global state
│   ├── reducer.js            # State reducer function
│   ├── firebase.js           # Firebase configuration
│   ├── fakeStore.js          # Mock product data
│   ├── App.js                # Main app component with routes
│   └── index.js              # Entry point
├── public/
│   └── css/
│       ├── header.css        # Header styling
│       ├── Log.css           # Log/button styling
│       ├── Card.css          # Product card styles
│       ├── displaypage.css   # Product page styles
│       ├── Cart.css          # Cart page styles
│       ├── Sidemenu.css      # Side menu styles
│       └── Responsive.css    # Media queries
├── .env                      # Environment variables (NODE_OPTIONS)
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js v16 or higher (v24 requires `--openssl-legacy-provider`)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
The project uses a `.env` file that's already configured. No additional setup needed for basic development.

### Development

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

**Note for Node.js v17+**: The project uses `cross-env` to set the OpenSSL provider automatically. No manual environment configuration required.

### Production Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

### Testing

```bash
npm test
```

Launches the test runner.

## 🌐 Live Demo

**View the deployed app:** [Coming Soon - Vercel Deployment Link]

## 📝 Key Implementation Details

### State Management
- Uses React Context API with `useReducer` for global state (basket/cart)
- `StateProvider.js` wraps the application to share state across components

### Routing
- React Router DOM v5 for navigation between pages
- Routes: `/`, `/cart`, `/Sign-In`, `/address`, `/displaypage/:category/:id`

### Firebase Integration
- Configured for user authentication
- Firestore database for product and order management

### Address Management
- Google Maps integration via external browser window
- localStorage for persisting user address
- Address displayed directly in navbar after selection
- Dedicated `/address` page with form and "Open Google Maps" button

### CSS Features
- Inline styles for dynamic components
- CSS modules for scoped styling
- Responsive design with media queries
- Flexbox-based layouts
- Pakistani flag embedded as inline SVG data URI

### OpenSSL Configuration
- Uses `cross-env` to set `NODE_OPTIONS=--openssl-legacy-provider`
- Required for Create React App compatibility with Node.js v17+

## 🔧 Configuration

### Firebase Setup
To connect Firebase:
1. Update credentials in `src/firebase.js`
2. Ensure Firebase project has required collections:
   - `products` - product listings
   - `basket` - cart items
   - `users` - user data

### Product Data
Mock product data is stored in `src/fakeStore.js`. Replace with Firebase or API calls for production.

## 🎯 Future Improvements

- [ ] Connect to real product API
- [ ] Implement checkout flow
- [ ] Add payment gateway integration
- [ ] User order history
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Real-time inventory updates

## 📚 Learning Resources

This project was built while learning:
- React hooks (useState, useEffect, useContext, useReducer)
- React Router for SPA navigation
- Material-UI component library
- Firebase authentication and Firestore
- CSS Flexbox and responsive design
- State management patterns

## 👨‍💻 Author

Created as a React learning project. Feel free to fork and modify.

## 📄 License

MIT License - feel free to use this project for learning.

---

**Note**: This is a demonstration project for educational purposes only and is not affiliated with Amazon.
