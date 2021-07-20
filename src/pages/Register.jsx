import React, {useState} from 'react' ;
import "./../styles/a6register.scss" ;

const Register = () => {
    const [name, setName] = useState("") ;
    const [email, setEmail] = useState("") ;
    const [phone, setPhone] = useState("") ;
    const [work, setWork] = useState("") ;
    const [password, setPassword] = useState("") ;
    const [cpassword, setCpassowrd] = useState("") ;
    const registerUser = async () => {
        const register = await fetch("/register_user", {
            method : "post" ,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        })
        const result = await register ;
        if(result.json.error){
            console.log("there is an error")
        }
        if(!result){
            window.alert("Error occured") ;
        }
        else{
            window.alert("hello hello Nitish") ;
        }

    }

    return(
        <React.Fragment>
            <div className="wrapper">
                <div className="register876">
                    <div className="inputs">
                        <div className="input name">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </div>

                        <div className="input email">
                            <label htmlFor="name">Email</label>
                            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        </div>

                        <div className="input phone">
                            <label htmlFor="name">Phone</label>
                            <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

                        </div>

                        <div className="input work">
                            <label htmlFor="name">Work</label>
                            <input type="text" value={work} onChange={(e)=>{setWork(e.target.value)}}/>

                        </div>

                        <div className="input password">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

                        </div>

                        <div className="input cpassword">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" value={cpassword} onChange={(e)=>{setCpassowrd(e.target.value)}}/>

                        </div>

                        <div className="button">
                            <button onClick={registerUser}>Submit</button>
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

















export default Register ;