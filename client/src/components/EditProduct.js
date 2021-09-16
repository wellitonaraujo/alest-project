import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from 'axios';

export default function EditProduct() {

    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const history = useHistory();
    const { id } = useParams();

    // Função que adiciona produto
    async function updateProduct(event) {
        event.preventDefault();

        await axios.put(`http://localhost:3333/products/${id}`, {
            name: name,
            description: description,
            price: price
        });
        history.push('/');
    }

    useEffect(() => {
        getProductById();
        
    }, []);

    // Função que pega um produto pelo ID
    async function getProductById(){

        const res = await axios.get(`http://localhost:3333/products/${id}`)
        
        setName(res.data.name);
        setDescription(res.data.description);
        setPrice(res.data.price);
    }

    return(
        <div>
            <form onSubmit={ updateProduct }>
                <div className="field">
                    <label className="label">Nome do produto</label>
                    <input type="text" 
                           class="input"
                           placeholder="Nome do produto"
                           value={ name }
                           onChange={ (event) => setName(event.target.value)} />
                </div>

                <div className="field">
                    <label className="label">Descrição</label>
                    <input type="text" 
                           class="input"
                           placeholder="Descrição do produto"
                           value={ description }
                           onChange={ (event) => setDescription(event.target.value)} />
                </div>

                <div className="field">
                    <label className="label">Preço</label>
                    <input type="text" 
                           class="input"
                           placeholder="Preço"
                           value={ price }
                           onChange={ (event) => setPrice(event.target.value)} />
                </div>

                <div className="field">
                    <button className="button is-primary">Salvar</button>
                </div>
            </form>
            {name}: {description} R$ {price}
        </div>
    )
}
