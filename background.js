chrome.runtime.onInstalled.addListener(() => {
    const blockList = [
        'doubleclick.net', 'ads.pubmatic.com', 'taboola.com', 'adservice.google.com', 
        'ad.doubleclick.net', 'googlesyndication.com', 'amazon-adsystem.com', 
        'connect.facebook.net', 'outbrain.com', 'criteo.com', 'scorecardresearch.com', 
        'adnxs.com', 'yimg.com', 'advertising.com', 'zedo.com', 'smartadserver.com', 
        'adsafeprotected.com', 'moatads.com', 'yieldmanager.com', 'revcontent.com', 
        'adform.com', 'openx.net', 'google-analytics.com', 'googletagmanager.com',
        'quantserve.com', 'media.net', 'sentry.io', 'logrocket.io',
        'hotjar.com', 'mc.yandex.ru', 'bugsnag.com'  
    ];

    const rules = blockList.map((url, index) => ({
        id: index + 1,
        priority: 1,
        action: { type: 'block' },
        condition: {
            urlFilter: `*://*.${url}/*`,
            resourceTypes: ['script', 'image', 'xmlhttprequest', 'sub_frame']
        }
    }));

    // Additional rules for special blocking
    rules.push(
        // Youtube ads
        { id: rules.length + 1, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*://*.youtube.com/get_video_info*', resourceTypes: ['script', 'xmlhttprequest'] }},
        { id: rules.length + 2, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*://*.youtube.com/watch*', resourceTypes: ['media'] }},
        // Tracking Identifiers
        { id: rules.length + 3, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*utm_*', resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest'] }},
        { id: rules.length + 4, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*gclid*', resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest'] }},
        { id: rules.length + 5, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*fbclid*', resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest'] }},
        // Popups and banners
        { id: rules.length + 6, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*popup*', resourceTypes: ['sub_frame', 'script', 'image'] }},
        { id: rules.length + 7, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*banner*', resourceTypes: ['sub_frame', 'script', 'image'] }},
        // Blocking common ad types
        { id: rules.length + 8, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*.swf', resourceTypes: ['object', 'other'] }},
        { id: rules.length + 9, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*.flv', resourceTypes: ['object', 'other'] }},
        // Blocking all iframes and video ads
        { id: rules.length + 10, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*iframe*', resourceTypes: ['sub_frame'] }},
        { id: rules.length + 11, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*video*', resourceTypes: ['sub_frame', 'media'] }},
        // Autoplay media
        { id: rules.length + 12, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*autoplay*', resourceTypes: ['media'] }},
        // Upgrade HTTP to HTTPS
        { id: rules.length + 13, priority: 1, action: { type: 'upgradeScheme' }, condition: { urlFilter: 'http://*', resourceTypes: ['main_frame', 'sub_frame', 'script', 'xmlhttprequest'] }},
        // Block all .gif and .png files from known ad domains
        { id: rules.length + 14, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*.gif', resourceTypes: ['image'] }},
        { id: rules.length + 15, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*.png', resourceTypes: ['image'] }},
        // Block common ad-related keywords in URLs
        { id: rules.length + 16, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*advert*', resourceTypes: ['script', 'image', 'xmlhttprequest', 'sub_frame'] }},
        { id: rules.length + 17, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*sponsor*', resourceTypes: ['script', 'image', 'xmlhttprequest', 'sub_frame'] }},
        { id: rules.length + 18, priority: 1, action: { type: 'block' }, condition: { urlFilter: '*analytic*', resourceTypes: ['script', 'image', 'xmlhttprequest'] }}
    );

    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: rules,
        removeRuleIds: rules.map(rule => rule.id)
    });
});