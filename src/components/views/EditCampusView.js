import { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './edit.css';

class EditCampusView extends Component {


    constructor(props) {
        super(props);
        this.state = {
          name: props.campus.name || '',
          imageUrl: props.campus.imageUrl || '',
          address: props.campus.address || '',
          description: props.campus.description || '',
          redirect: false
        }
    }
    handleChange = (event) => {
        this.setState({ 
            [event.target.id]: event.target.value 
        });
    }

    handleSubmit = () => {
        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            imageUrl: this.state.imgURL ? this.state.imageUrl : undefined,
            id: this.props.campus.id
        };
        // submit
        this.props.editCampus(campus);
        this.setState({ redirect: true });
      }

      render(){
        if (this.state.redirect)
        return <Redirect to={`/campus/${this.props.campus.id}`}/>
        return (
            <div className='container'>
                <div className= 'formContainer'>
                    <div className='formTitle'>
                    <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
                        Edit Campus
                    </Typography>
                    </div>

                        <form  style={{textAlign: 'center'}} onSubmit={this.handleSubmit}>

                        <label className="title" style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
                        <input id="name" type="text" name="name" placeholder={this.state.name} value={this.state.name} onChange={this.handleChange} />

                        <br/>
                        <br/>

                        <label className="title" style={{color:'#11153e', fontWeight: 'bold'}}> Address: </label>
                        <input id="address" type="text" name="address" value={this.state.address} onChange={this.handleChange} />
                        <br/>
                        <br/>

                        <label className="title" style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
                        <input id="description" type="text" name="description"   value={this.state.description}  onChange={this.handleChange} />
                        <br/>
                        <br/>

                        <label className="title" style={{color:'#11153e', fontWeight: 'bold'}}> Image URL: </label>
                        <input id="imageUrl" type="text" name="imageUrl"  value={this.state.imgURL} onChange={this.handleChange} />
                        <br/>
                        <br/>

                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>

                        <br/>
                        <br/>
                        </form>
                    </div>
            </div>
    
  )
    }
}


export default (EditCampusView);