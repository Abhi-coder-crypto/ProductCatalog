# Design Guidelines: Forever Living Products Digital Catalogue

## Design Approach

**Selected Approach**: Reference-Based (E-commerce Product Catalogue)

Drawing inspiration from modern e-commerce platforms like Shopify and health/wellness product catalogues, this design prioritizes visual product presentation with clean navigation and efficient information hierarchy. The bright theme aligns with Forever Living's health-focused brand identity, creating an inviting, trustworthy shopping experience.

**Key Design Principles**:
- Visual clarity through generous whitespace and structured product grids
- Fast visual scanning with clear category organization
- Trust-building through professional product photography presentation
- Efficient navigation with minimal clicks to reach product details

---

## Typography

**Font Selection**: Google Fonts via CDN
- **Primary**: Inter (400, 500, 600, 700) - Clean, modern sans-serif for UI and body text
- **Accent**: Poppins (600, 700) - Bold, friendly headings for category names and CTAs

**Type Scale**:
- **Hero/H1**: text-5xl md:text-6xl lg:text-7xl (font-bold, Poppins)
- **Category Headings/H2**: text-3xl md:text-4xl lg:text-5xl (font-semibold, Poppins)
- **Product Names/H3**: text-xl md:text-2xl (font-semibold, Inter)
- **Section Headings/H4**: text-lg md:text-xl (font-medium, Inter)
- **Body Text**: text-base (font-normal, Inter)
- **Labels/Meta**: text-sm (font-medium, Inter)
- **Captions**: text-xs (font-normal, Inter)

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16
- Micro spacing (gaps, borders): 2, 4
- Component padding: 4, 6, 8
- Section spacing: 12, 16
- Page margins: 8, 12, 16

**Grid Structure**:
- **Container**: max-w-7xl mx-auto px-4 md:px-8
- **Homepage Categories**: grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8
- **Product Grid**: grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6
- **Product Detail**: Two-column layout (lg:grid-cols-2) for image + info

**Responsive Breakpoints**:
- Mobile-first approach
- Stack to single column on mobile for readability
- 2-column grids at md breakpoint
- 3-4 column grids at lg breakpoint

---

## Component Library

### Navigation Header
- Fixed or sticky header with logo left, navigation center
- Category links in horizontal nav (desktop) / hamburger menu (mobile)
- Search bar with icon (Font Awesome or Heroicons)
- Height: h-16 md:h-20

### Homepage Components

**Hero Section** (60-70vh):
- Full-width branded banner with Forever Living imagery
- Large heading: "Forever Living Product Catalogue"
- Subheading describing product range
- Optional CTA: "Explore Categories" button
- Background: Product lifestyle image with subtle overlay

**Category Grid**:
- Large clickable cards (aspect-ratio-square or 4:3)
- Category image as background
- Category name overlay (text-2xl, bold)
- Product count badge (e.g., "24 Products")
- Subtle hover lift effect (transform scale-105)
- Padding: p-8 md:p-12 between hero and grid

### Category Page Components

**Category Header**:
- Category name (H1)
- Brief description (1-2 sentences)
- Product count indicator
- Breadcrumb navigation: Home > Category Name
- Spacing: py-8 md:py-12

**Product Cards**:
- Clean white/light cards with shadow (shadow-md hover:shadow-lg)
- Product image (aspect-ratio-square, object-cover)
- Product name (H3, truncate to 2 lines)
- Brief descriptor or key benefit (text-sm, text-gray-600)
- "View Details" link/button
- Card padding: p-4

### Product Detail Page Components

**Product Gallery** (Left Column):
- Large main product image (aspect-ratio-4/3 or square)
- Thumbnail gallery below if multiple images available
- Lightbox capability for full-screen view

**Product Information** (Right Column):
- Product name (H1)
- Category badge/tag
- Product description (multiple paragraphs, formatted)
- Key features as bullet points with check icons
- Benefits section with icons
- Ingredients/specifications in organized list
- "Back to Category" navigation button

**Product Info Sections**:
- Tabbed or accordion layout for: Description, Features, Benefits, Specifications
- Each section with appropriate spacing (space-y-4)

### Footer
- Multi-column layout (grid-cols-1 md:grid-cols-3)
- Company info, category quick links, contact details
- Forever Living branding
- Minimal height: py-12

---

## Icons
**Library**: Heroicons (via CDN)
- Search, menu, home, check marks, arrows
- Consistent stroke-width throughout
- Size: w-5 h-5 for inline, w-6 h-6 for standalone

---

## Images

### Homepage Hero Image
**Description**: Bright, aspirational lifestyle image showcasing Forever Living products in use - perhaps aloe vera plants with product bottles, or healthy lifestyle scene with products subtly featured. Professional photography with natural lighting.
**Placement**: Full-width hero section background, 60-70vh height
**Treatment**: Subtle gradient overlay to ensure text readability

### Category Card Images
**Description**: High-quality product photography for each category:
- **Drinks**: Aloe vera bottles with fresh ingredients
- **Bee Products**: Honey jars, bee pollen with honeycomb
- **Nutritionals**: Supplement bottles arranged attractively
- **Weight Management**: Products with fitness lifestyle elements
- **Skincare Personal Care**: Beauty products with natural elements
- **Household**: Cleaning products in bright, clean setting
**Placement**: Background of each category card on homepage
**Treatment**: Subtle overlay darkening for text contrast

### Product Images
**Description**: Extracted directly from Word document - professional product shots on white/light backgrounds
**Placement**: Product cards (thumbnail), product detail page (large gallery)
**Treatment**: Maintain aspect ratio, use object-cover for consistency

---

## Special Considerations

**Performance Optimization**:
- Lazy loading for all product images
- Compressed image formats (WebP with fallback)
- Thumbnail versions for grid views
- Proper image dimensions to avoid layout shift

**Accessibility**:
- Alt text for all product images
- Keyboard navigation for all interactive elements
- Sufficient color contrast (4.5:1 minimum)
- Focus states with visible outline (ring-2 ring-offset-2)

**Loading States**:
- Skeleton screens for product grids while loading
- Smooth transitions when images load (animate-pulse)
- Visual feedback for all clickable elements

**Interactive Elements**:
- Buttons: Rounded (rounded-lg), padding px-6 py-3, font-semibold
- Cards: Smooth transitions, subtle hover elevation
- No distracting animations - keep transitions under 200ms