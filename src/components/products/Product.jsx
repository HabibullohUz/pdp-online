const Product = ({ productData }) => {
  return (
    <div class="col mb-5">
      <div class="card h-100">
        <div
          style={{ top: "0.5rem", right: "0.5rem" }}
          className="badge bg-dark text-white position-absolute"
        >
          {productData.isSale && productData.isSale}
        </div>
        <img
          class="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        ></img>
        <div class="card-body">
          <div class="text-center ">
            <h5 class="fw-bolder">{productData.Tittle}</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              {productData.isStars && (
                <div>
                  <div class="fa-solid fa-star"></div>
                  <div class="fa-solid fa-star"></div>
                  <div class="fa-solid fa-star"></div>
                  <div class="fa-solid fa-star"></div>
                </div>
              )}
            </div>
            <span class="text-muted text-decoration-line-through">
              {productData.priceUnmute}
            </span>
            {productData.priceMute}
          </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" href="#3">
              {productData.btnName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
