import { NewsListData } from "../../types/News";
import { useEffect, useState } from "react";
import { getNewsListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';

const MainPage = function(){
    const [news, setNews] = useState();
    useEffect(() => {
        async function fetchNews(){
            setNews(await getNewsListAction());
        }
        fetchNews()
    }, []);

    return (
        <>
            {news ? (
                news.map(news => <NewsListData
                key={news.name}
                name={news.name}
                description={news.description} 
                createdAt={(new Date(news.createdAt)).toDateString()}/>)
            ) : (
                <Loader/>
            )}
        </>
    )
}

export default MainPage