import classes from './store.module.scss'
import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon'
import ProductBox from './ProductBox';
import useAxios from '../../hooks/use-axios';

const Store = () => {
    const { data, loading, error } = useAxios('http://localhost:5000/products',true);
    if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    const productsList = data.data.map(product=><ProductBox id={product.id} key={product.id} name={product.name} description={product.description} price={product.price}/>)

    return (
        <div id='store' className={classes.ctn}>
            <ArrowUpIcon/>
            <div className={classes.store}>
                <div className={classes.store_title}>
                    <h2>STORE</h2>
                        <ul className={classes.store_list}>
                            {productsList}
                        </ul>
                </div>
            </div>
        </div>
    )
}



export default Store