import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
import { createProduct } from "./../../Redux/Actions/ProductActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddProductMain = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [piece, setPiece] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");
  const [imageFour, setImageFour] = useState("");
  const [imageFive, setImageFive] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [sizeChosen, setSizeChosen] = useState(0);
  const [sizeInStockXS, setSizeInStockXS] = useState(0);
  const [sizeInStockS, setSizeInStockS] = useState(0);
  const [sizeInStockM, setSizeInStockM] = useState(0);
  const [sizeInStockL, setSizeInStockL] = useState(0);
  const [sizeInStockXL, setSizeInStockXL] = useState(0);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  useEffect(() => {
    if (product) {
      toast.success("Product Added", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setName("");
      setCategory("");
      setPiece("");
      setDescription("");
      setCountInStock(0);
      setImage("");
      setImageOne("");
      setImageTwo("");
      setImageThree("");
      setImageFour("");
      setImageFive("");
      setPrice(0);
      setSizeInStockXS(0);
      setSizeInStockS(0);
      setSizeInStockM(0);
      setSizeInStockL(0);
      setSizeInStockXL(0);
      setSizeChosen(0);
    }
  }, [product, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(name, category, piece, price, description, image, imageOne, imageTwo, imageThree, imageFour, imageFive, countInStock,sizeChosen, sizeInStockXS, sizeInStockS, sizeInStockM, sizeInStockL, sizeInStockXL));
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to products
            </Link>
            <h2 className="content-title">Add product</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Product title
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_title"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_category" className="form-label">
                      Product Category
                    </label>
                   <select required type="text" id="product_category" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="none" selected hidden>Select an Option</option>
                        <option id="product_category" value="Girls">Girls</option>
                        <option id="product_category" value="Guys">Guys</option>
                        <option id="product_category" value="Accessories">Accessories</option>
                        <option id="product_category" value="Custom">Custom</option>
                    </select>
                  </div>
                  <div className="mb-4" >
                    <label htmlFor="product_piece" className="form-label">
                      Product Type
                    </label>
                    <select required type="text" id="product_piece" className="form-control" value={piece} onChange={(e) => setPiece(e.target.value)}>
                         <option value="none" selected hidden>Select an Option</option>
                         <option id="product_piece" value="Shirts">Shirt</option>
                         <option  id="product_piece" value="Shorts">Shorts</option>
                         <option  id="product_piece" value="Shoes">Shoes</option>
                         <option id="product_piece" value="Trousers">Trousers</option>
                         <option  id="product_piece" value="Jackets">Jackets</option>
                         <option id="product_piece" value="Headwear">Headwear</option>
                         <option  id="product_piece" value="Bags">Bags</option>
                         <option id="product_piece" value="Accessories">Accessories</option>
                         <option  id="product_piece" value="Underwear">Underwear</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="countInStock" className="form-label">
                      TOTAL Count In Stock
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      value={countInStock}
                      onChange={(e) => setCountInStock(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="sizeInStockXS" className="form-label">
                      Extra Small In Stock
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="product_price"
                      required
                      value={sizeInStockXS}
                      onChange={(e) => setSizeInStockXS(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="sizeInStockS" className="form-label">
                       Small In Stock
                      </label>
                      <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={sizeInStockS}
                          onChange={(e) => setSizeInStockS(e.target.value)}
                      />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="sizeInStockM" className="form-label">
                         Medium In Stock
                      </label>
                      <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={sizeInStockM}
                          onChange={(e) => setSizeInStockM(e.target.value)}
                      />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="sizeInStockL" className="form-label">
                          Large In Stock
                      </label>
                      <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={sizeInStockL}
                          onChange={(e) => setSizeInStockL(e.target.value)}
                      />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="sizeInStockXL" className="form-label">
                          Extra Large In Stock
                      </label>
                      <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={sizeInStockXL}
                          onChange={(e) => setSizeInStockXL(e.target.value)}
                      />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Main Image</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={image}
                      required
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div> 
                  <div className="mb-4">
                    <label className="form-label">Supporting Images 1</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={imageOne}
                      required
                      onChange={(e) => setImageOne(e.target.value)}
                    />
                  </div> 
                  <div className="mb-4">
                    <label className="form-label">Supporting Images 2</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={imageTwo}
                      required
                      onChange={(e) => setImageTwo(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Supporting Images 3</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={imageThree}
                      required
                      onChange={(e) => setImageThree(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Supporting Images 4</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={imageFour}
                      required
                      onChange={(e) => setImageFour(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Supporting Images 5</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={imageFive}
                      required
                      onChange={(e) => setImageFive(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
