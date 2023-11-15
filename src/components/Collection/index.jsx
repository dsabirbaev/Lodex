
import { mencollection } from "../../service/db";
import { CardCollection } from "../UI/Card";

const index = () => {
    return (
        <div>


            <div className="grid grid-cols-3 gap-[30px]">
                {
                    mencollection?.map(item => {
                        return <CardCollection key={item?.id} data={item} />
                    })
                }
            </div>
        </div>
    );
};

export default index;