import './styles.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HeaderMenu = ({setMenuActive, items, page}) => {

    const {t} = useTranslation();

    const handleBtnMenuActive = (e) => {
        e.stopPropagation();
        setMenuActive(true)
    }

    return (
        <nav>
            <div
                className="burger-btn"
                onClick={handleBtnMenuActive}
            ></div>

            <div className={"logo"}/>

            <ul className="ul-pages">
                {items.map((item, index) =>
                    <li
                        key={index}
                    >
                        <Link to={item.href}>
                            <p>
                                {t(`pages.${item.value}`)}
                            </p>
                            {item.href === "/" + page ? <div className={"rectangle"}/> : null}

                        </Link>
                    </li>
                )}
            </ul>

            <ul className={'list-buttons-sing'}>
                <li>
                    <button className={'baton-primary-field'}>{t(`SIGN UP`)}</button>
                </li>

                <li className={"li-in"}>
                    <button className={'baton-primary'}>{t(`SIGN IN`)}</button>
                </li>
            </ul>
        </nav>
    )
}
export default HeaderMenu