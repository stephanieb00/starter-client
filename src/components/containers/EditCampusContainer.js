import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import EditCampusView from '../views/EditCampusView';
import { fetchCampusThunk, editCampusThunk} from '../../store/thunks';


class EditCampusContainer extends Component {
    componentDidMount() {
        this.props.fetchCampus(this.props.match.params.id);
    }
  
    render() {
      return (
        <EditCampusView
          editCampus={this.props.editCampus}
          campus={this.props.campus}
          //allCampuses={this.props.allCampuses}
          />
      );
    }
  }

// Map state to props;
const mapState = (state) => ({
    campus: state.campus,
});

const mapDispatch = (dispatch) => ({
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus))   
});

// Make sure we get the addStudent func through props
EditCampusContainer.propTypes = {
    editCampus: PropTypes.func.isRequired,
    campus: PropTypes.object.isRequired,
    fetchCampus: PropTypes.func.isRequired
};

export default connect(mapState, mapDispatch)(EditCampusContainer);