import React, { useState, useCallback } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { VsPopup } from 'venus-ui'
import 'venus-ui/lib/style/components/popup.scss'

function PopupDemo() {
  const [isShow, setShow] = useState(false)

  const show = useCallback(() => {
    setShow(true)
  }, [])

  const hide = useCallback(() => {
    setShow(false)
  }, [])

  const open = () => {
    console.log('popup opend')
  }

  return (
    <View>
      <Button onClick={show}>popup</Button>
      <VsPopup isShow={isShow} closeCallback={hide} openCallback={open} zIndex={9} disableTitle>
        <View className="popup-container"></View>
      </VsPopup>
    </View>
  )
}

export default PopupDemo
