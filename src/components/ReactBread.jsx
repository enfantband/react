import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

class ReactBread extends Component{

    render(){
        return (

            <div id='top'>
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">GO_Top</BreadcrumbItem>
                    <BreadcrumbItem tab="a" href="#bottom">Go_Bottom</BreadcrumbItem>
                </Breadcrumb>

                <div id="bottom" style={{marginTop:"1000px"}}>
                        <span>bottom</span>
                </div>
            </div>
        )

    }
}



export default ReactBread;