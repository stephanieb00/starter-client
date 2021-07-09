import AppBar from '@material-ui/core/AppBar';
import PropTypes from "prop-types";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#CDDC39',
  },
  appBar:{
    backgroundColor:'#2B7D6B',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:'#2B7D6B',
    width: "50%",
    margin: "auto",
  },
  button:{
    backgroundColor:'#87ACA3',
    marginRight: '10px',
    color:'#0C1446',
    textDecorationThickness:'4px',
  },

  image:{
    width:'400px',
    height:'30%'  
  }

}));

const AllCampusesView = (props) => {
  const classes = useStyles();
  const {campuses, deleteCampus} = props;
  if (!props.campuses.length) {
    return(
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" className={classes.button}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button className={classes.button} variant="contained">
              All Students
            </Button>
          </Link>
        </Toolbar>
        </AppBar>
      
      <div className={classes.greeting}><h1> Campuses</h1></div>

        <div className= "none">There are no campuses.</div>
      </div>
      );
  }

  return (
    <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" className={classes.button}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button className={classes.button} variant="contained">
              All Students
            </Button>
          </Link>
        </Toolbar>
        </AppBar>
        <div className={classes.greeting}><h1> Campuses</h1></div>

        <Link to={`/newcampus`}>
          <button  className={classes.button} >Add New Campus</button>
        </Link>

      {props.campuses.map((campus) => (
        <div key={campus.id} className="container">
          <Link to={`/campus/${campus.id}`}>
            <h3>{campus.name}</h3>
          </Link>
          <img className={classes.image} src={campus.imageUrl}  alt={campus.name} />
          <button className={classes.button} onClick={() => deleteCampus(campus.id)}>Delete</button>
        </div>

      ))}
    </div>
  );
};


export default AllCampusesView;