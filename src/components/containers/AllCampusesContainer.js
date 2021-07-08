import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }
//Handle Event Submit
handleSubmit(e){
  e.preventDefault();

  const name = e.target.name.value;
  const description = e.target.discription.value;
  const address = e.target.address.value;
  const imageUrl = e.target.imageUrl.value;

  let addedCampus = {
    name: name,
    description: description,
    address: address,
    imageUrl: imageUrl,
  };

  this.props.addStudent(addedCampus);
  e.target.reset(); // so it could change.

}

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);