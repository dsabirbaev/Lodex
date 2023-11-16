
import { Link } from "react-router-dom";

import {Insta, Facebook} from "../Icons"; 

const index = () => {
    return (
        <footer className="pt-[30px] pb-[15px] border-t-[1px] border-t-black" style={{borderTop:'1px solid black'}}>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-[120px]">
                        <ul className="flex flex-col gap-y-[10px] text-[#8C8C8C] text-[15px]">
                            <li className="mb-[15px] font-['InterBlack'] text-[20px] text-black">Категории</li>
                            <li><Link className="text-[#8C8C8C]" to="/">Мужское</Link></li>
                            <li><Link className="text-[#8C8C8C]" to="/women">Женское</Link></li>
                            <li><Link className="text-[#8C8C8C]" to="/kids">Детское</Link></li>
                        </ul>
                        <ul className="flex flex-col gap-y-[10px] text-[#8C8C8C] text-[15px]">
                            <li className="mb-[15px] font-['InterBlack'] text-[20px] text-black">О нас</li>
                            <li><a className="text-[#8C8C8C]" href="#">Контакты</a></li>
                            <li><a className="text-[#8C8C8C]" href="#">О компании</a></li>
                            <li><a className="text-[#8C8C8C]" href="#">Правила пользования </a></li>
                        </ul>
                        <ul className="flex flex-col gap-y-[10px] text-[#8C8C8C] text-[15px]">
                            <li className="mb-[15px] font-['InterBlack'] text-[20px] text-black">Мой аккаунт</li>
                            <li><a className="text-[#8C8C8C]" href="#">Войти</a></li>
                            <li><a className="text-[#8C8C8C]" href="#">Заказы</a></li>
                            <li><a className="text-[#8C8C8C]" href="#">Список желаний</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-y-[10px] text-[#8C8C8C] text-[15px]">
                            <li className="mb-[15px] font-['InterBlack'] text-[20px]"><a className="text-black" href="tel:+998 ( 99 ) 280 75 76">+998 ( 99 ) 280 75 76</a></li>
                            <li><a className="text-[#8C8C8C]" href="mailto:example@gmail.com">example@gmail.com</a></li>
                            <li><a className="text-[#8C8C8C]" href="mailto:example@mail.ru">example@mail.ru</a></li>
                            <li className="cursor-pointer flex items-center gap-x-5"><Insta/> <Facebook /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default index;