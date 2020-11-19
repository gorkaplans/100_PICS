
import React from 'react'; 
import Header from '../header';
import Footer from '../footer';
import './MainLayout.scss';


const MainLayout = ({ children }) => {
    return (
        <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}
export default MainLayout;