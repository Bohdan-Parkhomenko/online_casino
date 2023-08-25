import './styles.css'
import {Link, useNavigate} from "react-router-dom";
import { useEffect, useRef } from "react";
import {useTranslation} from "react-i18next";
import {locales} from "../../../../i18n";

import Instagram from "./assets/Instagram.png"
import Facebook from "./assets/Facebook.png"
import Twitter from "./assets/Twitter.png"
const HamburgerMenu = ({header, items, menuActive, setMenuActive, page}) => {


    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            // Закрываем меню
            setMenuActive(false);
        }
    };

    useEffect(() => {
        // Добавляем обработчик события клика на весь документ
        document.addEventListener("click", handleClickOutside);

        return () => {
            // Удаляем обработчик события при размонтировании компонента
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const changeLanguage = (newLang) => {
        if (locales.includes(newLang)) {
            i18n.changeLanguage(newLang)
            navigate(`/${newLang}/${page}`);
        }
    };

    return (
        <menu
            className={menuActive ? 'menu active' : 'menu'}
            ref={menuRef}
        >
            <div
                className="menu-content"
            >
                <div className="manu-header">
                    <p>{t(header)}</p>
                    <div
                        className='button-closed-menu'
                        onClick={() => setMenuActive(false)}
                    />
                </div>

                <ul>
                    {items.map((item, index) =>
                        <li
                            key={index}
                            className={item.href === "/" + page ? "rectangle" : ""}
                        >
                            <Link to={item.href}>
                                <p>{t(`pages.${item.value}`)}</p>
                            </Link>
                        </li>
                    )}
                </ul>

                <div className={"bottom-burger-menu"}>
                    <ul className={"social-network"}>
                        <li>
                            <a href={""} className={"photo-in-circle"}>
                                <img src={Instagram} alt={"Instagram"}/>
                            </a>
                        </li>
                        <li>
                            <a href={""} className={"photo-in-circle"}>
                                <img src= {Facebook} alt={"Facebook"}/>
                            </a>
                        </li>
                        <li>
                            <a href={""} className={"photo-in-circle"}>
                                <img src={Twitter} alt={"Twitter"} />
                            </a>
                        </li>
                    </ul>

                    <div className={"list-button-language-change"}>
                        {locales.map((item, index) =>
                            <button
                                key={index}
                                className={"button-language-change" + ((item === i18n.language) ? " i18n-active" : "")}
                                onClick={() => changeLanguage(`${item}`)}
                            >
                                {item.toUpperCase()}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </menu>
    )
}

export default HamburgerMenu;