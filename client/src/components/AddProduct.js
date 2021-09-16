import { useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios';

export default function AddProduct() {

    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const history = useHistory();

    async function addProduct(event) {
        event.preventDefault();

        await axios.post('http://localhost:3333/products', {
            name: name,
            description: description,
            price: price
        });
        history.push('/');
    }

    return(
        <div>
            <form onSubmit={ addProduct }>
                <div className="field">
                    <label>Nome do produto</label>
                    <input type="text"
                           class="input" 
                           placeholder="Nome do produto"
                           value={ name }
                           onChange={ (event) => setName(event.target.value)} />
                </div>

                <div className="field">
                    <label>Descrição</label>
                    <input type="text" 
                           class="input"
                           placeholder="Descrição do produto"
                           value={ description }
                           onChange={ (event) => setDescription(event.target.value)} />
                </div>

                <div className="field">
                    <label>Preço</label>
                    <input type="text" 
                           class="input"
                           placeholder="Preço"
                           value={ price }
                           onChange={ (event) => setPrice(event.target.value)} />
                </div>

                <div className="field">
                    <button className="button is-primary">Adicionar</button>
                </div>
            </form>
            {name} - {description}: Preço R$ {price}
        </div>
    )
}