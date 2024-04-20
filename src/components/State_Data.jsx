import React , {Component} from 'react';
import datatype from 'prop-types';


class State_data extends Component{

        constructor(props){
            super(props);
            this.state = { 
                StateString: 'react'
            }
        }

        StateChange = (flag) => {
            if(flag =='direct') this.state.StateString = '리엑트';
            if(flag =='setstate') this.setState({StateStrubg : '리엑트'});
        }

        render(){
            return(
                <div style={{padding : "0px"}}>

                    <button onClick={(e) => this.StateChange('direct',e)} >
                      state direct change
                    </button>
                    
                    <button onClick={(e) => this.StateChange('setstate',e)}>
                      setState Change
                    </button>
                    <br/>
                     
                      Output : {this.state.StateString}
                </div>
            )
        }
    }

export default State_data;

