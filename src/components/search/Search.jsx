import React, {useEffect, useState} from 'react' ;
import "./search.scss" ;
import {SearchRounded} from "@material-ui/icons";
import {useHistory} from "react-router-dom" ;


const Search = () => {
    const [searchString, setSearchString] = useState("") ;
    const [searchResult, setSearchResult] = useState([]) ;
    const history = useHistory() ;

    const submitForm = () => {} ;
    const handleChange = (event) => {
        setSearchString(event.target.value) ;
    }


    useEffect(()=>{

        if(searchString.length > 2){
            const search = async () => {

                const searchFor = await fetch(`searchget/${searchString}`, {
                    method : "get" ,
                })
                setSearchResult(await searchFor.json()) ;
                console.log(searchResult) ;
            }
            search() ;
        }
        else{
            setSearchResult([]) ;
        }
    },[searchString])


    return(
        <React.Fragment>
            <div className="wrapper">
                <div className="search704">
                    <div className="input">
                        <input type="text" placeholder="search" value={searchString} onChange={handleChange} autoFocus/>
                        <button onClick={submitForm}><SearchRounded/></button>
                    </div>
                    <div className="results">
                        <h1>
                            {searchString}
                        </h1>
                        <div className="search-arrange">

                            {searchResult.map((obj, index)=>{
                                return(
                                    <React.Fragment key={index}>
                                      <div className="each-card" onClick={()=>{history.push(`product-page/${obj.name}`)}}>
                                          <div className="img">
                                              <img src="https://picsum.photos/100" alt=""/>
                                          </div>
                                          <div className="content">

                                              <div className="name-con">
                                                  <h2>{obj.name}</h2>
                                              </div>
                                              <div className="cm">
                                                  <h3>{obj.comment}</h3>
                                              </div>

                                          </div>

                                      </div>
                                    </React.Fragment>
                                )
                            })}

                        </div>



                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}




export default Search ;















