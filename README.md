# Ebon Aaron Atan Portfolio

A modern single-page portfolio built with React, TypeScript, and Vite. It presents Ebon Aaron Atan as an IT student and aspiring software developer with a strong focus on games, mobile apps, and practical digital products.

## Features

- Responsive dark-first design with optional light mode
- Smooth-scrolling single-page navigation
- About, skills, portfolio, and contact sections
- Project filtering and modal details view
- Slowly auto-advancing project carousel with manual controls and reduced-motion support
- Click-to-open resume card with an embedded PDF viewer and download action
- Contact form that validates input and opens a pre-filled mail client message
- Centralized portfolio data for easy updates

## Tech stack

- React
- TypeScript
- Vite
- CSS Modules-free custom styling

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Project structure

```text
src/
  components/
    About.tsx
    Contact.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    ProjectModal.tsx
    Projects.tsx
    Resume.tsx
    SectionHeading.tsx
    Skills.tsx
  data/
    site.ts
  App.tsx
  index.css
  main.tsx
public/
  favicon.svg
  Ebon-Aaron-Atan-Resume.pdf
```

## Updating profile information

Edit the values in `src/data/site.ts`:

- `profile.name`
- `profile.title`
- `profile.email`
- `profile.github`
- `profile.linkedin`
- `profile.instagram`
- `profile.intro`

## Adding a new project

Add a new object to the `projects` array in `src/data/site.ts` using the existing structure:

```ts
{
  id: 'project-id',
  title: 'Project Name',
  category: 'Game Development',
  description: 'Short project description.',
  technologies: ['Unity', 'C#'],
  image: '',
  coverClass: 'project-id',
  repositoryUrl: '',
  demoUrl: '',
  features: ['Feature one', 'Feature two'],
  overview: 'Project overview text.',
  problem: 'Problem statement.',
  objective: 'Outcome or objective.',
  challenge: 'Main challenge.',
  solution: 'Solution used.',
}
```

If a repository link or demo link is unavailable, leave the field empty so the UI handles it gracefully. The list currently includes sample entries labeled `Sample:`; replace or remove these before presenting them as completed work.

## Updating the resume

Replace `public/Ebon-Aaron-Atan-Resume.pdf` with the latest resume PDF. Visitors can open it from the Resume card in the navigation section.

## Notes

- The contact form does not send data to a backend; instead it prepares an email draft in the visitor's mail client.
- Project cards intentionally avoid broken links or fake metrics by showing unavailable states when a link is missing.
- The design is organized so it can be updated without rewriting multiple sections.
