import { NewsListData } from "../../types/News";
import { useEffect, useState } from "react";
import { getNewsListAction } from "../../store/api-actions";
import { Loader } from '@consta/uikit/Loader';
import { useDispatch, useSelector } from "react-redux";
import { setNewsState } from "../../store/newsSlice";

const MainPage = function(){
    const dispatch = useDispatch()
    const [news, setNews] = useState(useSelector(state => state.news.value));

    useEffect(() => {
        getNewsListAction().then(response=>{
            setNews(response)
            dispatch(setNewsState(response))
        })
    }, [dispatch]);

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