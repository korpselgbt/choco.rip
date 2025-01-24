import type IConfig from "./interfaces/IConfig";

const config: IConfig = {
    title: "Stella",
    description: "Stella is a software engineer and entrepreneur.",
    url: "https://choco.rip",
    image: "/images/choco.jpg",
    author: {
        name: "Stella",
        role: "Software Engineer",
        email: "hello@choco.rip",
        social: {
            github: "https://github.com/chocoOnEstrogen",
            bluesky: "https://bsky.app/profile/choco.rip"
        },
        discord: "https://discord.gg/x8A89TVJUv"
    },
    site: {
        language: "en",
        themeColor: "#1a1a1a"
    },
    navigation: {
        primary: [
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Blog", path: "/blog" },
            { name: "About", path: "/about" }
        ]
    }
};

export default config;