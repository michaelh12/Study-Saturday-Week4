import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import reducer from './reducers';

//action types
export const GOT_STUDENTS_FROM_DATABASE = 'GOT_STUDENTS_FROM_DATABASE';
export const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT';
export const ADD_STUDENT = 'ADD_STUDENT';

//action creators

const gotStudentsFromDatabase = students => ({
  type: GOT_STUDENTS_FROM_DATABASE,
  payload: students,
});

export const getSingleStudent = singleStudent => ({
  type: GET_SINGLE_STUDENT,
  payload: singleStudent,
});

const addedStudent = student => ({
  type: ADD_STUDENT,
  payload: student,
});

//thunk creators

export const fetchStudents = () => async dispatch => {
  const { data } = await axios.get('/student');
  dispatch(gotStudentsFromDatabase(data));
};

export const postStudent = () => async dispatch => {
  const { data } = await axios.post('/student');
  dispatch(addedStudent(data));
};

//create store

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
