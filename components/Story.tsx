import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo'; // Make sure to import Entypo

export default function Story() {
  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../assets/images/image.png'),
    },
    {
      id: 0,
      name: 'Kaveen Sandepa',
      image: require('../assets/images/kaveen.jpeg'),
    },
    {
      id: 0,
      name: 'Duvindu Thathsara',
      image: require('../assets/images/isuru.jpg'),
    },
    {
      id: 0,
      name: 'Isuru Lakshan',
      image: require('../assets/images/profile2.jpg'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('../assets/images/profile2.jpg'),
    },
    {
      id: 0,
      name: 'Ram_Charan',
      image: require('../assets/images/profile1.jpg'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('../assets/images/profile2.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity key={index}>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
