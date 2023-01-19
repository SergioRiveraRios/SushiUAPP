import { View, Text, StyleSheet, Image } from "react-native"
import { Button, Card, Descriptions, Divider, List } from "antd"
import { useRoute } from '@react-navigation/native';
import menu from '../../../assets/data/menu.json'
import dishes from '../../../assets/data/dishes.json'
const menus = menu[0]
const NewOrders = () => {
    const route = useRoute()
    const id=route.params?.id
    return (

        <Card title="Order details" style={styles.restaurantContainer}>
            <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
                <Descriptions.Item label="Customer">Sergio Rivera</Descriptions.Item>
                <Descriptions.Item label="Customer Address">{id.deliveryAddress} </Descriptions.Item>
            </Descriptions>
            <Divider />
            <List dataSource={dishes} renderItem={(dishitem) => (
                <List.Item>
                    <div>{dishitem.name} x{dishitem.quantity}</div>
                    <div>{dishitem.price}</div>
                </List.Item>
            )}></List>
            <Divider />
            <List>
                <List.Item>
                    <div>Total</div>
                    <div>123322</div>
                </List.Item>
            </List>

            <div style={styles.buttonContainer}>
                <Button block type="primary" style={styles.buttons}>Accept</Button>
                <Button block type="primary" danger style={styles.buttons}>Decline</Button>

            </div>
        </Card>
    )
}

export default NewOrders

const styles = StyleSheet.create({
    restaurantContainer: {
        width: "100%",
        margin:10
    },
    buttonContainer:{
        display:"flex"
    },
    buttons:{
        marginHorizontal:20,
        marginLeft:15,
        marginRight:15
    }
})