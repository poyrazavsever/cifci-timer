# Çifçi - Modern Tarım Uygulaması

OTTOQUA Teknoloji Takımının geliştirdiği Çifçi uygulaması, Türkiye'deki çiftçilerin günlük hayatlarını kolaylaştırmak ve tarımsal verimliliği artırmak için tasarlanmış modern bir mobil uygulamadır.

## Özellikler

- Modern ve kullanıcı dostu arayüz tasarımı
- Responsive ve etkileşimli landing page
- Framer Motion ile gelişmiş animasyonlar
- Özel scroll sistemi ve navigasyon
- Tam ekran bölümler ve dinamik içerik yönetimi
- Performans odaklı geliştirme yaklaşımı

## Teknoloji Yığını

- **Frontend Framework:** Next.js 15.3.4
- **UI Library:** React 19.0.0
- **Animasyon:** Framer Motion 12.22.0
- **Styling:** Tailwind CSS 4
- **Build Tool:** Next.js Build System
- **Package Manager:** PNPM

## Proje Yapısı

```
cifci/
├── components/          # Yeniden kullanılabilir UI bileşenleri
│   ├── About.js        # Hakkımızda bölümü
│   ├── CountdownTimer.js# Geri sayım bileşeni
│   ├── Designs.js      # UI tasarımları galerisi
│   ├── FAQ.js          # Sıkça sorulan sorular
│   └── HeroSection.js  # Ana sayfa hero bölümü
├── pages/              # Next.js sayfa rotaları
│   ├── _app.js         # Next.js uygulama wrapper'ı
│   ├── _document.js    # HTML döküman yapılandırması
│   └── index.js        # Ana sayfa ve sayfa yönetimi
├── public/             # Statik dosyalar
│   ├── designs/        # UI tasarım görselleri
│   ├── herosection.jpeg# Hero bölümü arka plan
│   └── logo.png        # Uygulama logosu
├── styles/             # Global stil dosyaları
│   └── globals.css     # Tailwind ve özel stiller
├── next.config.mjs     # Next.js yapılandırması
├── postcss.config.mjs  # PostCSS yapılandırması
└── package.json        # Proje bağımlılıkları
```

## Kurulum

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/poyrazavsever/cifci-timmer.git
   cd cifci
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   pnpm install
   ```

3. Geliştirme sunucusunu başlatın:
   ```bash
   pnpm dev
   ```

4. Tarayıcınızda açın:
   ```
   http://localhost:3000
   ```

## Bileşenler

### HeroSection
- Tam ekran arka plan görseli
- Responsive tasarım
- Optimize edilmiş görsel yükleme

### About
- Logo ve tanıtım metni
- Framer Motion animasyonları
- Responsive grid yapısı

### Designs
- Dönen UI tasarım galerisi
- Otomatik geçiş sistemi
- İnteraktif mockup gösterimi
- Animasyonlu sloganlar

### FAQ
- Accordion yapısı
- Smooth animasyonlar
- Dinamik içerik yönetimi
- Responsive tasarım

### CountdownTimer
- Gerçek zamanlı geri sayım
- Responsive dairesel tasarım
- Otomatik güncelleme sistemi

## Özelleştirme

### Tema Renkleri
Tailwind CSS yapılandırması üzerinden ana renkler özelleştirilebilir:
- Primary: Green-950
- Background: White
- Text: Gray-700
- Accent: Green-50

### Animasyonlar
Framer Motion yapılandırmaları components/ dizinindeki ilgili bileşenlerde bulunmaktadır. Animasyon süreleri ve efektleri buradan özelleştirilebilir.

## Performans

- Optimize edilmiş görsel yükleme
- Code splitting ve lazy loading
- Minimal bundle size
- SEO dostu yapı
- Yüksek Lighthouse skorları

## Katkıda Bulunma

1. Fork'layın
2. Feature branch oluşturun
3. Değişikliklerinizi commit'leyin
4. Branch'inizi push'layın
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için LICENSE dosyasına bakınız.

## İletişim

- Website: [https://ottoqua.com](https://ottoqua.com)
- Email: info@ottoqua.com

