import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import AwesomeButton from 'react-native-really-awesome-button';
import { YELLOW } from '../../../../constants/colors';

interface ButtonProps {
    isActive: boolean;
    isProgress: boolean;
    onClick: Function;
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: { fontFamily: 'roboto', fontSize: 18 },
    buttonContainer: { backgroundColor: YELLOW, borderRadius: 8 },
});

const StarIcon = () => <MaterialCommunityIcons name="star" size={32} color="black" />;

export default function Button({ isActive, onClick, isProgress }: ButtonProps) {
    return (
        <View style={styles.buttonContainer}>
            <AwesomeButton
                onPress={onClick}
                activityColor={YELLOW}
                backgroundActive={YELLOW}
                backgroundColor={YELLOW}
                backgroundShadow="#c2ae00"
                backgroundDarker={YELLOW}
                backgroundPlaceholder={YELLOW}
                borderRadius={8}
                progress={isProgress}
                springRelease={false}
                textColor="black"
                raiseLevel={isActive ? 4 : 9}
                width={350}
                activeOpacity={0.5}
                paddingHorizontal={100}
                height={75}
                textSize={24}
                borderColor={YELLOW}
            >
                <View style={[styles.content, { opacity: isActive ? 0.3 : 1 }]}>
                    <StarIcon />
                    <Text style={styles.text}>Do. Or do not. There is no try</Text>
                    <StarIcon />
                </View>
            </AwesomeButton>
        </View>
    );
}
