import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon';
import classes from './footer.module.scss'
import { useState } from 'react';



const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://newsletter-app-10050-default-rtdb.europe-west1.firebasedatabase.app/emails.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });
  
        if (response.ok) {
          // Le serveur a accepté la requête
          console.log('E-mail envoyé avec succès');
          // Réinitialiser le formulaire
          setEmail('');
        } else {
          console.error('Erreur lors de l\'envoi de l\'e-mail');
        }
      } catch (error) {
        console.error('Erreur réseau', error);
      }
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };




    return (
        <div id='footer' className={classes.ctn}>
        <ArrowUpIcon/>
            <div className={classes.footer}>
                <div className={classes.footer_title}>
                    <h2>SUSCRIBE</h2>
                    <p>Get updates, drops, advance ticket infomation and more direct to your inbox. No spam!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input className={classes.footer_input} id="email" name="email" type={email} value={email} onChange={handleEmailChange} placeholder="GOT EMAIL?"/>
                <button type='submit' name='subscribe'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 32 32"
                        fill="#E0E0D5"
                        >
                        <path d="M19.414 27.414l10-10a2 2 0 000-2.828l-10-10a2 2 0 10-2.828 2.828L23.172 14H4a2 2 0 100 4h19.172l-6.586 6.586c-.39.39-.586.902-.586 1.414s.195 1.024.586 1.414a2 2 0 002.828 0z"></path>
                    </svg>
                </button>
                </form>
            </div>
                {/* <ListIcons color={'#212922'}/> */}
        </div>
    )
}



export default Footer