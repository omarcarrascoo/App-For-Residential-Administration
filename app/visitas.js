import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { Stack, useRouter } from 'expo-router';
import MainHeader from '../components/common/header/MainHeader';
import EventListerSmallCard from '../components/eventsLister/EventListerSmallCard';
import MainFooter from '../components/common/footer/MainFooter';
import VistiasRecurrentesLister from '../components/visitasRecurrentesLister/vistiasRecurrentesLister';
function visitas() {
    const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkWhite }}>
            <Stack.Screen
                options={{
                    autoHideHomeIndicator:true,
                    header: () =>(
                        <MainHeader/>
                    )
                }}
            />
            <View showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.subSection}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Generar código de entrada para una visita</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={()=>{router.push('/formularioVisitas')}}  style={{width:100, height:100, backgroundColor:COLORS.MainPurple, borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:COLORS.white}}>Nueva visita</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{router.push('/formularioVisitas')}} style={{width:100, height:100, backgroundColor:COLORS.MainPurple, borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:COLORS.white}}>Visita previa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{router.push('/formularioVisitas')}} style={{width:100, height:100, backgroundColor:COLORS.MainPurple, borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:COLORS.white}}>Encomiendas</Text>
                        </TouchableOpacity>
                        
                    </View>
               </View>
                <View style={styles.subSection}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Para tus visitas recurrentes</Text>
                        <TouchableOpacity><Text style={styles.link}>Ver mas</Text></TouchableOpacity>
                    </View>
                    <VistiasRecurrentesLister/>
               </View>
               <View style={styles.subSection}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Tus próximas visitas</Text>
                        <TouchableOpacity><Text style={styles.link} onPress={()=>{router.push('/calendario')}}>Ver Calendario</Text></TouchableOpacity>
                    </View>
                    <EventListerSmallCard/>
               </View>
            </View>
            <MainFooter/>
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: SIZES.large,
        paddingTop: 0
    },
    subSection:{
        paddingTop:30,
        paddingBottom: 10
    },
    subSection2:{
        paddingTop:20,
        justifyContent: 'space-between'
    },
    subtitleContainer:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        marginBottom: SIZES.large
    },
    subtitle:{
        fontSize:18,
        color:COLORS.MainText,
    },
    link:{
        color:COLORS.MainPurple,
       textDecorationLine:'underline',
    }

})
export default visitas