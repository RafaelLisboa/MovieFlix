import React, { useEffect, useState } from 'react'
import './components/styles/App.css'
import ContentRow from './components/ContentRow'
import Movies from './movies'
import MainContent from './components/MainContent'
import Header from './components/Header'

 const App = () => {
    const [content, setContent] = useState({
        mainItem: {},
        main: [],
        action: [],
        adventure: [],
        romance: [],
        comedy: [],
    })

    useEffect(() => {
        const loadContent = async () => {

            const actionContent = await Movies.getContent('28', true);
            const romanceContent = await Movies.getContent('10749', true);
            const comedyContent = await Movies.getContent('35', true);
            const adventureContent = await Movies.getContent('12', true);
            const mainContent = await Movies.getMainContent();
            const mainContentList = mainContent.list;
            const mainContentItem = mainContent.main;
            
            setContent({
                mainItem: mainContentItem,
                main: mainContentList, 
                comedy: comedyContent.results,
                action: actionContent.results,
                adventure: adventureContent.results,
                romance: romanceContent.results,
            });
        }
        loadContent();
    }, []);

    return (
        <div>
            <Header />
            <MainContent main={content.mainItem} />
            <ContentRow gener="Em alta" results={content.main} />
            <ContentRow gener="Ação" results={content.action} />
            <ContentRow gener="Romance" results={content.romance} />
            <ContentRow gener="Comédia" results={content.comedy} />
            <ContentRow gener="Aventura" results={content.adventure} />
        </div>
    )
}


export default App;