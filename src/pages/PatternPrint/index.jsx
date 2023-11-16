
import { Link, useLocation } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Editor } from '@tinymce/tinymce-react';
import { menu, upload, left, right } from "../../assets";
import { menuList } from "../../service/db";
import "./style.scss";

const index = (props) => {
    const items = [{ label: 'Главная', url: '/' }, { label: 'Мужское', url: '/' }, { label: 'Футболки' }, { label: 'Pattern Print' }];

    
    return (
        <div className='pb-[20px]'>
            <div className="bg-[#00C3CC] pt-[165px] pb-[20px]">
                <div className="container">
                    <h2 className="text-[36px] mb-[5px]">Pattern Print</h2>
                    <BreadCrumb model={items} />
                </div>

            </div>

            <div>
                <div className="menu-pattern flex items-center justify-between font-['MontserratSemiBold'] text-white px-5 h-[65px]">
                    <div className='flex items-center cursor-pointer gap-x-[46px]'>
                        <img src={menu} alt="menu" />
                        <span>Home</span>

                        <div className='flex items-center gap-x-[18px]'>
                            <img src={left} alt="left" />
                            <img src={right} alt="right" />
                        </div>
                    </div>
                    <h2>Project title</h2>
                    <div className='flex items-center gap-x-1 cursor-pointer'>
                        Share
                        <img src={upload} alt="upload" />
                    </div>
                </div>
                <div className='flex'>
                    <div className='bg-black w-[80px] pt-[40px]'>
                        <div className='flex flex-col items-center justify-center gap-y-[30px] cursor-pointer text-white'>
                            {
                                menuList?.map((item) => (
                                    <div key={item?.id} className="flex flex-col items-center justify-center">
                                        <img src={item?.img} alt={item?.title} />
                                        <span className='font-["MontserratMedium"] text-[12px]'>{item?.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full'>
                        <Editor
                            apiKey='ief9zrg9y757ap1pi7tkhs66y3m97222ni2nlefp21fi7liy'
                            init={{
                                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                            }}
                            initialValue="Text!"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;