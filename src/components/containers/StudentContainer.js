import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { fetchStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { deleteStudentThunk } from "../../store/thunks";;


class StudentContainer extends Component {
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  //Handle Event Delete
  handleDelete(studentId){
      this.props.deleteStudent(studentId);
  }

  render(){
    return(
      <StudentView 
        student={this.props.student}
        allCampuses={this.props.allCampuses}
        handleDelete={this.handleDelete}
      />
    );
  }


}

// Map state to props;
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
  };
};

// Type check props;
StudentContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(StudentContainer);