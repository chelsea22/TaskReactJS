import React from 'react';
import {render} from 'react-dom';
import RootFolder from './RootFolder';
import CatalogueTab from './CatalogueTab';

let catalogueTree = {
  "id": 1,
  "path": "Home",
  "name": "Home",
  "children": [
    {
      "id": 2,
      "name": "folder",
      "children": [
        {
          "id": 5,
          "name": "folder1",
          "children": [
            
          ]
        },
        {
          "id": 6,
          "name": "folder2",
          "children": [
            
          ]
        },
        {
          "id": 7,
          "name": "Html.zip",
          "size": 2471460,
          "birthTime": "2016-06-15T05:46:05.712Z"
        },
        {
          "id": 8,
          "name": "Stoyan_Stefanov_-_JavaScript_Shablony.pdf",
          "size": 3110239,
          "birthTime": "2016-06-15T05:46:05.810Z"
        }
      ]
    },
    {
      "id": 3,
      "name": "logo1.docx",
      "size": 508284,
      "birthTime": "2016-06-15T05:46:05.795Z"
    },
    {
      "id": 4,
      "name": "WebSocket.pdf",
      "size": 3530067,
      "birthTime": "2016-06-15T05:46:05.830Z"
    }
  ]
}

class App extends React.Component {
	render(){
		//console.log(this.props.catalogueTree);
		return (
			<div>
        <div className="main-context" id="left">
				<RootFolder catalogueTree={this.props.catalogueTree} />
				</div>
        <div className="main-context" id="right">
        <CatalogueTab catalogueTree={this.props.catalogueTree} />
        </div>
			</div>
		)
	}
}

render(<App catalogueTree = {catalogueTree} />, document.getElementById('app'));