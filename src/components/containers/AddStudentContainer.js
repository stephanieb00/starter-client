import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addStudentThunk } from "../../store/thunks";



class AddStudentContainer extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
  handleSubmit(e){
    e.preventDefault();

    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const imageUrl = e.target.imageUrl.value;
    const gpa = e.target.gpa.value;

    let addedStudent =
    {
        firstname: firstname,
        lastname: lastname,
        email: email,
        imageUrl: imageUrl,
        gpa: gpa,
    };

    this.props.addStudent(addedStudent);
    //this.forceUpdate();
    e.target.reset();
    this.props.history.push('/students');

  }

  render(){
    return(
      <div className= "addForm">
        <fieldset>
          <h3>Add Student</h3>
          <form onSubmit={this.handleSubmit}>
            <label className= "fieldLabel">
              Student First  Name:
            </label>
              <input type = "text" name = "firstname" placeholder="Enter First Name: "  required />

            <label className= "fieldLabel">
              Student Last  Name:
            </label>
              <input type = "text" name = "lastname" placeholder="Enter Last Name: "  required />
            
            <label className= "fieldLabel">
              Email:
            </label>
              <input type = "email" name = "email" placeholder="Enter Email: " required />
            
            <label className= "fieldLabel">
              Profile Picture:
            </label>
              <input type = "url" name = "imageUrl" placeholder="Enter URL for Picture" />
            
            <label className= "fieldLabel">
              GPA:
            </label>
              <input type = "number" min="0.0" max="4.0" step="0.01" name = "gpa" placeholder = "0.00" />
              <button type = "submit"> Submit </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

//Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

AddStudentContainer.propTypes = {
  addStudent: PropTypes.array.isRequired,
};

export default connect(mapState, mapDispatch)(AddStudentContainer);