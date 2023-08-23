

const products = [
    {id: 1, name:"Samsung S23", price: 800 , category:"Celulares", img:'https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/646x1000/70011154.webp' , stock: 50 , description:"Celular nuevo"},
    {id: 2, name:"Tablet Galaxy Tab 2", price:500 , category:"Tablets", img:'https://images.fravega.com/f500/c21447c9dd963e3703541bd25a56817a.jpg' , stock: 12 , description:"Tablet nueva"},
    {id: 3, name:"Iphone 14", price: 750, category:"Celulares", img:'https://www.tradeinn.com/f/13933/139331650/apple-iphone-14-pro-max-128gb-6.7.jpg' , stock:42 , description:"Celular nuevo"},
    {id: 4, name:"Televisor Samsung", price: 1500 , category:"Televisores", img:'https://images.samsung.com/is/image/samsung/p6pim/es/ue43bu8505kxxc/gallery/es-crystaluhd-bu8500-435287-ue43bu8505kxxc-533672877?$1300_1038_PNG$' , stock: 10 , description:"Crystal UHD "},
    {id: 5, name:"Televisor LG", price: 1450 , category:"Televisores", img:'https://76338a6a.flyingcdn.com/33747-large_default/lg-nano-cell-tv-55-55nano80-smart-uhd-4k-hdmi-usb-ips-tda.jpg' , stock: 10, description:"IPS 65 inch"},
]


export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

//Funcion busqueda de producto por ID

export const getProductsById = (productId) =>{
    return new Promise((resolve) => {
        resolve(products.find(prod => prod.id === productId))
    })


}

//Funcion busqueda de producto por Caterogry


export const getProductsByCategory = (productCategory) =>{
    return new Promise((resolve) => {
        resolve(products.filter(prod => prod.category === productCategory))
    })


}