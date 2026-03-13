# Bioprev Angola — Website Institucional

## Visão Geral
Website institucional da Bioprev Angola, empresa de controle de pragas, desinfestação, limpeza profissional, recolha de resíduos, tratamento de água e jardinagem. Site totalmente em Português, focado no mercado angolano.

## Stack
- **Frontend**: React + TypeScript + Vite + TailwindCSS + Wouter (routing)
- **Backend**: Express (apenas API mínima, sem DB — site institucional)
- **SEO**: react-helmet-async para meta tags dinâmicas por página
- **UI**: Lucide React (ícones), Embla Carousel, Framer Motion (animações)

## Estrutura
```
client/
  index.html              # HTML base com meta tags SEO, lang="pt-AO"
  public/
    robots.txt            # Ficheiro robots para crawlers
    sitemap.xml           # Sitemap com todas as 28 páginas
    favicon.png
    opengraph.jpg
  src/
    components/
      SEOHead.tsx         # Componente SEO reutilizável (title, OG, JSON-LD)
      layout/Header.tsx   # Header com skip navigation e aria labels
      layout/Footer.tsx
      home/               # Hero, Services, Reviews, Expertise, Sectors, Partnerships, LogoCarousel
    pages/
      Home.tsx
      Contact.tsx
      Locations.tsx       # 3 cidades com Google Maps
      not-found.tsx       # 404 em português com SEOHead noindex
      about/              # About, History, Careers
      services/           # AllServices, ServicePageTemplate, Disinfestation, Pests, Cleaning, Waste, Water, Gardening
      sectors/            # AllSectors, SectorPageTemplate, 8 setores
      blog/               # BlogList, BlogPost
      national-accounts/  # AllNationalAccounts, Overview, Solutions
server/
  index.ts
  routes.ts
shared/
  schema.ts
```

## SEO
- **react-helmet-async**: Títulos e descriptions dinâmicos para cada uma das 28 páginas
- **JSON-LD**: Organization, WebSite, LocalBusiness na Home; BreadcrumbList + Service em cada página
- **Sitemap**: `client/public/sitemap.xml`
- **Robots**: `client/public/robots.txt`
- **Lazy loading**: Todas as imagens abaixo do fold têm `loading="lazy"`
- **Acessibilidade**: Skip navigation, aria-labels, alt texts descritivos

## Regras de Design (CRÍTICO)
- **Brand**: "Bioprev" — logo em `@/assets/images/logo.png`
- **Cores**: Gold `#f2c92f`, blue `#007cc3/#0077c0`, dark navy `#001d3d`
- **Botões**: NUNCA usar `<Link><Button variant="outline">` (causa fundo escuro). Usar `<Link className="inline-block border-2 ...">` directamente
- **Backgrounds**: Apenas `bg-white` / `bg-[#f8f9fa]` / `bg-[#f2f5f7]` alternados. Cards: `border-t-4 border-[#f2c92f] shadow-sm`. CTA azul só no fundo da página
- **Angola only**: Sem referências internacionais, sem "90 países", sem certificações europeias

## Contactos
- WhatsApp: `wa.me/244928737888`
- Email: `geral@bioprev.com` / `dp.comercial@bioprevangola.com`
- Luanda: `+244 928 737 888` / `+244 947 059 109` — Rua Urbanova, C/N, Benfica
- Benguela: `+244 927 375 940` / `+244 912 289 858` — Rua do Compão
- Huambo: `+244 912 289 858`

## Total de Páginas: 28
Home, Contact, Locations, About×3, Services×7, Sectors×9, Blog×2, NationalAccounts×3, 404
