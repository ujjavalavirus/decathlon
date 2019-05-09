import React from "react";
import * as services from ".././services/services.js";
var thisComponent;


export class Homepage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			'posts': ''
		};
		thisComponent = this;
		this.deletePost = this.deletePost.bind(this);
		this.editPost = this.editPost.bind(this);

	}

	componentDidMount(){

		services.getData().then(function(response){
			const postList = response.data.map((post)=>
				<div className="row post-row" key={post.id}>
    				<div className="col-md-9 content-box vertical-center">
    					<h2 className="content-title">{post.title}</h2>
    					<p className="content-para">{post.body}</p>
    				</div>
    				<div className="col-md-1 offset-md-1 col-sm-6 col-6 action-box vertical-center">
    					<button type="button" className="btn btn-primary" onClick={thisComponent.editPost} data-userid={post.userId} data-postid={post.id}>Edit</button>
    				</div>
    				<div className="col-md-1 action-box col-sm-6 col-6 vertical-center">	
    					<button type="button" className="btn btn-danger" onClick={thisComponent.deletePost} data-userid={post.userId} data-postid={post.id}>Delete</button>
    				</div>
    			</div>
			);

			thisComponent.setState({'posts':postList});

		}).catch(function(error){
				console.log(error);
		});
	}

	deletePost(event){
			services.deleteData(event.target.dataset.postid).then(function(response){
				console.log(response.status);
				if(response.status ===200){
					thisComponent.props.history.push('/delete');
				}
			}).catch(function(error){
				console.log(error);
			});
	}

	editPost(event){
		thisComponent.props.history.push('/edit/'+event.target.dataset.postid);
	}


    render(){
        return (
            <div className="container">
            	<div className="row">
            		<div className="col-md-12">
            			{this.state.posts}
                    </div>
            	</div>
            </div>    
        );
    }
}