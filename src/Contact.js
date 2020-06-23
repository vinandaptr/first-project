import React from 'react';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';
import image1 from './assets/store.jpeg';
import Footer from './components/Footer';

const Contact = () => (
    <div>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            <h2 className="text-center">Contact Us</h2>
            <p></p>
            <p className="store-name">vins-store</p>
            <p className="text-center">Address: <span className="font-weight-bold">Jakarta</span></p>
            <p className="text-center">Phone: <span className="font-weight-bold">+62 778 800 900</span></p>
            <p className="text-center">Email: <span className="font-weight-bold">info@vinstore.com</span></p>
            <img className="img" src={image1} alt="Logo" />
            <p></p>
        </Layout>
        <Footer />
    </div>
)

export default Contact;