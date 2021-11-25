import React, { useState } from 'react'

import { TouchableOpacity, View, Text } from 'react-native'

import CampoInteiro from '../../../components/CapoInteiro'
import Botao from '../../../components/Button'

import stylesItem from './styleItem'

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1)
  const [total, setTotal] = useState(preco)
  // ao clicar no botão expandir a tela e mostrar o botao de add item
  const [expandir, setExpandir] = useState(false)

  //método para atualizar a quantidade
  const atualizaQuantidadeTotal = novaQuantidade => {
    setQuantidade(novaQuantidade)
    calculaTotal(novaQuantidade)
  }

  // criando metodo para atualizar o total
  const calculaTotal = quantidade => {
    setTotal(quantidade * preco)
  }
  const inverteExpandir = () => {
    setExpandir(!expandir)
    atualizaQuantidadeTotal(1)
  }

  return (
    <>
      <TouchableOpacity style={stylesItem.informacao} onPress={inverteExpandir}>
        <Text style={stylesItem.nome}>{nome}</Text>
        <Text style={stylesItem.descricao}>{descricao}</Text>
        <Text style={stylesItem.preco}>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(preco)}
        </Text>
      </TouchableOpacity>
      {expandir && 
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
          <Botao valor="Adicionar ao Carrinho" acao={() => {}} />
        </View>
      }
      <View style={stylesItem.divisor} />
    </>
  )
}
