import React,{ Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';


class ReactStrap extends Component{

    render(){
        return(
            <div>
                <Alert color='light'>
                    Simple Alert [ ]
                </Alert>
                <UncontrolledAlert color="warning">
                    uncontrolled Alert
                </UncontrolledAlert>
            </div>

        )
    }
}


export default ReactStrap;