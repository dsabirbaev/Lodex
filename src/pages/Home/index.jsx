

import Intro from "../../components/UI/Intro";
import Collection from "../../components/Collection";
import Brands from "../../components/Brands";
import Designers from "../../components/Designers";
import About from "../../components/About";
import Blog from "../../components/Blog";
import { manIntro } from "../../assets";
import { mencollection } from "../../service/db";
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
                    <Collection data={mencollection}/>
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