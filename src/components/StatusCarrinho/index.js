import React from 'react'
import { Text, View } from 'react-native'

import styleCarrinho from './styleCarrinho'
import Botao from '../../components/Button'
export default function StatusCarrinho({ total }) {
  return (
    <View style={styleCarrinho.conteudo}>
      <View style={styleCarrinho.total}>
        <Text style={styleCarrinho.descricao}>Total do Carrinho:</Text>
        <Text style={styleCarrinho.valor}>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(total)}
        </Text>
      </View>
      <View style={styleCarrinho.botao}>
        <Botao valor="Concluir Pedido" invertido></Botao>
      </View>
    </View>
  )
}

// propriedade invertido no Botao é para alterar a cor e destacar o botao dos outro componentes
