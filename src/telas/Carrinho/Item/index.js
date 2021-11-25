import React, { useState } from 'react'

import { View, Text } from 'react-native'

import CampoInteiro from '../../../components/CapoInteiro'
import Botao from '../../../components/Button'

import stylesItem from './styleItem'

export default function Item({
  nome,
  preco,
  descricao,
  quantidade: quantidadeInicial
}) {
  const [quantidade, setQuantidade] = useState(quantidadeInicial)
  const [total, setTotal] = useState(preco * quantidadeInicial)

  //método para atualizar a quantidade
  const atualizaQuantidadeTotal = novaQuantidade => {
    setQuantidade(novaQuantidade)
    calculaTotal(novaQuantidade)
  }

  // criando metodo para atualizar o total
  const calculaTotal = quantidade => {
    setTotal(quantidade * preco)
  }

  return (
    <>
      <View style={stylesItem.informacao}>
        <Text style={stylesItem.nome}>{nome}</Text>
        <Text style={stylesItem.descricao}>{descricao}</Text>
        <Text style={stylesItem.preco}>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(preco)}
        </Text>
      </View>
      <View style={stylesItem.carrinho}>
        <View>
          <View style={stylesItem.valor}>
            <Text style={stylesItem.descricao}>Quantidade:</Text>
            <CampoInteiro
              styleCampo={stylesItem.quantidade}
              valor={quantidade}
              acao={atualizaQuantidadeTotal}
            />
          </View>
          <View style={stylesItem.valor}>
            <Text style={stylesItem.descricao}>Total:</Text>
            <Text style={stylesItem.preco}>
              {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }).format(total)}
            </Text>
          </View>
        </View>
        <Botao valor="Remover do Carrinho" acao={() => {}} />
      </View>
      <View style={stylesItem.divisor} />
    </>
  )
}
