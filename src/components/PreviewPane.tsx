import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Article } from '../models/Article';

interface Props {
    article: Article | null;
}

const PreviewPane: React.FC<Props> = ({ article }) => {
    if (!article) return null;

    const openLink = async () => {
        try {
            await InAppBrowser.open(article.link);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: article.imageUrl }} style={styles.image} />
            <Text style={styles.summary}>{article.summary}</Text>
            <Button title="Read more" onPress={openLink} color="#e74c3c" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    summary: {
        marginVertical: 10,
        fontSize: 14,
    }
});

export default PreviewPane;
