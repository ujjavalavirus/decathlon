import React from "react";
import * as services from ".././services/services.js";
var thisComponent

export class Edit extends React.Component {
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
		this.updateInput = this.updateInput.bind(this);
		this.submitData = this.submitData.bind(this);

	}

	componentDidMount(){
		services.editData(this.props.match.params.postid).then(function(response){
			thisComponent.updateState(response.data);

		}).catch(function(error){
			console.log(error);
		});
	}

	updateInput(event) {
		thisComponent.setState({[event.target.id]:event.target.value});
	}

	updateState(postDetails) {
		Object.keys(postDetails).forEach(function(key){
			thisComponent.setState({
				[key]:postDetails[key]
			});
		});
	}

	submitData(event){
		event.preventDefault();
		var patchData = {
			'title': this.state.title,
			'body': this.state.body,
			'userId': this.state.userId
		};

		services.editData(thisComponent.state.id,patchData).then(function(response){
			localStorage.setItem('updatedData', JSON.stringify(response.data.data));
			thisComponent.props.history.push('/update');
		}).catch(function(error){
			console.log(error);
		});
	}

    render(){
        return (
            <div className="container">
            	<div className="row">
            		<div className="col-md-12 edit-page">
            			<div className="postDetails">
            				<h4>UserId - {this.state.userId} , PostId - {this.state.id}</h4>
            			</div>
            			<form>
            				<div className="form-group">
							    <label>Title</label>
							    <input type="text" onChange={thisComponent.updateInput} className="form-control" id="title" value={this.state.title}/>
							</div>
							<div className="form-group">
							    <label>Description</label>
							    <textarea className="form-control" onChange={thisComponent.updateInput} id="body" rows="3" value={this.state.body}></textarea>
							</div>
							<button className="btn btn-primary" onClick={thisComponent.submitData} type="submit">Submit</button>
            			</form>
            		</div>
            	</div>
            </div>    
        );
    }
}