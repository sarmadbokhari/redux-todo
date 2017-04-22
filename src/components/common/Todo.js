import React, { PropTypes } from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  addTodo(task) {
    console.log(task);
  }

  render () {
    return (
      <div>
        <h2>Tasks</h2>
        <ul>
          {this.props.tasks.map((task, index) => {
            <li key={index}>{task.title}</li>
          })}
        </ul>
        <div>
          <h3>Submit Todo</h3>
          <form onSubmit={(event) => {
              event.preventDefault();
              let input = {title: task.value};
              this.addTodo(input);
              event.target.reset();
            }}>
            <input type="text" name="title" ref={node => task = node}/>
            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Todo;
