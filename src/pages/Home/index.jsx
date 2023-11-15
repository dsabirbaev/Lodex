

import Intro from "../../components/UI/Intro";
import Collection from "../../components/Collection";
import { manIntro } from "../../assets";

const index = () => {
    return (
        <>
            <section className="py-[165px]">
                <div className="container">
                    <Intro pic={manIntro}/>
                </div>
            </section>

            <section>
                <div className="container">
                    <Collection/>
                </div>
            </section>
        </>

    );
};

export default index;