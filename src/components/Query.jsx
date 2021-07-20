import React, { useEffect, useState } from 'react' ;


const Query = () => {
    const [data, setData] = useState([{}]) ;
    useEffect(()=>{
        const fetchdata = async() => {
            const data1 = await fetch("/getall",{
                method: "get"
            })
            setData(await data1.json())
        }
        fetchdata() ;
    },[])
    return(
        <React.Fragment>
            <div className="query">
                <h1>
                    get all data
                </h1>
                <div className="alldata">
                    {data === null ? data : data.map((obj, index)=>{
                        return(
                            <React.Fragment>
                                {obj.serial}<br/>
                                {obj.name} <br />
                                {obj.comment} <br />
                                <hr />

                            </React.Fragment>
                        )
                    })}
                </div>
            </div>

        </React.Fragment>
    )
}



















export default Query ;