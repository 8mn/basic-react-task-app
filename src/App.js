import React,{ Component } from 'react';
import './App.css';
import Overview from './Overview';




class App extends Component {
  constructor(){
    super();

    this.state = {
      task:"",
      tasks:[],
    };
  }


  handleInput = (e) =>{
    this.setState({
      task:e.target.value,
    });
  };

  onSubmitTask = (e) =>{
    e.preventDefault();
    this.setState({
      tasks:this.state.tasks.concat(this.state.task),
      task:"",
    })
  }

  render(){

    const {task, tasks} = this.state;

    return (
      <div className="App">
      <p> Task App </p>
      <div>
        <form onSubmit={this.onSubmitTask}>
          <input 
          placeholder="Enter Task"
          type="text"
          onChange={this.handleInput}
          value={task}/>
          <button type ="submit" >ADD</button>
        </form>
        <Overview tasks={tasks} />
      </div>
      </div>
    );
  }
}

export default App;
