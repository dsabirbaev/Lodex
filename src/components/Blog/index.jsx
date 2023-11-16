
import { CardBlog } from "../UI/Card";
import { blog } from "../../service/db";


const index = () => {
    return (
        <div className="pt-[20px] pb-[32px]">
             <div className="flex items-center justify-between mb-[50px]">
                <h2 className="text-[30px] font-['InterExtraBold']">Блог</h2>
                <span></span>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-[70px]">
                {
                    blog?.map((item) => {
                        return <CardBlog key={item?.id} data={item}/>
                    })
                }
            </div>
        </div>
    );
};

export default index;