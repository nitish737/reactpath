import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("") ;
    const [comment, setComment] = useState("") ;
    const submitForm = async () => {
        const posted = await fetch("/comment",{
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, comment
            })
        })
        const result = await posted ;
        // if(result){
        //     window.alert("comment posted")
        // }
        // else{
        //     window.alert("failed to post")
        // }
    }

    const deleteAll = async () => {
        const delete1 = await fetch("/deleteallsure",{
            method: "get"
        })
        const result = await delete1 ;
        if(result){
            window.alert("data is deleted")
        }
        else{
            window.alert("failed to delete")
        }
    }
  return (
    <React.Fragment>
      <div className="form">
        <h1>Form</h1>
        <div className="input">
          <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
          <input type="text" placeholder="comment" value={comment} onChange={(e)=>setComment(e.target.value)}/><br /><br />
          <button onClick={submitForm}>Submit</button>
        </div>
      </div>
      <div className="deletall">
          <button onClick={deleteAll}>Delete all data</button>
      </div>
    </React.Fragment>
  );
};

export default Form;
