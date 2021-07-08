import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk } from "../../store/thunks";
import { AllStudentsView } from "../views";
import { addStudentThunk } from "../../store/thunks";
import { deleteStudentThunk } from "../../store/thunks";;


class AllStudentsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
  }

  //Handle Event Submit
  handleSubmit(e){
    e.preventDefault();

    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const imageUrl = e.target.imageUrl.value;
    const gpa = e.target.gpa.value;

    let addedStudent = {
      firstname: firstname,
      lastname:lastname,
      email: email,
      imageUrl: imageUrl,
      gpa: gpa,
    };

    this.props.addStudent(addedStudent);
    e.target.reset(); // so it could change.

  }

   //Handle Event Delete

   //we get this from the thunks.js file.
   handleDelete(studentId){
    this.props.deleteStudent(studentId);
   }

  render() {
    return (
      <div id = "allStudentsView">
        <AllStudentsView
          allStudents={this.props.allStudents}
          handleDelete={this.props.handleDelete}
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
    addStudent: (student) => dispatch(addStudentThunk(student)),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
  };
};

// Type check props;
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllStudentsContainer);
