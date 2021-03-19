import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image, SafeAreaView, ScrollView } from 'react-native';

import ShoppingCard from '../../../Components/ShoppingCard';
import MyCarousel from '../../../Components/Carousel';
import CategoryIcon from '../../../Components/CategoryIcon';
import data from '../../../constants/data';
import imagePath from '../../../constants/imagePath';
import navigationStrings from '../../../constants/navigationStrings';




export default class Home extends Component {

  state = {
    count: 0,
    cardData: []
  }



  // add item to cart
  addToCart = (value) => {
    let { cardData } = this.state
    let index = cardData.findIndex((item) => item.id == value.id)
    if ((index != -1)) {
      cardData[index].num = cardData[index].num + 1
      this.setState({ cardData: cardData })
    }
    else {
      value.num = 1
      let newCardData = [...cardData, ...[value]]
      this.setState({ count: this.state.count + 1, cardData: newCardData })
    }
  }


  // my custom component did mount 
  componentDidMount() {
    this.focusListner = this.props.navigation.addListener("focus", () => {
      if (this.props.route.params && this.props.route.params.add) {
        this.addToCart(this.props.route.params.add)
        this.props.navigation.setParams({ add: undefined })
      }
    });
  }

  // my custom component will unmount
  componentWillUnmount() {
    if (this.focusListner) {
      this.focusListner();
    }
  }


  render() {
    let { shirt, carousel, shirtg, shoes, categoryIcon } = data
    let { count, cardData } = this.state
    return (
      <SafeAreaView>
        <View style={style.header}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
            <Ionicons name='menu' size={30} color='white' style={{ paddingRight: 10, paddingTop: 10 }} />
            <Image style={{ width: 200, height: 50 }} source={require('../../../assets/images/flipkart.jpg.png')} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TouchableOpacity><FontAwesome name='bell' size={17} color='white' style={{ paddingRight: 8, paddingTop: 4 }} /></TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(navigationStrings.CART, { data: cardData })}>{count ? <Text style={style.cart}>{this.state.count}</Text> : null}<FontAwesome name='shopping-cart' size={20} color='white' style={{ paddingRight: 13 }} /></TouchableOpacity>
          </View>
        </View>


        
        <View style={style.searchSection}>
          <FontAwesome name='search' style={{
            backgroundColor: 'white',
            padding: 7, borderTopLeftRadius: 4, borderBottomLeftRadius: 4, paddingHorizontal: 15
          }} size={20} color='grey' />
          <TextInput style={style.input} placeholder='search by name'></TextInput>
          <FontAwesome name='microphone' style={{
            backgroundColor: 'white',
            padding: 5, borderTopRightRadius: 4, borderBottomRightRadius: 4, paddingHorizontal: 15
          }} size={25} color='grey' />
        </View>



        <ScrollView style={style.showCard}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={style.categoryCrousel} >
            {categoryIcon.map((value, index) => { return <CategoryIcon data={value} key={index} /> })}
          </ScrollView>

          {/* carousel */}
          <View style={style.crousel}>
            {<MyCarousel data={carousel} />}
          </View>

          {/* boys section */}
          <View>
            <View style={style.sectionHead}>
              <Text style={style.headText}>Boy's section</Text>
            </View>
            {<ShoppingCard addToCart={this.addToCart} data={shirt} />}
          </View>

          {/* ratinng Image */}
          <Image style={style.ratingImage} source={imagePath.deal1} />

          {/* girl section */}
          <View>
            <View style={style.sectionHead}>
              <Text style={style.headText}>Girls Section</Text>
            </View>
            {<ShoppingCard addToCart={this.addToCart} data={shirtg} />}
          </View>

          {/* dont miss section */}
          <View>
            <View style={style.sectionHead}>
              <Text style={style.headText}>Top selection Only for You</Text>
            </View>
            {<ShoppingCard addToCart={this.addToCart} data={shoes} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}


const style = StyleSheet.create({
  header: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    alignItems: 'center',
    height: 75,
    paddingBottom: 0,
    backgroundColor: '#1493ff',
    fontFamily: 'Silent Reaction'
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 8,
    backgroundColor: '#1493ff',

  },
  cart: {
    position: 'absolute',
    color: 'white',
    bottom: 10,
    left: 15,

    borderRadius: 40,
    paddingHorizontal: 5,
    backgroundColor: 'crimson',
    zIndex: 333
  },
  input: {
    backgroundColor: 'white',
    width: '77%',
  },
  categoryCrousel: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  ratingImage: {
    width: '100%',
    height: 200,
  },
  showCard: {
    marginBottom: 120,
    padding: 0,
  },
  sectionHead: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 30,
    marginVertical: -5
  },
  headText: {
    color: '#1493ff',
    fontSize: 15,
    fontWeight: 'bold'
  }

})

