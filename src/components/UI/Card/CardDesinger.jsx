

import { useState } from "react";
import { Rating } from "primereact/rating";

const CardDesinger = ({data:{img, name}}) => {
    const [value, setValue] = useState(4);
    return (
        <div className="border ">
            <img src={img} alt={name} />

            <div className='flex flex-col items-center justify-center pt-[20px]'>
                <h4 className="text-[20px] mb-[6px]">{name}</h4>
                <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} />
            </div>
        </div>
    );
};

export default CardDesinger;