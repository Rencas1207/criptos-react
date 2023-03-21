import styled from "@emotion/styled"

const Results = styled.div`
   color: #FFF;
   font-family: 'Lato', sans-serif;
   display: flex;
   align-items: flex-start;
   gap: 1rem;
   margin-top: 30px;

   img {
      display: block;
      width: 150px;
   }
`

const Text = styled.p`
   font-size: 18px;
      span {
         font-weight: 700;
      }
`

const Precio = styled.p`
   font-size: 30px;
   span {
      font-weight: 700;
   }
`
const Result = ({ resultado }) => {
   const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

   return (
      <Results>
         <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="" />
         <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Text>Precio más alto del día: <span>{HIGHDAY}</span></Text>
            <Text>Precio más bajo del día: <span>{LOWDAY}</span></Text>
            <Text>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
         </div>
      </Results>
   )
}

export default Result