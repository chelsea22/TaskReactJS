import React from 'react';
import {render} from 'react-dom';
import Node from './Node';

class RootFolder extends React.Component {


	render(){
		/*console.log(this.props.catalogueTree);

    var list = this.props.catalogueTree.children;
    console.log(list);
    var i=0,
      max;

    for(i=0, max = list.length; i<max; i++){
      console.log(list[i]);
    }*/  
		return (
			<div>
        <p>path:{this.props.catalogueTree.path}</p>
        <br />
        <h4>{this.props.catalogueTree.name}</h4>
				<ul>
            {this.props.catalogueTree.children.map((node)=>{return <Node catalogueTree={node} key = {node.id} />
            })}
        </ul>
        <br />
        <span>Folders: </span>
        <span></span>
        <span> | </span>
        <span>Files:</span>
        <span></span>
			</div>
		)
	}
}
export default RootFolder;