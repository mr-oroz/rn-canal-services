import { View, FlatList, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../../context/context';
import PostItem from '../post-item/posts-item';
const width = Dimensions.get('window').width


export const Posts = () => {
  const { data } = useContext(Context)
  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        numColumns={width > 440 ? 2 : 1}
        windowSize={21}
        keyExtractor={(item, index) => index}
        data={data}
        renderItem={({ item }) => (<PostItem item={item} />)}
      />
    </View>
  )
}

