import styles from './RecentOrders.module.css'

function RecentOrders(){
    return(
        <>
            <div className={styles.recentOrders}>
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <a href="#">Show All</a>
            </div>
        </>
    )
}

export default RecentOrders;