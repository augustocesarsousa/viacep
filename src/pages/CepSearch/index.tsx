import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';

type FormData = {
  cep: string;
  test: string;
}

const CepSearch = () => {

  const [formData, setFomrData] = useState<FormData>({
    cep: '',
    test: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFomrData({...formData, [name]:value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              value={formData.cep}
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={handleChange}
            />
            <input
              type="text"
              name="test"
              value={formData.test}
              className="search-input"
              placeholder="test"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        <ResultCard title="Logradouro" description="Lalala" />
        <ResultCard title="Número" description="234" />
      </div>
    </div>
  );
};

export default CepSearch;
