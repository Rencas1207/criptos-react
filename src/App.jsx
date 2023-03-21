import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import imgCripto from './assets/img/imagen-criptos.png'
import Formulario from './components/Formulario';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
   display: grid; 
   grid-template-columns: repeat(2, 1fr);
   column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato',sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0;

  }
`

function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setLoading(true);
        setResultado({});
        const { moneda, criptomoneda } = monedas;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const response = await fetch(url);
        const result = await response.json();
        setResultado(result.DISPLAY[criptomoneda][moneda]);
        setLoading(false);
      }
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <>
      <Container>
        <Imagen src={imgCripto} alt="imagenes criptomonedas" />
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Formulario
            setMonedas={setMonedas}
          />
          {
            loading && <Spinner />
          }
          {
            resultado.PRICE && <Result resultado={resultado} />
          }
        </div>
      </Container>

    </>
  )
}

export default App
