import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import functionDefaultStyles from './styleBotao'

// o valor é o que está escrito nele
export default function Botao({pequeno = false, invertido = false, valor, acao, styles}){

  const defaultStyles = functionDefaultStyles(pequeno, invertido)  
  return <TouchableOpacity onPress={acao} style={[defaultStyles.botao, styles]}>
    <Text style={defaultStyles.valor}>{valor}</Text>
  </TouchableOpacity>
}