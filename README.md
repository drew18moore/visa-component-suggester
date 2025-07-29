# Visa Component Suggestion Tool

Turn natural language into `@visa/nova-react` components. Describe what you want in plain english and view the code and list of used components.

### Built With

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

---

## Try it out

- Visit [https://visa.drewmoore.dev](https://visa.drewmoore.dev)

---

## Features

- Turns natural language into functional `@visa/nova-react` components.
- Displays code block containing React code with included copy button.
- Provides list of used components for each component.
- Includes example prompts for you to press and view.
- Stores most recent prompts; view them using the sidebar.
- Included welcome dialog explaining how to use the app.

---

## Getting Started

### Prerequisites

- Node.js

Go to [https://nodejs.org/en/download](https://nodejs.org/en/download) and install Node.js

Run the following command to ensure that Node.js is properly installed

```
node --version
```

### Usage

1. Clone the repo

```
git clone https://github.com/drew18moore/visa-component-suggester.git
```

2. Navigate to the project's root directory and run the following commands

```
npm run install:all
npm run dev
```

3. Type `http://localhost:5173/` in your favorite browser and enjoy!

---

## Approach and Technical Choices

### Front-end

- Built a mobile-first UI using React with TypeScript and Visa Nova React Components.

### Back-end

- A lightweight Express.js API to process natural language into code.

### Component Suggestion Logic

- Uses rule-based algorithm to first extract the user's intended component type (e.g. _top navbar, login form, etc_).
- It will then look for other keywords (e.g. _remember me, terms and conditions, etc_) and insert them into a template.

### UI/UX

- A very simple and focused layout, maximizing efficiency and ease of use.
- Included a sidebar housing a user's most recent prompts for quick retrieval (not requiring a new fetch request).
- Provided example prompts to inspire the user. Displays an onboarding dialog welcoming the user and providing instructions.
- Will focus on the prompt input on load, improving user velocity.

### Accessibility

- Used semantic HTML (e.g., `<nav>`, `<label>`, `<main>`) to ensure proper structure and assistive technology support.
- Included appropriate `aria-label`s and roles where necessary to enhance screen reader compatibility.
- Provided alternative text for images

### State Management

- Used `useState` for storing current query.
- Used `localStorage` to store user's most recent prompts.
- Also, to ensure the onboarding dialog is unintrusive, I use `localStorage` to ensure it will show only once.

### Hosting

- Hosted the React front-end on Vercel.
- Hosted the Node.js back-end on an AWS EC2 instance using NGINX as a reverse proxy, routing from port 80 to port 3000.
- Front-end and back-end servers use 'visa.drewmoore.dev' and 'visaapi.drewmoore.dev' subdomains.

---

## Assumptions and Shortcuts

- Did not write any tests.
- Assumed user prompts would be simple and that a rule-based algorithm would not be expected to be extensive.
- Assumed user can spell correctly.

---

## Future Improvements

- Component Preview: Render generated components alongside the code.
- More complex algorithm: Improving existing algorithm to handle more complex queries (e.g. a login form with a drop shadow and green submit button with the text "Join us")
- Integration with Visa's design system docs
- Testing: Create unit and integration tests
