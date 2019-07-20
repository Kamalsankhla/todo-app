import React, { Component } from "react";

export default class ToDoCreate extends Component{
    constructor(props){
        super(props);
        
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsibility = this.onChangeTodoResponsibility.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = { 
                       todo_description: '',
                       todo_responsible: '',
                       todo_priority: '',
                       todo_completed:''
        }
    }
    
    onChangeTodoDescription(e){
        this.setState({
            todo_description : e.target.value
        });
    }

    onChangeTodoResponsibility(e){
        this.setState({
            todo_responsible : e.target.value
        });
    }

    onChangeTodoPriority(e){
        this.setState({
            todo_priority : e.target.value
        });
    }

    onSubmit(e){
                 e.preventDefault();
                 
      //           console.log('Form Completed: ${this.state.todo_completed}');

                 this.setState ({

                    todo_description : '',
                    todo_responsible : '',
                    todo_priority : '',
                    todo_completed : ''
                 });   
    }

    render(){
        return(
            <div style={{marginTop: 20}}>
                 <h3> Create New Todo List </h3>
                 <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.todo_description}
                               onChange={this.onChangeTodoDescription}
                        />
                     </div>
                     <div className="form-group">
                        <label>Responsibility:</label>
                        <input type="text" 
                               className="form-control"
                               value={this.state.todo_responsible}
                               onChange={this.onChangeTodoResponsibility}
                        />
                     </div>
                     <div className="form-group">
                        <label>Priority: </label>
                        <div className="form-check form-check-inline">
                            <input type="radio" 
                                className="form-check-input"
                                name="priorityOption"
                                id="priorityLow"
                                value={this.state.todo_priority==='Low'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" 
                                className="form-check-input"
                                name="priorityOption"
                                id="priorityMedium"
                                value={this.state.todo_priority==='Medium'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" 
                                className="form-check-input"
                                name="priorityOption"
                                id="priorityHigh"
                                value={this.state.todo_priority==='High'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                     </div>
                     <div className="form-group">
                        <input type="submit" 
                               className="btn btn-primary"
                               value="Create Todo"
                         />
                     </div>

                 </form>

                
            </div>
        );
    }
}
