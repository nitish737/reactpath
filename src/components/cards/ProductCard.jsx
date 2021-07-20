import React from 'react' ;
import "./../../styles/a5productcard.scss" ;

const ProductCard = ({name, comment}) => {
    return(
        <React.Fragment>
            <div className="wrapper">
                <div className="product-card-452">
                    <div className="img">
                        <img src="https://picsum.photos/300" alt=""/>
                    </div>
                    <div className="name">
                        <h2>{name}</h2>
                    </div>
                    <div className="comment">
                        <h3>{comment}</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}










export default ProductCard ;