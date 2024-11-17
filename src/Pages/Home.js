import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import ContactCircle from '../Components/ContactCircle'; // Импорт компонента

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox /> {/* Карусель */}
                <ContactCircle /> {/* Кнопка-кружок с формой */}
            </div>
        );
    }
}

export default Home;
