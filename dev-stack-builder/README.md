# 🧱 Dev Stack Builder

A responsive web application that helps developers explore popular technologies and build their ideal development stack. Browse technology cards, check their details, and add your preferred tools to a personalized stack.

## 🚀 Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Hot Toast
- Lucide React
- JSON

## ✨ Key Features

- **Explore Technologies:** Browse technology cards with descriptions, categories, ratings, difficulty levels, badges, and icons.
- **Build Your Stack:** Add and remove technologies, prevent duplicate selections, and clear your entire stack with one click.
- **Responsive Design:** Enjoy a clean interface with a mobile-friendly navigation menu, animated loading state, and toast notifications.

## ⚙️ Run Locally

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd dev-stack-builder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like elements inside JavaScript or TypeScript. It makes React user interfaces easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook stores and updates component data. I used it to manage the selected stack, mobile menu visibility, and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects after a component renders. I used it to initialize the technology data and update the loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify list items when they are added, removed, or updated. This allows React to update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition. In this project, I used it to show a loading screen while the technologies are being prepared and the technology grid afterward. I also used it for the empty stack message.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data and callback functions to a child through props. The child can call a callback function provided by the parent to request an update, such as adding a technology to the stack.

## 🔗 Links

- **GitHub Repository:** YOUR_GITHUB_REPOSITORY_URL
- **Live Website:** YOUR_LIVE_WEBSITE_URL
