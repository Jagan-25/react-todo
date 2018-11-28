import React from 'react';

export default class Addtasks extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      task:''
    };
  };

  handleAdd(e){
var taskText = this.state.task;
      if(taskText) { 
           var taskList = {
            task: taskText,
            isCompleted:false
          };    
          
          this.setState({task:''});
          this.props.handleClick(taskList);
          e.preventDefault();
  } else {
    return false;
  }
    
  }
  
  handleTaskCreation(e){
  
     this.setState({task: e.target.value});
  
  }
    render() { 
      const addbottonStyle = {
          
          marginLeft: '10px',
          height: '30px',
          width:'80px',
          borderRadius: '4px',
          fontFamily: 'serif',
          fontSize:'14px',
          backgroundColor: '#e7e7e7',
          color: 'black'
};

        return (
             
                <form onSubmit={(e) => {
                  if(this.state.task) {
                    this.handleAdd(e);
                  } else {
                    e.preventDefault();
                  }}}>
                <input type="text" placeholder="Task to do" value={this.state.task} onChange={(e) => this.handleTaskCreation(e)}/>
                <button style={addbottonStyle}>ADD</button>
                </form>
        );
  }

}
