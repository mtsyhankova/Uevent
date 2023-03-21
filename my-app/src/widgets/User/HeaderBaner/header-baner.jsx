import React/*, { useState, Component }*/ from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dmin from './assets/d-min.png'
import forest from './assets/natureforesttreesfog.jpg'
// import { Link } from 'react-router-dom'

import "./style.css"

export const HeaderBaner = () => {
    return (
        <div className='headerbanner'>
            <Carousel>
                <Carousel.Item>
                    <img src={dmin} alt="aboba" className='bannerimg' />
                    <Carousel.Caption>
                        <h3>Aboba</h3>
                        <p>abra kadabra</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={forest} alt="aboba" className='bannerimg' />
                    <Carousel.Caption>
                        <h3>Aboba</h3>
                        <p>abra kadabra</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >
        </div>
    )
}