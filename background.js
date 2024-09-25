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
            // Blocking Tracking Identifiers (utm_, gclid, fbclid)
            {
                id: 24,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*utm_*',
                    resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest']
                }
            },
            {
                id: 25,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*gclid*',
                    resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest']
                }
            },
            {
                id: 26,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*fbclid*',
                    resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest']
                }
            },

            // Blocking Popups 
            {
                id: 27,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*popup*',
                    resourceTypes: ['sub_frame', 'script', 'image']
                }
            },
            {
                id: 28,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*banner*',
                    resourceTypes: ['sub_frame', 'script', 'image']
                }
            },
            // Blocking common advertisement file types
            {
                id: 29,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*.swf',
                    resourceTypes: ['object', 'other']
                }
            },
            {
                id: 30,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*.flv',
                    resourceTypes: ['object', 'other']
                }
            },

            // Blocking other common ad services
            {
                id: 31,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*ads*.js',
                    resourceTypes: ['script']
                }
            },
            {
                id: 32,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*advert*.js',
                    resourceTypes: ['script']
                }
            },
            {
                id: 33,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*adserver*.js',
                    resourceTypes: ['script']
                }
            },
            {
                id: 34,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*track*.js',
                    resourceTypes: ['script']
                }
            },
            {
                id: 35,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*pixel*.js',
                    resourceTypes: ['script']
                }
            },

            // Blocking error logging services
            {
                id: 36,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*sentry.io*',
                    resourceTypes: ['script', 'xmlhttprequest']
                }
            },
            {
                id: 37,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*logrocket.io*',
                    resourceTypes: ['script', 'xmlhttprequest']
                }
            },

            // Blocking all iframes and video ads
            {
                id: 38,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*iframe*',
                    resourceTypes: ['sub_frame']
                }
            },
            {
                id: 39,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*video*',
                    resourceTypes: ['sub_frame', 'media']
                }
            },
            {
                id: 40,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*trk*',
                    resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest']
                }
            },
            {
                id: 41,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*track-id*',
                    resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest']
                }
            },
            {
                id: 42,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*click-id*',
                    resourceTypes: ['main_frame', 'sub_frame', 'xmlhttprequest']
                }
            },

            // Add blocking for additional ad services
            {
                id: 43,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: 'adform.com',
                    resourceTypes: ['script', 'image', 'xmlhttprequest']
                }
            },
            {
                id: 44,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: 'openx.net',
                    resourceTypes: ['script', 'image', 'xmlhttprequest']
                }
            },

            // Block Google Analytics (or any other common analytics service)
            {
                id: 45,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: 'google-analytics.com',
                    resourceTypes: ['script', 'xmlhttprequest']
                }
            },
            {
                id: 46,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: 'googletagmanager.com',
                    resourceTypes: ['script', 'xmlhttprequest']
                }
            },
            {
                id: 47,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: 'doubleclick.net/pagead/*',
                    resourceTypes: ['script', 'xmlhttprequest']
                }
            },
            
            // Blocking autoplaying media
            {
                id: 48,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: '*autoplay*',
                    resourceTypes: ['media']
                }
            },

            // Blocking common retargeting platforms
            {
                id: 49,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: 'quantserve.com',
                    resourceTypes: ['script', 'image', 'xmlhttprequest']
                }
            },
            {
                id: 50,
                priority: 1,
                action: { type: 'block' },
                condition: {
                    urlFilter: 'media.net',
                    resourceTypes: ['script', 'image', 'xmlhttprequest']
                }
            },

            // Blocking unsecure requests (http instead of https)
            {
                id: 51,
                priority: 1,
                action: { type: 'upgradeScheme' },
                condition: {
                    urlFilter: 'http://*',
                    resourceTypes: ['main_frame', 'sub_frame', 'script', 'xmlhttprequest']
                }
            },
            {
                id: 52,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'hotjar.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 53,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'mc.yandex.ru', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 54,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: '*.swf', resourceTypes: ['object', 'other'] }
            },
            {
                id: 55,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: 'bugsnag.com', resourceTypes: ['script', 'xmlhttprequest'] }
            },
            {
                id: 56,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: '*://*.doubleclick.net/*', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 57,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: '*://partner.googleadservices.com/*', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 58,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: '*://*.2mdn.net/*', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 59,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: '*://*.adnxs.com/*', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            },
            {
                id: 60,
                priority: 1,
                action: { type: 'block' },
                condition: { urlFilter: '*://*.pubmatic.com/*', resourceTypes: ['script', 'image', 'xmlhttprequest'] }
            }
        ],
        removeRuleIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
    });

});


removeRuleIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
