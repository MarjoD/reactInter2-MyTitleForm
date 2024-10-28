import { useState } from "react";

function MyTitleForm() {
	const [title, setTitle] = useState("Awesome Title");

	return (
		<header>
			<h1>{title}</h1>
			<label htmlFor="title">Title :</label>
			<input
				id="title"
				type="text"
				value={title}
				onChange={(e) => {
					!e.target.value.includes("*") && setTitle(e.target.value);
				}}
			/>
		</header>
	);
}

export default MyTitleForm;
