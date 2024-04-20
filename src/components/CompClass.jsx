import React , {Component} from 'react';
import datatype from 'prop-types';


class ForceUpdate extends Component{

        constructor(props){
            super(props);
            this.state = { 
                StateString: 'react'
            }
        }

        buttonClick = (type) =>{
            if(type =='String'){
                this.setState({ StateString : 'react'});

            }else{
                
            }
        }
        render(){
            return(
                <div style={{padding : "0px"}}>

                    <button onClick={(e) => this.StateChange('direct',e)} >
                      state direct change
                    </button>
                    
                    <br/>
                    StateString : {this.state.StateString}
                    <br/>
                     
                      Output : {this.state.StateString}

                </div>
            )
        }
    }

export default ForceUpdate;

