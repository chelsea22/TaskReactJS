import React from 'react';
import {render} from 'react-dom';

const Node = ({catalogueTree}) =>

	<li className="li-node">
		{catalogueTree.name}				
	</li>

export default Node;