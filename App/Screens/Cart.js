import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, FlatList, ScrollView, TouchableOpacity, BackHandler } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ShopContext from '../context/shop-context';

function Cart ({navigation}) {

    const [showAll, setshowAll] = useState(true)

    const back = () => {
        navigation.goBack()
    }

    return (
        <ShopContext.Consumer>
            {context => (
                <View style={styles.container}>
                    <View style={{ backgroundColor: '#0a1e2e', width: '100%', padding: 10, alignItems: 'center' }}>
                        <View style={styles.headerStyle}>
                            <Icon onPress={back} name={'arrow-back-sharp'} color={'white'} size={27} />
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', marginLeft: 20 }}>My Cart</Text>
                        </View>

                        <View style={{ backgroundColor: 'white', padding: 15, alignItems: 'center', justifyContent: 'center', width: '50%', marginTop: 50, marginBottom: 20, borderRadius: 5 }}>
                            <Text style={{ color: '#eab882' }}>Total Cost</Text>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>€ {context.cart.reduce((cnt, curItem) => {
                                return (cnt + (curItem.quantity * curItem.cost))
                            }, 0)}.00</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'white', padding: 5, flex: 1 }}>
                        <Text style={{ color: 'black', fontSize: 15,marginLeft:5 }}>Review Orders</Text>
                        {
                            context.cart.length == 0 && <Text>Cart is empty</Text>
                        }

                        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                            {context.cart.length <= 2 || showAll == false ? (
                                <View>
                                    {context.cart.map((cartItem) => {
                                        return (
                                            <View style={{ width: '95%', alignSelf: 'center' }}>
                                                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                    <View style={{ width: '70%' }}>
                                                        <Text style={{ fontSize: 16 }}>{cartItem.name}</Text>
                                                        <Text style={{ marginTop: 5 }}>{cartItem.description}</Text>
                                                        <Text style={{ marginTop: 5, color: 'orange', fontSize: 16 }}>€{cartItem.cost}</Text>


                                                    </View>

                                                    <View style={{ width: '25%' }}>
                                                        <View style={{ borderColor: '#eab882', borderWidth: 0.8, height: 35, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 3, }}>
                                                            <TouchableOpacity onPress={context.removeProductFromCart.bind(this, cartItem.id)} style={{ width: '30%' }}>
                                                                <Text style={{ alignSelf: 'center', fontSize: 16 }}>-</Text>
                                                            </TouchableOpacity>
                                                            <Text>{cartItem.quantity}</Text>
                                                            <TouchableOpacity onPress={context.addProductToCart.bind(this, cartItem)} style={{ width: '30%' }}>
                                                                <Text style={{ alignSelf: 'center', fontSize: 16 }}>+</Text>
                                                            </TouchableOpacity>

                                                        </View>
                                                        <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 10 }}>
                                                            <Image source={require('../constants/Images/chat.png')} style={{ width: 25, height: 25 }} />
                                                        </View>
                                                    </View>

                                                </View>

                                                <View style={{ width: '100%', borderWidth: .5, height: 1, borderColor: 'gainsboro', alignSelf: 'center' }}></View>
                                            </View>
                                        )
                                    })}

                                    {context.cart.length > 2 &&
                                        <TouchableOpacity onPress={() => setshowAll(true)} style={{ alignItems: 'flex-end', marginTop: 5, width: '95%', alignSelf: 'center', marginBottom: 20 }}>
                                            <Text style={{ textDecorationLine: 'underline', color: 'black' }}>Show Less</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            ) : null}

                            {context.cart.length > 2 && showAll == true ? (
                                <View>
                                    {context.cart.slice(0, 2).map((cartItem, index) => {
                                        console.log('index==>', index)
                                        return (
                                            <View style={{ width: '95%', alignSelf: 'center' }}>
                                                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                    <View style={{ width: '70%' }}>
                                                        <Text style={{ fontSize: 16 }}>{cartItem.name}</Text>
                                                        <Text style={{ marginTop: 5 }}>{cartItem.description}</Text>
                                                        <Text style={{ marginTop: 5, color: 'orange', fontSize: 16 }}>€{cartItem.cost}</Text>
                                                    </View>

                                                    <View style={{ borderColor: '#eab882', borderWidth: 0.8, width: '25%', height: 35, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 3, }}>
                                                        <TouchableOpacity onPress={context.removeProductFromCart.bind(this, cartItem.id)} style={{ width: '30%' }}>
                                                            <Text style={{ alignSelf: 'center', fontSize: 16 }}>-</Text>
                                                        </TouchableOpacity>
                                                        <Text>{cartItem.quantity}</Text>
                                                        <TouchableOpacity onPress={context.addProductToCart.bind(this, cartItem)} style={{ width: '30%' }}>
                                                            <Text style={{ alignSelf: 'center', fontSize: 16 }}>+</Text>
                                                        </TouchableOpacity>
                                                    </View>


                                                </View>
                                                <View style={{ width: '100%', borderWidth: .5, height: 1, borderColor: 'gainsboro', alignSelf: 'center' }}></View>


                                            </View>


                                        )
                                    })}

                                    {context.cart.length > 2 ? (
                                        <TouchableOpacity onPress={() => setshowAll(false)} style={{ alignItems: 'flex-end', marginTop: 5, width: '95%', alignSelf: 'center', marginBottom: 20 }}>
                                            <Text style={{ textDecorationLine: 'underline', color: 'black' }}>Show More</Text>
                                        </TouchableOpacity>
                                    ) : null}

                                </View>
                            ) : null}
                        <Text style={{ color: 'black', fontSize: 15,marginLeft:5 }}>Delivery Options</Text>
                        </ScrollView>

                    </View>
                    <TouchableOpacity style={styles.bottomTab}>
                        <Text style={{ color: 'white', marginLeft: 10 }}>PLACE ORDER</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ShopContext.Consumer>
    )
}


export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerStyle: {
        flexDirection: 'row',
        width: '100%'
    },
    BgImg: {
        width: '100%',
        height: '30%',
        position: 'absolute'
    },
    card: {
        width: '90%',
        elevation: 3,
        borderRadius: 2,
        marginTop: '40%',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        alignSelf: 'center'
    },
    Button: {
        padding: 8,
        alignItems: 'center',
        backgroundColor: '#0a1e2e',
        borderRadius: 8,
        paddingHorizontal: 20,
        marginTop: 10
    },
    bottomTab: {
        width: '100%',
        padding: 10,
        backgroundColor: '#0a1e2e',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addButton: {
        width: '25%',
        height: 35,
        padding: 7,
        alignItems: 'center',
        backgroundColor: '#0a1e2e',
        borderRadius: 7
    }
})