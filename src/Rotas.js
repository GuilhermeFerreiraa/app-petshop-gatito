import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Carrinho from './telas/Carrinho'
import Servicos from './telas/Servicos'

import { cores } from './styles'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: cores.roxo,
          tabBarInactiveTintColor: cores.claro,
          tabBarActiveBackgroundColor: cores.roxo,
          tabBarInactiveBackgroundColor: cores.laranja,
          tabBarLabelStyle: {
            fontWeight: 'bold',
            paddingTop: 21,
            fontSize: 16,
            textAlignVertical: 'center',
            height: '95%',
            width: '100%',
            backgroundColor: cores.laranja,
          },
          tabBarStyle: {
            width: '100%',
            height: 70,
            lineHeight: 21,
          },
          tabBarIconStyle:{
            display: 'none',
          },
          keyboardHidesTabBar: true,
          headerShown: false
        }}
      >
        <Tab.Screen name="Servicos" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}