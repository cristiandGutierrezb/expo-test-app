import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Welcome to testing app</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default index