import React from 'react'

import faker from 'faker'

const CommentDetails =(props)=>{

return(
 
  
  <div className="comment">
    <a href='/' className="avatar">
      <img alt="images" src={faker.image.avatar()} />
    </a>
    <div className="content">
<a href="/" className="author">{props.Name}</a>
      <div className="metadata">
        <span className="date">Today at 5:42PM</span>
      </div>
      <div className="text">
        How artistic!
      </div>
      <div className="actions">
      
      </div>
    </div>
  </div>

  
  
)
}



export default CommentDetails;
