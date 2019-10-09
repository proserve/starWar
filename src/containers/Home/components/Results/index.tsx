import React from 'react';
import { Query } from 'react-apollo';
import { StyleSheet } from 'react-native';
import { View, Text, ScrollView } from 'react-native';
import { GET_FILMS } from '../../queries';
import { YELLOW } from '../../../../constants/colors';
import { processFilmsData } from './utils';

interface ResultsProps {
    toggleProgress: Function;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontFamily: 'roboto',
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
        fontWeight: '600',
    },
    answer: {
        color: YELLOW,
        marginTop: 10,
    },
});
export default function Results({ toggleProgress }: ResultsProps) {
    return (
        <Query query={GET_FILMS}>
            {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return <Text>Error :(</Text>;
                const { bestStarts, goodStarts } = processFilmsData(data);
                return (
                    <ScrollView style={styles.container}>
                        <View>
                            <Text style={styles.text}>
                                who is the character that appeared the most in StarWars films
                            </Text>
                            {bestStarts.map(start => (
                                <Text key={start.id} style={[styles.text, styles.answer]}>
                                    {start.name} : {start.count} times
                                </Text>
                            ))}
                        </View>

                        <View>
                            <Text style={styles.text}> list all characters that appeared between 2-4 times.</Text>
                            {goodStarts.map(({ name, count }) => (
                                <View key={name}>
                                    <Text style={[styles.text, styles.answer]}>
                                        {name}: {count} times
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                );
            }}
        </Query>
    );
}
