

import { Carousel } from 'primereact/carousel';

import { brands } from "../../service/db";
import "./style.scss"
const index = () => {
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const productTemplate = (brand) => (
        <img src={brand?.img} alt="Brand" />
    );
    
    return (
        <div className='brand-wrapper pt-[20px] pb-[68px]'>
            <div className="flex items-center justify-between mb-[70px]">
                <h2 className="text-[30px] font-['InterExtraBold']">Популярные бренды</h2>
                <p className="text-[#33CAFF] text-[20px] cursor-pointer">Все бренды</p>
            </div>

            <div>
                <Carousel showIndicators={false} value={brands} numVisible={5} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
            </div>
        </div>
    );
};

export default index;