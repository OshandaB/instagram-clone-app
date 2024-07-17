// import { View, Text,Dimensions } from 'react-native'
// import React from 'react'
// import { Feather } from '@expo/vector-icons';
// import { ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Video from 'react-native-video';



// export default function ReelsScreen() {
//   const windowWidth = Dimensions.get('window').width;
//   const windowHeight = Dimensions.get('window').height;
//   return (
//     <SafeAreaView style={{width:windowWidth,height:windowHeight,backgroundColor:'white'}}>
//         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',zIndex:1,padding:20}}>
//         <Text style={{fontSize:20,fontWeight:'bold'}}>Reels</Text>
//         <Feather name="camera" size={30} color="black" />
//         </View>
    
    
//     </SafeAreaView>
//   )
// }


import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import vector icons
import { Feather, FontAwesome5 } from '@expo/vector-icons'; // Additional icons for modern look

const { width, height } = Dimensions.get('window');
const videoSource =
  'https://videos.pexels.com/video-files/4434242/4434242-uhd_1440_2560_24fps.mp4';

const ReelsScreen = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false); // State to toggle mute
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
    player.muted = isMuted; // Apply initial mute state
  });

  const togglePlayPause = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    player.muted = !player.muted;
    setIsMuted(!isMuted);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Reels</Text>
        <Feather name="camera" size={30} color="white" />
      </View>
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {[1, 2, 3].map((item, index) => (
          <View key={index} style={styles.videoContainer}>
            <VideoView
              style={styles.video}
              player={player}
              allowsFullscreen
              allowsPictureInPicture
              nativeControls={false}
            />
            {/* <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
              <Feather name={isMuted ? 'volume-x' : 'volume-2'} size={30} color="white" />
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.playPauseButton} onPress={togglePlayPause}>
              <Icon name={isPlaying ? 'pause' : 'play'} size={50} color="#fff" />
            </TouchableOpacity>
            <View style={styles.overlay}>
              <View style={styles.profileContainer}>
                <Image source={require('../../assets/images/isuru.jpg')} style={styles.profilePic} />
                <Text style={styles.username}>@username</Text>
              </View>
              <View style={styles.controls}>
                <TouchableOpacity style={styles.iconButton}>
                  <FontAwesome5 name="heart" size={24} color="white" />
                  <Text style={styles.iconText}>123</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <FontAwesome5 name="comment" size={24} color="white" />
                  <Text style={styles.iconText}>45</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <FontAwesome5 name="share" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
  videoContainer: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  profileContainer: {

    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center'
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#c13584',
    backgroundColor: 'white',
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  controls: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  iconButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
  },
  playPauseButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: height / 2 - 25, // Center vertically
  },
  muteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default ReelsScreen;

