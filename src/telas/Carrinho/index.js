import React from 'react'
import { FlatList } from 'react-native'

import StatusCarrinho from '../../components/StatusCarrinho'


import Item from './Item'

const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.99,
    descricao: 'Não de Banho no seu Gato! Mas se precisar nos ligue',
    quantidade: 1
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 89.99,
    descricao: 'Uma Dose da vacina V4. Seu gato precisa de duas!',
    quantidade: 1
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 99.99,
    descricao:
      'Uma dose da Vacina Antirrábica, seu gato precisa de uma por ano!',
    quantidade: 1
  },
  {
    id: 4,
    nome: 'Ração Especial p/ Gatos',
    preco: 199.99,
    descricao: 'Cuidar da alimentação do gato é cuidar da saúde dele!',
    quantidade: 1
  },
  {
    id: 5,
    nome: 'Brinquedo anti-stress p/ Pets',
    preco: 69.99,
    descricao: 'Seu pet saudável e relaxado no dia a dia',
    quantidade: 1
  },
  {
    id: 6,
    nome: 'Cama Pet Impermeável',
    preco: 179.99,
    descricao: 'Cama seca e longe de líquidos!',
    quantidade: 1
  },
  {
    id: 7,
    nome: 'Coleira Anti-Pulgas',
    preco: 289.99,
    descricao: 'Elimine as pulgas do seu pet, com a nossa coleira',
    quantidade: 1
  },
  {
    id: 8,
    nome: 'Toca 2x1 Para seu Pet',
    preco: 399.99,
    descricao: 'A toca que o seu Pet merece!',
    quantidade: 1
  },
  {
    id: 9,
    nome: 'Caminha Iglu p/ Gatos',
    preco: 149.99,
    descricao: 'O conforto que o seu gato precisa',
    quantidade: 1
  },
  {
    id: 10,
    nome: 'Tapete Higiênico p/ Pets',
    preco: 99.99,
    descricao: 'Elimine o mal odor, e o trabalho, use o Tapete Higiênico',
    quantidade: 1
  }
]

export default function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0)

  return (
    <>
      <StatusCarrinho total={total}/>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  )
}

  