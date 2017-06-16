import React, { Component } from 'react' 
import $ from  'jquery' 
import urls from './GlobalRend';
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
            url:urls.users_list_url+'.json',
            success:function(res){
                this.setState({
                    userDetails:res
                })
            }.bind(this)
        })
    }

    render(){
        let userDetails=this.state.userDetails;
        let ns;
        console.log(userDetails)
        if(userDetails.users){
            ns = userDetails.users.map(user=>{
                return(
                    <div key={user.User.id}>{user.User.firstname}<br/></div>
                )
            })
        }
        return(
            <div>
                {ns}
            </div>
        )
   }
}
 
export default Users;