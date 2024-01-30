import React from "react";
import styles from '../styles/History.module.scss';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const History: React.FC = () => {

    const historyData = useSelector((state: any) => state?.history?.historyList);

    return (
        <div className="container">
            {historyData.length ? <div className="warning">*here using redux for state management:- data will be lose on page refresh. </div>:''}
            <div className={styles["page-layout"]}>
                <h2 className={styles.pageTitle}>History</h2>
                {
                    historyData.length ? 
                
                <div className={styles.historylist}>
                    <ul>
                        {
                            historyData?.filter(Boolean)?.map((item: string, index: number) => {
                                return (
                                    <li key={index}>
                                        <img src={item} alt="dogs-image" />
                                        <Link to={item} target="_blank">{item}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>: <p>No history found.</p>
}
            </div>
        </div>
    )
}

export default History;