// ============================================
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "zazkiyaalmaghviraa",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "celebrate special day",

    // emoji that will float around the screen
    floatingEmojis: {
        hearts: ['💋💋', '💋', '💋', '💋', '💋', '💋','💋'],  // Heart emojis
        bears: ['💋💋', '💋💋']                    
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "remember something?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "yes!!!"                              // Secret hover message
        },
        second: {
            text: "seberapa cinta sama cowonya",                          // For the love meter
            startText: "",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Ready for the suprise", // The big question!
            yesBtn: "gass!",                                             // Text for "Yes" button
            noBtn: "sip"                                                 // Text for "No" button
        }
        
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "dih segini doang",  // Shows when they go past 5000%
        high: "ga peka",              // Shows when they go past 1000%
        normal: "ckptw"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "WISHLIST!!!!!",
        message: "semoga untuk kedepannya menjadi lebih baik dan cinta nyaa tetap BESARRRR DAN KITAA PUNYA TUJUAN YANG SAMAAA",
        emojis: "💋💋💋💋💋💋💋💋💋💋💋"  // These will bounce around
    },

    
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "concept.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;

// Add configuration for button-next
CONFIG.navigation = {
    nextPageUrl: "coba.html", // URL to navigate when button-next is clicked
    nextButtonText: "Next ❤️" // Text for the button-next
};