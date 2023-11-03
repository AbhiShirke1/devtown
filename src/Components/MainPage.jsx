import React from 'react'
import Header from './Header'
import Card from './Card'
import Card2 from './Card2'
import { Link } from 'react-router-dom'
import Nothing from './Nothing'

const MainPage = () => {
    return (
        <div>
            {/* <Link to={'/'}> */}
                <Header />
                <Card />
            {/* </Link> */}
        </div>
    )
}

export default MainPage
