// src/screens/HomeScreen.tsx
import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useAtom } from 'jotai';
import { articlesAtom, selectedArticleAtom } from '../viewmodels/ArticleViewModel';
import ArticleCard from '../components/ArticleCard';
import PreviewPane from '../components/PreviewPane';

const SCREEN_WIDTH = Dimensions.get('window').width;
const STACK_CARD_WIDTH = SCREEN_WIDTH * 0.35;
const STACK_CARD_HEIGHT = 80;
const OVERLAP_OFFSET = -10; // Adjust this value for the overlapping effect

const HomeScreen: React.FC = () => {
    const [articles] = useAtom(articlesAtom);
    const [selectedArticle, setSelectedArticle] = useAtom(selectedArticleAtom);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.leftPane} contentContainerStyle={{ paddingVertical: 10 }}>
                {articles.map((article, index) => (
                    <View
                        key={article.id}
                        style={[
                            styles.stackCard,
                            {
                                marginTop: index === 0 ? 0 : OVERLAP_OFFSET,
                            },
                        ]}
                    >
                        <ArticleCard
                            article={article}
                            isSelected={selectedArticle?.id === article.id}
                            onSelect={() => setSelectedArticle(article)}
                        />
                    </View>
                ))}
            </ScrollView>
            <View style={styles.rightPane}>
                <PreviewPane article={selectedArticle} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    leftPane: {
        width: '40%',
    },
    stackCard: {
        width: '100%',
        height: STACK_CARD_HEIGHT,
        borderRadius: 10,
        overflow: 'hidden',
    },
    rightPane: {
        width: '60%',
        paddingLeft: 10,
    }
});

export default HomeScreen;
