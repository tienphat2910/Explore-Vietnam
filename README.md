# 🌏 Explore Vietnam - Du lịch Việt Nam

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)

> A stunning, cinematic Vietnam tourism landing page with bilingual support, interactive map, and modern animations.

> Trang đích du lịch Việt Nam tuyệt đẹp với hỗ trợ song ngữ, bản đồ tương tác và hoạt hình hiện đại.

---

## ✨ Features / Tính năng

### 🌟 Core Features

- **🌐 Bilingual Support** - English & Vietnamese / Hỗ trợ song ngữ Anh & Việt
- **🗺️ Interactive Map** - Clickable provinces with info panels / Bản đồ tương tác với các tỉnh có thể click
- **📱 Mobile Responsive** - Perfect on all devices / Hoàn hảo trên mọi thiết bị
- **🎨 Modern UI/UX** - Cinematic design with smooth animations / Thiết kế điện ảnh với hoạt hình mượt mà
- **⚡ Performance Optimized** - Lazy loading, image optimization / Tối ưu hiệu suất với lazy loading

### 🎭 Animations & Interactions

- **Framer Motion** - Smooth scroll animations & hover effects / Hoạt hình cuộn mượt mà
- **Active Navigation** - Animated underlines & smooth transitions / Điều hướng active với gạch ngang hoạt hình
- **Scroll-triggered Animations** - Elements animate as you scroll / Phần tử hoạt hình khi cuộn
- **Loading States** - Beautiful skeleton loaders / Trạng thái tải đẹp mắt

### 🛠️ Technical Features

- **Next.js 16** - App Router with latest features / App Router với tính năng mới nhất
- **TypeScript** - Full type safety / An toàn kiểu dữ liệu hoàn toàn
- **Tailwind CSS v4** - Utility-first styling / Styling tiện ích

### Internationalization

- **next-intl** - Complete internationalization solution
- **Intlayer** - Automated translation management and testing
- **Bilingual Support** - English & Vietnamese with automated sync

---

## 🚀 Tech Stack / Công nghệ sử dụng

### Frontend Framework

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript

### Styling & Animation

- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icons

### Maps & Interactions

- **Leaflet + React-Leaflet** - Interactive maps
- **Swiper** - Modern touch slider

### Internationalization

- **next-intl** - Complete internationalization solution

---

## 📁 Project Structure / Cấu trúc dự án

```
explore-vietnam/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalized routes
│   │   ├── layout.tsx           # Root layout with providers
│   │   ├── page.tsx             # Main landing page
│   │   └── loading.tsx          # Loading UI
│   ├── globals.css              # Global styles
│   └── favicon.ico              # App favicon
├── components/                   # Reusable components
│   ├── Header.tsx               # Navigation with active states
│   ├── Hero.tsx                 # Hero section with CTA
│   ├── VietnamMap.tsx           # Interactive map component
│   ├── DestinationsSection.tsx  # Destinations carousel
│   ├── CuisineSection.tsx       # Vietnamese cuisine gallery
│   ├── CultureTimeline.tsx      # Cultural timeline
│   ├── TravelInfo.tsx           # Travel information cards
│   ├── Testimonials.tsx         # Customer testimonials
│   ├── Footer.tsx               # Site footer
│   └── Card.tsx                 # Reusable card component
├── messages/                     # Internationalization files
│   ├── en.json                  # English translations
│   └── vi.json                  # Vietnamese translations
├── public/                       # Static assets
│   └── images/                  # Optimized images
├── middleware.ts                 # Next.js middleware
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies & scripts
```

---

## 🛠️ Getting Started / Bắt đầu

### Prerequisites / Yêu cầu

- **Node.js** 18+ / Node.js 18+
- **npm** or **yarn** or **pnpm** / npm hoặc yarn hoặc pnpm

### Installation / Cài đặt

1. **Clone the repository** / Clone repository

   ```bash
   git clone https://github.com/tienphat2910/Explore-Vietnam.git
   cd explore-vietnam
   ```

