import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import Home from './Home'

import Onboarding from 'react-native-onboarding-swiper'

const LoadingScreen = ({navigation}) => {


  return (
    <Onboarding 
    onSkip={() => navigation.navigate('home')}
    onDone={() => navigation.navigate('home')}
    pages={[
      {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../database/images/splashscreen/onboarding-img3.png')} />,
        title: 'Great Offers',
        subtitle: 'Enjoy great offers on our all services',
      },
      {
        backgroundColor: '#ff4500',
        image: <Image source={require('../database/images/splashscreen/onboarding-img1.png')} />,
        title: 'Promos and Discounts',
        subtitle: 'Up to 50%'
      },
      {
        backgroundColor: '#ff8c00',
        image: <Image source={require('../database/images/splashscreen/onboarding-img2.png')} />,
        title: 'Order Now',
        subtitle: 'Do not miss out purchasing our latest product'
      },
    ]}
    />
  );
}

export default LoadingScreen;