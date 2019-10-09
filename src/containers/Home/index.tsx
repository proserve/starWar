import React, { Component } from 'react';
import { View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import * as Font from 'expo-font';
import * as Expo from 'expo';
import Results from './components/Results';
import styles from './styles';
import Button from './components/Button';

interface State {
    isLoadingFonts: boolean;
    isActive: boolean;
    isProgress: boolean;
}

export default class App extends Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingFonts: true,
            isActive: false,
            isProgress: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            roboto: require('../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
        });
        this.setState({ isLoadingFonts: false });
    }

    render() {
        const { isLoadingFonts, isActive, isProgress } = this.state;

        if (isLoadingFonts) {
            return <Expo.AppLoading />;
        }
        return (
            <View style={styles.container}>
                <SvgUri
                    width="200"
                    height="200"
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg',
                    }}
                />
                <Button
                    isProgress={isProgress}
                    isActive={isActive}
                    onClick={() => this.setState({ isActive: !isActive })}
                />
                {isActive ? <Results toggleProgress={() => this.setState({ isProgress: true })} /> : null}
            </View>
        );
    }
}
