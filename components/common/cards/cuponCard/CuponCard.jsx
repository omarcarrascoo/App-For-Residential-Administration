import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import images from '../../../../constants/images'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SIZES } from '../../../../constants/theme'

function CuponCard({bgColor,  marked}) {
    const [saved, setSaved] = useState (marked)
  return (
    <View style={[styles.card, {backgroundColor:bgColor}]}>
        <View style={{flexDirection:"row", gap:6}}>
            <Image style={{width:65, height:65}} source={images.logotest2}/>
            <View style={{maxWidth:"80%"}}>
                <Text style={{color:COLORS.MainText, fontSize:SIZES.medium, fontWeight:600}}>Comercio</Text>
                <Text style={{color:COLORS.MainText, marginTop:10, fontSize:13}}>15% de escuento en combo familiar</Text>
                <Text style={{color:COLORS.gray2, fontSize:13}}>Válido hasta 12 de Octubre</Text>
            </View>
        </View>
        <TouchableOpacity style={{height:"100%", paddingTop:SIZES.small}} onPress={()=>setSaved(!saved)}>
            {saved===true?<Icon name="bookmark" size={24} color={COLORS.MainPurple}/>:<Icon name="bookmark-o" size={24} color={COLORS.gray}/>}
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
       flexDirection:'row',
       height: SIZES.xxLarge *3,
       alignItems:'center',
       paddingHorizontal:10,
       width:"100%",
       justifyContent:"space-between"
    }
})

export default CuponCard