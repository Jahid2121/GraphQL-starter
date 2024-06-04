const games = [
    {
        id: "1",
        title: "The Legend of Zelda: Breath of the Wild",
        platform: ["Nintendo Switch", "Wii U"]
    },
    {
        id: "2",
        title: "God of War",
        platform: ["PlayStation 4"]
    },
    {
        id: "3",
        title: "The Witcher 3: Wild Hunt",
        platform: ["PlayStation 4", "Xbox One", "PC", "Nintendo Switch"]
    }
];
const reviews = [
    {
        id: "1",
        rating: 10,
        content: "An amazing adventure with stunning visuals and an immersive world.",
        author_id: "1",
        game_id: "1"
    },
    {
        id: "2",
        rating: 9,
        content: "A thrilling experience with a compelling story and engaging combat.",
        author_id: "2",
        game_id: "2"
    },
    {
        id: "3",
        rating: 8,
        content: "A fantastic RPG with a rich narrative and complex characters.",
        author_id: "3",
        game_id: "3"
    }
];


const authors = [
    {
        id: "1",
        name: "Jane Doe",
        verified: true
    },
    {
        id: "2",
        name: "John Smith",
        verified: false
    },
    {
        id: "3",
        name: "Alice Johnson",
        verified: true
    }
];

export default { games, authors, reviews}