import React from 'react'
import {
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import styles from './styles'
import styleGlobal, { cores } from '../../styles'
// propriedade que é passada com todos os componentes que é a instancia de todos os componenentes
export default function TelaPadrao({ children }) {
  return (
    <>
      <SafeAreaView style={styles.ajusteTela}>
        <StatusBar backgroundColor={cores.roxo} />
        <KeyboardAvoidingView
          style={styleGlobal.preencher}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={styles.ajusteTelaBaixo}/>
    </>
  )
}
