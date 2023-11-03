import React from 'react'
import styled from 'styled-components'

const Empty = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Nothing = () => {
  return (
    <Empty>
        <img src={"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png"} alt="" />
    </Empty>
  )
}

export default Nothing
