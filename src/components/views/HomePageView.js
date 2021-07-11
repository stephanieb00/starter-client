import AppBar from '@material-ui/core/AppBar';
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

  images:{
    width:'900px',
    height:'50%',
    display: 'block',
    margin: 'auto',
    marginTop:'50px',
  }

}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" className={classes.button}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button className={classes.button} variant="contained">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <div className={classes.greeting}><h1>Home Page</h1></div>

      <div className={classes.images}> <img src="https://www.bellevuecollege.edu/wp-content/uploads/sites/144/2020/03/graduation-cap-throw-1024x458.png"></img></div>
    </div>
  );    
}




export default HomePageView;
