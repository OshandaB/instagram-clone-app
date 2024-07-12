import { View, Text ,Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Post() {
    const postInfo =[
        {
            postTitle:'Nature Of the World',
            postPersonImage: require('../assets/images/image.png'),
            postImage: require('../assets/images/post1.jpg'),
            likes:765,
            isLiked:false
        },
        {
            postTitle:'Nature Of the Land',
            postPersonImage: require('../assets/images/image.png'),
            postImage: require('../assets/images/post2.jpg'),
            likes:375,
            isLiked:false
        },
    ]
  return (
    <View>
       {
        postInfo.map((data,index)=>{
            const [like, setLike] = useState(data.isLiked);
            return(
                <View key={index} style = {{
                    paddingBottom : 20,
                    borderBottomColor : 'gray',
                    borderBottomWidth : 0.5,
                }}>
                     <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        padding:10
                     }}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                           <Image
                           source={data.postPersonImage}
                           style = {{width:40, height:40, borderRadius:100}}
                           />
                           <View style={{paddingLeft:15}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>
                                  {data.postTitle}
                            </Text>
                           </View>
                        </View>
                        <Feather name='more-vertical' style={{fontSize:20}}/>
                     </View>
                     <View style={
                        {
                            position:'relative',
                            justifyContent:'center',
                            alignItems:'center'
                        }
                     }>
                        <Image
                        source={data.postImage}
                        style={{width:'100%',height:400}}
                        />
                     </View>
                     <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:12, paddingVertical:15,alignItems:'center'}}>
                     <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>setLike(!like)} >
                        <AntDesign name="hearto" size={24} color="black" style={{
                            paddingRight:10,
                            color:like?'red':'black',
                        }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingRight:10,}}>
                        <Ionicons name="chatbubble-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Feather name="navigation" size={24} color="black" />
                        </TouchableOpacity>
                     </View>
<Feather name="bookmark" size={24} color="black" />
                     </View>
                     <View>
                     <Text style={{ paddingHorizontal: 10, paddingTop: 5, fontWeight: 'bold' }}>
                     Liked by { like ?'you and ':''}
                            {like? data.likes+1:data.likes} others
                        </Text>
                     </View>
                     
                    </View>
            )
        })
       }
    </View>
  )
}