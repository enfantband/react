import React , {Component} from 'react';
import datatype from 'prop-types';


class Props_data extends Component{
    render(){
        
        return (
            <div style={{padding : "0px"}} >
                {this.props.children}
            </div>
        )
            
 }


}

export default Props_data;

