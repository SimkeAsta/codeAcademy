import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const ToolbarStyled = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: 900px;
    padding: 10px 40px;
`;

export const Toolbar = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/carts/user/1')
            .then(res => res.json())
            .then(data => {
                setCart(data);
            });
    }, [])

    return (
        <ToolbarStyled>
            <FaShoppingCart size={25} />
            <div>{cart?.carts[0].totalProducts}</div>
        </ToolbarStyled>
    )
}