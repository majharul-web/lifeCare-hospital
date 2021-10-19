import React from 'react';
import Advance from '../Advance/Advance';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Choose/>
            <Advance/>
        </div>
    );
};

export default Home;