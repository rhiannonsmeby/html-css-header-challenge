import React, {useState, useEffect} from 'react';
import DesktopNavbar from '../DesktopNavbar/DesktopNavbar';
import MobileNav from '../MobileNav/MobileNav';

export default function Header() {
    let [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1000;

    //event handler for whether to display mobile or desktop navigation
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize)
    }, []);

    
    return (
        width < breakpoint 
            ? <MobileNav /> 
            : <DesktopNavbar />
    );
}