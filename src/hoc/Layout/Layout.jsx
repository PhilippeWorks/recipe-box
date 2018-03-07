import React from 'react';

import Button from './../../components/UI/Button/Button';

const Layout = (props) => (
	<div>
		<ul>{props.recipeList}<ul>
		<div>
			{props.recipeSpotlight}
			<div>
				<Button 
					label={"edit"} 
					handler={props.editHandler} />
				<Button
					label={"delete"}
					handler={props.deleteHandler} />
			</div>
		</div>
	</div>
);

export default Layout;