

import { Check, Cart, CardLike } from "../../Icons";

const CardCollection = ({ data: { img, title, price, status } }) => {

    return (
        <div className="w-[300px] rounded-t-[20px] overflow-hidden">

            <div className="py-[13px] px-[10px] bg-[#898989] relative">
                <img src={img} alt={title} className="object-cover" />
                {status && (
                    <span className="absolute top-[10px] left-[10px] rounded-[5px] bg-white text-[12px] py-[3px] px-[9px]">
                        New
                    </span>
                )}
            </div>

            <div className="pt-[10px] pl-[12px] pr-[10px] bg-[#D9D9D9]">

                <div className="flex items-center gap-x-1 text-[16px] font-['InterMedium'] border-b-[1px] border-b-gray-400 pb-[12px]">
                    <Check /> <span>{title}</span>  <span className="text-[#F00]">{price}</span> сум
                </div>
                <div className="flex items-center justify-between py-[15px]">
                    <div className="flex gap-x-[20px] cursor-pointer">
                        <CardLike /> <Cart />
                    </div>
                    <button className="bg-[#33CAFF] rounded-[20px] w-[100px] h-[30px] hover:bg-sky-600 hover:text-white">
                        Подробнее
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CardCollection;