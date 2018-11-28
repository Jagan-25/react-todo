import React,{ Component } from 'react';
import '../App.css';
const btnStyle = {
          
          marginRight: '10px',
          height: '30px',
          width:'80px',
          borderRadius: '4px',
          fontFamily: 'serif',
          fontSize:'12px',
          backgroundColor: '#e7e7e7',
          color: 'black',
          
};
const tfoot={
  textAlign: 'right'
}
class TodosList extends Component {
   
  renderItems(){
      let tasks = this.props.taskList ? this.props.taskList : [] ;
      let taskStyle = {
        maxWidth: '400px',
        minWidth: '400px'
      };
    
    return (
      tasks.map((todo,index)=> {
        return(
          <tr key={index}>
              <td style={taskStyle}> {todo.task}</td>
              <td className="task">
              <button style={btnStyle} onClick={(e) => {
                if(!todo.isCompleted) {
                  this.handleState({taskId: index,status:todo.isCompleted});
                } else {
                  e.preventDefault();
                }}}>{todo.isCompleted ? 'Completed' : 'In Progress'}</button>
              <button   style={btnStyle} onClick={this.handleDelete.bind(this, index)} >Delete</button>
              </td>
          </tr>
    )})
      );
  }

  
  handleDelete(e){
    this.props.handleDelete(e);
  }
  
  handleState(event){
    if(!event.status) {
          this.props.handleState(event);
    } else {
      event.stopPropagation();
    }

  }
  handleDeleteAll(e){
    this.props.handleDeleteAll(e);
  }
  deleteCompleted(e){
    this.props.deleteCompleted(e);
  }
  render() {
    return (
      <div className="TodosList">
         <table>
         {this.props.taskList.length > 0 && 
           <thead>
               <tr>
                   <th>TASKS</th>
                   <th>ACTION</th>
               </tr>
           </thead>
         }
            <tbody>
            {this.renderItems()}
            </tbody>
            {this.props.taskList.length>0 &&
            <tfoot >
            <tr>
            <td style={tfoot}>
            <button  onClick={this.handleDeleteAll.bind(this)}>DeleteAll</button>
            <button  onClick={this.deleteCompleted.bind(this)}>DeleteCompleted</button>
            </td>
          </tr>
          </tfoot>
        }
         </table>
      </div>
    );

  }

}

export default TodosList;
