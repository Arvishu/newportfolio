import React from 'react'
import './Zigzag.css'
import ZigzagRight from './../ZigzagRight/ZigzagRight.js'
import ZigzagLeft from './../ZigzagLeft/ZigzagLeft.js'


export default function Zigzag({zCards}){

    return(
        <div >
{zCards.map((zCard, i) => (
       

       <div key= {i}>
         {i%2===0?( <ZigzagLeft 
          id={zCard.id}
          titleG={zCard.titleG}
          titleD={zCard.titleD}
          paragrapheG={zCard.paragrapheG}
          paragrapheD={zCard.paragrapheD}
          imageG={zCard.imageG}
          imageD={zCard.imageD}
          />
         ):( <ZigzagRight 
          id={zCard.id}
          titleG={zCard.titleG}
          titleD={zCard.titleD}
          paragrapheG={zCard.paragrapheG}
          paragrapheD={zCard.paragrapheD}
          imageG={zCard.imageG}
          imageD={zCard.imageD}
          />)}
         
         
       </div>
      ))}
        </div>
    )
}