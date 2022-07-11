import React, { useState } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";

// Import React FilePond
import { registerPlugin } from "react-filepond";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const EcommerceAddProduct = () => {
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedStatus, setselectedStatus] = useState(null);
  const [selectedVisibility, setselectedVisibility] = useState(null);
  const [productData, setproductData] = useState({});
  const [imagesPreview, setimagesPreview] = useState([]);

  function handleAcceptedFiles(files) {
    const _files = Array.from(files);

    _files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setimagesPreview((old) => [...old, reader.result]);
          setselectedFiles((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  }

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", productData.name);
    myForm.set("brand", productData.brand);
    myForm.set("model", productData.model);
    myForm.set("reference", productData.reference);
    myForm.set("movement", productData.movement);
    myForm.set("produced", productData.produced);
    myForm.set("material", productData.material);
    myForm.set("glass", productData.glass);
    myForm.set("shape", productData.shape);
    myForm.set("diameter", productData.diameter);
    myForm.set("lugWidth", productData.lugWidth);
    myForm.set("wr", productData.wr);
    myForm.set("color", productData.color);
    myForm.set("finish", productData.finish);
    myForm.set("indexes", productData.indexes);
    myForm.set("hands", productData.hands);
    myForm.set("price", productData.price);
    myForm.set("user", "62caa36dfffaf81e2013bf8f");
    myForm.set("description", productData.description);

    selectedFiles.forEach((image) => {
      myForm.append("images", image);
    });

    try {
      const res = await axios.post("/admin/product/new", myForm);

   

      toast.success("Product Added Successfully");
      setselectedFiles([])
      setimagesPreview([])
    } catch (error) {
      toast.error(error.response.data.message);
      toast.error("Something Went Wrong");
    }
  };

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const brand = [
    {
      options: [{ label: "Rolex", value: "62ca94574962d505ac8b1662" }],
    },
  ];

  const model = [
    {
      options: [
        { label: "Milgauss", value: "62ca9ffa83c4671eac7de044" },
        { label: "Day-Date 36", value: "62caa01383c4671eac7de046" },
      ],
    },
  ];

  document.title = "Create Product | Velzon - React Admin & Dashboard Template";

  return (
    <div className="page-content">
      <ToastContainer />
      <Container fluid>
        <BreadCrumb title="Create Product" pageTitle="Ecommerce" />

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Product Title/Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Enter product title"
                      onChange={(e) =>
                        setproductData({ ...productData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label>Product Description</Label>

                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                    />
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Product Gallery</h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-4">
                    <h5 className="fs-14 mb-1">Product Image</h5>
                    <p className="text-muted">Add Product main Image.</p>
                    <input
                      className="form-control"
                      id="product-image-input"
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </div>
                  <div>
                    <h5 className="fs-14 mb-1">Product Gallery</h5>
                    <p className="text-muted">Add Product Gallery Images.</p>

                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        handleAcceptedFiles(acceptedFiles);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone dz-clickable">
                          <div
                            className="dz-message needsclick"
                            {...getRootProps()}
                          >
                            <div className="mb-3">
                              <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                            </div>
                            <h4>Drop files here or click to upload.</h4>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="list-unstyled mb-0" id="file-previews">
                      {imagesPreview.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f}
                                    src={f}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f?.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button
                  type="submit"
                  className="btn btn-success w-sm"
                  onClick={createProductSubmitHandler}
                >
                  Submit
                </button>
              </div>
            </form>
          </Col>

          <Col lg={4}>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Brand</h5>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <Label
                    htmlFor="choices-publish-status-input"
                    className="form-label"
                  >
                    Brand
                  </Label>

                  <Select
                    value={selectedStatus}
                    onChange={(e) =>
                      setproductData({ ...productData, brand: e.value })
                    }
                    options={brand}
                    name="choices-publish-status-input"
                    classNamePrefix="select2-selection form-select"
                  />
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Product Categories</h5>
              </CardHeader>
              <div className="mb-3">
                <Label className="form-label" htmlFor="product-title-input">
                  Product Price
                </Label>
                <Input
                  type="number"
                  className="form-control"
                  id="product-title-input"
                  placeholder="Enter product title"
                  onChange={(e) =>
                    setproductData({
                      ...productData,
                      price: e.target.value,
                    })
                  }
                />
              </div>
              <CardBody>
                <p className="text-muted mb-2">
                  {" "}
                  <Link to="#" className="float-end text-decoration-underline">
                    Add New
                  </Link>
                  Select product Model
                </p>

                <Select
                  value={selectedGroup}
                  onChange={(e) =>
                    setproductData({ ...productData, model: e.value })
                  }
                  options={model}
                  name="choices-category-input"
                  classNamePrefix="select2-selection form-select"
                />

                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    Product reference
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({
                        ...productData,
                        reference: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    Product movement
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({
                        ...productData,
                        movement: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    produced
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({
                        ...productData,
                        produced: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    Material
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({
                        ...productData,
                        material: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    Glass
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({ ...productData, glass: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    Shape
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({ ...productData, shape: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    Diameter
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({
                        ...productData,
                        diameter: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    Lug Width
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({
                        ...productData,
                        lugWidth: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    War
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({ ...productData, war: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    Color
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({ ...productData, color: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                    indexes
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="product-title-input"
                    placeholder="Enter product title"
                    onChange={(e) =>
                      setproductData({
                        ...productData,
                        indexes: e.target.value,
                      })
                    }
                  />
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Product Short Description</h5>
              </CardHeader>
              <CardBody>
                <p className="text-muted mb-2">
                  Add short description for product
                </p>
                <textarea
                  className="form-control"
                  placeholder="Must enter minimum of a 100 characters"
                  rows="3"
                  onChange={(e) =>
                    setproductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EcommerceAddProduct;
