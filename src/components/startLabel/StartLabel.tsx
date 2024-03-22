import style from './StartLabel.module.scss'
const StartLabel = () => {
    return (
        <section className={style.startDesignSection}>
            <div>
                <div>
                    <h3>Ready to start designing?</h3>
                    <span>Molecule is available today!</span>
                </div>
                <button>Get Molecule</button>
            </div>
        </section>
)
    ;
};

export default StartLabel;