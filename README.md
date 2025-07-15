# Funny Things - Retro Portfolio

Bu proje, retro tarzında bir portföy web sitesidir. Next.js 15, React 19, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Retro Tasarım**: CRT monitör efektleri ve retro animasyonlar
- **Typing Animasyonu**: Karakter karakter yazma efekti
- **Ses Efektleri**: Retro ses efektleri ve beep sesleri
- **Matrix Rain**: Arka planda düşen karakterler
- **Responsive Tasarım**: Tüm cihazlarda uyumlu
- **Error Handling**: Kapsamlı hata yönetimi
- **Performance Optimized**: React best practices ile optimize edilmiş

## 🛠️ Teknolojiler

- **Next.js 15** - React framework
- **React 19** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Tailwind CSS 4** - Styling
- **Radix UI** - UI bileşenleri
- **Lucide React** - İkonlar

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
yarn install

# Geliştirme sunucusunu başlat
yarn dev

# Production build
yarn build

# Production sunucusunu başlat
yarn start

# Linting
yarn lint
```

## 🏗️ Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   ├── loading.tsx        # Loading sayfası
│   ├── not-found.tsx      # 404 sayfası
│   ├── global-error.tsx   # Global error sayfası
│   └── globals.css        # Global stiller
├── components/            # React bileşenleri
│   ├── HireMe.tsx        # Ana portföy bileşeni
│   ├── RetroTyping.tsx   # Typing animasyonu
│   ├── RetroTerminal.tsx # Terminal efekti
│   ├── RetroBackground.tsx # Arka plan efektleri
│   ├── RetroSound.tsx    # Ses efektleri hook'u
│   ├── ErrorBoundary.tsx # Hata sınırı
│   └── ui/               # UI bileşenleri
└── lib/                  # Yardımcı fonksiyonlar
```

## 🎨 Bileşenler

### RetroTyping

Karakter karakter yazma animasyonu. Ses efektleri ile birlikte çalışır.

### RetroTerminal

Terminal benzeri komut çıktıları. Portföy bilgilerini gösterir.

### RetroBackground

Matrix rain efekti ve CRT scanlines ile retro arka plan.

### RetroSound

Web Audio API kullanarak retro ses efektleri üretir.

## 🔧 Geliştirme

### Kod Standartları

- TypeScript strict mode
- ESLint ile kod kalitesi
- Prettier ile kod formatı
- React best practices

### Performance Optimizasyonları

- useCallback ve useMemo kullanımı
- Lazy loading
- Error boundaries
- Optimized re-renders

## 🚀 Deployment

Bu proje Vercel'de deploy edilmek üzere optimize edilmiştir:

```bash
# Vercel CLI ile deploy
vercel

# Veya GitHub'dan otomatik deploy
```

## 📝 Lisans

MIT License

## 👨‍💻 Geliştirici

**Hicran Apaydin** - Full Stack Developer

- 📧 hicran.apaydin@gmail.com
- 🌐 github.com/hicrandn
