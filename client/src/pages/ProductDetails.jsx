import { useParams } from "react-router-dom";

import Carousel from "better-react-carousel";

const ProductDetails = () => {
  const params = useParams();

  console.log(params);

  return (
    <div className="container py-5">
      <br />
      <div className="row">
        <div className="col-md-6">
          <Carousel cols={1} rows={1} gap={10} loop>
            <Carousel.Item>
              <img alt="random" width="100%" src="https://picsum.photos/800/600?random=1" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="random" width="100%" src="https://picsum.photos/800/600?random=2" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="random" width="100%" src="https://picsum.photos/800/600?random=3" />
            </Carousel.Item>
            <Carousel.Item>
              {/* anything you want to show in the grid */}
            </Carousel.Item>
            {/* ... */}
          </Carousel>
        </div>
        <div className="col-md-6">
          <h1 className="mt-5 fw-bold">Product Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vel
            fugiat quae minus a commodi, cum dolor repellat accusamus adipisci
            eligendi voluptatibus quisquam assumenda vero excepturi dignissimos
            sequi quam quibusdam!
          </p>
          <p>
            <span className="fw-bold">Brand: </span> Perry Ellis
          </p>
          <p>
            <span className="fw-bold">Color: </span> Blue
          </p>
          <p>
            <span className="fw-bold">Size: </span> M
          </p>
          <br />
          <h3 className="fw-bold text-end">9.99$</h3>
          <br />
          <button className="btn btn-danger w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
