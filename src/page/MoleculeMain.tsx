import style from './MoleculeMain.module.scss'
import Header from "../layout/Header/Header.tsx";
import Footer from "../layout/Footer/Footer.tsx";
import Produce from "../components/produce/Produce.tsx";
import Features from "../components/features/Features.tsx";
import Stats from "../components/stats/Stats.tsx";
import Team from "../components/team/Team.tsx";
import BuyMolecule from "../components/buyMolecule/BuyMolecule.tsx";
import Process from "../components/process/Process.tsx";
import Slider from "../components/slider/Slider.tsx";
import NonMiss from "../components/nonMiss/NonMiss.tsx";
import Blog from "../components/blog/Blog.tsx";
import StartLabel from "../components/startLabel/StartLabel.tsx";

const MoleculeMain = () => {

    return (
        <div className={style.bodyFirstSite}>
            <Header/>
            <main>
                <Produce/>
                <Features/>
                <Stats/>
                <Team/>
                <BuyMolecule/>
                <Process/>
                <Slider/>
                <NonMiss/>
                <Blog/>
                <StartLabel/>
            </main>
            <Footer/>
        </div>
    );
}
export default MoleculeMain;