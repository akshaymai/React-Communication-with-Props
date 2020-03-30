import React from 'react';
import Reactdom from 'react-dom'
 import CommentDetails from './commentDetails'
 import ApproveCard from './approvalcard'

class Akshay extends React.Component{

render(){
 return(
    <div className="ui container comments">
         <ApproveCard>
    <CommentDetails
     Name="akshay maity" />
    </ApproveCard>

    <ApproveCard>
     <CommentDetails Name="mitu maity"/>
     </ApproveCard>
     <ApproveCard>
     <CommentDetails Name="raju maity"/>
     </ApproveCard>
     <ApproveCard>
     <CommentDetails Name=" maity"/> 
     </ApproveCard>
     

         </div>
 )
        
    
}
}


Reactdom.render(<Akshay />,document.querySelector('#root'))