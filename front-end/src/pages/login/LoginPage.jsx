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
}

    return (
        <div className={classes.ctn}>
            <NavBarLogin/>
                <div className={classes.form}>
                    <h3 className={classes.title}>Have you already an account ?</h3>
                    <FormControlLabel className={classes.test} onChange={handleChange} control={<Switch defaultChecked />} label="Of Course!" />
                </div>
            <Outlet/>
        </div>
    )
}

export default HomeLogin