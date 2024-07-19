import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { COLORS, SIZES } from '../constants/theme';
import ScreenHeaderLogo from '../components/common/header/ScreenHeaderLogo';
import ScreenHeaderProfile from '../components/common/header/ScreenHeaderProfile';
import images from '../constants/images';
import { Stack, useRouter } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import icons from '../constants/icons';
import MainHeader from '../components/common/header/MainHeader';
import EventListerSmallCard from '../components/eventsLister/EventListerSmallCard';
import AnnauncementLister from '../components/announcementLister/AnnauncementLister';
import MainFooter from '../components/common/footer/MainFooter';

const Home = () =>{
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter()

    useEffect(() => {
        const fetchChallenges = async () => {
            try {
                const response = await axios.get('http://localhost:9090/api/challenges');
                setChallenges(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching challenges:', error);
                setError('Error fetching challenges');
                setLoading(false);
            }
        };

    }, []);

    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Stack.Screen
                options={{
                    autoHideHomeIndicator:true,
                    header: () =>(
                        <View style={{minHeight:100, margin:0, paddingTop:70, alignItems:'center',  backgroundColor:COLORS.lightWhite}}>
                            <View style={{justifyContent:'space-between', flexDirection: "row", width:"92%"}}>
                                <ScreenHeaderLogo imageUrl={images.logoBrainWare} dimension='100%' />
                                <ScreenHeaderProfile imageUrl={"http://localhost:9090/public/images/pp.png"} dimension = '100%'/>
                            </View>
                        </View>
                    )
                }}
            />
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Stack.Screen
                options={{
                    autoHideHomeIndicator:true,
                    // headerStyle: { backgroundColor: COLORS.lightWhite, height: 3000, padding: SIZES.medium, },
                    // headerShadowVisible: false,
                    // headerLeft: () => <ScreenHeaderLogo imageUrl={images.logoBrainWare} dimension='100%' />,
                    // headerTitle: () => "",
                    // headerRight: () => <ScreenHeaderProfile imageUrl={"https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"} dimension='100%' />,
                    header: () =>(
                        <View style={{minHeight:100, margin:0, paddingTop:70, alignItems:'center',  backgroundColor:COLORS.lightWhite}}>
                            <View style={{justifyContent:'space-between', flexDirection: "row", width:"92%"}}>
                                <ScreenHeaderLogo imageUrl={images.logoBrainWare} dimension='100%' />
                                <ScreenHeaderProfile imageUrl={"http://localhost:9090/public/images/pp.png"} dimension = '100%'/>
                            </View>
                        </View>
                    )
                }}
            />
                <Text>{error}</Text>
            </SafeAreaView>
        );
    }

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
                        <Text style={styles.subtitle}>Próximos eventos</Text>
                        <TouchableOpacity onPress={()=>{router.push('/calendario')}}><Text style={styles.link}>Ver Calendario</Text></TouchableOpacity>
                    </View>
                    <EventListerSmallCard/>
               </View>
               <View style={{minHeight:0}}/>
               <View style={styles.subSection}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Anuncios recientes</Text>
                        <TouchableOpacity onPress={()=>{router.push('/cupones')}}><Text style={styles.link}>Ver mas</Text></TouchableOpacity>
                    </View>
                    <AnnauncementLister/>
               </View>
            </View>
            <MainFooter/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: SIZES.large,
        paddingTop: SIZES.small
    },
    subSection:{
        paddingTop:20,
    },
    subtitleContainer:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        marginBottom: SIZES.large
    },
    subtitle:{
        fontSize:22,
        color:COLORS.MainText,
    },
    link:{
        color:COLORS.MainPurple,
       textDecorationLine:'underline',
    }

})


export default Home;
