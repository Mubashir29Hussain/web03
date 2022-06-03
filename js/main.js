new TypeIt("#type1", {
        speed: 100,
        loop: true,
        waitUntilVisible: true,
    })
    .type("Find and Meet New Gym Buddies Nearby.", {
        delay: 400
    })
    .pause(500)
    .go();

new TypeIt("#type2", {
        speed: 100,
        loop: true,
        waitUntilVisible: true,
    })
    .type("Find your gym buddy and have a great session together.", {
        delay: 400
    })
    .pause(500)
    .go();

AOS.init();