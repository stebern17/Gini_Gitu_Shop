import { useEffect, useState } from 'react';
import CardProduct from '../blocks/CardProduct';

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    function getProducts(){
        fetch('https://dummyjson.com/products').then(res => res.json()).then((result) =>{setProducts(result.products)})
    }

    useEffect(() => {
        getProducts()
    }, [])

    return(
        <section className='container py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
        {
            products.map((product) => {
                return (
                    <CardProduct key={product.id} product={product} />
                )
            })
        }
        
        </section>
            
    )
    
}