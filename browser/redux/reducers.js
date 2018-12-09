import {
  GOT_STUDENTS_FROM_DATABASE,
  GET_SINGLE_STUDENT,
  ADD_STUDENT,
} from './store';
// import GET_SINGLE_STUDENT from './store';
// import ADD_STUDENT from './store';

const initialState = {
  students: [{}],
  selectedStudent: {},
};

const StudentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_STUDENTS_FROM_DATABASE:
      return { ...state, students: action.payload };

    case GET_SINGLE_STUDENT:
      const filteredStudent = state.students.filter(student => {
        return student.id === action.payload.id;
      });
      return { ...state, selectedStudent: filteredStudent[0] };

    case ADD_STUDENT:
      return { ...state, students: [...state.students, ...action.payload] };

    default:
      return state;
  }
};

export default StudentsReducer;
