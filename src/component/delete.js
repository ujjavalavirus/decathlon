import React from "react";
var thisComponent;

export class Delete extends React.Component {
	constructor(props){
		super(props);
		thisComponent = this;
		this.gohome = this.gohome.bind(this);

	}

	gohome(){
		thisComponent.props.history.push('/');
	}

    render(){
        return (
            <div className="container">
            	<div className="row">
            		<div className="col-md-12 delete-page">
            			<h2>Post deleted Successfully</h2>
            			<button type="button" className="btn btn-primary go-home-button" onClick={thisComponent.gohome}>Go Home</button>
            		</div>
            	</div>	
            </div>    
        );
    }
}