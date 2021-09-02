import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
const {width, height} = Dimensions.get('screen');
import faker from 'faker';
faker.seed(10);

const bannerData = [
  {
    key: '1',
    image: require('./assets/banner3.jpg'),
    title: 'Banner 1 pressed'
  },
  {
    key: '2',
    image: require('./assets/banner2.png'),
    title: 'Banner 2 pressed'
  },
  {
    key: '3',
    image: require('./assets/banner3.jpg'),
    title: 'Banner 3 pressed'
  },
]

const listData=[...Array(50).keys()].map((_,i)=>{
  return{
    key: faker.datatype.uuid(),
    image:'https://picsum.photos/200/300.webp',
    title: "List item " + faker.datatype.uuid() + "is pressed",
    name: faker.name.findName(),
    price: "Rs." + faker.datatype.number()

  }
})
const renderBanner = ({item}) => {
  return(
    <View style={{alignItems: 'center',justifyContent: 'center', width: width}}>
    <TouchableOpacity activeOpacity={0.9} onPress={()=> Alert.alert(item.title)} style={{justifyContent: 'center', width: width * 0.95, height: height * 0.22, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden', alignItems: 'center'}}>
         <Image source = {item.image} style = {{width: '100%', height: '100%', resizeMode: 'cover'}}/>
    </TouchableOpacity>
    </View>
  )
}
const renderList = ({item}) => {
  return(
    <View style={{alignItems: 'center',justifyContent: 'center', width: width, marginVertical: 5, elevation: 5,  shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 10}}}>
    <TouchableOpacity activeOpacity={0.9} onPress={()=> Alert.alert(item.title)} style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: width * 0.95, 
          height: height * 0.15, 
          borderRadius: 15, 
          overflow: 'hidden', 
          alignItems: 'center',
          borderColor: '#333',
          borderWidth: 1,
          backgroundColor: '#f5eceb'}}>
         <View style={{marginLeft:5 ,alignItems: 'center', justifyContent: 'center', width: 80, height: 100,borderRadius: 15, overflow: 'hidden'}}>
         <Image source = {{uri: item.image}} style = {{width: '100%', height: '100%', resizeMode: 'cover'}}/>
         </View>  
         <View style ={{flex: 1, padding: 5, alignSelf: 'center',justifyContent: 'center', marginLeft: 5,top: -21 }}>
           <Text style ={{fontWeight: '500', fontSize:16}}>{item.name}</Text>
           <Text style={{fontWeight: '400', fontSize: 14, color: 'green'}}>{item.price}</Text>
         </View>
    </TouchableOpacity>
    </View>
  )

}
export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
     <StatusBar style='auto'/>
     <View style = {{height: height * 0.27, alignItems: 'center', justifyContent: 'center', }}>
     <Text style ={{fontSize: 24, alignSelf: 'flex-start', marginLeft: 10, fontWeight: '800'}}>Banner Items</Text>
      <FlatList
        scrollEventThrottle={32}
        data={bannerData}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderBanner}
        pagingEnabled
      />
      </View>
      <View style = {{marginTop: 5, alignItems: 'center', justifyContent: 'space-evenly', paddingBottom: 200,}}>
        <Text style ={{fontSize: 24, alignSelf: 'flex-start', marginLeft: 10, fontWeight: '800'}}>List Items</Text>
      <FlatList
        scrollEventThrottle={32}
        data={listData}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={renderList}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3d6d5",
    alignItems: 'center',
  },
});
