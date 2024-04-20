import React , {Component} from 'react';



class Props_Comp extends Component{
    render(){
        let props_value = this.props.props_val;
        props_value += 'from App.js'

        props_value +=  this.props.val2;
        return(
            <div> {props_value} </div>
        )
    }
}


export default Props_Comp;

