import React, {useEffect, useState} from 'react' ;
import "./../styles/a2products.scss" ;

const Products = () => {
    const [searchString, setSearchString] = useState("") ;
    const [productData, setProductData] = useState([{}]) ;
    const [finalProductData, setFinalProductData] = useState([{}]) ;
    useEffect(()=>{
        const fetchProductData = async () => {
            const products = await fetch("/getall", {
                method: "get"
            }) ;
            setProductData(await products.json()) ;
            console.log(productData)
        } ;

        fetchProductData() ;
    }, []) ;

    // useEffect(()=>{
    //     const searchFor = async () => {
    //         if(searchString.length > 2){
    //             const searchRes = await fetch("/searchforit", {
    //                 method : "post" ,
    //                 headers : {
    //                     "Content-Type" : "application/json"
    //                 },
    //                 body : {
    //                     "name" : searchString
    //                 }
    //             }) ;
    //             const res2 = await searchRes ;
    //             setFinalProductData(res2.json()) ;
    //         }
    //         else{
    //             console.log("small string")
    //         }
    //     }
    //     searchFor() ;
    // },[searchString]) ;
    const searchIt = async () => {
        console.log(searchString) ;
        const searchres = await fetch("/searchname", {
            method:"post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name : searchString
            })
        })
        setFinalProductData(await searchres.json()) ;
        console.log(finalProductData)
    }

    return(
        <React.Fragment>
            <div className="wrapper">
                <div className="products793">
                    <div className="search">
                        <input type="text" value={searchString} placeholder ="search" onChange={ (e)=>{
                            setSearchString(e.target.value)
                        searchIt() ;}}/>
                        <button onClick = {searchIt}>Search</button>
                    </div>

                        <div>
                            {productData.map((obj, index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <hr/>
                                        {obj.serial} <br/>
                                        {obj.name} <br/>
                                        {obj.comment} <br/>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    <h1>
                        below is final string {finalProductData.length}
                        {typeof finalProductData}
                    </h1>
                    <div >
                        {finalProductData.map((obj, index)=>{
                            return(
                                <React.Fragment key={index}>
                                    hello
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products ;

