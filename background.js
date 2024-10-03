chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
            {
                id: 1,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'doubleclick.net', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 2,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'ads.pubmatic.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 3,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'taboola.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 4,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adservice.google.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 5,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'ad.doubleclick.net', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 6,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'googlesyndication.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 7,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'amazon-adsystem.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 8,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'connect.facebook.net', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 9,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'outbrain.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 10,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'criteo.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 11,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'scorecardresearch.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 12,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adnxs.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 13,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'yimg.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 14,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'advertising.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 15,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'zedo.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 16,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'smartadserver.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 17,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adsafeprotected.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 18,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'moatads.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 19,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'yieldmanager.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 20,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'revcontent.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 21,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: '*://*.youtube.com/get_video_info*', resourceTypes: ['script', 'xmlhttprequest'] }
            },
            {
                id: 22,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: '*://*.youtube.com/watch*', resourceTypes: ['media'] }
            },
            {
                id: 23,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: '*://*.googleads.g.doubleclick.net/*', resourceTypes: ['script', 'xmlhttprequest'] }
            },
            {
                id: 24,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'media.net', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 25,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'gumgum.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 26,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'mediafire.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 27,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'revcontent.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 28,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'popads.net', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 29,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adroll.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 30,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adserver.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 31,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adtech.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 32,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'servedbyadserver.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 33,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'ads.yahoo.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 34,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adfly.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 35,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'admarketplace.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 36,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adperceptions.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 37,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adroll.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 38,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'mopub.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 39,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'clicksor.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 40,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adnetwork.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 41,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'advertisingnetwork.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 42,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'vungle.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 43,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'yahoo.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 44,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'tremorhub.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 45,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adbutler.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 46,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'popcash.net', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 47,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'admaster.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 48,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'juicyads.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 49,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'popunder.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 50,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'adf.ly', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            }
            // You can continue adding more blocking rules here...
        ],
        removeRuleIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
    });
});
