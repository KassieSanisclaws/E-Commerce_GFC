import  bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Kadeem',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234567', 8),
            isAdmin: true,
        },    
        {
            name: 'battifish',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: false,
        },
    ],
    
    products:[
        {
            // _id: '1',
            name:'Astray Blue Frame Second Revise',
            category:'Master Grade',
            image:'/Images/AstrayBlueFrameSecondReviseGundam_MG-609984.png',
            price:165,
            countInStock: 10,
            brand:'Bandai',
            rating:4.5,
            numReviews:10,
            description:'to be updated',
        },
        {
            // _id: '2',
            name:'Unicorn Phenex Gundam',
            category:'Master Grade',
            image:'/Images/UnicornGundam_03Phenex.png',
            price:185,
            countInStock: 7,
            brand:'Bandai',
            rating:4.5,
            numReviews:10,
            description:'to be updated',
        },
        {
            // _id:'3',
            name:'Strike Freedom Gundam',
            category:'Master Grade',
            image:'/Images/StrikeFreedomGundam_ZGMF-X20A.png',
            price:180,
            countInStock: 3,
            brand:'Bandai',
            rating:4.5,
            numReviews:10,
            description:'to be updated',
        },
        {
            // _id: '4',
            name:'Shin Musha Gundam',
            category:'Master Grade',
            image:'/Images/ShinMushaGundam_MG-582119.png',
            price:125,
            countInStock: 0,
            brand:'Bandai',
            rating:4.5,
            numReviews:10,
            description:'to be updated',
        },
        {
            // _id: '5',
            name:'Justice Gundam Master Grade',
            category:'Master Grade',
            image:'/Images/JusticeGundam_ZAFT.png',
            price:140,
            countInStock: 4,
            brand:'Bandai',
            rating:4.5,
            numReviews:10,
            description:'to be updated',
        },
        {
           //  _id: '6',
            name:'00 Riser Gundam Master Grade',
            category:'Master Grade',
            image:'/Images/00RiserGundam_GN-0000.png',
            price:200,
            countInStock: 8,
            brand:'Bandai',
            rating:4.5,
            numReviews:10,
            description:'to be updated',
        },
        {
            // _id: '7',
            name:'Destiny Gundam ZGMF-X42S',
            category:'Master Grade',
            image:'/Images/DestinyGundam_ZGMF-X42S.png',
            price:135,
            countInStock: 0,
            brand:'Bandai',
            rating:4.5,
            numReviews:10,
            description:'to be updated',
        },
        {
            // _id: '8',
            name:'Barbatos-LupusRex Dragon King',
            category:'Master Grade',
            image:'/Images/BarbatosLupusRexDragonKingGundam_ASW-G-08.png',
            price:210,
            countInStock: 7,
            brand:'Bandai',
            rating:4.5,
            numReviews:10,
            description:'to be updated',
        },
    ]
}

export default data; 