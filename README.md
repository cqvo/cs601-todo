# CS601 Todo Application

A mobile-first todo application built with Next.js, Mantine UI, and React Router.

## Project Overview

This todo application allows users to create, manage, and track their tasks with a modern, mobile-first interface. Built using Next.js for optimal performance and SEO, Mantine UI for beautiful components, and React Router for seamless navigation.

## Technical Stack

- **Frontend Framework**: Next.js
- **UI Library**: Mantine UI
- **Routing**: React Router
- **State Management**: React Context API
- **Styling**: CSS Modules + Mantine's built-in styling system
- **Data Persistence**: Local Storage (initial implementation)

## Project Structure

```
cs601-todo/
├── app/
│   ├── components/
│   │   ├── TodoItem.tsx
│   │   ├── TodoList.tsx
│   │   ├── TodoForm.tsx
│   │   └── Layout.tsx
│   ├── context/
│   │   └── TodoContext.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── page.tsx
│   └── layout.tsx
├── public/
├── types/
│   └── todo.ts
└── package.json
```

## Implementation Plan

### Phase 1: Project Setup
- Initialize Next.js project with TypeScript
- Set up Mantine UI
- Configure React Router
- Create basic project structure

### Phase 2: Core Features
- Implement Todo data structure and context
- Create basic CRUD operations
- Develop UI components
- Set up local storage persistence

### Phase 3: UI/UX Implementation
- Implement mobile-first design
- Add animations and transitions (including animated removal)
- Implement responsive layouts
- Add loading states and error handling

### Phase 4: Testing and Refinement
- Add unit tests
- Perform cross-browser testing
- Optimize performance
- Refine UI/UX based on testing

## Feature Implementation Details

### 1. Todo Item Completion
- Checkbox implementation using Mantine's Checkbox component
- State management through React Context
- Persistent storage in localStorage
- Optimistic UI updates for better UX

### 2. Todo Item Deletion (with Animation)
- Delete functionality with confirmation dialog
- Immediate UI feedback
- Undo deletion capability (future improvement)
- **Animated removal:** When a todo is deleted, it smoothly fades out and slides left before being removed from the DOM, using Mantine's transition system and custom CSS transitions. This provides a modern, responsive, and visually appealing user experience.

### 3. Todo Item Editing
- Inline editing capability
- Edit mode toggle
- Auto-focus on edit field
- Save on blur/enter
- Cancel on escape

## Mobile-First Design Approach

- Responsive breakpoints using Mantine's built-in system
- Touch-friendly UI elements
- Optimized tap targets (minimum 44x44px)
- Swipe gestures for actions (future improvement)
- Bottom navigation for mobile (future improvement)
- Adaptive layouts for different screen sizes

## Animation & UX Details

- **Add/Remove Animations:**
  - Todos animate in with a slide-in effect from the left.
  - Todos animate out (on delete) with a fade and slide-left effect.
  - Animations respect user "reduced motion" preferences for accessibility.
- **Checkbox and Edit Animations:**
  - Smooth transitions for text decoration and color changes.
  - Edit mode uses Mantine's TextInput with focus and transition effects.

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/cqvo/cs601-todo.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
