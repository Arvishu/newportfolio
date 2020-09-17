import React,{useEffect} from 'react';
import Typical from 'react-typical'
import './Slide.css'



export default function Slide(props) {
    const { name, title, subtitle,subsubtitle, image, id } = props

    function typing () {
        return(<Typical
            steps={[title, 2500]}
            loop={Infinity}
            wrapper="h1"
          />)
    }
    useEffect(() => {
       
          typing();
        },[id]);
    
        
     
    
    return (
        <div key={id}>
            <img className="image" src={image} alt={`${title}`} />

            <div className="centered">
                <p>{name}</p>
                {typing()}
                <h2>{subtitle}</h2>
                <h3>{subsubtitle}</h3>
            </div>
        </div>

    )
}