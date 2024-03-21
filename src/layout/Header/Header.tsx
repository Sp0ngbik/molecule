import style from "./Header.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";

const Header = () => {
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
            <div>
                {/*<button>*/}
                {/*    Open*/}
                {/*</button>*/}
                <button>Buy now</button>
            </div>
        </header>
    );
};

export default Header;