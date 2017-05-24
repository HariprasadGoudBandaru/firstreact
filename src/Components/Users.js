import React, { Component } from 'react'
import {Link } from 'react-router'
import $ from  'jquery'
class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            userDetails : {}
        }
    }

    componentDidMount(){
        $.ajax({
            type:'GET',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            success:function(res){
                this.setState({
                    userDetails:res
                })
            }.bind(this)
        })
    }

    render(){
        let userDetails;

        if(typeof this.state.userDetails.title === 'string'){
            let user = this.state.userDetails;
            return(
                <div>
                <h5>{user.title}</h5>
                <Link to='/hari'> Back</Link>
                <Hari hi={user.id} />
                </div>
            );
        }else{
             return(
                <div>
                <h5>Your in User Component </h5>
                <Link to='/hari'> Go Back</Link>
                </div>
            );
        }   
       
    }
}

const Hari = (props) => (
    <div>{props.hi}</div>
) 
export default Users;