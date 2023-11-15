

import Intro from "../../components/UI/Intro";

import { womanIntro } from "../../assets";

const index = () => {
    return (
        <>
            <section className="py-[165px]">
                <div className="container">
                    <Intro pic={womanIntro} />
                </div>
            </section>
        </>
    );
};

export default index;