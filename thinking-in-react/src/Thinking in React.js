/*
TODO: Thinking in React
    * When you build a user interface with React, you will first break it apart into pieces called components.
    * Then, you will describe the different visual states for each of your components.
    * Finally, you will connect your components together so that the data flows through them.
    * 
    ^ To implement a UI in React, you will usually follow these five steps.
    ~ Step 1: Break the UI into a component hierarchy
        * Start by drawing boxes around every component and subcomponent in the mockup and naming them.
        * a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.
        * consider how you would organize the design’s layers.
        * After you’ve identified the components in the mockup, arrange them into a hierarchy.
        * Components that appear within another component in the mockup should appear as a child in the hierarchy.
    ~ Step 2: Build a static version in React 
        * The most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity.
        * Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.
        * It’s often easier to build the static version first and add interactivity later
        * To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props.
        * Props are a way of passing data from parent to child. 
        * (If you’re familiar with the concept of state, don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.)
        * You can either build “top down” by starting with building the components higher up in the hierarchy or “bottom up” by working from components lower down.
        * it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up.
    ~ Step 3: Find the minimal but complete representation of UI state
        * To make the UI interactive, you need to let users change your underlying data model.
        * You will use state for this.
        * Think of state as the minimal set of changing data that your app needs to remember.
        * The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself).
        * Figure out the absolute minimal representation of the state your application needs and compute everything else on-demand.
        ! Does it remain unchanged over time? If so, it isn’t state.
        ! Is it passed in from a parent via props? If so, it isn’t state.
        ! Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!
        * What’s left is probably state.
            ? Props vs State
                & Props are like arguments you pass to a function. They let a parent component pass data to a child component and customize its appearance.
                & State is like a component’s memory. It lets a component keep track of some information and change it in response to interactions.
            ! Props and state are different, but they work together. A parent component will often keep some information in state (so that it can change it), and pass it down to child components as their props.
    ~ Step 4: Identify where your state should live
        * After identifying your app’s minimal state data, you need to identify which component is responsible for changing this state, or owns the state.
        * Remember: React uses one-way data flow, passing data down the component hierarchy from parent to child component.
        ? For each piece of state in your application:
            & Identify every component that renders something based on that state.
            & Find their closest common parent component—a component above them all in the hierarchy.
            & Decide where the state should live:
                ^ Often, you can put the state directly into their common parent
                ^ You can also put the state into some component above their common parent.
                ^ If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.
    ~ Step 5: Add inverse data flow
        * Let child components communicate back up to parents via callbacks.
        * Pass event handlers (like `onClick`, `onChange`) as props from the parent.
        * Children call these functions to update the parent’s state.
*/