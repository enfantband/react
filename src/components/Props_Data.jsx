import React , {Component} from 'react';
import datatype from 'prop-types';


class Props_data extends Component{
    render(){
        
        let { String, Number , Boolean, Array , Json, Function} = 
        this.props
        return (
            <div style={{padding : "0px"}}>
                <p>String pros : {String}</p>
                <p>Number pros : {Number} </p>
                <span>Boolean Pros : {Boolean.toString()}</span>
                <p>Array props : {Array.toString()} 21,12,12,</p>
                <p>Object JsonProps : {JSON.stringify(Json)}</p>
                <p>Fuction Props : {Function}</p>
            </div> 
        )
            
        }


}

export default Props_data;

