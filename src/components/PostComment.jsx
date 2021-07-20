import React, {useState} from 'react' ;
import "./../styles/a3postcomment.scss" ;
const PostComment = () => {
    const [name, setName] = useState("") ;
    const [comment, setComment] = useState("") ;
    const postComment = async () => {
        if(name.length < 3 || comment.length < 3){
            return window.alert("too small")
        }
        const postComment = await fetch("/comment",{
            method: "post" ,
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, comment
            })
        })
        const commentPosted = await postComment ;
        if(commentPosted){
            window.alert("comment was posted successfully")
        }
        else{
            window.alert("failed to post comment")
        }
    }
    return(
        <React.Fragment>
            <div className="wrapper">
                <div className="comment739">
                    <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input type="text" placeholder="comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                    <button onClick={postComment}>Post Comment</button>
                </div>
            </div>
        </React.Fragment>
    )
}



export default PostComment ;















