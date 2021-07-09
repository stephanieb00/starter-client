import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStudentsThunk, deleteStudentThunk } from '../../store/thunks';
import AllStudentsView from '../views/AllStudentsView';

class AllStudentsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div id = "allStudentsView">
        <AllStudentsView
          students={this.props.allStudents}
          deleteStudent={this.props.deleteStudent}
        />
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
  };
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);
