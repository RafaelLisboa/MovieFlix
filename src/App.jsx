import React, { useEffect, useState } from 'react'
import './components/styles/App.css'
import ContentRow from './components/ContentRow'
import Movies from './movies'
import MainContent from './components/MainContent'
import Header from './components/Header'
import RowWrapper from './components/RowWrapper'
import Loading from './components/Loading'

const App = () => {
    const [content, setContent] = useState({
        mainItem: {},
        main: [],
        action: [],
        adventure: [],
        romance: [],
        comedy: [],
        horror: [],
        mistery: []
    })

    useEffect(() => {
        const loadContent = async () => {

            const actionContent = await Movies.getContent('28');
            const romanceContent = await Movies.getContent('10749');
            const comedyContent = await Movies.getContent('35');
            const adventureContent = await Movies.getContent('12');
            const horrorContent = await Movies.getContent('27');
            const misteryContent = await Movies.getContent('9648')
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
                horror: horrorContent.results,
                mistery: misteryContent.results
            });
        }
        loadContent();
    }, []);

    return (
        <>
            <Header />
            {
                content.main.length <= 0 && <Loading />
            }
            <MainContent main={content.mainItem} />
            <RowWrapper>
                <ContentRow gener="Em alta" results={content.main} />
                <ContentRow gener="Ação" results={content.action} />
                <ContentRow gener="Romance" results={content.romance} />
                <ContentRow gener="Comédia" results={content.comedy} />
                <ContentRow gener="Aventura" results={content.adventure} />
                <ContentRow gener="Terror" results={content.horror} />
                <ContentRow gener="Mistério" results={content.mistery} />
            </RowWrapper>
            <footer>
                Projeto desenvolvido por Rafael Lisboa <br />
                API de filmes utilizada TMDB
            </footer>
        </>
    )
}


export default App;