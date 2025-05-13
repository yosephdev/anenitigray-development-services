type Language = 'en' | 'ti';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar & Footer
    'home': 'Home',
    'about': 'About Us',
    'programs': 'Programs',
    'impact': 'Our Impact',
    'news': 'News & Updates',
    'contact': 'Contact',
    'donate': 'Donate Now',
    'footer.rights': 'All Rights Reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Hero Section (Homepage)
    'hero.title': 'Building Sustainable Futures in Tigray',
    'hero.subtitle': 'ADS is dedicated to creating development opportunities and providing humanitarian aid to vulnerable communities in Tigray. In 2022, we supported 3,132 lives.',
    'hero.cta': 'Support Our Mission',

    // Impact Snippets (Homepage/About)
    'impact.stat.lives': 'Lives Supported (2022)',
    'impact.stat.lives.number': '3,132',
    'impact.stat.idps': 'IDPs Assisted',
    'impact.stat.idps.number': '861',
    'impact.stat.children': 'Children Reached',
    'impact.stat.children.number': '1,196',
    'impact.stat.women': 'Women Supported',
    'impact.stat.women.number': '684',
    // Programs Page / Sections
    'programs.title': 'Our Key Program Areas',
    'programs.subtitle': 'Fostering sustainable development and providing humanitarian aid across Tigray.',
    'childcare.title': 'Integrated Child Care Support',
    'childcare.desc': 'Provides essential food, nutrition, mental health & psychosocial support (MHPSS), and educational aid to conflict-affected children in Mekelle. Includes cash support for mothers, ensuring gender-balanced participation.',
    'childcare.outcome': 'Outcome: Participating children show improved mental health and behavioral resilience.',
    'asset.title': 'Aspiring School Society Empowerment in Tigray (ASSET)',
    'asset.desc': 'Supports teachers at Atse-Yohannes Primary School with essential meals (bread/tea) and provides vital training to enhance their skills.',
    'relief.title': 'Rapid Relief Support',
    'relief.desc': 'Distributes critical Food Items (FI), Non-Food Items (NFI), and cash assistance to Internally Displaced Persons (IDPs), women, children, and individuals with disabilities across Tigray. Aid reaches numerous households.',
    'capacity.title': 'Capacity Building',
    'capacity.desc': 'Trains volunteers in establishing Child-Friendly Spaces (CFS) and providing psychosocial support, in partnership with Merho Training and Consultancy.',
    'detail.sustainable': 'Sustainable',
    'detail.community': 'Community-driven',
    'detail.impact': 'Impact-focused',

    // About Page
    'about.title': 'About Anenitigray Development Services',
    'about.intro': 'Anenitigray Development Services (ADS) is a local Non-Governmental Organization (NGO) based in Mekelle, Tigray, Ethiopia. Officially registered under proclamation *15/2015* by the Tigray National Regional State Justice Bureau, ADS is committed to supporting vulnerable communities affected by the conflict.',
    'about.mission.title': 'Our Mission',
    'about.mission.paragraph1': "Our mission is to create sustainable development opportunities for 50,000 vulnerable communities in Tigray by 2025. We are dedicated to fostering development through community-driven initiatives, focusing on empowering local populations. In 2022, our key program areas included Integrated Child Care Support, the ASSET project for teacher support and training, Rapid Relief operations, and Capacity Building for volunteers to enhance psychosocial support and child-friendly spaces.",
    'about.mission.paragraph2': "Our approach emphasizes community participation, local leadership, and sustainable practices. By working closely with community members, we ensure that our programs address real needs and create lasting positive change.",
    'about.stat.established.title': 'Established',
    'about.stat.established.value': '2010',
    'about.stat.communities.title': 'Beneficiaries Reached (2022)',
    'about.stat.communities.value': '3,132 Individuals',
    'about.stat.team.title': 'Team Members',
    'about.stat.team.value': '45',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To ensure that no one in Tigray is deprived of development opportunities due to poverty.',
    'about.values.title': 'Our Core Values',
    'about.values.intro': 'These core principles guide every aspect of our work and decision-making processes:',
    'about.value.teamwork': 'Teamwork',
    'about.value.commitment': 'Commitment',
    'about.value.transparency': 'Transparency',
    'about.value.professionalism': 'Professionalism',
    'about.value.socialresponsibility': 'Social Responsibility',
    'about.context.title': 'The Tigray Context',
    'about.context.text': 'Since November 2020, the conflict in Tigray has led to a severe humanitarian crisis, with millions requiring urgent aid and widespread displacement. ADS focuses its response on the critical needs of IDPs, women, children, and disabled populations, often navigating challenges like intermittent electricity and banking services.',

    // Contact Page / Info
    'contact.send': 'Send Message',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.visit': 'Visit Our Office',
    'contact.address.detail': 'Mekelle, Tigray, Ethiopia',
    'contact.email.us': 'Email Us',
    'contact.email.detail': 'contact@anenitigray.org',
    'contact.call': 'Call Us',
    'contact.phone1': '+251 937 022 100',
    'contact.phone2': '+251 931 329 055',
    'contact.hours': 'Office Hours',
    'contact.hours.detail': 'Mon - Fri: 9:00 AM - 5:00 PM',

    // Generic Buttons / Links
    'read.more': 'Read More',
    'learn.more': 'Learn More',

    // Donation Section (If applicable)
    'donate.title': 'Support Our Work',
    'donate.subtitle': 'Your contribution directly impacts lives in Tigray. Help us provide essential aid and build sustainable futures.',
    'donate.monthly': 'Monthly',
    'donate.onetime': 'One-time',
    'donate.amount': 'Select Amount',
    'donate.custom': 'Custom Amount',
    'donate.button': 'Donate Now',

    // Stories Section (If applicable)
    'stories.title': 'Impact Stories',
    'stories.subtitle': 'Read about the real difference ADS is making in the lives of people in Tigray.',

    // Partners Section Title (For potential future section)
    'partners.title': 'Our Partners & Supporters'
  },
  ti: {
    // Navbar & Footer
    'home': 'መበገሲ',
    'about': 'ብዛዕባና',
    'programs': 'መደባትና',
    'impact': 'ውጽኢታትና',
    'news': 'ዜናን ሓበሬታን',
    'contact': 'ርክብ',
    'donate': 'ሕጂ ወፍዩ',
    'footer.rights': ' 2024 ኣነኒትግራይ ልምዓት ኣገልግሎታት። ኩሉ መሰል ዝተሓለወ እዩ',
    'footer.privacy': 'ፖሊሲ ብሕታዊነት',
    'footer.terms': 'ውዕሊ ኣገልግሎት',

    // Hero Section (Homepage)
    'hero.title': 'ዘላቒ መጻኢ ኣብ ትግራይ ምህናጽ',
    'hero.subtitle': 'ኤዲኤስ ንተኣፊኖም ማሕበረሰባት ትግራይ ዕድላት ልምዓት ንምፍጣርን ሰብኣዊ ሓገዝ ንምሃብን ዝተወፈየ እዩ። ኣብ 2022 ን 3,132 ህይወት ደጊፍና።',
    'hero.cta': 'ተልእኾና ደግፉ',

    // Impact Snippets (Homepage/About)
    'impact.stat.lives': 'ዝተደገፉ ህይወት (2022)',
    'impact.stat.lives.number': '3,132',
    'impact.stat.idps': 'ዝተሓገዙ ውሽጣዊ ተመዛበልቲ',
    'impact.stat.idps.number': '861',
    'impact.stat.children': 'ዝተበጽሑ ህጻናት',
    'impact.stat.children.number': '1,196',
    'impact.stat.women': 'ዝተደገፋ ደቂ ኣንስትዮ',
    'impact.stat.women.number': '684',

    // Programs Page / Sections
    'programs.title': 'መደባትናን ንጥፈታትናን (2022 ትኹረት)',
    'programs.subtitle': 'ኣብ ትግራይ ህጹጽ ዘድልዩ ነገራት ምምላእን ብትኹረት ተበግሶታት ጽንዓት ምህናጽን።',
    'childcare.title': 'ምትእስሳር ደገፍ ክንክን ህጻናት',
    'childcare.desc': 'ን30 ብግጭት ዝተጸልዉ ህጻናት ኣብ መቐለ ኣገዳሲ መግቢ፣ ምግቢ፣ ኣእምሮኣዊ ጥዕናን ሳይኮሶሻል ደገፍን (MHPSS)፣ ከምኡውን ናይ ትምህርቲ ሓገዝ ምቕራብ። ን30 ኣዴታት ናይ ገንዘብ ደገፍ ምሕዋስ፣ ጾታዊ ሚዛናዊ ተሳታፍነት ምውሓስ (48% ደቂ ኣንስትዮ)።',
    'childcare.outcome': 'ውጽኢት: 78% ካብቶም ዝተሳተፉ ህጻናት ዝተመሓየሸ ኣእምሮኣዊ ጥዕናን ባህርያዊ ጽንዓትን ኣርእዮም።',
    'asset.title': 'ትምክሕተኛ ማሕበር ቤት ትምህርቲ ምጥንኻር ኣብ ትግራይ (ASSET)',
    'asset.desc': 'ን55 መምህራን ኣብ ቀዳማይ ደረጃ ቤት ትምህርቲ ኣጼ-ዮሃንስ ኣገዳሲ መግቢ (እንጌራ/ሻሂ) ምድጋፍን ኣገዳሲ ስልጠና ንምምሕያሽ ክእለቶም ምሃብን።',
    'relief.title': 'ቀጥታዊ ናይ እፎይታ ደገፍ',
    'relief.desc': 'ንውሽጣዊ ተመዛበልቲ (IDPs)፣ ደቂ ኣንስትዮ፣ ህጻናት፣ ከምኡውን ስንኩላን ኣብ መላእ ትግራይ (ከምኒ ዓድዋ፣ ቆላ ተምቤን፣ መቐለ ዝኣመሰሉ) ኣገደስቲ ናይ መግቢ ኣቕሑት (FI)፣ ናይ መግቢ ዘይኮኑ ኣቕሑት (NFI)፣ ከምኡውን ናይ ገንዘብ ሓገዝ ምዝርጋሕ። ሓገዝ ንልዕሊ 1,000 ስድራቤታት (ኣስታት 3,500 ውልቀሰባት) በጺሑ።',
    'capacity.title': 'ዓቕሚ ምህናጽ',
    'capacity.desc': 'ፍቓደኛታት ኣብ ምቕዋም ንህጻናት ተስማምዑ ቦታታት (CFS) ከምኡውን ሳይኮሶሻል ደገፍ ምሃብ፣ ብምትሕብባር ምስ ሜርሆ ስልጠናን ምኽሪን።',
    'detail.sustainable': 'ዘላቒ',
    'detail.community': 'ብማሕበረሰብ ዝምራሕ',
    'detail.impact': 'ብውጽኢት ዝምራሕ',

    // About Page
    'about.title': 'ብዛዕባ ኣነኒትግራይ ልምዓት ኣገልግሎታት',
    'about.intro': 'ኣነኒትግራይ ልምዓት ኣገልግሎታት (ኤዲኤስ) ኣብ መቐለ፣ ትግራይ፣ ኢትዮጵያ ዝመደበሩ ከባቢያዊ ዘይመንግስታዊ ትካል (NGO) እዩ። ብመሰረት ኣዋጅ ቁጽሪ *15/2015* ብቢሮ ፍትሒ ሃገራዊ ክልላዊ መንግስቲ ትግራይ ብወግዒ ዝተመዝገበ ኤዲኤስ፣ ንብግጭት ዝተጸልዉ ተኣፊኖም ማሕበረሰባት ንምድጋፍ ዝተወፈየ እዩ።',
    'about.mission.title': 'ተልእኾና',
    'about.mission.paragraph1': 'ኤ.ዲ.ኤስ (ADS) ኣብ ትግራይ እንተኾነ ዝተባህለ ማዕኸላዊ ግንባሩ ተጠቂማ ኣብ መርመርታ ዝተፈላለየ ዘሎ ዓድራጎን ክፋል ኣብ ምትእሳር ይገብር። ኣብ ዝተፈላለየ ዘሎ ዓድራጎን ምክያድ ክሳብ ነቶም ዝበቕሉ ዘሎ ሃገዝን ስድራዊ ዝ nhu ግባእን ህግደፍን ጥራሕን ዝውጽኦ ምርዓይ ስራሕ ከምዝጥቀሙ እንሰፋ። ኣብ ዝተበለጸ ዘሎ ዝርርር ዘሎ ካልኦት ዝርርር ዘሎ ህጻናታት፣ ተምሃራይ፣ ጤና ዝቕበል ኣገዳሲ፣ ኢኮኖሚካዊ ምፍቅዕን መብዛሕት ዝርርር ዘሎ እዩ። ኣብ ዝተበለጸ ምርኣይ ስራሕ ክፍፍል ምረግጽ ከምዝገብርና እንሰፋ።',
    'about.mission.paragraph2': 'ኣብ ምርኢታ ስራሕና ኣብ ዝተበለጸ ምርኣይ ስራሕ، ኣብ መንበር ዘሎ መሪሕነትን ዝተባህለ ምርኢታ ስራሕን ክፍፍል ኣይነበረን። ኣብ መርመርታ ኣባላት ዝርርር ዘሎ ምስ ዝተበለጸ ስራሕ እንተኾነ ፕሮጀክታትና ኣብ ተጠቒሙ ዘሎ ምኽንያታት ክፍትራን ዝተባህለ አዕዋን ክፍቅዕን ክገብር።',
    'about.stat.established.title': 'ዝተመሰረተሉ ዓመት',
    'about.stat.established.value': '2010',
    'about.stat.communities.title': 'ዝተገብረሉ ዘሎ ቦታወቕ',
    'about.stat.communities.value': '120+',
    'about.stat.team.title': 'ኣባላት መርከብ',
    'about.stat.team.value': '45',
    'about.vision.title': 'ራእይና',
    'about.vision.text': 'ኣብ ትግራይ ዝኾነ ሰብ ብድኽነት ምኽንያት ካብ ዕድላት ልምዓት ከምዘይግለል ምውሓስ።',
    'about.values.title': 'ዋና ዋና ክብርታትና',
    'about.values.intro': 'እዞም ዋና ዋና መትከላት ነፍሲ ወከፍ መዳይ ስራሕናን መስርሕ ውሳኔታትናን ይመሩሑ:',
    'about.value.teamwork': 'ሓባራዊ ስራሕ',
    'about.value.commitment': 'ተወፋይነት',
    'about.value.transparency': 'ግሉጽነት',
    'about.value.professionalism': 'ሞያዊነት',
    'about.value.socialresponsibility': 'ማሕበራዊ ሓላፍነት',
    'about.context.title': 'ኩነታት ትግራይ',
    'about.context.text': 'ካብ ሕዳር 2020 ኣትሒዙ፣ ኣብ ትግራይ ዘሎ ግጭት ናብ ከቢድ ሰብኣዊ ቅልውላው ኣምሪሑ፣ ሚልዮናት ህጹጽ ሓገዝ ዘድልዮምን ሰፊሕ ምዝንባልን ኣጋጢሙ። ኤዲኤስ ምላሹ ኣብቶም ኣገደስቲ ድሌታት ናይ ውሽጣዊ ተመዛበልቲ፣ ደቂ ኣንስትዮ፣ ህጻናት፣ ከምኡውን ስንኩላን የትኵር፣ መብዛሕትኡ ግዜ ከም ተቋረጽቲ ኣገልግሎታት ኤሌክትሪክን ባንክን ዝኣመሰሉ ብድሆታት እናሰገረ።',

    // Contact Page / Info
    'contact.send': 'መልእኽቲ ስደድ',
    'contact.name': 'ስምኩም',
    'contact.email': 'ኢመይልኩም',
    'contact.subject': 'ኣርእስቲ',
    'contact.message': 'መልእኽትኹም',
    'contact.visit': 'ቢሮና በጽሑ',
    'contact.address.detail': 'ሙሴ ስትሪት፣ መቐለ፣ ትግራይ፣ ኢትዮጵያ',
    'contact.email.us': 'ኢመይል ግበሩልና',
    'contact.email.detail': 'contact@anenitigray.org',
    'contact.call': 'ደውሉልና',
    'contact.phone1': '+251 937 022 100',
    'contact.phone2': '+251 931 329 055',
    'contact.hours': 'ሰዓታት ስራሕ ቢሮ',
    'contact.hours.detail': 'ሰኑይ - ዓርቢ: 9:00 ቅ.ቀ. - 5:00 ድ.ቀ.',

    // Generic Buttons / Links
    'read.more': 'ዝያዳ ኣንብቡ',
    'learn.more': 'ዝያዳ ፍለጡ',

    // Donation Section (If applicable)
    'donate.title': 'ስራሕና ደግፉ',
    'donate.subtitle': 'ወፈያኹም ብቀጥታ ኣብ ትግራይ ኣብ ዘሎ ህይወት ጽልዋ ይገብር። ኣገዳሲ ሓገዝ ንምሃብን ዘላቒ መጻኢ ንምህናጽን ሓግዙና።',
    'donate.monthly': 'ወርሓዊ',
    'donate.onetime': 'ሓደ ግዜ',
    'donate.amount': 'መጠን ምረጹ',
    'donate.custom': 'ብሕታዊ መጠን',
    'donate.button': 'ሕጂ ወፍዩ',

    // Stories Section (If applicable)
    'stories.title': 'ዛንታታት ጽልዋ',
    'stories.subtitle': 'ኤዲኤስ ኣብ ህይወት ሰባት ትግራይ ዝገብሮ ዘሎ ሓቀኛ ፍልልይ ኣንብቡ።',

    // Partners Section Title (For potential future section)
    'partners.title': 'መሻርኽትናን ደገፍትናን'
  }
};
