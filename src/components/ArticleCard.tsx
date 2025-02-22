import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Article } from '../models/Article';

interface Props {
    article: Article;
    isSelected: boolean;
    onSelect: () => void;
}

const ArticleCard: React.FC<Props> = ({ article, isSelected, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect} activeOpacity={0.9}>
            <LinearGradient colors={article.gradient} style={styles.card}>
                <Text style={styles.title}>{article.title}</Text>
                {isSelected && <Text style={styles.arrow}>→</Text>}
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderRadius: 10,
        height: '100%',
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    arrow: {
        color: '#fff',
        fontSize: 20,
        position: 'absolute',
        right: 10,
    },
});

export default React.memo(ArticleCard);
