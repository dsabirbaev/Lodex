

import Intro from "../../components/UI/Intro";

import { manIntro } from "../../assets";

const index = () => {
    return (
        <>
            <section className="py-[165px]">
                <div className="container">
                    <Intro pic={manIntro}/>
                </div>
            </section>
        </>

    );
};

export default index;