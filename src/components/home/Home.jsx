import React from 'react';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../headar/header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;