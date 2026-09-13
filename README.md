<div align="center">

# 🚀 DevStack

</div>

<!-- # 🚀 DevStack -->

Devstack is a simple and responsive web application where users can explore different web development technologies and build their own technology stack.

Users can brouse technologies, see their category, difficulty level, rating and description. They can also add technologies to their personal stack and remove them whenever they want.

<h2 align="center">🛠️ Technologies Used</h2>
<!-- ## 🛠️ Technologies Used -->

- React
- TypeScript
- Tailwind CSS
- React Toastify
- JSON
- Vite

<h2 align="center">✨ Features</h2>

### 1. 🔍 Explore Technologies
Users can explore differenr technologies such as React, Vue.js, Node.js, TypeScript and more. Each technology card shows its icon, category, difficulty, rating, and description.

### 2. 🧰 Build Your Own Stack
Users can add technologies to the "Your Stack" section. The same technology cannot be added twice and users can remove individual technogies or remove the entire stack at once.

### 3. 📱 Responsive Design
The website is designed to work on different screen sixes, including mobile, tablet and desktop devices.

....


<h2 align="center">⚛️ React Questions & Answers</h2>
<!-- # ⚛️ React Questions & Answers -->

1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code inside Javascript or Typescript. 
It makes React easier and helps us describe what the UI should look like.

2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component. Children cannot change them, props are read only.

State is data that belongs to a component and can change over time.

3. What does the useState hook do, and where did you use it in this project?
It is used to create and manange changing data inside a React component. 

In this project, I used useState to store the selecteed technologies in the user's stack.

const [stack, setStack] = useState<Technology[]>([]);

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect hook is used to run some code after component renders. 

I used useEffect to fetch the technology data from the JSON file when the technology section loads.

5. Why does every item in a .map() list need a unique key prop?
React needs a unique key to identify each item in a list.

It helps React understand which item has changed. been added or removed.

In this project I used technology id as the key.

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
It meanas showing something in UI only when a certain is true.

In this project, I used it to show an empty message when there are no technologies in the user's stack

{stack.length === 0 && (
  <p>
    No technologies added yet.
  </p>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent component can send data to a child component using props.

<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
/>

Here, the parent sends the technology data and handleAdd function to the child.
The child can then call the function from the props to send an action back to the parent.

<onAdd(technology); />

So, the parent passes data and functions to the child through props, and the child can use those functions to communicate back with the parent.


<h2 align="center">📌 Project Summary</h2>
<!-- 📌 Project Summary -->

DevStack helped me practice React components, TypeScript, state management, data fetching, conditional rendering, props, responsive design, and Tailwind CSS while building a small and practical project.