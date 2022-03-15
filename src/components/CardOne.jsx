import Sedans from "./icons/Sedans";

const CardOne = () => {
  return (
    <div className="card_one card-size">
        <Sedans />
        <div className="card-layout">
            <h1 className="card-title">SEDANS</h1>
            <p className="card-paragraph">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button className="card-button color-one">Learn More</button>
        </div>
    </div>
  )
}

export default CardOne