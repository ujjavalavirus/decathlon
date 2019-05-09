import React from "react";
var thisComponent;

export class Button extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			'userId': '',
			'postId': ''
		};
		thisComponent = this;
		this.deletePost = this.deletePost.bind(this);
		this.editPost = this.editPost.bind(this);

	}

	componentDidMount() {

	}

	deletePost(event){
			console.log(event.target.dataset.postid);
			/*services.deleteData(event.target.dataset.postid).then(function(response){
				console.log(response);
			}).catch(function(error){
				console.log(error);
			});*/
	}

	editPost(event){
		this.props.history.push('/edit/'+event.target.dataset.postid);

	}

    render(){
        return (
            <div className="row">
        		<div className="col-md-5 offset-md-1 col-sm-6 col-6 action-box vertical-center">
					<button type="button" className="btn btn-primary" onClick={thisComponent.editPost} data-userid={this.props.userId} data-postid={this.props.postId}>Edit</button>
				</div>
				<div className="col-md-5 action-box col-sm-6 col-6 vertical-center">	
					<button type="button" className="btn btn-danger" onClick={thisComponent.deletePost} data-userid={this.props.userId} data-postid={this.props.postId}>Delete</button>
				</div>
            </div>    
        );
    }
}