import React,{Component} from 'react'
import {Link} from 'react-router'

class Hari extends Component{
    render(){
        return(
            <div>
                <div> Hi hari
                    <Link to='/users'> Users</Link>
                </div>
            </div>
        );
    }

}
export default Hari;