

import Intro from "../../components/UI/Intro";

import { kidsIntro } from "../../assets";

const index = () => {
    return (
        <>
            <section className="py-[165px]">
                <div className="container">
                    <Intro pic={kidsIntro} />
                </div>
            </section>
        </>
    );
};

export default index;