
import DealBody from "../../components/DealBody";
import About from "../../components/About";

const index = () => {
    return (
        <>
            <section className="py-[165px]">
                <div className="container">
                    <DealBody/>
                </div>
            </section>

            <section>
                <div className="container">
                   <About/>
                </div>
            </section>
        </>
    );
};

export default index;