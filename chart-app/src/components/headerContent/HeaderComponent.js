import { useTranslation } from "react-i18next";
import "./HeaderComponent.css";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/logo.png";

const HeaderComponent = () => {
    const { t, i18n } = useTranslation(['home', 'main']);

    const onClickLanguageChange = (e) => {
        const language = e.target.value;
        i18n.changeLanguage(language); //change the language
    }

    const removeCookies = () => {
        localStorage.removeItem('state');
    }

    return (
         <nav className="navbar">
            <div className="nav_icon">
                <i className="fa fa-bars"></i>
            </div>
            <div>
                <img width="150" src={logo} alt="centime" />
            </div>
            <div className="navbar__right">
                <select className="custom-select lang_dropdown" data-testid="langId" onChange={onClickLanguageChange}>
                    <option data-testid="select-option" value="en">English</option>
                    <option data-testid="select-option"  value="es">Spanish</option>
                    <option data-testid="select-option" value="fr">French</option>
                </select>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar" data-testid="removeCookieId" onClick={removeCookies} />
                </a>
            </div>
        </nav>
    );
}

export default HeaderComponent;