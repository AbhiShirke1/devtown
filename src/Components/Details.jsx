import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import data from '../api/data.js'
import Card from './Card'
import Header from './Header.jsx'

const Information = styled.div`
    
`

const Main = styled.div`
display: flex;
`

const Left = styled.div`

    width: 50%;
    margin: 0 0 0 35px;

    .image{
        width: 100%;
    }

    .pic2{
        width: 80%;
        height: 380px;
    }
`

const Right = styled.div`
margin: 0 35px 0 5px;
width: 50%;

.rating{
    height: 20px;
    margin-top: 5px;
    display: flex;
    align-items: center
}

.name{
    text-align: center;
}

h1, h3, p{
    margin: 0;
    padding: 0;
}

.review{
    padding-left: 5px;
    color: #878787;
}

.ratingNumber{
    width: 45px;
    background-color: green;
    color: white;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
}

.ratingNumber>i{
    padding-left: 2px;
}

.special{
    color: #388e3c;
    padding-top: 12px;
}

.desc{
    // width: 50%;
}

.desc{
    padding-top: 12px;
    color: #2d2a2a;
}

`

const Details = () => {
    const location = useLocation()
    const id = location.pathname.split('/');
    const place = id[1];

    const filterArray = data.filter(d => d.id === place)

    return (
        <>
        <Header />
        <Information>
            {
                filterArray.map((d) => {
                    return (
                        <Main>
                            <Left>
                                <div className="image">
                                    <img src={d.img} alt="" className='pic2' />
                                </div>
                            </Left>

                            <Right>
                                <h1>
                                    {d.name}
                                </h1>

                                <div className="rating">
                                    <p className='ratingNumber'>
                                        {d.rating}
                                        <i class="fa-solid fa-star fa-sm"></i>

                                    </p>
                                    <p className='review'>
                                        700 ratings
                                    </p> <br />
                                </div>

                                <p className='special'>
                                    Special Price
                                </p>

                                <div className="price">
                                    <h1>₹{d.price}</h1>
                                    <h3><del>{d.max}</del></h3>
                                </div>

                                <div className="desc">
                                    <h3>Product Description</h3>
                                    {d.desc}
                                </div>
                            </Right>
                        </Main>
                    )
                })
            }

            <Card />
        </Information>
        </>
    )
}

export default Details
