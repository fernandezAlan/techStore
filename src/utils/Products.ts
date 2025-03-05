const prod = {
    name:"Iphone 12",
    price:1000,
    rating:4.8,
    description:"Lorem ipsum dolor sit amet, foelered fipsunm fisie.",
    image:"./i_phone_12.png"
}
interface ProdOffertI {
        name: string;
        description: string;
        price: number;
        oldPrice: number;
        untilDays: number;
        untilHours: number;
        untilMinutes: number;
        untilSeconds: number;
}
const prodOffert:ProdOffertI = {
    name: "I Phone 15 pro max",
    description: "The best phone in the market",
    price: 1200,
    oldPrice: 1500,
    untilDays: 12,
    untilHours: 12,
    untilMinutes: 30,
    untilSeconds: 50,
}
export const getAllProducts = (): { name: string; price: number; rating: number; description: string; image: string; }[] => {
    const products: { name: string; price: number; rating: number; description: string; image: string; }[] = []
    for (let i = 0; i < 5; i++) {
        products.push(prod)
    }
    return products
}

export const getAllOfferts = ()=>{
    const offerts:ProdOffertI[] = []
    for (let i = 0; i < 3; i++) {
        offerts.push(prodOffert)
    }
    return offerts
}