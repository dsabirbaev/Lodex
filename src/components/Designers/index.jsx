

import { designers } from "../../service/db";
import {CardDesinger} from "../UI/Card";

const index = () => {
    return (
        <div className="pt-[20px] pb-[75px]">
            <div className="flex items-center justify-between mb-[55px]">
                <h2 className="text-[30px] font-['InterExtraBold']">Популярные дизайнеры</h2>
                <p className="text-[#33CAFF] text-[20px] cursor-pointer">Все бренды</p>
            </div>

            <div className="flex items-center justify-between">
                {
                    designers?.map((item) => {
                        return <CardDesinger data={item} key={item?.id}/>
                    })
                }
            </div>
        </div>
    );
};

export default index;