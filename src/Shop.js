import React from 'react';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';
import './App.css';
import image1 from './assets/image4scropped2.jpg';
import image2 from './assets/shoescropped.jpg';
import image3 from './assets/heelscropped.jpg';
import image4 from './assets/bagscropped.jpg';
import image5 from './assets/watchescropped.jpg';

const Shop = () => (
    <div>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            <h2>Shop</h2>
            <p className="categories">Clothes
            <img className="img" src={image1} alt="Logo" />
            </p>
            <p className="categories">Sneakers
            <img className="img" src={image2} alt="Logo" />
            </p>
            <p className="categories">Heels
            <img className="img" src={image3} alt="Logo" />
            </p>
            <p className="categories">Bags
            <img className="img" src={image4} alt="Logo" />
            </p>
            <p className="categories">Watches
            <img className="img" src={image5} alt="Logo" />
            </p>
            <p></p>
        </Layout>
    </div>
)

export default Shop;