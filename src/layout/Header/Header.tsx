import style from "./Header.module.scss";
import {firstSiteConfig} from "../../page/utils/imageConfig.ts";

const Header = () => {
    return (
        <header className={style.headerWrapper}>
            <img src={firstSiteConfig.logoImg} alt="logoImg not found"></img>
            <div>
                {/*<div className={style.headerMenu}>*/}
                    {/*<button  onClick={showDrawer}>*/}
                    {/*    Open*/}
                    {/*</button>*/}
                    {/*<Drawer*/}
                    {/*    title="Molecule Menu"*/}
                    {/*    placement="right"*/}
                    {/*    onClose={onClose}*/}
                    {/*    visible={visible}*/}
                    {/*    width="240px"*/}
                    {/*>*/}
                    {/*    <h2>Home</h2>*/}
                    {/*    <h2>About</h2>*/}
                    {/*    <h2>Pricing</h2>*/}
                    {/*    <h2>Open positions</h2>*/}
                    {/*    <h2>Blog</h2>*/}
                    {/*    <h2>Templete</h2>*/}
                    {/*</Drawer>*/}
                {/*</div>*/}
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
                <button>Buy now</button>
            </div>
        </header>
    );
};

export default Header;