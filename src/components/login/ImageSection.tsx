import React from 'react';

import loginImg from "../../assets/images/user/login.svg";

const ImageSection = () => {
  return (
    <React.Fragment>
      <div className="me-lg-5">
                <img
                  src={loginImg}
                  className="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
    </React.Fragment>
  )
}

export default ImageSection
