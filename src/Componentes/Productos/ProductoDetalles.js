import React, { useContext, useState, useEffect} from 'react'
import { DataContext } from "../../Context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";


export const ProductoDetalles = () => {
    const value =useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([])
    const params = useParams();
    let item = 0;
    
    useEffect(() =>{
        productos.forEach(producto =>{
            item = 0;
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
            }
        }) 
    },[params.id, productos])

  return (
    <>
        {
            <div className="detalles">
                <h2>{detalle.title}</h2>
                <p className="price">${detalle.price}</p>
                <button onClick={() => addCarrito(detalle.id) }>Añadir al carrito</button>
                <img src={detalle.image} alt={detalle.title}/>
                <div className="description">
                    <p><b>descripcion:</b> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
                    (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que 
                    logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando 
                    esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales 
                    contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                    el cual incluye versiones de Lorem Ipsum. <br/> <br/>  Lorem Ipsum es simplemente el texto de relleno de las imprentas 
                    y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
                    (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un 
                    libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                    quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian
                    pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones 
                    de Lorem Ipsum. </p>
                    
                </div>
            </div>
        }
        <h2 className="relacionados">Productos Relacionados</h2>
        <div className="productos">
                {productos.map((producto) => {
                    if((item < 6) && (detalle.category === producto.category)){
                        item++;
                        return <ProductoItem 
                        key={producto.id} 
                        id={producto.id}
                        title={producto.title}
                        image={producto.image}
                        category={producto.category}
                        cantidad={producto.cantidad}
                        price={producto.price}
                    />
                    }
                })
                }
            </div>
    </>
  )
}
