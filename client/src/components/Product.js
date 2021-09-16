import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Product(){
    //hooks 
    const [ products, setProducts] = useState([])

    // Hook para chamar a requisição após o carregando da pág
    useEffect(() => {
        getProducts();

    }, [])

    //Função que pega os produtos
    async function getProducts(){
        const res = await axios.get('http://localhost:3333/products');
        setProducts(res.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:3333/products/${id}`);
        getProducts();
    }

    return(
        <>
        <Link to="/add" className="button is-primary">Adicionar novo produto</Link>

        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>DESCRIÇÃO</th>
                    <th>PREÇO</th>
                </tr>
            </thead>
            <tbody>
                  {/* Consumindo os dados da api  */}
                  { products.map((product) => {
                      return(
                        <tr key={ product.id }>
                            <td>{ product.name }</td>
                            <td>{ product.description }</td>
                            <td>{ product.price }</td>       
                        <td>
                            <Link to={`/edit/${product.id}`} className="button is-small is-info">Editar Produto</Link>
                            <button onClick={ () => deleteProduct(product.id)} className="button is-small is-danger">Deletar Produto</button>
                        </td>
                       </tr>

                      )
                      
                  }) }
                
            </tbody>

        </table>
        
        
        </>
    )
}