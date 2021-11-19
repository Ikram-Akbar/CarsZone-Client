import React from 'react';
import { Link } from 'react-router-dom';
import Roll from 'react-reveal/Roll';
const ExploreItem = ({car}) => {
    const { _id, img, name, price, description } = car;

    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card-group mt-3 shadow">
           <Roll left>
          <div className="card p-4">
            <img style={{ width: "100%" , height:"380px"}} src={img} alt="" />
            <div className="card-body text-center">
              <h3>{name}</h3>
              <p className="card-text">{description?.slice(0, 130)}..</p>
              <h5 className="card-title">${price}</h5>
              <Link to={`/cars/${_id}`}>
                <button className="btn btn-outline-dark">ORDER NOW</button>
              </Link>
            </div>
          </div>
          </Roll>
        </div>
 
      </div>
    );
};
export default ExploreItem;