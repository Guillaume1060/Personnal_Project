import About from '../../containers/about/About';
import Cart from '../../containers/modal/cart/Cart';
import Concert from '../../containers/concerts/Concert';
import Footer from '../../containers/footer/Footer';
import Home from '../../containers/home/Home';
import Store from '../../containers/store/Store';
import Video from '../../containers/videos/Video';
import { useDispatch, useSelector } from 'react-redux';
import { displayCart } from '../../store/actions/cart.action';

const RootPage = () => {
const isShow = useSelector(state=>state.cart.isShow)
const dispatch = useDispatch()
const hideCartHandler = () => {
  dispatch(displayCart())
}
    return (
        < >
            {isShow && <Cart onCart={hideCartHandler} />}
            <Home/>
            <About/>
            <Video/>
            <Concert/>
            <Store/>
            <Footer/>
        </>
    )
}

export default RootPage