2. **Install dependencies** / Cài đặt dependencies

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server** / Chạy server phát triển

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** / Mở trình duyệt
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Switch languages: [http://localhost:3000/en](http://localhost:3000/en) or [http://localhost:3000/vi](http://localhost:3000/vi)

### Build for Production / Build cho production

```bash
npm run build
npm run start
```

### Intlayer Commands / Lệnh Intlayer

```bash
# Build translation dictionaries
npm run intlayer:build

# Test for missing translations
npm run intlayer:test

# Watch for translation changes
npm run intlayer:watch
```

---

## 🎨 Design System / Hệ thống thiết kế

### Color Palette / Bảng màu

- **Primary**: Emerald Green (#10B981) - Vietnamese nature
- **Secondary**: Ocean Turquoise (#06B6D4) - Coastal beauty
- **Accent**: Royal Yellow (#F59E0B) - Golden culture
- **Support**: Lotus Pink (#EC4899) - Traditional flowers
- **Neutral**: Pure White (#FFFFFF) & Charcoal Gray (#374151)

### Typography / Phông chữ

- **Headings**: Serif font for elegance
- **Body**: Clean sans-serif for readability
- **Sizes**: Responsive scaling (mobile → desktop)

### Components / Thành phần

- **Cards**: Neumorphism with subtle shadows
- **Buttons**: Rounded with hover animations
- **Navigation**: Smooth active state transitions
- **Loaders**: Skeleton states for better UX

---

## 🌍 Internationalization / Quốc tế hóa

The app supports two languages:

- **English** (`/en`) - Default language
- **Vietnamese** (`/vi`) - Native language

### Adding New Languages / Thêm ngôn ngữ mới

1. Create new JSON file in `messages/` folder
2. Add language to `middleware.ts`
3. Update navigation links

### Translation Structure / Cấu trúc dịch

```json
{
  "nav": {
    "about": "About Vietnam",
    "map": "Interactive Map",
    "destinations": "Destinations"
  },
  "hero": {
    "title": "Discover Vietnam",
    "subtitle": "Your journey begins here"
  }
}
```

---

## 📱 Mobile Optimization / Tối ưu mobile

### Responsive Design / Thiết kế responsive

- **Breakpoint**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly**: 44px minimum touch targets
- **Performance**: Optimized images & lazy loading

### Mobile Navigation / Điều hướng mobile

- **Hamburger menu** with backdrop blur
- **Swipe gestures** for carousels
- **Bottom-safe** area for modern devices

---

## 🚀 Performance Features / Tính năng hiệu suất

### Image Optimization / Tối ưu hình ảnh

- **Next.js Image** component with automatic optimization
- **WebP format** with fallbacks
- **Lazy loading** with blur placeholders
- **Responsive images** for all screen sizes

### Code Splitting / Chia tách code

- **Dynamic imports** for route-based splitting
- **Component lazy loading** with Suspense
- **Bundle analysis** for optimization

### Animation Performance / Hiệu suất hoạt hình

- **GPU acceleration** with transform properties
- **RequestAnimationFrame** for smooth animations
- **Reduced motion** support for accessibility

---

## 🤝 Contributing / Đóng góp

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines / Nguyên tắc phát triển

- Use **TypeScript** for type safety
- Follow **ESLint** rules
- Write **meaningful commit messages**
- Test on **multiple devices**
- Ensure **accessibility compliance**

---

## 📄 License / Giấy phép

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments / Lời cảm ơn

- **Unsplash** - Beautiful photography
- **Leaflet** - Open-source maps
- **Framer Motion** - Amazing animations
- **Tailwind CSS** - Utility-first styling
- **Next.js** - The React framework
- **Intlayer** - Advanced internationalization
- **next-intl** - Internationalization framework

---

## 📞 Contact / Liên hệ

**Tien Phat** - tienphat2910@gmail.com

**Project Link**: [https://github.com/tienphat2910/Explore-Vietnam](https://github.com/tienphat2910/Explore-Vietnam)

---

<div align="center">

**Made with ❤️ for Vietnam's beauty**

**Được tạo với ❤️ cho vẻ đẹp Việt Nam**

🇻🇳 **Explore Vietnam - Khám phá Việt Nam** 🇻🇳

</div>
