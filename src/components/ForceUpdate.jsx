import React , {Component} from 'react';
import datatype from 'prop-types';


class ForceUpdate extends Component{

        constructor(props){
            super(props);
            this.state = { 
                StateString: 'react',
                myString : 'noon'
            }
        }

        StateChange = () => {
             this.state.StateString = '리엑트';
             this.state.myString = 'fwfwafwefwefewefwe';
             this.forceUpdate();
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

                    <br/>
                      Output2 : {this.state.myString}
                </div>
            )
        }
    }

export default ForceUpdate;

