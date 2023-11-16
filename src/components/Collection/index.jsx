import { useState } from "react";
import { mencollection } from "../../service/db";
import { CardCollection } from "../UI/Card";
import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from 'primereact/dropdown';
import "./style.scss";
const index = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Цена по возрастанию' },
        { name: 'Цена по убыванию' }
    ];
    return (


        <div>
            <TabView>
                <TabPanel header="Новинки">
                    <p className="text-[#949494] text-[10px]">Последние поступления</p>
                    <div className="flex items-center justify-between mb-[62px]">
                        <h2>Новые рисунки</h2>
                        <div className="flex items-center gap-x-2">
                            <span>Сортировать:</span>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Цена по возрастанию" className="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-[90px] place-items-center">
                        {
                            mencollection?.map(item => {
                                return <CardCollection key={item?.id} data={item} />
                            })
                        }


                    </div>
                    <div className="flex justify-center items-center w-full mt-[60px] ">
                        <button className="hover:bg-transparent hover:text-[#33CAFF]  border-transparent hover:border-[#33CAFF] font-['InterMedium'] text-[20px] cursor-pointer py-[13px] px-[12px] bg-[#33CAFF]  rounded-[10px]">Показать Больше</button>
                    </div>

                </TabPanel>
                <TabPanel header="Популярные" >
                    <p className="m-0">

                        2
                    </p>
                </TabPanel>
                <TabPanel header="Редактировать">
                    <p className="m-0">
                        3
                    </p>
                </TabPanel>
            </TabView>


        </div>
    );
};

export default index;