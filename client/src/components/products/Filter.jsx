import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <>
      <div className={`bg-white ${styles.filter_container}`}>
        <p className="fw-bold pt-3">What are you looking for?</p>
        <div
          className={`d-none d-lg-flex justify-content-between px-5 bg-white w-100 shadow p-3 rounded ${styles.filter_container}`}
        >
          <div>
            <h6>Categories</h6>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
          </div>
          <div>
            <h6>Brands</h6>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
          </div>
          <div>
            <h6>Colors</h6>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
          </div>
          <div>
            <h6>Size</h6>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
          </div>
          <div>
            <h6>Price</h6>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
            <div>
              <input type="checkbox" name="test" id="test" />
              <label className="mx-3" htmlFor="test">
                Category
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
