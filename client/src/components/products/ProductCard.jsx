import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className="col-md-6 col-lg-3 my-3">
      <div className={`card ${styles.card_container}`}>
        <img src="/img/Cat03.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className=" d-flex flex-column justify-content-between align-items-center mx-3">
            <h4 className="m-0 fw-bold">9.99$</h4>
            <br />
            <button className="btn btn-danger w-100">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
