import React from 'react'
import { StatusBar, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'

import styleGlobal from '../../styles'
// propriedade que é passada com todos os componentes que é a instancia de todos os componenentes
export default function TelaPadrao({ children }) {
  return (
    <SafeAreaView style={styleGlobal.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        style={styleGlobal.preencher}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        { children }
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
