import React from 'react';
import {connect} from 'react-redux';
import * as todoActions from '../../actions/todoActions';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  addTodo(task) {
    this.props.createTask(task);
  }

  deleteTask(task) {
    this.props.deleteTask(task);
  }

  copyTask(task) {
    this.props.copyTask(task);
  }

  render () {
    let task;
    return (
      <div>
        <h2>Tasks</h2>
        <ul>
          {this.props.tasks.map((task, index) => {
            return (
              <li key={index}>
                <span>{task.title}&nbsp;&nbsp;</span>
                <a onClick={() => this.deleteTask(task)}>(Delete)</a>&nbsp;&nbsp;
                <a onClick={() => this.copyTask(task)}>(Copy)</a>
              </li>
            )
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
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks
  };
};

// Maps actions to props`
const mapDispatchToProps = (dispatch) => {
  return {
    createTask: task => dispatch(todoActions.createTask(task)),
    deleteTask: task => dispatch(todoActions.deleteTask(task)),
    copyTask: task => dispatch(todoActions.copyTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
