import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";

const products = [
	{ title: "Cabbage", isFruit: false, id: 1 },
	{ title: "Garlic", isFruit: false, id: 2 },
	{ title: "Apple", isFruit: true, id: 3 },
];

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
		setCount(count + 1);
	}

	const listItems = products.map((product) => (
		<li
			key={product.id}
			style={{
				color: product.isFruit ? "magenta" : "darkgreen",
			}}
		>
			{product.title}
		</li>
	));

	return (
		<>
			<h1>React Quick Start</h1>
			<MyButton count={count} handleClick={handleClick} />
			<MyButton count={count} handleClick={handleClick} />
			<ol>{listItems}</ol>
		</>
	);
}

export default App;
