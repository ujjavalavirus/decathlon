import React from "react";
var thisComponent;

export class Update extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			'title': '',
			'body': '',
			'id': '',
			'userId': ''
		};
		thisComponent = this;
		this.updateState = this.updateState.bind(this);
		this.gohome = this.gohome.bind(this);
	}

	componentDidMount(){
		var updatedPost = localStorage.getItem('updatedData');
		thisComponent.updateState(JSON.parse(updatedPost));
	}

	updateState(postDetails) {
		Object.keys(postDetails).forEach(function(key){
			thisComponent.setState({
				[key]:postDetails[key]
			});
		});
	}

	gohome(){
		thisComponent.props.history.push('/');
	}

    render(){
        return (
            <div className="container">
            	<div className="row">
            		<div className="col-md-12 update-page">
            			<div className="post-row">
		    				<div className="content-box vertical-center">
		    					<h2 className="content-title">{this.state.title}</h2>
		    					<p className="content-para">{this.state.body}</p>
		    				</div>
		    				<button type="button" className="btn btn-primary go-home-button" onClick={thisComponent.gohome}>Go Home</button>
		    			</div>
            		</div>
            	</div>	
            </div>    
        );
    }
}