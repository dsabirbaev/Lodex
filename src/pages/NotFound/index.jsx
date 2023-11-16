import { Link } from "react-router-dom";
import { errorPage } from "../../assets";
import "./style.scss"

const index = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <img src={errorPage} alt={errorPage} className="w-[400px] h-[400px] mb-5 bg-red-300" />
                <Link to="/" className="bg-green-600 text-white rounded-md p-2">Go Home!</Link>
            </div>
        </section>
    );
};

export default index;