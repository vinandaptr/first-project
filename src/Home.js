import React from 'react';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';
import './App.css';
import SimpleSlider from './SimpleSlider';
import Footer from './components/Footer';

const Home = () => (
    <div>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            <h2>Home</h2>
            <SimpleSlider />
            <p></p>
            {/* <p>You need to have a very firm paint to do this. See how easy it is to create a little tree right in your world. It's all a game of angles. Let's put some happy little clouds in our world.</p>

            <p>It's life. It's interesting. It's fun. Let the paint work. Fluff that up. If you hypnotize it, it will go away. It's so important to do something every day that will make you happy. The more we do this - the more it will do good things to our heart.</p>

            <p>A fan brush can be your best friend. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. Every highlight needs it's own personal shadow.</p> */}
        </Layout>
        <br />
        <Footer />
    </div>
)

export default Home;