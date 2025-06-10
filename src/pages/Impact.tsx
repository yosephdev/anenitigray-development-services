
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Impact = () => {
    const { t, language } = useLanguage();

    const impactStats = [
        {
            number: '11, 741',
            label: language === 'en' ? 'Lives Supported' : 'ዝተደገፉ ህይወት', // Corresponds to impact.stat.lives
            description: language === 'en'
                ? 'The total number of individuals who benefited from ADS programs and interventions during 2025.'
                : '' // Tigrinya translation needed
        },
        {
            number: '3861',
            label: language === 'en' ? 'IDPs Assisted' : 'ዝተሓገዙ ውሽጣዊ ተመዛበልቲ', // Corresponds to impact.stat.idps
            description: language === 'en'
                ? 'Number of Internally Displaced Persons who received essential aid and support from ADS in 2025.'
                : '' // Tigrinya translation needed
        },
        {
            number: '4,196',
            label: language === 'en' ? 'Children Reached' : 'ዝተበጽሑ ህጻናት', // Corresponds to impact.stat.children
            description: language === 'en'
                ? 'Number of children who received support through ADS initiatives, including education and child protection programs in 2025.'
                : '' // Tigrinya translation needed
        },
        {
            number: '3, 684',
            label: language === 'en' ? 'Women Supported' : 'ዝተደገፋ ደቂ ኣንስትዮ', // Corresponds to impact.stat.women
            description: language === 'en'
                ? 'Number of women empowered through ADS programs, including economic support and healthcare services in 2025.'
                : '' // Tigrinya translation needed
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <html lang={language} />
                <title>{t('impact')} - ADS</title>
                <meta name="description" content="Measuring our impact and achievements in Tigray communities through sustainable development initiatives." />
            </Helmet>

            <Navbar />

            <div className="flex-grow">
                <div className="relative py-24 bg-tigray-dark">
                    <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
                        backgroundImage: "url('/images/ADS-14.jpg')"
                    }}></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">{language === 'en' ? 'Our Impact' : 'ውጽኢታትና'}</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            {language === 'en'
                                ? 'Transforming lives and communities through sustainable development initiatives'
                                : 'ብቀጻሊ ናይ ምዕባለ ስጉምትታት ሂወት ሰባትን ማሕበረሰባትን ምልዋጥ'}
                        </p>
                    </div>
                </div>

                <div className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
                                {language === 'en' ? 'Impact in Numbers' : 'ውጽኢት ብቁጽሪ'}
                            </h2>
                            <p className="text-tigray-dark/80 max-w-2xl mx-auto">
                                {language === 'en'
                                    ? 'Measuring our progress and commitment to Tigray\'s sustainable development'
                                    : 'ንቀጻሊ ምዕባለ ትግራይ ዘለና መለክዒ ዕቤትን ቃልን'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {impactStats.map((stat, index) => (
                                <div key={index} className="bg-tigray-light p-6 rounded-lg shadow-md text-center">
                                    <div className="text-4xl font-bold text-tigray-terracotta mb-2">{stat.number}</div>
                                    <h3 className="text-xl font-semibold text-tigray-dark mb-2">{stat.label}</h3>
                                    <p className="text-tigray-dark/80">{stat.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="py-16 bg-tigray-sand/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-tigray-dark mb-4">
                                {language === 'en' ? 'Sustainable Development Goals' : 'ዕላማታት ቀጻሊ ምዕባለ'}
                            </h2>
                            <p className="text-tigray-dark/80 max-w-2xl mx-auto">
                                {language === 'en'
                                    ? 'Our work contributes to multiple UN Sustainable Development Goals'
                                    : 'ስራሕና ንብዙሓት ዕላማታት ቀጻሊ ምዕባለ ናይ ሕቡራት መንግስታት የበርክት'}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                { number: '1', name: language === 'en' ? 'No Poverty' : 'ድኽነት የለን' },
                                { number: '2', name: language === 'en' ? 'Zero Hunger' : 'ጥሜት ዜሮ' },
                                { number: '3', name: language === 'en' ? 'Good Health' : 'ጽቡቕ ጥዕና' },
                                { number: '4', name: language === 'en' ? 'Quality Education' : 'ጽቡቕ ትምህርቲ' },
                                { number: '5', name: language === 'en' ? 'Gender Equality' : 'ማዕርነት ጾታ' },
                                { number: '6', name: language === 'en' ? 'Clean Water' : 'ጽሩይ ማይ' },
                                { number: '8', name: language === 'en' ? 'Economic Growth' : 'ቁጠባዊ ዕቤት' },
                                { number: '10', name: language === 'en' ? 'Reduced Inequalities' : 'ምቕናስ ዘይማዕርነት' }
                            ].map((goal, index) => (
                                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                                    <div className="w-12 h-12 rounded-full bg-tigray-terracotta flex items-center justify-center text-white font-bold mr-4">
                                        {goal.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-tigray-dark">{goal.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Impact;
