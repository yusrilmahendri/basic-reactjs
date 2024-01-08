import { useNavigate } from "react-router-dom";


const First = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3>HOME PAGE ROUTE</h3>
            <button onClick={() => navigate('/about') }>Check About</button>
        </>
    )
}

export  default First