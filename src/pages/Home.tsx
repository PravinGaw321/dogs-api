import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callDogsAPi } from '../store/reducers/dogsApiReducer';
import styles from '../styles/Home.module.scss';
import { Link } from "react-router-dom";
import shoppingImage from '../assets/shopping-icon.png'
import { setImageHistory } from '../store/reducers/historyReducer';
import { addToCart } from '../store/reducers/cartReducer';

interface apiType{
    meta?: any,
    payload?: {message: string | undefined, status?: string},
    type?: string,
}

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const {cartList} = useSelector((state: any) => state?.carts);
    const [dogImage, setDogImage] = useState<string | undefined>('');
    const [addToDisabled, setAddToDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const controller = new AbortController();
    
    const fetchDogInfo = () => {
        setLoading(true);
        dispatch(callDogsAPi(), { signal: controller.signal }).then((res: apiType) => {
            console.log(res);
            setLoading(false);
            setAddToDisabled((prev)=> (prev) ? !prev : prev);
            dispatch(setImageHistory(res?.payload?.message))
            setDogImage(res?.payload?.message);
        }).catch((err: any) => {
            console.log('error', err)
        }).finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchDogInfo();
        
        return () => {
            controller.abort();
        };
    }, [])


    const handleCart = () => {
        dispatch(addToCart({ prize: Math.floor(Math.random() * (100 - 50 + 1)) + 50, cardItem: dogImage, items: 1 }))
        setAddToDisabled((prev)=> !prev);
    }

    return (
        <>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.navigation}>
                        <ul>
                            <li>
                                <Link to='/history'>history</Link>
                            </li>
                            <li>
                                <Link to='/cart'>cart</Link>
                                <div className={styles['bakset-image-box']}>

                                    <img src={shoppingImage} alt='basket-image' className={styles.basketIcon} />
                                    <span className={styles.cartItems}>{cartList?.length}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.imageBox}>
                        {loading ? 'loading image...' : <img src={dogImage} alt='dog-image' className={styles.dogImage} />}
                    </div>
                    <div className={styles.actionbtns}>
                        <button onClick={()=> fetchDogInfo()}>Fetch New Image</button>
                        <button onClick={() => handleCart()} disabled={addToDisabled} className={addToDisabled ? styles.addToDIsabled :""}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;