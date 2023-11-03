import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import data from '../api/data.js'
import Select from 'react-select'
import { Link } from 'react-router-dom';
import Header from './Header.jsx';


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
    grid-auto-rows: 300px;
    gap: 5px;
    grid-row-gap: 20px;
    margin: 10px 20px;
    padding-left: 8px;
    text-align: center;
    text-decoration: none;
    
    .one{
        width: 200px;
        height: 300px;
        background-color: white;
    }

    .selector{
        padding-left: 30px;
    }

    .image{
        max-height: 200px;
        width: 100%;
    }

    .pic{
        width:100%;
    }


    .rating{
        height: 20px;
        margin-top: 5px;
        display: flex;
        align-items: center
    }

    .name{
        text-align: center;
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

    .review{
        padding-left: 5px;
        color: #878787;
    }

    h2, h5{
        margin:0;
        padding: 0;
    }

    .price{
        text-align: center;
    }

    .drop{
        font-weight: 200;
        font-size: 15px;
        color: #878787;
    }

    .link{
        text-decoration: none;
        color: black;

    }

`;

const Card = () => {
    useEffect(()=>{
        setSelectPrice('')
        setSelectedOption('')
    }, [])

    const [selectedOption, setSelectedOption] = useState('--Please select--');
    const [filteredUsers, setFilteredUsers] = useState(data);

    const [selectPrice, setSelectPrice] = useState('--Select Price--');
    const [filterPrice, setFilterPrice] = useState(data);


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSelectPrice = (event) => {
        setSelectPrice(event.target.value);
    }


    // console.log(selectPrice.split('-'));
    const p = selectPrice.split('-');
    let min = p[0];
    let max = p[1];

    if(max===undefined){
        max = min;
        min = 0;
    }

    console.log(max);

    // const filteredArray = data.filter(d => d.category === selectedOption)
    const filteredArray = data.filter((item) => {
        const category = item.category === selectedOption;
        const price = (item.price >= min && item.price <= max);

        if(category && price){
            return category + price;
        } 

        if(category && !price){
            // setSelectPrice('')
            return category;
        } 

        if(!category && price){
            // setSelectedOption('')
            return price;
        } 

        return category && price;
    })

    let path = '/hi';
    console.log(filteredArray);
    

    return (
        <>
            <div className='selector'>
                <label>Select a product:</label>
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="--Select--" selected="true">Please Select</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>

            <div className="filters">
                <label>Price:</label>
                <select value={selectPrice} onChange={handleSelectPrice}>
                    <option value="--Select--" selected="true">Price</option>
                    <option value="<10000">&lt;10000</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000-30000">20000-30000</option>
                    <option value="30000-40000">30000-40000</option>
                    <option value="40000-50000">40000-50000</option>
                    <option value=">50000">&gt;50000</option>
                </select>
            </div>

            <Container>
                {
                    !selectPrice && !selectedOption && data.map((d, key) => {
                        { path = d.id; }

                        return (
                            <Link to={`/${path}`} className='link'>
                                <div className='one'>
                                    <div className="image">
                                        <img src={d.img} alt="" className='pic' />
                                    </div>

                                    <div className="name">
                                        {d.name}
                                    </div>

                                    <div className="rating">
                                        <p className='ratingNumber'>
                                            {d.rating}
                                            <i class="fa-solid fa-star fa-sm"></i>

                                        </p>
                                        <span className='review'>
                                            700 ratings
                                        </span>
                                    </div>

                                    <div className="price">
                                        <h2>₹{d.price} <span className='drop'>Price drop</span></h2>
                                        <h5><del>₹{d.max}</del></h5>
                                    </div>
                                </div>
                            </Link>
                        )

                    })
                }

                {
                    filteredArray.length > 0 && filteredArray.map((d) => {
                        { path = d.id; }
                        return (
                            <Link to={`/${path}`} className='link'>
                                <div className='one'>
                                    <div className="image">
                                        <img src={d.img} alt="" className='pic' />

                                    </div>

                                    <div className="name">
                                        {d.name}
                                    </div>

                                    <div className="rating">
                                        <p className='ratingNumber'>
                                            {d.rating}
                                            <i class="fa-solid fa-star fa-sm"></i>

                                        </p>
                                        <span className='review'>
                                            700 ratings
                                        </span>
                                    </div>

                                    <div className="price">
                                        <h2>₹{d.price} <span className='drop'>Price drop</span></h2>
                                        <h5><del>₹{d.max}</del></h5>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default Card
