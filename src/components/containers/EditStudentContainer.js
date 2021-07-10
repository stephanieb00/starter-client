import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import EditStudentView from '../views/EditStudentView';
import { fetchStudentThunk, editStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';


class EditStudentContainer extends Component {
    componentDidMount() {
      this.props.fetchStudent(this.props.match.params.id);
      this.props.fetchAllCampuses();
    }
  
    render() {
      return (
        <EditStudentView
          editStudent={this.props.editStudent}
          student={this.props.student}
          allCampuses={this.props.allCampuses}/>
      );
    }
  }

// Map state to props;
const mapState = (state) => ({
    student: state.student,
    allCampuses: state.allCampuses,
});

const mapDispatch = (dispatch) => ({
        editStudent: (student) => dispatch(editStudentThunk(student)),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())      

});

// Make sure we get the addStudent func through props
EditStudentContainer.propTypes = {
    editStudent: PropTypes.func.isRequired,
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
    fetchStudent: PropTypes.func.isRequired,
    student: PropTypes.object.isRequired
};

export default connect(mapState, mapDispatch)(EditStudentContainer);