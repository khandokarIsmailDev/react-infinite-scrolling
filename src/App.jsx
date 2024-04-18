import ProductList from "./components/ProductList";
import Logo from '/logo.png';

export default function App() {
    return (
        <div>
            <img src={Logo} className=" w-52 mx-auto " alt="mylogo" />

            <ProductList />
        </div>
    );
}
