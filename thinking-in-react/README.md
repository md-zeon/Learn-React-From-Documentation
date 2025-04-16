# 🧠 Thinking in React

When you build a user interface with React, you’ll follow a mental model that helps you break down, structure, and build your UI effectively.

React encourages a **component-driven** architecture, one-way data flow, and a focus on state management. Here's a breakdown of the 5 recommended steps when implementing a UI in React.

---

## 🧩 Step 1: Break the UI into a Component Hierarchy

- Draw boxes around every component and subcomponent in the mockup.
- Name them based on their responsibility.
- A component should ideally **do one thing**. If it grows, split it into smaller subcomponents.
- Organize the design’s layers and reflect that in your component structure.
- Components that appear within others in the UI should be **children in the hierarchy**.

---

## 🏗️ Step 2: Build a Static Version in React

- Build a version that renders the UI from your data model **without interactivity**.
- Focus on structure and presentation using **props** to pass data down.
- Don’t use `state` yet—save it for interactivity.
- Use top-down or bottom-up approaches:
  - Small projects → top-down is easier.
  - Large projects → bottom-up might be better.

---

## 🧮 Step 3: Find the Minimal but Complete Representation of UI State

- To add interactivity, you need to track **state**.
- Think of state as the **minimal set of changing data** your app needs.
- Apply the DRY (Don’t Repeat Yourself) principle.
- Questions to ask to determine if something is state:
  - ❌ Does it stay the same over time? → Not state.
  - ❌ Is it passed via props? → Not state.
  - ❌ Can it be computed from props/state? → Not state.
  - ✅ If none of the above → It’s probably state.

### 🔄 Props vs State

| Props | State |
|-------|-------|
| Passed from parent | Managed by the component |
| Read-only | Can change over time |
| Like function arguments | Like memory for interaction |

Props and state work together: parents manage state and pass it down via props.

---

## 🏡 Step 4: Identify Where Your State Should Live

- Determine **which component should own each piece of state**.
- For each piece of state:
  1. Identify every component that uses it.
  2. Find their **closest common parent**.
  3. Store the state in that parent component.

- If no existing component fits, create a new **state container component** above the shared components.

---

## 🔁 Step 5: Add Inverse Data Flow

- Let child components **communicate back up** to parents via callbacks.
- Pass **event handlers** (like `onClick`, `onChange`) as props from the parent.
- Children call these functions to **update the parent’s state**.

---

## 📚 Summary

Thinking in React is about:
1. **Decomposing** your UI into reusable pieces.
2. **Managing data flow** from parent to child.
3. **Tracking only what’s necessary** in state.
4. **Lifting state up** to the right place.
5. Letting **child components affect parents** via callback props.

---

🧠 This mental model helps you build clear, maintainable, and scalable UIs in React.
