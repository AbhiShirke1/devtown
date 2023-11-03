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
const Filter = styled.div`
.active {
    background-color: #1e293b;
    color: #fff;
  }
`;

const Content = styled.div`
`;

const Card = () => {
    
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(data);

    let filters = ["Laptop", "Mobile", 10000, 30000];

    const handleFilterButtonClick = (selectedCategory)=>{
        if(selectedFilters.includes(selectedCategory)){
            let filters = selectedFilters.filter((e) => e!==selectedCategory)
            setSelectedFilters(filters)
        }

        else{
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    }

    const filterItems = ()=>{
        if(selectedFilters.length>0){
            let temp = selectedFilters.map((selectedCategory) => {
                let what = Number.isInteger(selectedCategory);
                if(what){
                    let t = filteredItems.filter((item)=> (item.price <= selectedCategory));
                    return t;
                }
                let t = filteredItems.filter((item)=> (item.category === selectedCategory));
                return t;
            })

            setFilteredItems(temp.flat());
        }

        else{
            setFilteredItems([...data]);
        }
    }

    useEffect(() => {
        filterItems();
      }, [selectedFilters]);

      let path='';

    return (
        <Container>
            <Filter>
                {
                    filters.map((category) => (
                        <button onClick={()=>handleFilterButtonClick(category)} className={`button ${
                            selectedFilters?.includes(category) ? "active" : ""
                          }`}>
                            {category}
                        </button>
                    ))
                }
            </Filter>

            <Content>
            {/* {
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
                } */}

                {
                     filteredItems.map((d) => {
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
            </Content>
        </Container>
    );
}

export default Card
