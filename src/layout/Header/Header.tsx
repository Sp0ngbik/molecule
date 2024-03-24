import style from "./Header.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";
import {useState} from "react";

const Header = () => {
    const [sideMenuState, setSideMenuState] = useState(false)
    const onActiveSideMenu = () => {
        setSideMenuState(true)
    }
    const onDiactiveSideMenu = () => {
        setSideMenuState(false)
    }
    return (
        <header className={style.headerWrapper}>
            <img src={firstSiteConfig.logoImg} alt="logoImg not found"></img>
            <div>
                <div className={style.headerLinks}>
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Pricing</h2>
                    <h2>Open positions</h2>
                    <h2>Blog</h2>
                    <h2>Template</h2>
                </div>
            </div>
            <div className={style.buttonBlock}>
                <button onClick={onActiveSideMenu} className={style.sideBarButton}>
                    Open
                </button>
                <button>Buy now</button>
            </div>
            {sideMenuState &&
                <div className={style.blackOut} onClick={onDiactiveSideMenu}>
                    <div className={style.sideBarMenu}>
                        <button onClick={onDiactiveSideMenu}>X</button>
                        <div>
                            <h2>Home</h2>
                            <h2>About</h2>
                            <h2>Pricing</h2>
                            <h2>Open positions</h2>
                            <h2>Blog</h2>
                            <h2>Template</h2>
                        </div>
                    </div>
                </div>}
        </header>
    );
};

export default Header;