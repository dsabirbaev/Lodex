

import Intro from "../../components/UI/Intro";
import Collection from "../../components/Collection";
import Brands from "../../components/Brands";
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
        </>

    );
};

export default index;