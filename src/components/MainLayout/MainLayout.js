
import React from 'react'; 
import Header from '../header';
import Footer from '../footer';
import './MainLayout.scss';
import { useSelector } from 'react-redux';


const MainLayout = ({ children }) => {
    const theme = useSelector((state) => state.theme)
    return (
        <>
        <div className={`theme-${theme}`}>
           <div className="theme-background"></div> 
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
        </>
    )
}
export default MainLayout;