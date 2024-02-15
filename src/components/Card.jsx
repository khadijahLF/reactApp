import Image from "./Image"


function Card(props) {
  return (
    <>
        <div className="container">
            <div className="top">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <Image img={props.img} alt={props.title} />
            </div>
        </div>
        
    </>
  )
}

export default Card