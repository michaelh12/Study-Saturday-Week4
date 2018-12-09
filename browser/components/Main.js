import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentForm from './NewStudentForm';
import { fetchStudents, postStudent, getSingleStudent } from '../redux/store';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // students: [],
      // selectedStudent: {},
      shouldDisplayForm: false,
    };

    this.selectStudent = this.props.getSingleStudent.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchStudents();
    console.log(this.props);
    // this.getStudents();
  }

  // async getStudents() {
  //   console.log('fetching');
  //   try {
  //     const { data } = await axios.get('/student');
  //     this.setState({ students: data });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // selectStudent(student) {
  //   return this.setState({
  //     selectedStudent: student,
  //   });
  // }

  toggleForm() {
    this.setState({
      shouldDisplayForm: !this.state.shouldDisplayForm,
    });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.props.students}
            selectStudent={this.props.getSingleStudent}
          />
        </table>
        <hr />
        <button onClick={this.toggleForm} type="button">
          Add New Student
        </button>

        {this.state.shouldDisplayForm ? <NewStudentForm /> : null}
        <hr />
        {this.props.selectedStudent.id ? (
          <SingleStudent student={this.props.selectedStudent} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students,
  selectedStudent: state.selectedStudent,
});

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => dispatch(fetchStudents()),
  postStudent: student => dispatch(postStudent(student)),
  getSingleStudent: student => dispatch(getSingleStudent(student)),
});

const connectedMainComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default connectedMainComponent;
