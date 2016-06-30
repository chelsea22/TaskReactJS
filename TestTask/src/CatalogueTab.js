import React from 'react';
import {render} from 'react-dom';
import TabRow from './TabRow';

class CatalogueTab extends React.Component {
    constructor(){
        super();
        this.state = {
            search: ''
        };
    }
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }


	render(){
		console.log(this.props.catalogueTree);

        var list = this.props.catalogueTree.children;
        console.log(list);
        var i=0,
        max;

        for(i=0, max = list.length; i<max; i++){
        console.log(list[i]);

        var filteredNodes = this.props.catalogueTree.children.filter(
            (node) => {
                return node.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

    }  
		return (
			<div>
                <div className="search-box">
                    <span>Search</span>
                    <input id="search" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                </div>
                <br />
                <br />
                <div className="tab-row">
                    <div className="tab-data1">..</div>
                    <div className="tab-data2"> </div>
                    <div className="tab-data1"> </div>
                    <div className="tab-data2"> </div>
                </div>
                <ul>
                    {filteredNodes.map((node)=>{return <TabRow catalogueTree = {node} key = {node.id+100} />
                    })}
                </ul>

			</div>
		)
	}
}
export default CatalogueTab;