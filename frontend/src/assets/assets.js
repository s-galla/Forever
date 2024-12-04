import logo from './sg.jpg'
import apple_imac_2 from './apple-imac-2.png'

export const assets={
    logo,
    apple_imac_2
}

export const products=[
    {
        _id:"aaaa",
        name:"Apple iMac",
        description:"a lightweight, usually knitted",
        price: 1000,
        image:[apple_imac_2],
        category:"Electronics",
        subCategory:"ssss",
        sizes:["S","M","L"],
        date:"",
        bestseller:true
    },
    {
        _id:"bbbbb",
        name:"Apple iMac",
        description:"a lightweight, usually knitted",
        price: 1000,
        image:[apple_imac_2,logo],
        category:"Electronics",
        subCategory:"ssss",
        sizes:["S","M","L"],
        date:"",
        bestseller:true
    }
]