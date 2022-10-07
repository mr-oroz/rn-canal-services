import { View, Text, StyleSheet } from 'react-native'
import React, {useContext, useEffect, useCallback} from 'react'
import {Posts} from '../components/posts/posts';
import { Navbar } from '../components/navbar/navbar'
import { AppLoader } from '../components/loading/app-loader';
import { Context } from '../context/context';
export const PersonScreen = () => {
  const {admin, loading, loadData} = useContext(Context)
  const loadPostsData = useCallback(async () => await loadData(), [loadData])
  
  useEffect(() => {
    loadPostsData()
  }, [])

  const content = loading ? <AppLoader/> : <Posts/>

  return (
    <View>
      <Navbar/>
      <View style={styles.container}>
        <Text>{admin ? admin : null}</Text>
      </View>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20
  }
})
