import React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{backgroundColor:"white"}}>
        <SearchBar/>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Sample post thumbnails, replace these with dynamic content */}
        <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width:'100%'
                }}>
         
               
                    <TouchableOpacity
                  
                      style={{paddingBottom: 2,width:'33%'}}>
                      <Image
                        source={require('../../assets/images/post1.jpg')}
                        style={{width: '100%', height: 150}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                  
                      style={{paddingBottom: 2,width:'33%'}}>
                      <Image
                        source={require('../../assets/images/post2.jpg')}
                        style={{width: '100%', height: 150}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                  
                      style={{paddingBottom: 2,width:'33%'}}>
                      <Image
                        source={require('../../assets/images/post5.jpg')}
                        style={{width: '100%', height: 150}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                  
                      style={{paddingBottom: 2,width:'33%'}}>
                      <Image
                        source={require('../../assets/images/post9.png')}
                        style={{width: '100%', height: 150}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                  
                  style={{paddingBottom: 2,width:'33%'}}>
                  <Image
                    source={require('../../assets/images/post6.jpg')}
                    style={{width: '100%', height: 150}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  
                  style={{paddingBottom: 2,width:'33%'}}>
                  <Image
                    source={require('../../assets/images/post1.jpg')}
                    style={{width: '100%', height: 150}}
                  />
                </TouchableOpacity>
                
          
         
              </View>


              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width:'66.5%',
                    justifyContent: 'space-between',
                  }}>
             
                      <TouchableOpacity
                    
                        style={{paddingBottom: 2,width:'49.5%'}}>
                        <Image
                          source={require('../../assets/images/post2.jpg')}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                    
                    style={{paddingBottom: 2,width:'49.5%'}}>
                    <Image
                      source={require('../../assets/images/post7.jpg')}
                      style={{width: '100%', height: 150}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    
                    style={{paddingBottom: 2,width:'49.5%'}}>
                    <Image
                      source={require('../../assets/images/post1.jpg')}
                      style={{width: '100%', height: 150}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    
                    style={{paddingBottom: 2,width:'49.5%'}}>
                    <Image
                      source={require('../../assets/images/post8.jpeg')}
                      style={{width: '100%', height: 150}}
                    />
                  </TouchableOpacity>
                
                    
        
                </View>
                <TouchableOpacity
         
                  style={{marginLeft: 2,width:'33%'}}>
                  <Image
                    source={require('../../assets/images/post5.jpg')}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
              
                  style={{paddingRight: 2,width:'66.5%'}}>
                  <Image
                    source={require('../../assets/images/post7.jpg')}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '33%',
                    justifyContent: 'space-between',
                  }}>
               
                      <TouchableOpacity
                     
                        style={{paddingBottom: 2,width:'100%'}}>
                        <Image
                          source={require('../../assets/images/post2.jpg')}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                     
                     style={{paddingBottom: 2,width:'100%'}}>
                     <Image
                       source={require('../../assets/images/post6.jpg')}
                       style={{width: '100%', height: 150}}
                     />
                   </TouchableOpacity>
                 
           
                </View>
              </View>
        {/* Add more rows as needed */}
      </ScrollView>
 
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: 'white',
   height:'100%'
   
 
  },
  contentContainer: {
    flex:1,
 
    padding: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imageThumbnail: {
    width: '32%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  imageThumbnail1: {
    width: '32%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
});
