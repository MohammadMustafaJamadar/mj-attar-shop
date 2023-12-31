import React from 'react'

import signup from "../../assets/images/user/signup.svg";

const ImageSection = () => {
  return (
    <React.Fragment>
      <div className="me-lg-5">
                <img
                  src={signup}
                  className="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
    </React.Fragment>
  )
}

export default ImageSection
