import './App.css';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import i18n, {locales} from './i18n';
import {useEffect, useState} from 'react';
import {useRoutes} from "react-router-dom";
import {HamburgerMenuItems, MenuItems} from "./until/menu";
import HamburgerMenu from "./Casino/CasinoComponent/components/HamburgerMenu";
import HeaderMenu from "./Casino/CasinoComponent/components/HeaderMenu";
import Home from "./Casino/CasinoComponent/pages/Home";

const element = ([
    {
        path: "/:lang?",
        element: <LanguageSelection/>,
        children: [
            {path: "home", element: <Home/>,},
            {path: "games", element: <TodoListWithLang/>,},
            {path: "slots", element: <TodoListWithLang/>,},
            {path: "virtualCasino", element: <TodoListWithLang/>,},
            {path: "liveCasino", element: <TodoListWithLang/>,},
            {path: "tournaments", element: <TodoListWithLang/>,},
            {path: "news", element: <TodoListWithLang/>,},
            {path: "payments", element: <TodoListWithLang/>,},
            {path: "aboutUs", element: <TodoListWithLang/>,},
            {path: "contacts", element: <TodoListWithLang/>,},
            {path: "casino", element: <TodoListWithLang/>,},

            {path: "*", element: <NotFound/>,},
        ],
    },
    {
        path: "*",
        element: <LanguageSelection/>,
    },
]);

function App() {

    useEffect(() => {
        const url = window.location.href; // требя запам'ятати крута штука. повертає повний URL (адресу) в стрінгу
        const langRegex = new RegExp(`/(${locales.join('|')})`, 'i'); // Регулярний вираз з мої ВСІХ мов
        const match = url.match(langRegex); // Перевірка, чи є в URL мова

        //match[1] буде містити значення першої групи за збігом, тобто значення, яке відповідає виразу (${locales.join('|')}).
        if (match && match[1]) {
            const lang = match[1]; // Отримання знайденої мови з URL
            i18n.changeLanguage(lang); // Зміна мови за допомогою i18n
        } else {
            const defaultLang = 'en';
            window.location.href = url.replace(/\/\w+\//, `/${defaultLang}/`);
            i18n.changeLanguage('en'); // За замовчуванням встановлюємо англійську мову
        }
    }, []);

    return useRoutes(element);
}


// Layout
function LanguageSelection() {
    const [menuActive, setMenuActive] = useState(false)

    const {lang} = useParams();
    const location = useLocation()
    //для изменения силки
    const navigate = useNavigate();

    // запускается при обнавление или запуске сайта смотрит на парамерт lang и ишет язие если нет то дефолт англ
    useEffect(() => {
        for (let i = 0; locales.length > i; i++) {
            if (locales[i] === lang) {
                i18n.changeLanguage(`${lang}`)
                return
            }
        }

        const containsPath = element[0].children.some(child => child.path === location.pathname.split('/')[1]);

        if (containsPath) {
            navigate(`/${i18n.language}${location.pathname}`);
        } else {
            navigate(`/${i18n.language}/${location.pathname.split("/").filter(item => item !== "").slice(1).join("/")}`);
            i18n.changeLanguage('en')
        }
    }, [lang, location.pathname, i18n]);

    //для обработки кнопки
    const changeLanguage = (newLang) => {
        if (locales.includes(newLang)) {
            i18n.changeLanguage(newLang)
            navigate(`/${newLang}`);
        }
    };

    const handleOpenBurgerMenu = () => setMenuActive(true)
    return (
        <>
            <div className={"background"}>

                <div className={"header-menu"}>`
                    <HeaderMenu
                        setMenuActive={setMenuActive}
                        items={MenuItems}
                        page={location.pathname.split("/").filter(item => item !== "").slice(1).join("/")}
                    />
                </div>

                <Outlet/>


                <div className={'hamburger-menu'}>
                    {/*{menuActive && (*/}
                        <HamburgerMenu
                            menuActive={menuActive}
                            setMenuActive={setMenuActive}
                            header={"Menu"}
                            items={HamburgerMenuItems}
                            page={location.pathname.split("/").filter(item => item !== "").slice(1).join("/")}
                        />
                    {/*)}*/}
                </div>
            </div>
        </>
    )
        ;
}

function TodoListWithLang() {
    return (
        <div>ok</div>
    );
}

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${i18n.language}`);
    }, [])

    return (
        404
    );
}

export default App;
