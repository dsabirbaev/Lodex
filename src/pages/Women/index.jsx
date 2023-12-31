

import Intro from "../../components/UI/Intro";
import Collection from "../../components/Collection";
import Brands from "../../components/Brands";
import Designers from "../../components/Designers";
import About from "../../components/About";
import Blog from "../../components/Blog";
import { womanIntro } from "../../assets";
import { womencollection } from "../../service/db";
const index = () => {
    return (
        <>
            <section className="py-[165px]">
                <div className="container">
                    <Intro pic={womanIntro} />
                </div>
            </section>

            <section className="pb-[60px]">
                <div className="container">
                    <Collection data={womencollection}/>
                </div>
            </section>

            <section>
                <div className="container">
                   <Brands/>
                </div>
            </section>

            <section>
                <div className="container">
                   <Designers/>
                </div>
            </section>

            <section>
                <div className="container">
                   <About/>
                </div>
            </section>
            <section>
                <div className="container">
                   <Blog/>
                </div>
            </section>
        </>
    );
};

export default index;