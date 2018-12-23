import React from "react";
import Counter from "./counter";

const Counters = ({
	counters,
	onDelete,
	onReset,
	onIncrement,
	onDecrement
}) => {
	return (
		<div>
			<button onClick={onReset} className="btn btn-primary m-2 btn-sm">
				Reset
			</button>
			{counters.map(counter => (
				<Counter
					onDecrement={onDecrement}
					onDelete={onDelete}
					onIncrement={onIncrement}
					onRest={onReset}
					key={counter.id}
					counter={counter}
				/>
			))}
		</div>
	);
};

export default Counters;
