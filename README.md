# Nanachu Wedding Invitation

A beautiful, interactive wedding invitation website built with React and Framer Motion. This project features elegant animations, a countdown timer, RSVP form, and responsive design.

## 🌟 Features

- **Interactive Hero Section** with animated floating photos and countdown timer
- **Family Photo Gallery** with scroll animations
- **Ceremony & Reception Details** with location links
- **RSVP Form** for guest confirmation
- **Dress Code Guidelines** with visual inspiration
- **Pinterest Integration** for style inspiration
- **FAQ Section** with expandable answers
- **Photo Lightbox** - Click on photos to expand and view in full screen
- **Responsive Design** optimized for all devices
- **Smooth Animations** powered by Framer Motion

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Framer Motion** - Advanced animations and transitions
- **React Intersection Observer** - Scroll-triggered animations
- **Yet Another React Lightbox** - Photo gallery lightbox functionality
- **CSS3** - Custom styling with responsive design
- **Google Fonts** - Typography (Inter font family)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nanachu-wedding-invitation
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.js
│   │   └── Hero.css
│   ├── Family/
│   │   ├── Family.js
│   │   └── Family.css
│   ├── Ceremony/
│   │   ├── Ceremony.js
│   │   └── Ceremony.css
│   ├── Confirmation/
│   │   ├── Confirmation.js
│   │   └── Confirmation.css
│   ├── DressCode/
│   │   ├── DressCode.js
│   │   └── DressCode.css
│   ├── InspirationBoard/
│   │   ├── InspirationBoard.js
│   │   └── InspirationBoard.css
│   ├── FAQ/
│   │   ├── FAQ.js
│   │   └── FAQ.css
│   └── Footer/
│       ├── Footer.js
│       └── Footer.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🎨 Customization

### Colors
The color scheme can be modified in `src/App.css`:
- Primary: `#4d3e2a` (Dark brown)
- Secondary: `#79674f` (Medium brown)
- Background: `#fef7ed` (Cream)
- Accent: `#b08f73` (Light brown)

### Wedding Details
Update the wedding information in the respective components:
- **Date & Time**: `src/components/Hero/Hero.js` and `src/components/Ceremony/Ceremony.js`
- **Locations**: `src/components/Ceremony/Ceremony.js`
- **Names**: `src/components/Hero/Hero.js`
- **Photos**: Replace image URLs throughout the components

### Form Integration
The RSVP form in `src/components/Confirmation/Confirmation.js` currently logs to console. To integrate with a backend:

1. Replace the `handleSubmit` function with your API call
2. Add proper form validation
3. Implement success/error states

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🎭 Animations

The project uses Framer Motion for:
- **Entrance animations** when sections come into view
- **Hover effects** on interactive elements
- **Scroll-triggered animations** using Intersection Observer
- **Page transitions** and micro-interactions

## 🚀 Deployment

### 🌐 Acceso en Red Local
Para acceder desde otros dispositivos en tu red:

```bash
# Opción 1: Usar script personalizado
npm run start:host

# Opción 2: Usar script de PowerShell (Windows)
.\start-network.ps1
```

Tu sitio estará disponible en:
- Local: `http://localhost:3000`
- Red: `http://TU-IP-LOCAL:3000`

### 🌍 Deploy Público

#### Netlify (Recomendado)
```bash
# Automático con script
.\deploy-netlify.ps1

# Manual
npm run build
# Arrastra la carpeta 'build' a netlify.com
```

#### Vercel
```bash
# Automático con script
.\deploy-vercel.ps1

# Manual
npm install -g vercel
vercel --prod
```

#### Ngrok (Temporal para testing)
```bash
# Terminal 1
npm run start:host

# Terminal 2
ngrok http 3000
```

### Build for Production
```bash
npm run build
```

## 📋 Available Scripts

- `npm start` - Runs the development server
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎯 Key Components

### Hero Component
- Countdown timer to wedding date
- Animated floating photos
- Scrolling ticker with multilingual text
- Call-to-action button

### Family Component
- Animated photo gallery
- Blessing message from parents
- Scroll-triggered animations

### Ceremony Component
- Ceremony and reception details
- Interactive location links
- Time and venue information

### Confirmation Component
- RSVP form with validation
- Scrolling photo gallery
- Important notice section

### FAQ Component
- Expandable accordion interface
- Common wedding questions
- Smooth animations

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for personal use. Feel free to use it as inspiration for your own wedding website.

## 🤝 Contributing

This is a personal wedding invitation project, but suggestions and improvements are welcome!

## 📞 Support

For questions or support, please contact the development team.

---

Made with ❤️ for Alberto & Angelica's special day