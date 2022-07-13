import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Tooltip,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react";

import BreadCrumb from "../../../Components/Common/BreadCrumb";

import product1 from "../../../assets/images/products/img-1.png";
import product6 from "../../../assets/images/products/img-6.png";
import product8 from "../../../assets/images/products/img-8.png";

import { productDetailsWidgets, reviews } from "../../../common/data/ecommerce";

import { Swiper, SwiperSlide } from "swiper/react";
import classnames from "classnames";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from "react-router-dom";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ProductReview = (props) => {
  return (
    <React.Fragment>
      <li className="py-2">
        <div className="border border-dashed rounded p-3">
          <div className="d-flex align-items-start mb-3">
            <div className="hstack gap-3">
              <div className="badge rounded-pill bg-success mb-0">
                <i className="mdi mdi-star"></i> {props.review.rating}
              </div>
              <div className="vr"></div>
              <div className="flex-grow-1">
                <p className="text-muted mb-0">{props.review.comment}</p>
              </div>
            </div>
          </div>
          {props.review.subItems && (
            <React.Fragment>
              <div className="d-flex flex-grow-1 gap-2 mb-3">
                {props.review.subItems.map((subItem, key) => (
                  <React.Fragment key={key}>
                    <Link to="#" className="d-block">
                      <img
                        src={subItem.img}
                        alt=""
                        className="avatar-sm rounded object-cover"
                      />
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          )}

          <div className="d-flex align-items-end">
            <div className="flex-grow-1">
              <h5 className="fs-14 mb-0">{props.review.name}</h5>
            </div>

            <div className="flex-shrink-0">
              <p className="text-muted fs-13 mb-0">{props.review.date}</p>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

const PricingWidgetList = (props) => {
  return (
    <React.Fragment>
      <Col lg={3} sm={6}>
        <div className="p-2 border border-dashed rounded">
          <div className="d-flex align-items-center">
            <div className="avatar-sm me-2">
              <div className="avatar-title rounded bg-transparent text-success fs-24">
                <i className={props.pricingDetails.icon}></i>
              </div>
            </div>
            <div className="flex-grow-1">
              <p className="text-muted mb-1">{props.pricingDetails.label} :</p>
              <h5 className="mb-0">{props.pricingDetails.labelDetail}</h5>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

function EcommerceProductDetail(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ttop, setttop] = useState(false);

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  document.title = "Product Details | Watch Maker";
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Product Details" pageTitle="Ecommerce" />

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <Row className="gx-lg-5">
                  <Col xl={4} md={8} className="mx-auto">
                    <div className="product-img-slider sticky-side-div">
                      <Swiper
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="swiper product-thumbnail-slider p-2 rounded bg-light"
                      >
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            <img
                              src={"https://cdn2.chrono24.com/images/uhren/24197382-74gb8w0cdtnc5dx38akfgb8e-ExtraLarge.jpg"}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={"https://cdn2.chrono24.com/images/uhren/24197382-fcz1sndcgennv16cd67lxbtf-ExtraLarge.jpg"}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={"https://cdn2.chrono24.com/images/uhren/24197382-hl9ws2lonox22jf6n6ui1k15-ExtraLarge.jpg"}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={"https://cdn2.chrono24.com/images/uhren/24197382-jo9ciet1986q36yqn502exes-ExtraLarge.jpg"}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                        </div>
                      </Swiper>

                      <div className="product-nav-slider mt-2">
                        <Swiper
                          onSwiper={setThumbsSwiper}
                          slidesPerView={4}
                          freeMode={true}
                          watchSlidesProgress={true}
                          spaceBetween={10}
                          className="swiper product-nav-slider mt-2 overflow-hidden"
                        >
                          <div className="swiper-wrapper">
                            <SwiperSlide className="rounded">
                              <div className="nav-slide-item">
                                <img
                                     src={"https://cdn2.chrono24.com/images/uhren/24197382-74gb8w0cdtnc5dx38akfgb8e-ExtraLarge.jpg"}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                   src={"https://cdn2.chrono24.com/images/uhren/24197382-fcz1sndcgennv16cd67lxbtf-ExtraLarge.jpg"}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={"https://cdn2.chrono24.com/images/uhren/24197382-hl9ws2lonox22jf6n6ui1k15-ExtraLarge.jpg"}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                             src={"https://cdn2.chrono24.com/images/uhren/24197382-jo9ciet1986q36yqn502exes-ExtraLarge.jpg"}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                          </div>
                        </Swiper>
                      </div>
                    </div>
                  </Col>

                  <Col xl={8}>
                    <div className="mt-xl-0 mt-5">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h4>
                            Rolex Daytona “Silver Dial” Chronograph 18k White
                            Gold Oysterfelx Bracelet Box Papers “In Stock”
                          </h4>
                          <div className="hstack gap-3 flex-wrap">
                            <div>
                              <Link to="#" className="text-primary d-block">
                                Tommy Hilfiger
                              </Link>
                            </div>
                            <div className="vr"></div>
                            <div className="text-muted">
                              Seller :{" "}
                              <span className="text-body fw-medium">
                                Zoetic Fashion
                              </span>
                            </div>
                            <div className="vr"></div>
                            <div className="text-muted">
                              Published :{" "}
                              <span className="text-body fw-medium">
                                26 Mar, 2022
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div>
                            <Tooltip
                              placement="top"
                              isOpen={ttop}
                              target="TooltipTop"
                              toggle={() => {
                                setttop(!ttop);
                              }}
                            >
                              Edit
                            </Tooltip>
                            <a
                              href="apps-ecommerce-add-product"
                              id="TooltipTop"
                              className="btn btn-light"
                            >
                              <i className="ri-pencil-fill align-bottom"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-2 align-items-center mt-3">
                        <div className="text-muted fs-16">
                          <span className="mdi mdi-star text-warning"></span>
                          <span className="mdi mdi-star text-warning"></span>
                          <span className="mdi mdi-star text-warning"></span>
                          <span className="mdi mdi-star text-warning"></span>
                          <span className="mdi mdi-star text-warning"></span>
                        </div>
                        <div className="text-muted">
                          ( 5.50k Customer Review )
                        </div>
                      </div>

                      <Row className="mt-4">
                        {productDetailsWidgets.map((pricingDetails, key) => (
                          <PricingWidgetList
                            pricingDetails={pricingDetails}
                            key={key}
                          />
                        ))}
                      </Row>

                   

                      <div className="product-content mt-5">
                        <h5 className="fs-14 mb-3">Product Description :</h5>
                        <Nav tabs className="nav-tabs-custom nav-success">
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: customActiveTab === "1",
                              })}
                              onClick={() => {
                                toggleCustom("1");
                              }}
                            >
                              Specification
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: customActiveTab === "2",
                              })}
                              onClick={() => {
                                toggleCustom("2");
                              }}
                            >
                              Details
                            </NavLink>
                          </NavItem>
                        </Nav>

                        <TabContent
                          activeTab={customActiveTab}
                          className="border border-top-0 p-4"
                          id="nav-tabContent"
                        >
                          <TabPane id="nav-speci" tabId="1">
                            <div className="table-responsive">
                              <table className="table mb-0">
                                <tbody>
                                  <tr>
                                    <th scope="row" style={{ width: "200px" }}>
                                      Listing code
                                    </th>
                                    <td> EEMTI6</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Brand</th>
                                    <td>Rolex</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Model</th>
                                    <td> Daytona</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Reference number</th>
                                    <td> 116519LN</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Movement</th>
                                    <td> Automatic</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Case material</th>
                                    <td> White gold</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Bracelet material</th>
                                    <td> Rubber</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Year of production</th>
                                    <td>2021</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Condition</th>
                                    <td>
                                      {" "}
                                      Unworn (Mint condition, without signs of
                                      wear)
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Scope of delivery</th>
                                    <td>Original box, original papers</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Gender</th>
                                    <td>Men's watch/Unisex</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Location</th>
                                    <td>
                                      United States of America, Florida, Fort
                                      Lauderdale
                                    </td>
                                  </tr>
                                  <hr />
                                  <tr>
                                    <th scope="row">Movement</th>
                                    <td>Automatic</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Movement/Caliber</th>
                                    <td>4130</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Power reserve</th>
                                    <td>72h</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Number of jewels</th>
                                    <td>74</td>
                                  </tr>

                                  <tr>
                                    <th scope="row">Case material</th>
                                    <td>White gold</td>
                                  </tr>

                                  <tr>
                                    <th scope="row">Case diameter</th>
                                    <td>40 mm</td>
                                  </tr>

                                  <tr>
                                    <th scope="row">Water resistance</th>
                                    <td>10 ATM</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Bezel material</th>
                                    <td>Ceramic</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Crystal</th>
                                    <td>Sapphire crystal</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Dial</th>
                                    <td>Grey</td>
                                  </tr>
                                  <h4>Bracelet</h4>
                                  <tr>
                                    <th scope="row">Bracelet material</th>
                                    <td>Rubber</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Bracelet color</th>
                                    <td>Black</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Clasp</th>
                                    <td>Fold clasp</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Clasp material</th>
                                    <td>White Gold</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </TabPane>
                          <TabPane id="nav-detail" tabId="2">
                            <div>
                              <h5 className="font-size-16 mb-3">
                                Tommy Hilfiger Sweatshirt for Men (Pink)
                              </h5>
                              <p>
                                Unworn Rolex Daytona 116500LN Silver Index Dial
                                18k White Gold on Oysterflex. Includes box and
                                papers. In stock. TERMS ***** Please do not ask
                                us to complete a transaction outside of Chrono24
                                or to circumvent sales tax or import duties in
                                any way. Your request will be denied. Also, if
                                you are purchasing from us, please reach out
                                within three hours of your purchase to confirm
                                your order. Payments are due within 24 hrs or
                                your order will be cancelled. We do high volume
                                and can not hold items for customers who have no
                                intentions to pay. Please respect these
                                guidelines. ***** Once a purchase is made and
                                paid for, if you change your mind, you will be
                                charged the shipping cost to and from you. In
                                addition, if you are purchasing from outside of
                                the United States, and wish to return, or
                                decline to pay your countries customs fees, you
                                will be charged the tax rate that we have to pay
                                to import it back into the United States. There
                                will be no exceptions so please make sure you
                                ask any questions you have before your purchase.
                                ACCESSORIES ***** Some manuals will be in a
                                foreign language. Please note some of the older
                                watches will come with a newer manual. Some of
                                the boxes are not original to the watches but
                                are authentic. Please note some boxes may have
                                small marks. PAYMENT OPTIONS Chrono24 via
                                Trusted checkout, or direct bank wire transfer.
                                SHIPPING AND RETURN POLICY FedEx overnight
                                within the U.S. and FedEx International Priority
                                for worldwide. If you need to change your
                                shipping address please contact Chrono 24. There
                                policy states it must be approved by them before
                                shipping. No exceptions can be made. **Please
                                note that all International buyers are
                                responsible for custom taxes/duties of the
                                receiving country.** **Returns must be confirmed
                                and approved by our office within 3 calendar
                                days of receipt of the watch. Watches may be
                                returned or exchanged, in the exact condition as
                                it was received. Watches will be fully inspected
                                upon return. If you purchased a unworn watch and
                                during the inspection we can verify that it been
                                worn, sized or marked the return will be voided.
                                WARRANTY Included with each of our watches is a
                                one year in house Limited Warranty on movement
                                only. The warranty does not cover theft or loss
                                of your watch, normal wear-and-tear, damage
                                caused to your watch by accidents, mishandling,
                                mistreatment or negligence (including, without
                                limitation, damage caused by failure to follow
                                manufacturer and/or our instructions). Wear of
                                the watch strap, glass, clasp and cosmetic
                                damage are not covered by our warranty. If your
                                watch is covered by our Limited Warranty,
                                deviations in timekeeping or damage caused to
                                your watch by water are not covered by our
                                warranty. **** For any other warranty questions
                                please visit the manufactures websites. IN STORE
                                PICKUP You may pick up in store with a 24 hour
                                notice after your purchase has been made and
                                payment is completed. No exceptions will be
                                made. We are an independent watch dealer. We are
                                not sponsored by, associated with or affiliated
                                with Rolex S.A., Rolex USA, or any of their
                                subsidiaries, nor are we associated with any
                                other brands we sell. We provide our own
                                warranties, if stated in our description. All
                                wholesale watches do not include any warranty.
                                Rolex or any of their subsidiaries are under no
                                obligation to provide a warranty or service on
                                any watches sold by our company for any reason.
                              </p>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>

                      <div className="mt-5">
                        <div>
                          <h5 className="fs-14 mb-3">Ratings & Reviews</h5>
                        </div>
                        <Row className="gy-4 gx-0">
                          <Col lg={4}>
                            <div>
                              <div className="pb-3">
                                <div className="bg-light px-3 py-2 rounded-2 mb-2">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                      <div className="fs-16 align-middle text-warning">
                                        <i className="ri-star-fill"></i>{" "}
                                        <i className="ri-star-fill"></i>{" "}
                                        <i className="ri-star-fill"></i>{" "}
                                        <i className="ri-star-fill"></i>{" "}
                                        <i className="ri-star-half-fill"></i>
                                      </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                      <h6 className="mb-0">4.5 out of 5</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-muted">
                                    Total{" "}
                                    <span className="fw-medium">5.50k</span>{" "}
                                    reviews
                                  </div>
                                </div>
                              </div>

                              <div className="mt-3">
                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">5 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          style={{ width: "50.16%" }}
                                          aria-valuenow="50.16"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">2758</h6>
                                    </div>
                                  </div>
                                </Row>

                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">4 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          style={{ width: "19.32%" }}
                                          aria-valuenow="19.32"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">1063</h6>
                                    </div>
                                  </div>
                                </Row>

                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">3 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          style={{ width: "18.12%" }}
                                          aria-valuenow="18.12"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">997</h6>
                                    </div>
                                  </div>
                                </Row>

                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">2 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-warning"
                                          role="progressbar"
                                          style={{ width: "7.42%" }}
                                          aria-valuenow="7.42"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">408</h6>
                                    </div>
                                  </div>
                                </Row>

                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">1 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-danger"
                                          role="progressbar"
                                          style={{ width: "4.98%" }}
                                          aria-valuenow="4.98"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">274</h6>
                                    </div>
                                  </div>
                                </Row>
                              </div>
                            </div>
                          </Col>

                          <Col lg={8}>
                            <div className="ps-lg-4">
                              <div className="d-flex flex-wrap align-items-start gap-3">
                                <h5 className="fs-14">Reviews: </h5>
                              </div>

                              <SimpleBar
                                className="me-lg-n3 pe-lg-4"
                                style={{ maxHeight: "225px" }}
                              >
                                <ul className="list-unstyled mb-0">
                                  {reviews.map((review, key) => (
                                    <React.Fragment key={key}>
                                      <ProductReview review={review} />
                                    </React.Fragment>
                                  ))}
                                </ul>
                              </SimpleBar>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EcommerceProductDetail;
