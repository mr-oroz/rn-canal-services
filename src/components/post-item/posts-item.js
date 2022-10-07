import { View, Text, StyleSheet, Image, Dimensions,  } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const PostItem = ({item}) => {
  const {post, user, photo} = item
    return (
      <View style={styles.item}>
        <Image style={{
          width: 150,
          height: 150,
          display: width > 440 ? 'block' : 'none'
        }} source={{uri: photo.thumbnailUrl}}/>
        <Text style={styles.text}>Autor: {user.name}</Text>
        <Text style={styles.text}>Company: {user.company.name}</Text>
        <Text style={styles.text}>Title: {post.title} </Text>
        <Text style={styles.text}>Body: {post.body} </Text>
      </View>
    )
}
const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderColor: '#27569C',
    borderWidth: 5,
    borderStyle: 'solid',
    margin: 20,
    height: width > 440 ? 470 : 330,
    width: 325
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontFamily: "Inter-Bold",
    marginVertical: 5
  }
})
export default PostItem