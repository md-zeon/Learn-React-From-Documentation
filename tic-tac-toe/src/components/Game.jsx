import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];
	const xIsNext = currentMove % 2 === 0;

	const handlePlay = (nextSquares) => {
		// TODO
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const jumpTo = (nextMove) => {
		// TODO
		setCurrentMove(nextMove);
	};

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}
		return (
			<li
				key={move}
				className="bg-emerald-400 my-2 rounded text-black active:scale-95"
			>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<div className="game gap-12">
			<div className="game-board">
				<Board
					xIsNext={xIsNext}
					squares={currentSquares}
					onPlay={handlePlay}
				/>
			</div>
			<div className="game-info">
				<ol className="list-decimal">{moves}</ol>
			</div>
		</div>
	);
};

export default Game;
