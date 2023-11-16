import {
    mOne,
    mTwo,
    mThree,
    mFour,
    mFive,
    mSix,
    wOne,
    wTwo,
    wThree,
    wFour,
    wFive,
    wSix,
    kOne,
    kTwo,
    kThree,
    kFour,
    kFive,
    kSix,
    nike,
    adidas,
    reebok,
    lacoste,
    puma,
    designer,
    check,
    settings,
    money,
    bag,
    bone,
    btwo,
    bthree,
    bfour,
    dashboard,
    design,
    paintbrush,
    text
} from "../assets"

const mencollection = [
    {
        id: 1,
        title: 'Белый Boncai',
        price: '30.000',
        img: mOne,
        status: false
    },
    {
        id: 2,
        title: 'Белый Plade',
        price: '32.000',
        img: mTwo,
        status: false
    },
    {
        id: 3,
        title: 'Белый Deta Plade',
        price: '45.000',
        img: mThree,
        status: false
    },
    {
        id: 4,
        title: 'Чёрный North Face',
        price: '35.000',
        img: mFour,
        status: true
    },
    {
        id: 5,
        title: 'Чёрный Plain Godzilla',
        price: '32.000',
        img: mFive,
        status: true
    },
    {
        id: 6,
        title: 'Чёрный Plain Sharky',
        price: '45.000',
        img: mSix,
        status: false
    },
];

const womencollection = [
    {
        id: 1,
        title: 'Kelldone',
        price: '30.000',
        img: wOne,
        status: false
    },
    {
        id: 2,
        title: 'Kenzo Paris',
        price: '32.000',
        img: wTwo,
        status: false
    },
    {
        id: 3,
        title: 'Moschino',
        price: '45.000',
        img: wThree,
        status: false
    },
    {
        id: 4,
        title: 'Чёрный Palm Angels',
        price: '35.000',
        img: wFour,
        status: true
    },
    {
        id: 5,
        title: 'Чёрный Balmain Paris',
        price: '32.000',
        img: wFive,
        status: true
    },
    {
        id: 6,
        title: 'Белый Palm Angels',
        price: '45.000',
        img: wSix,
        status: false
    },
];

const kidscollection = [
    {
        id: 1,
        title: 'Kelldone',
        price: '30.000',
        img: kOne,
        status: false
    },
    {
        id: 2,
        title: 'Kenzo Paris',
        price: '32.000',
        img: kTwo,
        status: false
    },
    {
        id: 3,
        title: 'Moschino',
        price: '45.000',
        img: kThree,
        status: false
    },
    {
        id: 4,
        title: 'Чёрный Palm Angels',
        price: '35.000',
        img: kFour,
        status: true
    },
    {
        id: 5,
        title: 'Чёрный Balmain Paris',
        price: '32.000',
        img: kFive,
        status: true
    },
    {
        id: 6,
        title: 'Белый Palm Angels',
        price: '45.000',
        img: kSix,
        status: false
    },
];


const brands = [
    {
        img: nike,
    },
    {
        img: adidas,
    },
    {
        img: reebok,
    },
    {
        img: puma,
    },
    {
        img: lacoste,
    },
    {
        img: nike,
    },
    {
        img: adidas,
    },
    {
        img: reebok,
    },
    {
        img: puma,
    },
    {
        img: lacoste,
    },
    
];

const designers = [
    {   
        id:1,
        img: designer,
        name: "Имя Фамилия"
    },
    {
        id:2,
        img: designer,
        name: "Имя Фамилия"
    },
    {
        id:3,
        img: designer,
        name: "Имя Фамилия"
    },
    {
        id:4,
        img: designer,
        name: "Имя Фамилия"
    },
];

const about = [
    {   
        id:1,
        img: bag,
        title: "Маркетплейс",
        text: "Компания Lode X - позволяет людям редактировать свою одежду."
    },
    {
        id:2,
        img: check,
        title: "Оригинал ",
        text: "Мы следим за оригинальностью продаваемых вещей"
    },
    {
        id:3,
        img: settings,
        title: "Подбор",
        text: "Удобный подбор одежды по всем параметрам"
    },
    {
        id:4,
        img: money,
        title: "Безопасная сделка",
        text: "Безопасность платежей для покупателей и продавцов"
    },
];

const blog = [
    {   
        id:1,
        img: bone,
        text: "Эта рубашка спасет Вы сэкономите 40$ при себе Следующая онлайн-покупка"
    },
    {
        id:2,
        img: btwo,
        text: "История позади Lode X: Это Стильное  движение"
    },
    {
        id:3,
        img: bthree,
        text: "Что надеть Мадрид: 8 нарядов для Сделайте так, чтобы вы выглядели местными"
    },
    {
        id:4,
        img: bfour,
        text: "Руководство по покупке Костюм: Что ты Надо знать"
    },
];

const menuList = [
    {
        id:1,
        img: design,
        title: "Design"
    },
    {
        id:2,
        img: dashboard,
        title: "Elements"
    },
    {
        id:3,
        img: text,
        title: "Text"
    },
    {
        id:4,
        img: paintbrush,
        title: "Paint"
    },
]



export {mencollection, womencollection, kidscollection, brands, designers, about, blog, menuList};