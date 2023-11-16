



const CardBlog = ({data:{img, text}}) => {
    return (
        <div className="flex items-center gap-x-[50px]">
            <img src={img} alt="blog" />
            <p className="text-[20px] leading-[30px]">{text}</p>
        </div>
    );
};

export default CardBlog;