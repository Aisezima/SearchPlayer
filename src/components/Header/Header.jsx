import classes  from './Header.module.css'
import instagram from '../../assests/icons/instagram.png'
import vcontacte from '../../assests/icons/vkontacte.png'
import facebook from '../../assests/icons/facebook.png'


const Header = () => {
    return(
        <header className={classes.header}>
            
                <ul className={classes.nav}>
                    <li> <a id={classes.blue} href="Главная">Главная</a></li>
                    <li> <a  href="Сражения">Сражения</a></li>
                    <li> <a href="ЧАВО">ЧАВО</a></li>
                    <li> <a href="Новости">Новости</a></li>
                </ul>  
            

            <div className={classes.container}>
                <img src={instagram} alt="instagram" />
                <img  src={vcontacte} alt="vcontacte" />
                <img src={facebook} alt="facebook" />
            </div>
            
        </header>
    )
}

export default Header