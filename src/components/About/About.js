import React from 'react';
import Zigzag from'./../Zigzag/Zigzag.js'

import './About.css';
import dataZigzag from '../../Data/dataZigzag.js';

export default function About() {


    return (
        <>
            
                <Zigzag  zCards = {dataZigzag}/>
            
        </>
    )
}