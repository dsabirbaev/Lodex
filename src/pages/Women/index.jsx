

import Intro from "../../components/UI/Intro";
import Collection from "../../components/Collection";
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

            <section>
                <div className="container">
                    <Collection data={womencollection}/>
                </div>
            </section>
        </>
    );
};

export default index;