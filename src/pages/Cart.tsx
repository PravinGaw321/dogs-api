import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/Cart.module.scss';
import { editCartList } from '../store/reducers/cartReducer';
import { tempAlert } from '../helper/helper';


interface cartItems{
    prize: number,
    cardItem: string,
    items: number,
}

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state: any) => state?.carts?.cartList);

    const handleDelete=(cartName: string)=>{
        const filterCard = cartData.filter((cart: cartItems)=> cart.cardItem !== cartName);
        tempAlert('Delete Item successfully', 1000);
        dispatch(editCartList(filterCard))
    }

    return (
        <div className="container">
           {cartData?.length ? <div className="warning">*here using redux for state management:- data will be lose on page refresh. </div>:''}
        <h2 className={styles.pageTitle}>Cart</h2>
        {
            cartData.length ?
        
        <div className={styles.cartList}>
        <table>
            <tr>
                <th>Sr. No</th>
                <th>Image</th>
                <th>Url</th>
                <th>Prize</th>
                <th>Delete Item</th>
            </tr>
            {
                cartData?.map((cart: cartItems, index: number)=>{
                    return(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img src={cart?.cardItem} alt="item-image" className="item-image" /></td>
                        <td>{cart?.cardItem}</td>
                        <td>${cart?.prize}</td>
                        <td className={styles.delete}><button onClick={()=> handleDelete(cart?.cardItem)}>Delete</button></td>
                    </tr>
                    )
                })
            }
             <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Total: ${cartData?.reduce((acc: any, den: any)=> {
                    return acc + den.prize
                }, 0)}</th>
                <th></th>
            </tr>
        </table>
        </div>: <p>The card is empty.</p>
}
        </div>
    )
}

export default Cart;