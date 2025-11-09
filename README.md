# FinBiz - Financial Solutions Platform

A modern, responsive financial solutions platform built with React, Tailwind CSS, and Clean Architecture principles.

## 🌟 Features

- **📊 Analytics Dashboard** - Real-time financial analytics and insights
- **💰 Expense Management** - Track and optimize team expenses
- **👥 Team Collaboration** - Seamless collaboration tools
- **📈 Business Growth** - Metrics and KPIs visualization
- **💳 Pricing Plans** - Flexible subscription options
- **🌓 Dark Mode** - Elegant light/dark theme support
- **📱 Responsive Design** - Works perfectly on all devices
- **⚡ Fast Performance** - Optimized with Vite and SWC

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev

# Build for production
npm run build
# or
bun build
```

The app will be available at `http://localhost:5173`

## 📂 Project Structure

```
src/
├── components/
│   ├── shared/          # Reusable UI components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Page sections
│   └── ui/              # shadcn/ui components
├── utils/               # Data and helper functions
├── contexts/            # React Context providers
├── features/            # Feature-based components
├── hooks/               # Custom React hooks
└── services/            # API and business logic
```

## 🏗️ Architecture

This project follows **Clean Architecture** principles:

- **Separation of Concerns**: UI, data, and logic are clearly separated
- **Component Decomposition**: Large components split into smaller, focused pieces
- **Data Centralization**: All data in `utils/` folder
- **Reusability**: Shared components used across the app
- **Type Safety**: PropTypes validation on all components

See [REFACTORING_DOCUMENTATION.md](./REFACTORING_DOCUMENTATION.md) for detailed architecture information.

## 🎨 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **State Management**: React Context
- **Type Checking**: PropTypes
- **Code Quality**: ESLint

## 📦 Key Components

### Shared Components
- `AnalyticsCard` - Analytics display with charts
- `PricingCard` - Pricing plan cards
- `TestimonialCard` - Customer testimonial cards
- `MetricCard` - Metric display with trends
- `BalanceCard` - Balance information
- `EmployeeProgressCard` - Progress visualization
- `MobileMenu` - Mobile navigation

### Sections
- `HeroSection` - Landing hero with CTA
- `FeaturesSection` - Product features showcase
- `StatsSection` - Dashboard-style statistics
- `TestimonialsSection` - Customer reviews
- `PricingSection` - Pricing plans
- `CtaSection` - Call-to-action

## 🎯 Clean Code Practices

✅ **Single Responsibility** - Each component has one clear purpose
✅ **DRY Principle** - No code duplication
✅ **Consistent Naming** - Clear, descriptive names
✅ **PropTypes Validation** - Type safety for all props
✅ **Documentation** - JSDoc comments on all components
✅ **Accessibility** - ARIA labels and semantic HTML
✅ **Responsive Design** - Mobile-first approach

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Build variants
npm run build:dev    # Build in development mode
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Theme Customization

The app uses Tailwind CSS with custom design tokens in `src/styles/tokens.css`.

Colors are defined using CSS variables and support light/dark modes:
- Primary: `#A3DC2F`
- Background: Adaptive based on theme
- Text: Adaptive based on theme

## 🚧 Future Enhancements

- [ ] Unit tests with Jest/React Testing Library
- [ ] E2E tests with Playwright
- [ ] Storybook for component documentation
- [ ] API integration layer
- [ ] Advanced analytics features
- [ ] Multi-language support (i18n)

## 📄 License

All rights reserved © 2025 FinBiz

## 🤝 Contributing

This is a proprietary project. For contributions, please contact the development team.

## 📞 Support

For support and questions, please reach out to the development team.

---

**Built with ❤️ using React and Tailwind CSS**
