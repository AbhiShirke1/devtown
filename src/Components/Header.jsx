import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const NavBar = styled.div`
    padding: 0 0 0 4rem;
    height: 60px;
    background-color: #2929db;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .link{
        text-decoration: none;
    }

    .heading{
        color: white;
        display: flex;
        align-items: center;
    }

    .inp{
        display: flex;
        align-items: center;
    }

    input{
        height: 32px;
        outline: none;
        padding: 2px 4px 2px 8px;
        border: none;
        border-radius: 8px;
    }

    .butt{
        margin-left: 15px;
        width: 40px
        display: flex;
        align-items: center;
        flex-firection: row;
    }

    button{
        border-radius: 5px;
        border: none;
        width: 90px;
        height: 30px;
    }

    button: hover{
        cursor: pointer;
    }
    
    .fa-solid{
        padding-left: 5px;
    }
`;

const Button = styled.div`
    width: 10px;
`

const Input = styled.div`

`

const Header = () => {
    return (
        <NavBar>
            <Link to={'/'} className='link'>
                <span className="heading">
                    <h1>ShopEase</h1>
                </span>
            </Link>

            <div className='inp'>
                <input type="text" placeholder='Search for products' />
                <Button className='butt'>
                    <button>Search<i class="fa-solid fa-magnifying-glass"></i></button>
                </Button>
            </div>


            <div className='btn'>
                <button>Login</button>
            </div>
        </NavBar>
    )
}

export default Header
