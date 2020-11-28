const ProductList = ({products}) => (
    <ul>
        {products.map(item => (
            <li key={item.id}>
            <p>{item.title}</p>
            <img
            src={item.url}
            alt={item.thumbnailUrl}
            />
            </li>
        ))}
    </ul>
);
export default ProductList;