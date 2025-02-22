import { atom } from 'jotai';
import { Article } from '../models/Article';

const initialArticles: Article[] = [
    {
        id: 1,
        title: 'Keep your mobile device safe from malware',
        summary: 'Learn tips to secure your mobile devices from malware...',
        imageUrl: 'https://www.cimbbank.com.ph/content/dam/cimbph/images/security-tips/Artboard%202%20copy%208.png',
        link: 'https://www.cimbbank.com.ph/en/financial-literacy-articles/security-tips/keep-your-malware-device-save-from-malware.html',
        gradient: ['#1AADFA', '#0A7FFD'],
    },
    {
        id: 2,
        title: 'How to compute for my money after interest',
        summary: 'Understand the magic of compound interest...',
        imageUrl: 'https://scontent-mnl1-1.xx.fbcdn.net/v/t1.6435-9/155399550_1403088880029437_454370955418812833_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_AKEj0y51Rr8JE0yOuFHvzVJIzVIZlvvNUkjNUhmW-xKQEWs2Z92bYWE7rZ2yyUA&_nc_ohc=0uhoQ9AKR8EQ7kNvgEcLFNH&_nc_oc=Adh3dzc3u2F4HnyDAJxRIIRdi9gpgmVN34qiphqwgo7vFWUiJyXx_Q0j_2w4Swo-1W0&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=As8L5gi6Yd4jdweCvaiQoLX&oh=00_AYBfU2Nj9uU0DEi2H3jLxjXvhFaKDkTscQLKzg3qYAFvGQ&oe=67E0A5B9',
        link: 'https://www.facebook.com/photo.php?fbid=1403088876696104&id=740206986317633&set=a.769106060094392',
        gradient: ['#F78F1F', '#E17F18'],
    },
    {
        id: 3,
        title: '5 Steps to Take you Closer To Financial Freedom',
        summary: 'Understand the magic of compound interest...',
        imageUrl: 'https://www.cimbbank.com.ph/content/dam/cimbph/images/financial-literacy/5-steps-to-take-you-closer-to-financial-freedom/Artboard%201%20copy-100%20(3).jpg',
        link: 'https://www.cimbbank.com.ph/en/financial-literacy-articles/financial-essentials/5-steps-to-take-you-closer-to-financial-freedom.html',
        gradient: ['#CA131C', '#7B0109'],
    },
    {
        id: 4,
        title: 'Millennial`s Guide to Saving',
        summary: 'One thing’s for sure, millennials don’t... ',
        imageUrl: 'https://www.cimbbank.com.ph/content/dam/cimbph/images/financial-literacy/millennial%E2%80%99s-guide-to-saving/header.png',
        link: 'https://www.cimbbank.com.ph/en/financial-literacy-articles/financial-essentials/millennials-guide-to-saving.html',
        gradient: ['#F34CC3', '#DE2EA6'],
    },
    {
        id: 5,
        title: '5 Money-Saving Challenges',
        summary: 'Saving money doesn’t always have to...',
        imageUrl: 'https://www.cimbbank.com.ph/content/dam/cimbph/images/financial-literacy/5-money-saving-challenges/finlit-06%20(1).jpg',
        link: 'https://www.cimbbank.com.ph/en/financial-literacy-articles/financial-essentials/5-money-saving-challenges.html',
        gradient: ['#996EE8', '#487FFC'],
    }
];

export const articlesAtom = atom<Article[]>(initialArticles);
export const selectedArticleAtom = atom<Article | null>(null);
