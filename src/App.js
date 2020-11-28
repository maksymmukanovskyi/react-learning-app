import Product from "./Product"
import Specifications from "./Specifications"
import products from "./products.json"
import ProductList from "./ProductList"
const App = () => (
  <Product 
  imgUrl="http://placeimg.com/640/480/any"
  alt="any picture"
  price="150$"
  name="Atlant"
  text="hey check this out man">

<Specifications
  name="architecture"
  discount="50%"
  unreadMessages="Tanya"
  isLoggedIn= {false}
/>
<ProductList
  products={products}
/>
  </Product>
);

export default App;

