import React, { PropTypes } from 'react';
import { updateTask } from '../../actions/todoActions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: '',
      editing: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  }

  initEditTask(title) {
    this.setState(() => {
      return {
        newName: title,
        editing: true
      }
    })
  }

  handleChange(event) {
    this.setState({
      newName: event.target.value
    })
  }

  handleUpdateTask(event) {
    this.setState({
      editing: false
    })

    this.props.updateTask({title: this.state.newName}, this.props.index);
  }

  render () {
    return (
      <li>
        {this.state.editing ?
          <span>
            <input type="text"
              value={this.state.newName}
              onChange={this.handleChange}/>
            <a onClick={this.handleUpdateTask}>Save</a>&nbsp;&nbsp;
          </span>
          :
          <span>
            <span>{this.props.task.title}&nbsp;&nbsp;</span>
            <a onClick={() => this.initEditTask(this.props.task.title)}>Edit</a>&nbsp;&nbsp;
          </span>
        }
        <a onClick={() => this.deleteTask(task)}>Delete</a>&nbsp;&nbsp;
        <a onClick={() => this.copyTask(task)}>Copy</a>

      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(Task);
