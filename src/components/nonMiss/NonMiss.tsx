import style from "./NonMiss.module.scss";

const NonMiss = () => {
    return (
        <section className={style.nonMissSection}>
            <div className={style.nonMissBlock}>
                <div className={style.nonMissMessage}>
                    <h5>Don't miss out!</h5>
                    <div>
                        Sign-up & we'll let you know as soon as we have something to
                        show off. <br/> (Don't worry, we don't spam).
                    </div>
                </div>
                <div className={style.nonMissSignUp}>
                    <div>
                        <input placeholder="Enter your email"/>
                        <button>Sign up</button>
                    </div>
                    <div className={style.signUpDescription}>
                        <div>
                            By clicking Sign Up you're confirming that you agree with our
                            <span> Terms and Conditions .</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NonMiss;