import React, {useEffect, useState} from 'react';

interface HomePageProps {
    searchTerm: string;
}

const HomePage: React.FC<HomePageProps> = ({searchTerm}) => {

    return (
        <main className="homepage">
            <p>la pwa marche en tout cas</p>
        </main>
    );
}

export default HomePage;
