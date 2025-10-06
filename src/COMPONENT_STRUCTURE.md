# Component Structure Documentation

## Overview
This project follows a standardized component structure for better organization and maintainability.

## Directory Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorBoundary.tsx
│   ├── layout/         # Layout components
│   │   ├── Header.tsx
│   │   └── footer.tsx
│   ├── sections/       # Page sections
│   │   └── servicePoint.tsx
│   ├── forms/          # Form components (empty)
│   └── PrelineScriptWrapper.tsx
├── app/                # Next.js app directory
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── Product-Services/   # Service pages (legacy structure)
├── hooks/             # Custom hooks (empty)
├── services/
│   └── types/         # TypeScript types (empty)
└── globals.css        # Global styles
```

## Component Categories

### UI Components (`components/ui/`)
- Reusable, presentational components
- No business logic
- Can be used across the application
- Examples: LoadingSpinner, ErrorBoundary

### Layout Components (`components/layout/`)
- Components that define the page structure
- Header, Footer, Navigation
- Used across multiple pages

### Sections (`components/sections/`)
- Main content sections of pages
- Business logic and content combined
- Examples: ServicePoint, Hero sections

### Forms (`components/forms/`)
- Form-related components
- Input fields, form validation
- Currently empty - ready for future form components

## Migration Notes

1. **Moved Components:**
   - `Header.tsx` → `components/layout/Header.tsx`
   - `footer.tsx` → `components/layout/footer.tsx`
   - `servicePoint.tsx` → `components/sections/servicePoint.tsx`
   - `LoadingSpinner.tsx` → `components/ui/LoadingSpinner.tsx`
   - `ErrorBoundary.tsx` → `components/ui/ErrorBoundary.tsx`

2. **Updated Imports:**
   - All import paths have been updated to reflect new structure
   - Layout imports in `app/layout.tsx` and `app/contact/layout.tsx`
   - Component imports in `app/page.tsx`

3. **Legacy Structure:**
   - `Product-Services/` directory maintains existing structure for compatibility
   - Consider migrating to standardized structure in future updates

## Best Practices

1. **New Components:**
   - Place new components in appropriate directories based on their purpose
   - Follow the established naming conventions
   - Use relative imports within the components directory

2. **Import Organization:**
   - Use absolute imports from app directory: `@/components/...`
   - Use relative imports within components: `./...` or `../...`

3. **File Naming:**
   - Use PascalCase for component files: `MyComponent.tsx`
   - Use camelCase for utility files: `myUtility.js`
   - Keep names descriptive and concise