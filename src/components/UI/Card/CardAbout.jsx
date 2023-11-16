



const CardAbout = ({ data: { img, title, text } }) => {
    return (
        <div>
            <div className="flex items-center justify-center mb-[15px]">
                <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full" style={{border: '1px solid #33caff'}} >
                    <img src={img} alt={title} className="" />
                </div>
            </div>
            <div>
                <h2 className="text-[25px] font-['InterSemiBold'] text-center mb-[15px]">{title}</h2>
                <p className="text-[#A8A8A8] text-[16px] text-center">{text}</p>
            </div>
        </div>
    );
};

export default CardAbout;