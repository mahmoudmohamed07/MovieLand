import React, { useState } from 'react';
import '../css/main.css'; // Optional: for styling



const ImageSlider = ({images}) => {

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [translator , setTranslator] = useState(0);
    var translator = 0 ;
    var currentIndex = 0 ;
    function Slides () {
        var prevArrow = document.querySelector('.slider .prev');
        console.log(translator);
        if (currentIndex === 0) {
            prevArrow.disabled = true ;
        }
        else {
            prevArrow.disabled = false ;
        }
        var nextArrow = document.querySelector('.slider .next');

        if (currentIndex === images.length-2) {
            nextArrow.disabled = true ;
        }
        else {
            nextArrow.disabled = false ;
        }

    }

    

    const nextSlide = () => {
        Slides();
        translator-=100;
        currentIndex++;
        var image = document.querySelector('.slider .slides');
        // setCurrentIndex((prevIndex) =>
        //     prevIndex === images.length - 1 ? 0 : prevIndex + 1 
        // );
        image.style.transform = `translateX(${translator}%)`
        console.log(translator + " " + currentIndex)
    };

    const prevSlide = () => {
        translator+=100;
        currentIndex--;
        Slides();
        // setCurrentIndex((prevIndex) =>
        // prevIndex === 0 ? images.length - 1 : prevIndex - 1 );
        var image = document.querySelector('.slider .slides');
        image.style.transform = `translateX(${translator}%)`
        console.log(translator + " " + currentIndex)
    };

    return (
        <div className="slider" onLoad={Slides}>
            <button onClick={prevSlide} className="arrow prev" >
                &#10094;
            </button>
            <div className="slides" >
                {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                />
                    ))}
            </div>
            <button onClick={nextSlide} className="arrow next">
                &#10095;
            </button>
        </div>
       
    );
};

export default ImageSlider;