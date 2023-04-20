// import useAxios from "../../hooks/use-axios";
import { Outlet } from "react-router-dom";
import NavBarLogin from "../../containers/nav/NavBar_log";
import classes from './loginPage.module.scss'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const HomeLogin = () => {
    const navigate = useNavigate();
    const [account, setAccount] = useState(false);

  const handleChange = () => {
    setAccount(!account);
    if (account)navigate('');
    if (!account)navigate('signup');

    // AVOIR SI NECESSAIRE CI DESSOUS
    // const { data, loading, error, postdata } = useAxios('http://localhost:5000/auth/whoami');
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;
    // if (data.data.id) navigate('/') // ici retour à la page user car connecté
}

    return (
        <div className={classes.ctn}>
            <NavBarLogin/>
                <div className={classes.form}>
                    <h3>Have you already an account ?</h3>
                    <FormControlLabel onChange={handleChange} control={<Switch defaultChecked />} label="Of Course!" />
                </div>
            <Outlet/>
        </div>
    )
}

export default HomeLogin