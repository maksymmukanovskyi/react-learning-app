const Product = ({imgUrl, alt, price, name, text, children}) => (
    <div className="product">
        <img
            className={name}
            src={imgUrl}
            alt={alt}
        />
        <h2 className="name">{name}</h2>
        <p className="price">{price}</p>
        <button className="btn" type="button">
            {text}
        </button>
        
        {children}
    </div>
);
 export default Product;