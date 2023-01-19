import { View, Text, StyleSheet, Image } from "react-native"
import { Button, Card, Descriptions, Divider, List, Table, Tag } from "antd"

import { useNavigation } from '@react-navigation/native';
import orders from '../../../assets/data/orders.json'
const Orders = () => {
    const navigation = useNavigation()
    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === 'Accepted') {
            return <Tag color={'green'}>{orderStatus}</Tag>
        }
        if (orderStatus === 'Pending') {
            return <Tag color={'orange'}>{orderStatus}</Tag>
        }
        if (orderStatus === 'Declined') {
            return <Tag color={'red'}>{orderStatus}</Tag>
        }
    }
    const tableColumns = [{
        title: 'Order ID',
        dataIndex: 'orderID',
        key: 'orderID'
    }, {
        title: 'Delivery Address',
        dataIndex: 'deliveryAddress',
        key: 'deliveryAddress'
    }, {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (price) => `${price}`
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: renderOrderStatus
    }]
    return (
        <Card title="new Orders" style={styles.container}>
            <Table
                dataSource={orders}
                columns={tableColumns}
                rowKey="orderID"
                onRow={(orderItem)=>({
                   onClick:()=>{navigation.navigate("OrderDetails",{id:orderItem})} 
                })}>
            </Table>
        </Card>
    )
}

export default Orders

const styles = StyleSheet.create({
    container:{
        margin:20,
        width:"100%"
    }
})
