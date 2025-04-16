```markdown
# 🌱 React Basics: Quick Reference

A concise summary of foundational React concepts based on the official documentation. Perfect for revisiting core ideas quickly as you learn.

---

## ✅ Creating and Nesting Components

- React apps are built from **components**—pieces of UI with their own logic and appearance.
- Components can be **tiny (like a button)** or **large (like a whole page)**.
- A **React component is just a JavaScript function** that returns some JSX (markup).
- **Component names must start with a capital letter.**
- You can **nest components** inside other components.

---

## 🎨 Adding Markup and Styles

- JSX looks like HTML but is **stricter**:
  - You **must close tags**: `<br />` ✅, `<br>` ❌
  - Components must return **a single parent element**. Wrap multiple tags in:
    - a `<div>` or
    - a fragment: `<>...</>`
- To add CSS classes, use `className` instead of `class`.
- Use `style={{}}` for inline styles:
  - Accepts a **JavaScript object**, not a string.
  - Useful when styles depend on variables.

---

## 📊 Displaying Data

- JSX lets you write HTML inside JavaScript.
- Use **curly braces `{}`** to embed dynamic content:

  ```jsx
  <h1>{user.name}</h1>
  ```

- In attributes:
  - Use quotes for static values: `className="avatar"`
  - Use `{}` for dynamic ones: `src={user.imageUrl}`

---

## 🔁 Rendering Conditions and Lists

- To show/hide content:
  - Use an `if` statement **outside JSX**
  - Use ternary (`? :`) or logical `&&` **inside JSX**:

    ```jsx
    {isLoggedIn ? <Logout /> : <Login />}
    {count > 0 && <p>You have messages!</p>}
    ```

- To render lists:
  - Use `map()`:

    ```jsx
    items.map(item => <li key={item.id}>{item.name}</li>)
    ```

  - Use a **unique `key`** (usually an ID) for each item.

---

## 🖱️ Handling Events and Updating the Screen

- Add event handlers like:

  ```jsx
  <button onClick={handleClick}>Click</button>
  ```

- Don’t call the function directly—just pass it.
- To **store and update data** in a component, use `useState`:

  ```jsx
  const [count, setCount] = useState(0);
  ```

- This makes React **re-render the component** when state changes.
- Hooks (like `useState`) must:
  - Be called **at the top** of a component or another Hook
  - **Not be inside loops or conditions**

---

## 🔗 Sharing Data Between Components

- When **two components need to share the same data**:
  1. **Lift state up** to their closest common parent.
  2. Pass it down via **props**:

     ```jsx
     <ChildComponent value={sharedState} onChange={handleChange} />
     ```

- This keeps all components in sync with the latest state.

---

🧠 Keep learning, keep building, and check the [React Docs](https://react.dev/) for deeper insights!
```