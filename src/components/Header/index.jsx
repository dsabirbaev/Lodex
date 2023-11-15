
import { NavLink } from "react-router-dom";
import { logo, search } from "../../assets";
import { Heart, User } from "../Icons";
import "./style.scss";
const index = () => {
    return (
        <header className="bg-white relative left-0 top-0 w-full z-50">
            <div className="container">
                <nav className="flex items-center justify-between h-[65px]">
                    <a href="#"><img src={logo} alt="logo" /></a>

                    <ul className="flex items-center gap-x-[50px] text-[16px]">
                        <li><NavLink to="/men">Мужское</NavLink></li>
                        <li><NavLink to="/women">Женское</NavLink></li>
                        <li><NavLink to="/kids">Детские</NavLink></li>
                        <li><NavLink to="/deal">Безопасная Сделка</NavLink></li>
                        <li><NavLink to="/rule">Правило Пользование</NavLink></li>
                    </ul>

                    <div className="flex items-center gap-x-[43.13px]">
                        <Heart />
                        <User />
                    </div>
                    <button className="px-[11px] py-[7px] bg-[#33CAFF] text-[16px] font-['NunitoRegular']">
                        Contact Us
                    </button>
                </nav>

            </div>

            <div className="bg-black flex items-center justify-center gap-x-[100px] h-[50px]">
                <img src={search} alt="search" />
                <input className="outline-none border-none w-[900px] bg-transparent text-white placeholder:text-[#878787]" type="search" placeholder="Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... " />
            </div>
        </header>
    );
};

export default index;