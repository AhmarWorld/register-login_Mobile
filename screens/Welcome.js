import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import COLORS from '../constants/colors'
import Button from '../components/Button'

export default function Welcome({ navigation }) {
    return (
        <LinearGradient colors={[COLORS.secondary, COLORS.primary]} style={styles.linearGradient}>
            <View style={styles.container}>
                <View>
                    <Image source={{ uri: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png' }} style={styles.profileImageOne} />
                    <Image source={{ uri: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png' }} style={styles.profileImageTwo} />
                    <Image source={{ uri: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png' }} style={styles.profileImageThr} />
                    <Image source={{ uri: 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png' }} style={styles.profileImageFour} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Let's Get
                    </Text>
                    <Text style={[styles.title, { fontSize: 46 }]}>
                        Started
                    </Text>
                    <View style={styles.subtitleContain}>
                        <Text style={styles.subtitle}>Connect with each  other with chatting</Text>
                        <Text style={styles.subtitle}>Calling, Enjoy Safe and private texting</Text>
                    </View>
                    <Button
                        onPress={() => navigation.navigate('Signup')}
                        title={'Join Now'}
                        style={styles.button}
                    />
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Already have an account?</Text>
                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 70
    },
    container: {
        flex: 1
    },
    profileImageOne: {
        height: 100,
        width: 100,
        borderRadius: 20,
        position: 'absolute',
        top: 10,
        transform: [
            { translateX: 20 },
            { translateY: 50 },
            { rotate: '-15deg' }
        ]
    },
    profileImageTwo: {
        height: 100,
        width: 100,
        borderRadius: 20,
        position: 'absolute',
        top: -30,
        left: 100,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: '-5deg' }
        ]
    },
    profileImageThr: {
        width: 100,
        height: 100,
        borderRadius: 20,
        position: 'absolute',
        top: 130,
        left: -50,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: '15deg' }
        ]
    },
    profileImageFour: {
        height: 200,
        width: 200,
        borderRadius: 20,
        position: 'absolute',
        top: 110,
        left: 100,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: '-15deg' }
        ]
    },
    content: {
        paddingHorizontal: 22,
        position: 'absolute',
        top: 400,
        width: '100%',
    },
    title: {
        fontSize: 50,
        fontWeight: '800',
        color: COLORS.white
    },
    subtitleContain: {
        marginVertical: 22
    },
    subtitle: {
        fontSize: 16,
        marginVertical: 4,
        color: COLORS.white
    },
    button: {
        marginTop: 22,
        width: '100%'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 16,
        color: COLORS.white
    },
    loginText: {
        fontSize: 16,
        color: COLORS.white,
        marginLeft: 4,
        fontWeight: 'bold'
    }
})