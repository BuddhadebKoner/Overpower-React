import img1 from './img1.jpeg';
import img2 from './img3.jpeg';
import img3 from './img2.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg'

import facebook from './mediaimg/facebook.png'
import instagram from './mediaimg/instagram.png'
import x from './mediaimg/x.png'
import linkedin from './mediaimg/linkedin.png'

export const assets = {
    post5: {
        title: "Pro Tips & Tricks",
        date: "31 March 2024",
        image: img5,
        description: "Dive into JavaScript's hidden treasures with these 10 expert tips! 💎 Unlock the power of code creativity. Credit to @ChatGPT.",
        links: "https://www.linkedin.com/feed/update/urn:li:activity:7179686817972072449/",
        profilelink: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        media: linkedin,
        likes: 0,
    },
    post4: {
        title: "Ubantu 22.10",
        date: "23 March 2024",
        image: img1,
        description: "Discover your coding potential with Ubuntu 23.10! Elevate your skills with its seamless interface, simplified setup, bulletproof security, and abundant toolset including Python and Java. Benefit from community support and personalize your coding environment. Join us in conquering the coding realm together!🚀💻",
        links: "https://www.linkedin.com/posts/buddhadeb-koner-8501b3231_unleash-your-coding-potential-with-ubuntu-activity-7177013167292657664-uucE?utm_source=share&utm_medium=member_desktop",
        profilelink: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        media: linkedin,
        likes: 0,
    },
    post3: {
        title: "Lets contribute in Open Souse",
        date: "27 March 2024",
        image: img2,
        description: "🌟 Seeking Open Source Mentorship Dear connections, I'm new to open-source and would love to learn from experienced software engineer like you. Any tips or advice you could share would be greatly appreciated. Let connect and embark on this journey together!",
        links: "https://x.com/buddhadeb_koner/status/1773667227218178145?t=Qou96v25V7na_-VzTvrCaA&s=09",
        profilelink: "",
        media: x,
        likes: 0,
    },
    post2: {
        title: "Food Delivery WebApp Only UI",
        date: "20 Jan 2024",
        image: img3,
        description: "I'm pleased to share the Food Delivery Web App Frontend UX project that I worked on. All sources are available on GitHub. It is not responsive at the moment, so please open it on a desktop.",
        links: "https://www.linkedin.com/feed/update/urn:li:activity:7151978062903922688/",
        profilelink: "https://www.linkedin.com/in/buddhadeb-koner-8501b3231/",
        media: linkedin,
        likes: 0,
    },
    post1: {
        title: "Lets Enjoy Life",
        date: "27 sept 2023",
        image: img4,
        description: "Lost in the beauty of the sky and the serenity of campus life. 🌸✨",
        links: "https://www.instagram.com/p/CxshPSsITG8/?igsh=MTIwM2cxN2hoMzNudg==",
        profilelink: "https://twitter.com/buddhadeb_koner",
        media: instagram,
        likes: 0,
    },
};


export const numberOfAssets = Object.keys(assets).length;
