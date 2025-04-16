/*
* You will learn
TODO: How to create and nest components
    * React apps are made out of components.
    * A component is a piece of the UI (user interface) that has its own logic and appearance.
    * A component can be as small as a button, or as large as an entire page.
    * React components are JavaScript functions that return markup.
    * React component names must always start with a capital letter.
TODO: How to add markup and styles
    * JSX is stricter than HTML.
    * You have to close tags like <br />.
    * Your component also can’t return multiple JSX tags.
    * You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper.
    * In React, you specify a CSS class with className.
    * style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces.
    * You can use the style attribute when your styles depend on JavaScript variables.
TODO: How to display data
    * JSX lets you put markup into JavaScript.
    * Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.
    * You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes.
    * For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute
TODO: How to render conditions and lists
    * you can use an if statement to conditionally include JSX.
    * you can use the conditional ? operator. Unlike if, it works inside JSX.
    * When you don’t need the else branch, you can also use a shorter logical && syntax.
    * You will rely on JavaScript features like for loop and the array map() function to render lists of components.
    * For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
    * Usually, a key should be coming from your data, such as a database ID.
    * React uses your keys to know what happened if you later insert, delete, or reorder the items.
TODO: How to respond to events and update the screen
    * You can respond to events by declaring event handler functions inside your components.
    * Do not call the event handler function: you only need to pass it down.
    * React will call your event handler when the user clicks the button.
    * Example: onClick={handleClick}
    * Often, you’ll want your component to “remember” some information and display it.
    * To do this, add state to your component.
    * You’ll get two things from useState: the current state, and the function that lets you update it.
    * You can give them any names, but the convention is to write [something, setSomething].
    * If you render the same component multiple times, each will get its own state.
    * Functions starting with use are called Hooks.
    * useState is a built-in Hook provided by React.
    * You can also write your own Hooks by combining the existing ones.
    * Hooks are more restrictive than other functions.
    * You can only call Hooks at the top of your components (or other Hooks).
    * If you want to use useState in a condition or a loop, extract a new component and put it there.
TODO: How to share data between components
    * often you’ll need components to share data and always update together.
    * To make both components display the same data and update together, you need to move the state from the individual components “upwards” to the closest parent component containing all of them.
    * Then, pass the state down from parent component to each child component, together with the shared event handler. You can pass information to child component using the JSX curly braces {}.
    * The information you pass down like this is called props.
    * The new data value is passed as a prop to each child component, so they all show the new value. This is called “lifting state up”. By moving state up, you’ve shared it between components.
*/