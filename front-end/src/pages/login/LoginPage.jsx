import useAxios from "../../hooks/use-axios";
import { Outlet } from "react-router-dom";
import NavBarLogin from "../../containers/nav/NavBar_log";



const LoginPage = () => {
    const { data, loading, error, postdata } = useAxios('http://localhost:5000/auth/orders');
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <NavBarLogin/>
            <p>NEW ?</p>
            <Outlet/>
            <p>signup, puis cart2</p>
        </>


    )
}

export default LoginPage