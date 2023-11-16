

import Intro from "../../components/UI/Intro";
import Collection from "../../components/Collection";
import Brands from "../../components/Brands";
import Designers from "../../components/Designers";
import { kidsIntro } from "../../assets";
import { kidscollection } from "../../service/db";
const index = () => {
    return (
        <>
            <section className="py-[165px]">
                <div className="container">
                    <Intro pic={kidsIntro} />
                </div>
            </section>

            <section className="pb-[60px] ">
                <div className="container">
                    <Collection data={kidscollection}/>
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
        </>
    );
};

export default index;