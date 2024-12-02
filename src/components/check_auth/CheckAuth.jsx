import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { AppRoute } from "../const"
import { useEffect } from "react"

const CheckAuth = function({children}){
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()
    console.log()

    useEffect(()=>{
        if (user === null) {
            navigate(AppRoute.login)
        }
    }, [navigate, user])

    return children
}

export default CheckAuth