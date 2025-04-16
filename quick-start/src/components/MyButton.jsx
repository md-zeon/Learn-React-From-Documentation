import React from "react";

const MyButton = (props) => {
	const { count, handleClick } = props;
	return <button onClick={handleClick}>Clicked {count} times</button>;
};

export default MyButton;
