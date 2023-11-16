
import { about } from "../../service/db";
import { CardAbout } from "../UI/Card";
import "./style.scss";

const index = () => {
    return (
        <div className="about-wrapper pt-[20px] pb-[75px]">
            <div className="flex items-center justify-between mb-[70px]">
                <h2 className="text-[30px] font-['InterExtraBold']">Почему вибирают именно  нас ?</h2>
                <span></span>
            </div>

            <div className="flex items-center justify-between">
                {
                    about?.map((item) => {
                        return <CardAbout key={item?.id} data={item}/> 
                    })
                }
                
            </div>
        </div>
    );
};

export default index;