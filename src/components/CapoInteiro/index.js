import React from 'react'

import { TextInput } from 'react-native'
import defaultStyle from './styleCampo'

export default function CampoInteiro({valor, acao, styleCampo}){
  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/)
    // se não for um número de 0 - 9 não irá permitir que seja alterado
    if(!verificaInteiro) return;
    const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
    // expressao regular - se tiver um zero na frente e algum caractere, irá remover o zero e deixar somente esse outro caractere

    acaoRetorno(removeZeroEsquerda);

  }

  // no formato de array o campo style aceita mais de um estilo
  const numberInText = String(valor);
  return <TextInput 
  style={[defaultStyle.campo, styleCampo]}
  keyboardType="number-pad"
  selectTextOnFocus
  onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
  value={numberInText}
  />
}
