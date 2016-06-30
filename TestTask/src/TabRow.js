import React from 'react';
import {render} from 'react-dom';

class TabRow extends React.Component {


	render(){
	//console.log(this.props.catalogueTree);
    
		return (
            <li className="li-tab">
                <div className="tab-row">
                    <div className="tab-data1"> {this.props.catalogueTree.id}</div>
                    <div className="tab-data2"> {this.props.catalogueTree.name}</div>
                    <div className="tab-data1"> {this.props.catalogueTree.size}</div>
                    <div className="tab-data2"> {this.props.catalogueTree.birthTime}</div>
                </div>
            </li>
		)
	}
}
export default TabRow;
