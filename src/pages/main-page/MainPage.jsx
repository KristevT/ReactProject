import { NewsListData } from "../../types/News";
import { useEffect, useState } from "react";
import { getNewsListAction } from "../../store/api-actions";

const MainPage = function(){
    const [news, setNews] = useState();
    useEffect(() => {
        async function fetchNews(){
            setNews(await getNewsListAction());
        }
        fetchNews()
    }, []);

    if (!news || news.length === 0) return <p>Нет данных.</p>

    return (
        <>
            {news.map(news => <NewsListData
                key={news.name}
                name={news.name}
                description={news.description} 
                createdAt={(new Date(news.createdAt)).toDateString()}/>)}
        </>
    )
}

export default MainPage