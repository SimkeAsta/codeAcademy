import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {

    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState();
    const [isLoadingProduct, setIsLoadingProduct] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8000/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // data []; undefined
            setSelectedProduct(data[0]);
            setIsLoadingProduct(false);
        })
    }, []);

    if (isLoadingProduct) {
        return <div>Page is loading, please wait.</div>
    }

    if (!selectedProduct) {
      return <div>Product not found</div>
    }

    const { title, thumbnail, brand, category, description, images } = selectedProduct;

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          marginTop: "100px",
        }}
      >
        <div style={{ justifySelf: "center" }}>
          <img src={thumbnail} />
        </div>
        <div>
          <h1>{title}</h1>
          <p>
            Brand: <b>{brand}</b>
          </p>
          <p>
            Category: <b>{category}</b>
          </p>
          <p>
            <i>{description}</i>
          </p>
          {images?.length > 0 &&
          <>
            <div>More pictures here:</div>
            {images?.map((picture, index) => (
              <img
                src={picture}
                key={index}
                alt={`${index} image`}
                style={{ width: "100px", height: "70px", padding: "5px" }}
              />
            ))}
          </>
          }
        </div>
      </div>
    );
}