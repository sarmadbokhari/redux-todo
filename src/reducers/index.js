// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import tasks from './taskReducers';

 export default combineReducers({
   tasks: tasks,
 });
