
import {ArrowRight} from "../../Icons";


const index = ({ pic }) => {
    return (
        <div className="bg-[#EFF0F2] flex gap-x-[72px] rounded-[50px]">
            <img src={pic} alt="man" />

            <div className="pr-[82px] pt-[21px]">
                <h2 className="text-[50px] font-['InterBlack'] text-center tracking-[1px] w-[695px]">Универсальное решение для ваших нужд в одежде</h2>
                <p className="text-[20px] tracking-[0.4px] text-center">Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в Lode X. Мы предлагаем одежду ведущих брендов и редактирование изображений на ней.</p>
                <a className="text-[#33CAFF] flex items-center justify-end gap-x-[7px] underline" href="#">читать далее <ArrowRight/></a>
            </div>
        </div>
    );
};

export default index;