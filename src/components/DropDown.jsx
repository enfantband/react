import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropDown extends Component{

    constructor(props){
        super(props);
        this.state ={
            dropdwonOpen : true
        }
        
    }

    toggle = (e) =>{
        this.setState({ dropdownOpen : !this.state.dropdwonOpen })
    }

    render(){
        return(
            <ButtonDropdown isOpen={this.state.dropdwonOpen} toggle={this.toggle} >
                <DropdownToggle caret>  버튼 drop dwon</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header> 헤더 </DropdownItem>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href="http://naver.com" >
                        <DropdownItem>move site</DropdownItem>
                    </a>
                    <DropdownItem onClick={e => alert("Alert button")}>  Alert button </DropdownItem>
                </DropdownMenu>

            </ButtonDropdown>
        )
    }
}

export default DropDown;
