import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import { Icon } from "ts-react-feather-icons";

//Import Images
import product9 from "../../../assets/images/shop/product/s9.jpg";
import product10 from "../../../assets/images/shop/product/s10.jpg";
import product11 from "../../../assets/images/shop/product/s11.jpg";
import product12 from "../../../assets/images/shop/product/s12.jpg";

import prodtctOverlay9 from "../../../assets/images/shop/product/s-9.jpg";
import prodtctOverlay10 from "../../../assets/images/shop/product/s-10.jpg";
import prodtctOverlay11 from "../../../assets/images/shop/product/s-11.jpg";
import prodtctOverlay12 from "../../../assets/images/shop/product/s-12.jpg";

interface Product {
  id: number;
  image: string;
  imgOverlay: string;
  name: string;
  price: string;
  oldPrice?: string; // Optional property
  desc?: string; // Optional property
  isIcon: {
    icon: "heart" | "eye" | "shopping-cart"; // Valid icon names
    subClass: string;
  }[];
}

const products : Product[] = [
  {
    id: 1,
    image: product9,
    imgOverlay: prodtctOverlay9,
    name: "Coffee Cup / Mug",
    price: "16.00",
    oldPrice: "21.00",
    isIcon: [
      { icon: "heart", subClass: "btn-soft-danger" },
      { icon: "eye", subClass: "btn-soft-primary" },
      { icon: "shopping-cart", subClass: "btn-soft-warning" },
    ],
  },
  {
    id: 2,
    image: product10,
    imgOverlay: prodtctOverlay10,
    name: "Sunglasses",
    price: "21.00",
    oldPrice: "25.00",
    isIcon: [
      { icon: "heart", subClass: "btn-soft-danger" },
      { icon: "eye", subClass: "btn-soft-primary" },
      { icon: "shopping-cart", subClass: "btn-soft-warning" },
    ],
  },
  {
    id: 3,
    image: product11,
    imgOverlay: prodtctOverlay11,
    name: "Loafer Shoes",
    price: "5.00",
    desc: "30% off",
    isIcon: [
      { icon: "heart", subClass: "btn-soft-danger" },
      { icon: "eye", subClass: "btn-soft-primary" },
      { icon: "shopping-cart", subClass: "btn-soft-warning" },
    ],
  },
  {
    id: 4,
    image: product12,
    imgOverlay: prodtctOverlay12,
    name: "T-Shirts",
    price: "18.00",
    oldPrice: "22.00",
    isIcon: [
      { icon: "heart", subClass: "btn-soft-danger" },
      { icon: "eye", subClass: "btn-soft-primary" },
      { icon: "shopping-cart", subClass: "btn-soft-warning" },
    ],
  },
];

const PopularProducts = () => {
  return (
    <React.Fragment>
      <Container className="mt-100 mt-60">
        <Row>
          <Col xs={12}>
            <h5 className="mb-0">Popular Products</h5>
          </Col>
        </Row>

        <Row>
          {products.map((product, key) => (
            <Col key={key} lg={3} md={6} xs={12} className="mt-4 pt-2">
              <Card className="shop-list border-0 position-relative overflow-hidden shadow">
                <ul className="label list-unstyled mb-0">
                  <li>
                    <Link
                      to="#"
                      className="badge badge-link rounded-pill bg-info"
                    >
                      Popular
                    </Link>
                  </li>
                </ul>
                <div className="shop-image position-relative overflow-hidden rounded shadow">
                  <Link to="shop-product-detail">
                    <img src={product.image} className="img-fluid" alt="shop" />
                  </Link>
                  <Link to="shop-product-detail" className="overlay-work">
                    <img
                      src={product.imgOverlay}
                      className="img-fluid"
                      alt="shop"
                    />
                  </Link>
                  <ul className="list-unstyled shop-icons">
                    {product?.isIcon?.map((item, key) => (
                      <li key={key}>
                        <Link
                          to="#"
                          className={
                            "mb-2 btn btn-icon btn-pills " + item.subClass
                          }
                        >
                          <i>
                            <Icon name={item.icon} />
                          </i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <CardBody className="content pt-4 p-2">
                  <Link
                    to="shop-product-detail"
                    className="text-dark product-name h6"
                  >
                    {product.name}
                  </Link>
                  <div className="d-flex justify-content-between mt-1">
                    <h6 className="text-muted small fst-italic mb-0 mt-1">
                      ${product.price}{" "}
                      {product.oldPrice ? (
                        <del className="text-danger ms-2">
                          ${product.oldPrice}
                        </del>
                      ) : null}
                      {product.desc ? (
                        <span className="text-success ms-1">
                          {product.desc}
                        </span>
                      ) : null}
                    </h6>
                    <ul className="list-unstyled text-warning mb-0">
                      <li className="list-inline-item">
                        <i className="mdi mdi-star me-1"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star me-1"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star me-1"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star me-1"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default PopularProducts;
