import React, { useState, useEffect } from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  updateProduct,
} from "./../../Redux/Actions/ProductActions";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstants";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditProductMain = (props) => {
  const { productId } = props;

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
  const [sizeInStockXS, setSizeInStockXS] = useState(0);
  const [sizeInStockS, setSizeInStockS] = useState(0);
  const [sizeInStockM, setSizeInStockM] = useState(0);
  const [sizeInStockL, setSizeInStockL] = useState(0);
  const [sizeInStockXL, setSizeInStockXL] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = productEdit;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      toast.success("Product Updated", ToastObjects);
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(editProduct(productId));
      } else {
        setName(product.name);
        setCategory(product.category);
        setPiece(product.piece);
        setDescription(product.description);
        setCountInStock(product.countInStock);
        setSizeInStockXS(product.sizeInStockXS);
        setSizeInStockS(product.sizeInStockS);
        setSizeInStockM(product.sizeInStockM);
        setSizeInStockL(product.sizeInStockL);
        setSizeInStockXL(product.sizeInStockXL);
        setImage(product.image);
        setImageOne(product.imageOne);
        setImageTwo(product.imageTwo);
        setImageThree(product.imageThree);
        setImageFour(product.imageFour);
        setImageFive(product.imageFive);
        setPrice(product.price);
      }
    }
  }, [product, dispatch, productId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name, category, piece,
        price,
        description,
        image, imageOne, imageTwo, imageThree, imageFour, imageFive,
        countInStock,
        sizeInStockXS,sizeInStockS,sizeInStockM,sizeInStockL,sizeInStockXL,
      })
    );
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
            <h2 className="content-title">Update Product</h2>
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
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
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
                                <option id="product_category" value="Both">Both</option>
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
                        <label htmlFor="product_price" className="form-label">
                          Count In Stock
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
                        <label htmlFor="product_price" className="form-label">
                          Extra Small in Stock
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
                        <label htmlFor="product_price" className="form-label">
                          Small in Stock
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
                        <label htmlFor="product_price" className="form-label">
                          Medium in Stock
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
                        <label htmlFor="product_price" className="form-label">
                          Large in Stock
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
                        <label htmlFor="product_price" className="form-label">
                          Extra Large in Stock
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
                        <label className="form-label">Feat. Image</label>
                        <input
                          className="form-control"
                          type="text"
                          value={image}
                          required
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>   
                      <div className="mb-4">
                        <label className="form-label">Extra Images 1</label>
                        <input
                          className="form-control"
                          type="text"
                          value={imageOne}
                          onChange={(e) => setImageOne(e.target.value)}
                        />
                      </div> 
                      <div className="mb-4">
                        <label className="form-label">Extra Images 2</label>
                        <input
                          className="form-control"
                          type="text"
                          value={imageTwo}
                          onChange={(e) => setImageTwo(e.target.value)}
                        />
                      </div> 
                      <div className="mb-4">
                        <label className="form-label">Extra Images 3</label>
                        <input
                          className="form-control"
                          type="text"
                          value={imageThree}
                          onChange={(e) => setImageThree(e.target.value)}
                        />
                      </div> 
                      <div className="mb-4">
                        <label className="form-label">Extra Images 4</label>
                        <input
                          className="form-control"
                          type="text"
                          value={imageFour}
                          onChange={(e) => setImageFour(e.target.value)}
                        />
                      </div> 
                      <div className="mb-4">
                        <label className="form-label">Extra Images 5</label>
                        <input
                          className="form-control"
                          type="text"
                          value={imageFive}
                          onChange={(e) => setImageFive(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
