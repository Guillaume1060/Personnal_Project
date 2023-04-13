import classes from './store.module.scss'
import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon'
import useAxios from '../../hooks/use-axios';

const Store = () => {
    const { data, loading, error, postData } = useAxios('http://localhost:5000/products');
    // console.log(data.data[0].name);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    return (
        <div id='store' className={classes.ctn}>
            <ArrowUpIcon/>
            <div className={classes.store}>
                <div className={classes.store_title}>
                    <h2>STORE</h2>
                    {data.data.map(product=>(
                        <>
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default Store