import React, { Component } from 'react';

import Addtasks from './Components/addtasks';
import TodosList from './Components/todoslist';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
      taskList: []
		};
	}
	//Add tasks to taskList
	handleClick(data){
		var tmpState = this.state.taskList;
		tmpState.push(data);
		this.setState({taskList:tmpState
		});
	}
	//Delete tasks from taskList
	handleDelete(taskId){
		var tmpTaskList = this.state.taskList;
		if(tmpTaskList[taskId]) {
			tmpTaskList.splice(taskId,1);
			this.setState((prevState => ({
  				taskList:tmpTaskList
				})
			));
		}
	}
	//Mark task as Completed
	handleState(taskObj){
		var tmpTaskList = this.state.taskList;
		if(tmpTaskList[taskObj.taskId]) {
			tmpTaskList[taskObj.taskId].isCompleted = true;
			this.setState({taskList:tmpTaskList});
		}
	}
	handleDeleteAll(){
		this.setState({
			taskList:[]
		})
	}
   deleteCompleted(){
   	var filteredTasks = this.state.taskList.filter(taskList=>{
   		return taskList.isCompleted!==true;
   	});
   	this.setState({taskList:filteredTasks});
   }
  render() {
	    return ( 
      <div className="App">
                   <div className="head">
                    <h2>To Do App</h2>
                    <Addtasks handleClick={this.handleClick.bind(this)}/>
                    </div>
                    <div className="listContent">       
                    <TodosList handleDelete={this.handleDelete.bind(this)}
							   handleState={this.handleState.bind(this)}
							   taskList={this.state.taskList}
							   handleDeleteAll={this.handleDeleteAll.bind(this)}
							   deleteCompleted={this.deleteCompleted.bind(this)}/> 
                    </div>
      </div>
    );
  }
  }
export default App;
