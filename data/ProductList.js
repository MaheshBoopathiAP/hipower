import {Image} from 'antd';
const ProductList = [
    {
        id:1,
        label:'HP-40',
        price:2375, // charged price 
        dry_price : 2275,
        scrap_price : 800,
        type:'HP 40',
        use:['cars'],
        application:['Maruti 800 petrol','Maruti 800 Diesel','Maruti Omni petrol','Maruti Omni diesel',
        'Maruti 800 Dx petrol','Maruti 800 Dx diesel'
        ],
        warranty:6,
        specs:[
            {key:'Plates',value:'7'},
            {key:'Wieght(Dry)',value:'7.5Kg'},
            {key:'Capacity(20hr rate)',value:'32'},
            {key:'Max Overall Dimension',value:'197x129x227'}
        ],
        img:'images/products/IMG_20230829_170129-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:2,
        label:'HP-40Z',
        price:2800,
        dry_price : 2700,
        scrap_price : 900,
        type:'HP 40Z',
        use:['cars'],
        application:['Maruti 1000 petrol','Maruti 1000 Diesel','Maruti Esteem petrol','Maruti Esteem diesel',
        'Maruti 800 Dx petrol','Maruti 800 Dx diesel','Maruti Zen petrol','Maruti Zen diesel','Maruti Gypsy petrol',
        'Maruti Gypsy diesel','Maruti Wagon R petrol','Maruti Wagon R diesel'
        ],
        warranty:12,
        specs:[
            {key:'Plates',value:'9'},
            {key:'Wieght(Dry)',value:'9Kg'},
            {key:'Capacity(20hr rate)',value:'35'},
            {key:'Max Overall Dimension',value:'197x129x227'}
        ],
        img:'images/products/IMG_20230829_170129-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:3,
        label:'HP-50',
        price: 4250 ,
        dry_price : 4150,
        scrap_price : 1300,
        type:'HP 50',
        use:['cars'],
        application:['Tata Indica petrol','Maruti Gypsy petrol','Maruti Gypsy diesel','Hindustan Ambassador petrol','Hindustan Ambassador diesel'],
        warranty:12,
        specs:[
            {key:'Plates',value:'9'},
            {key:'Wieght(Dry)',value:'12.5Kg'},
            {key:'Capacity(20hr rate)',value:'60'},
            {key:'Max Overall Dimension',value:'260x173x225'}
        ],
        img : 'images/products/IMG-20230829-WA0213.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:4,
        label:'HP-50Z',
        price:4950,
        dry_price : 4825,
        scrap_price : 1400,
        type:'HP 50Z',
        use:['cars'],
        application:['Mahindra Camper petrol','Tata Indigo Marina petrol','Tata Marina diesel','Premier Padmini diesel','Hindustan Contessa petrol','Hindustan Contessa diesel','Hindustan Ambassador petrol'],
        warranty:12,
        specs:[
            {key:'Plates',value:'11'},
            {key:'Wieght(Dry)',value:'14.5Kg'},
            {key:'Capacity(20hr rate)',value:'75'},
            {key:'Max Overall Dimension',value:'260x173x225'}
        ],
        img: 'images/products/IMG-20230829-WA0217.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:5,
        label:'HP-70LR',
        price:5800,
        dry_price : 5650,
        scrap_price : 1600,
        type:'Hp 70L/R',
        use:['cars'],
        application:['Toyota Qualis petrol','Toyota Qualis diesel','Mahindra Scorpio petrol','Mahindra Scorpio diesel','Mahindra Bolero petrol','Mahindra Bolero diesel'],
        warranty:12,
        specs:[
            {key:'Plates',value:'13'},
            {key:'Wieght(Dry)',value:'17Kg'},
            {key:'Capacity(20hr rate)',value:'90'},
            {key:'Max Overall Dimension',value:'260x173x225'}
        ],
        img : 'images/products/IMG-20230829-WA0213.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:6,
        label:'HP-70',
        price:5025,
        dry_price: 4875,
        scrap_price : 1600,
        type:'HP 70',
        use:['cars','lcv'],
        application:['Hindustan Ambassador diesel','Tata Mobile petrol','Tata Mobile diesel','Tata Sumo petrol','Tata Sumo diesel','Mahindra Marshal petrol','Mahindra Armado diesel'],
        warranty:12,
        specs:[
            {key:'Plates',value:'11'},
            {key:'Wieght(Dry)',value:'15.5Kg'},
            {key:'Capacity(20hr rate)',value:'75'},
            {key:'Max Overall Dimension',value:'306x173x233'}
        ],
        img: 'images/products/IMG-20230829-WA0231.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:7,
        label:'HP-70Z',
        price:5800,
        dry_price : 5650,
        scrap_price : 1800,
        type:'HP 70Z',
        use:['cars','lcv','tractor'],
        application:['Hindustan Contessa diesel','Hindustan Ambassador diesel','Tata Mobile petrol','Tata Mobile diesel','Tata Sumo petrol','Tata Sumo diesel','Tata Spacio petrol','Tata Spacio diesel','Eicher Canter diesel','Mahindra Voyager','Tractor (<358BHP) diesel'],
        warranty:12,
        specs:[
            {key:'Plates',value:'13'},
            {key:'Wieght(Dry)',value:'17Kg'},
            {key:'Capacity(20hr rate)',value:'90'},
            {key:'Max Overall Dimension',value:'306x193x233'}
        ],
        img : 'images/products/IMG-20230829-WA0235.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:8,
        label:'HP-88',
        price:5950,
        dry_price : 5800,
        scrap_price : 2000,
        type:'HP 88',
        use:['lcv','tractor'],
        application:['Eicher 480 diesel','Eicher 6100 diesel','Farm Tractor Power 430','Farm Tractor Power 435','Farm Tractor Power 440','Farm Tractor Power 450','Sonalika Tractor DL 1745 diesel','Sonalika Tractor DL 1750 diesel','Sonalika Tractor DL 1755 diesel','Sonalika Tractor DL 1750II diesel','Sonalika Tractor DI 60 diesel','Mahindra Arjun diesel','Mahindra Arjun 555DL diesel','Mahindra Arjun 650DL diesel','Mahindra Arjun 575DL diesel','Mahindra Arjun 585 Sarpanch diesel','Sarpanch Swaraj Tractor 724 diesel','Sarpanch Swaraj Tractor 733 diesel','Sarpanch Swaraj Tractor 735 diesel','Sarpanch Swaraj Tractor 744FE diesel'],
        warranty:12,
        specs:[
            {key:'Plates',value:'13'},
            {key:'Wieght(Dry)',value:'17.5Kg'},
            {key:'Capacity(20hr rate)',value:'90'},
            {key:'Max Overall Dimension',value:'410x176x233'}
        ],
        img : 'images/products/IMG-20230829-WA0279.jpeg-removebg-preview.png',
        quantity:1
    },
    {
        id:9,
        label:'HP-100',
        price:6625,
        dry_price : 6475,
        scrap_price : 2200,
        type:'HP 100',
        use:['lcv'],
        application:['Ashok Leyland Iveco diesel','Ashok Leyland Stallion diesel','Tata LVC diesel','Tata 608 diesel','Tata 709 diesel','Tractor (>358BHP) diesel'],
        warranty:12,
        specs:[
            {key:'Plates',value:'15'},
            {key:'Wieght(Dry)',value:'20Kg'},
            {key:'Capacity(20hr rate)',value:'105'},
            {key:'Max Overall Dimension',value:'410x176x233'}
        ],
        img : 'images/products/IMG-20230829-WA0271.jpeg-removebg-preview.png',
        quantity:1
    },
    {
        id:10,
        label:'HP-120',
        price:7625,
        dry_price : 7450,
        scrap_price : 2500,
        type:'HP 120',
        use:['lcv'],
        application:['JCB Escorts diesel'],
        warranty:12,
        specs:[
            {key:'Plates',value:'17'},
            {key:'Wieght(Dry)',value:'22.5Kg'},
            {key:'Capacity(20hr rate)',value:'120'},
            {key:'Max Overall Dimension',value:'507x171x235'}
        ],
        img :'images/products/IMG-20230829-WA0279.jpeg-removebg-preview.png',
        quantity:1
    },
    {
        id:11,
        label:'HP-135',
        price:8425,
        dry_price : 8250,
        scrap_price : 2800,
        type:'HP 135',
        use:['lcv'],
        application:['JCB Escorts diesel','Ashok Leyland Rhino diesel','Ashok Leyland Hippo Haulage diesel','Ashoke Leyland ALRD 20 diesel','Tata Motors 1510 diesel','Tata Motors 1313 diesel','Tata Motors 2515 diesel','Tata Motors 1613LPT diesel','Tata Motors 1610 diesel','Tata Motors 1109LPT diesel','Valtra 6100 diesel',
            'Hyundai MT 6522 diesel','Hyundai MT 7511 diesel','Hyundai MT 2522 diesel','Hyundai MT 3522 diesel','Hyundai MT 4022 diesel','Hyundai MT 4925 diesel','Hyundai MT 20T diesel','Hyundai MT 5911 diesel'
        ],
        warranty:12,
        specs:[
            {key:'Plates',value:'19'},
            {key:'Wieght(Dry)',value:'25.5Kg'},
            {key:'Capacity(20hr rate)',value:'135'},
            {key:'Max Overall Dimension',value:'512x222x257'}
        ],
        img :'images/products/IMG-20230829-WA0287-removebg-preview.png',
        quantity:1
    },
    {
        id:12,
        label:'HP-150',
        price:9125,
        dry_price : 8950,
        scrap_price : 3000,
        type:'HP 150',
        use:['lcv'],
        application:['Tata Motors 1512 diesel','Tata Motors 1510 diesel','Tata Motors 1109 diesel','Tata Motors 1610 diesel','Tata Motors 807 diesel','Tata Motors 909 diesel'],
        warranty:12,
        specs:[
            {key:'Plates',value:'21'},
            {key:'Wieght(Dry)',value:'27.5Kg'},
            {key:'Capacity(20hr rate)',value:'150'},
            {key:'Max Overall Dimension',value:'512x222x257'}
        ],
        img : 'images/products/IMG-20230829-WA0290-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:13,
        label:'HP-165',
        price:10075,
        dry_price : 9857,
        scrap_price : 3300,
        type:'HP 165',
        use:['genset','lcv'],
        application:['Hyundai MT CKD diesel','Kirloskar 15-30 KVA Genset','Kirloskar 125-160 KVA Genset','Kirloskar 15-75 KVA'],
        warranty:12,
        specs:[
            {key:'Plates',value:'23'},
            {key:'Wieght(Dry)',value:'29.5Kg'},
            {key:'Capacity(20hr rate)',value:'165'},
            {key:'Max Overall Dimension',value:'515x259x241'}
        ],
        img : 'images/products/IMG-20230829-WA0292-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:14,
        label:'HP-180',
        price:10850,
        dry_price : 10650,
        scrap_price : 3500,
        type:'HP 180',
        use:['lcv'],
        application:['Ashok leyland' , 'Trailers' , 'HMT-CKD Truck', 'Volvo FH-7/FH-12', 'Tatra 815/T3B928-10', 'TATA Motors: Hippo' , 'Beaver (30T)C' , 'Excavators-EX300-500','Therma Insulated Tanker' , 'Access Platform Truck', 'Inverters' ],
        warranty:12,
        specs:[
            {key:'Plates',value:'25'},
            {key:'Wieght(Dry)',value:'34Kg'},
            {key:'Capacity(20hr rate)',value:'180'},
            {key:'Max Overall Dimension',value:'515x259x241'}
        ],
        img :'images/products/IMG-20230829-WA0295-removebg-preview.png',
        quantity:1
    },
    {
        id:15,
        label:'HP-Tubular-IT-150', //inva tubular
        price:12150,
        dry_price : 11900,
        scrap_price : 3200,
        type:'IT 150',
        use:['ups'],
        application:['Inverter','Ups'],
        warranty:18,
        specs:[
            {key:'Plates',value:'7'},
            {key:'Wieght(Dry)',value:'40Kg'},
            {key:'Capacity(20hr rate)',value:'150'},
            {key:'Max Overall Dimension',value:'505x191x407'}
        ],
        img: 'images/products/IMG-20230829-WA0312-removebg-preview.png',
        quantity:1
    },
    {   // not found 
        id:16,
        label:'IT-180',  // inva tubular
        price:14775,
        dry_price : 14525,
        scrap_price : 3200,
        type:'IT 180',
        use:['ups'],
        application:['Inverter','Ups'],
        warranty:18,
        specs:[
            {key:'Plates',value:'9'},
            {key:'Wieght(Dry)',value:'52Kg'},
            {key:'Capacity(20hr rate)',value:'200'},
            {key:'Max Overall Dimension',value:'505x191x407'}
        ],
        img:'images/products/IMG-20230829-WA0312-removebg-preview.png',
        quantity:1
    },
    {
        id:17,
        label:'HP-Tubular-150-Jumbo',
        price:12150,
        dry_price : 11900,
        scrap_price : 3200,
        type:'HP Tubular 150 Jumbo',
        use:['ups'],
        application:['Inverter','Ups'],
        warranty:6,
        specs:[
            {key:'Plates',value:'11'},
            {key:'Wieght(Dry)',value:'33Kg'},
            {key:'Capacity(20hr rate)',value:'150'},
            {key:'Max Overall Dimension',value:'520x279x283'}
        ],
        img:'images/products/IMG-20230829-WA0310-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    }, 
    {
        id:18,
        label:'HP-DIN-70',
        price:5450,
        dry_price : 5350,
        scrap_price : 1750,
        type:'HP DIN 70',
        use:['empty'],
        application:[],
        warranty:12,
        specs:[
            {key:'Plates',value:'14'},
            {key:'Wieght(Dry)',value:'14.45Kg'},
            {key:'Capacity(20hr rate)',value:'70'},
            {key:'Max Overall Dimension',value:'277x175x164'}
        ],
        img:'images/products/IMG-20230829-WA0223.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {   //not found in the second pdf
        id:19,
        label:'HP-DIN-50',
        price:4300,
        dry_price : 4200,
        scrap_price : 1300,
        type:'HP DIN 50',
        use:['empty'],
        application:[],
        warranty:12,
        specs:[
            {key:'Plates',value:'10'},
            {key:'Wieght(Dry)',value:'10.75Kg'},
            {key:'Capacity(20hr rate)',value:'50'},
            {key:'Max Overall Dimension',value:'205x173x164'}
        ],
        img:'images/products/IMG-20230829-WA0211.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    //not found in the second pdf
    {   
        id:20,
        label:'HP-DIN-45',
        price:3650,
        dry_price: 3550,
        scrap_price : 1200,
        type:'HP DIN 45',
        use:['empty'],
        application:[],
        warranty:12,
        specs:[
            {key:'Plates',value:'9'},
            {key:'Wieght(Dry)',value:'14Kg'},
            {key:'Capacity(20hr rate)',value:'9.75'},
            {key:'Max Overall Dimension',value:'205x173x164'}
        ],
        img:'images/products/IMG-20230829-WA0205.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
    //not found in the second pdf

        id:21,
        label:'HP-DIN-66',
        price:4950,
        dry_price : 4850,
        scrap_price : 1600,
        type:'HP DIN 66',
        use:['empty'],
        application:[],
        warranty:12,
        specs:[
            {key:'Plates',value:'13'},
            {key:'Wieght(Dry)',value:'13.45Kg'},
            {key:'Capacity(20hr rate)',value:'66'},
            {key:'Max Overall Dimension',value:'277x175x164'}
        ],
        img:'images/products/IMG-20230829-WA0227.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:22,
        label:'HP-40 Auto Special',
        price:2050,
        dry_price : 1950,
        scrap_price : 600,
        type:'HP 40 Auto Special',
        use:['empty'],
        application:[],
        warranty:18,
        specs:[
            {key:'Plates',value:'5'},
            {key:'Wieght(Dry)',value:'6Kg'},
            {key:'Capacity(20hr rate)',value:'24'},
            {key:'Max Overall Dimension',value:'197x129x227'}
        ],
        img:'images/products/IMG-20230829-WA0227.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    },
    {
        id:23,
        label:'HP-Tubular-180-Jumbo',
        price:13900,
        dry_price : 13650,
        scrap_price : 3200,
        type:'HP-Tubular-180-Jumbo',
        use:['empty'],
        application:['Inverter','ups'],
        warranty:18,
        specs:[
            {key:'Plates',value:'13'},
            {key:'Wieght(Dry)',value:'39Kg'},
            {key:'Capacity(20hr rate)',value:'180'},
            {key:'Max Overall Dimension',value:'520x279x283'}
        ],
        img:'images/products/IMG-20230829-WA0227.jpeg-PhotoRoom.png-PhotoRoom.png',
        quantity:1
    }
]

export {ProductList}