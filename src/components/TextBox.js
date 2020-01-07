import React from "react";
import ContentEditable from "react-contenteditable";

const TextBox = ({plan, onChange}) => {

	const saveContent = event => {
		onChange({...plan, content: event.target.value })
	};

	return (
		<div className="body">
			<ContentEditable
				disabled={!plan.editable}
				onChange={saveContent}
                html={plan.content}
                tagName="div"
				className="text-container"
				placeholder="What's your plan today?"
			/>
		</div>
	);
};

export default TextBox;
