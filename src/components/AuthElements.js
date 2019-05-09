import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp'; 
import {withStyles} from '@material-ui/core/styles';

const AuthElements = function(props){

    const loginButton = ()=>{
        if(props.user) return(
      [<Avatar src={props.user.providerData[0].photoURL}/>,(<IconButton color='inherit' onClick={props.logout}><ExitToApp/></IconButton>)]
     );
        return( <Button variant="contained" onClick={props.login}>
                Iniciar Sesion Con Google
                </Button>);
    }

        return (
            //className={this.props.classes.container}
            <div className={props.classes.container}>
                {loginButton()}
            </div>
        );
    }

    export default withStyles({
         container:{
            display:'flex',
              flexDirection:'row'
          }
      })(AuthElements);