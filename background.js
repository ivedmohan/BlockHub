let adBlockerEnabled = false;
let blockingStats = { totalBlocked: 0, blockedByCategory: {} };

const RULE_CATEGORIES = {
    ADS: 'ads',
    TRACKERS: 'trackers',
    ANALYTICS: 'analytics'
};

let rules = {
    [RULE_CATEGORIES.ADS]: [
        '*://*.doubleclick.net/*',
        '*://*.ads.pubmatic.com/*',
        '*://*.taboola.com/*',
        '*://*.adservice.google.com/*',
        '*://*.adbrite.com/*',
        '*://*.exponential.com/*',
        '*://*.adroll.com/*',
        '*://*.advertising.com/*',
        '*://*.adnxs.com/*',
        '*://*.adform.net/*',
        '*://*.adzerk.net/*',
        '*://*.adtechus.com/*',
        '*://*.adblade.com/*',
        '*://*.adk2x.com/*',
        '*://*.admarketplace.net/*',
        '*://*.admob.com/*',
        '*://*.adstir.com/*',
        '*://*.adtech.de/*',
        '*://*.adtraction.com/*',
        '*://*.advertserve.com/*',
        '*://adtago.s3.amazonaws.com/*',
        '*://advice-ads.s3.amazonaws.com/*',
        '*://pagead2.googleadservices.com/*',
        '*://adservetx.media.net/*',
        '*://ads.pinterest.com/*',
        '*://ads.youtube.com/*',
        '*://adtech.yahooinc.com/*',
        '*://gemini.yahoo.com/*',
        '*://ads.yahoo.com/*',
        '*://partnerads.ysm.yahoo.com/*',
        '*://offerwall.yandex.net/*',
        '*://adfox.yandex.ru/*',
        '*://adx.ads.oppomobile.com/*',
        '*://ck.ads.oppomobile.com/*',
        '*://data.ads.oppomobile.com/*',
        '*://adsfs.oppomobile.com/*',
        '*://open.oneplus.net/*',
        '*://click.oneplus.cn/*',
        '*://samsungads.com/*',
        '*://api-adservices.apple.com/*',
        '*://iadsdk.apple.com/*',
        '*://wd.adcolony.com/*',
        '*://ads30.adcolony.com/*',
        '*://adc3-launch.adcolony.com/*',
        '*://events3alt.adcolony.com/*',
        '*://static.media.net/*',
        '*://media.net/*',
        '*://adm.hotjar.com/*',
        '*://ads.linkedin.com/*',
        '*://ads-api.tiktok.com/*',
        '*://ads-sg.tiktok.com/*',
        '*://business-api.tiktok.com/*',
        '*://ads.tiktok.com/*'
    ],
    [RULE_CATEGORIES.TRACKERS]: [
        '*://*.adsafeprotected.com/*',
        '*://*.adsrvr.org/*',
        '*://click.googleanalytics.com/*',
        '*://insights.hotjar.com/*',
        '*://claritybt.freshmarketer.com/*',
        '*://fwtracks.freshmarketer.com/*',
        '*://log.pinterest.com/*',
        '*://trk.pinterest.com/*',
        '*://events.redditmedia.com/*',
        '*://log.fc.yahoo.com/*',
        '*://udcm.yahoo.com/*',
        '*://geo.yahoo.com/*',
        '*://udc.yahoo.com/*',
        '*://appmetrica.yandex.ru/*',
        '*://extmaps-api.yandex.net/*',
        '*://adfstat.yandex.ru/*',
        '*://config.unityads.unity3d.com/*',
        '*://adserver.unityads.unity3d.com/*',
        '*://auction.unityads.unity3d.com/*',
        '*://webview.unityads.unity3d.com/*',
        '*://bdapi-in-ads.realmemobile.com/*',
        '*://iot-logser.realme.com/*',
        '*://iot-eu-logser.realme.com/*',
        '*://bdapi-ads.realmemobile.com/*',
        '*://api.ad.xiaomi.com/*',
        '*://sdkconfig.ad.xiaomi.com/*',
        '*://sdkconfig.ad.intl.xiaomi.com/*',
        '*://data.mistat.rus.xiaomi.com/*',
        '*://tracking.rus.miui.com/*',
        '*://data.mistat.india.xiaomi.com/*',
        '*://data.mistat.xiaomi.com/*',
        '*://grs.hicloud.com/*',
        '*://logbak.hicloud.com/*',
        '*://logservice.hicloud.com/*',
        '*://logservice1.hicloud.com/*',
        '*://events.hotjar.io/*',
        '*://script.hotjar.com/*',
        '*://surveys.hotjar.com/*',
        '*://identify.hotjar.com/*',
        '*://careers.hotjar.com/*',
        '*://cdn.mouseflow.com/*',
        '*://cdn-test.mouseflow.com/*',
        '*://o2.mouseflow.com/*',
        '*://mouseflow.com/*',
        '*://tools.mouseflow.com/*',
        '*://freshmarketer.com/*',
        '*://upload.luckyorange.net/*',
        '*://cs.luckyorange.net/*',
        '*://settings.luckyorange.net/*',
        '*://luckyorange.com/*',
        '*://cdn.luckyorange.com/*',
        '*://w1.luckyorange.com/*',
        '*://api.luckyorange.com/*',
        '*://stats.wp.com/*',
        '*://pixel.facebook.com/*',
        '*://analytics.pointdrive.linkedin.com/*',
        '*://analytics.tiktok.com/*',
        '*://analytics-sg.tiktok.com/*',
        '*://log.byteoversea.com/*'
    ],
    [RULE_CATEGORIES.ANALYTICS]: [
        '*://analytics.google.com/*',
        '*://google-analytics.com/*',
        '*://ssl.google-analytics.com/*',
        '*://analytics.pinterest.com/*',
        '*://analytics.yahoo.com/*',
        '*://analytics.query.yahoo.com/*',
        '*://metrika.yandex.ru/*',
        '*://metrics.data.hicloud.com/*',
        '*://metrics2.data.hicloud.com/*',
        '*://smetrics.samsung.com/*',
        '*://analytics-api.samsunghealthcn.com/*',
        '*://samsung-com.112.2o7.net/*',
        '*://metrics.mzstatic.com/*',
        '*://metrics.icloud.com/*',
        '*://weather-analytics-events.apple.com/*',
        '*://notes-analytics-events.apple.com/*',
        '*://books-analytics-events.apple.com/*',
        '*://app.getsentry.com/*',
        '*://browser.sentry-cdn.com/*',
        '*://sessions.bugsnag.com/*',
        '*://notify.bugsnag.com/*',
        '*://api.bugsnag.com/*',
        '*://app.bugsnag.com/*',
        '*://realtime.luckyorange.com/*',
        '*://an.facebook.com/*',
        '*://static.ads-twitter.com/*',
        '*://ads-api.twitter.com/*',
        '*://events.reddit.com/*',
        '*://nmetrics.samsung.com/*'
    ]
};

let enabledCategories = Object.values(RULE_CATEGORIES);
let customRules = [];
let whitelist = [];

function updateAdBlocker() {
    browser.webRequest.onBeforeRequest.removeListener(blockRequest);
    
    if (adBlockerEnabled) {
        const activeRules = [
            ...customRules,
            ...enabledCategories.flatMap(category => rules[category])
        ];
        
        browser.webRequest.onBeforeRequest.addListener(
            blockRequest,
            { urls: activeRules },
            ['blocking']
        );
    }
}

function blockRequest(details) {
    if (isWhitelisted(details.url)) {
        return { cancel: false };
    }
    
    blockingStats.totalBlocked++;
    
    const category = getCategoryForUrl(details.url);
    if (category) {
        blockingStats.blockedByCategory[category] = (blockingStats.blockedByCategory[category] || 0) + 1;
    }
    
    console.log(`Blocked request to: ${details.url}`);
    return { cancel: true };
}

function getCategoryForUrl(url) {
    for (const [category, ruleSet] of Object.entries(rules)) {
        if (ruleSet.some(rule => new RegExp(rule.replace(/\*/g, '.*')).test(url))) {
            return category;
        }
    }
    return null;
}

function isWhitelisted(url) {
    return whitelist.some(domain => url.includes(domain));
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    try {
        switch (request.action) {
            case "toggleBlocking":
                adBlockerEnabled = request.enabled;
                updateAdBlocker();
                browser.storage.sync.set({ adBlockerEnabled });
                sendResponse({ success: true, enabled: adBlockerEnabled });
                break;
            case "getStats":
                sendResponse({ success: true, stats: blockingStats });
                break;
            case "updateCategories":
                enabledCategories = request.categories;
                updateAdBlocker();
                browser.storage.sync.set({ enabledCategories });
                sendResponse({ success: true });
                break;
            case "addCustomRule":
                customRules.push(request.rule);
                updateAdBlocker();
                browser.storage.sync.set({ customRules });
                sendResponse({ success: true });
                break;
            case "removeCustomRule":
                customRules = customRules.filter(rule => rule !== request.rule);
                updateAdBlocker();
                browser.storage.sync.set({ customRules });
                sendResponse({ success: true });
                break;
            case "addToWhitelist":
                whitelist.push(request.domain);
                updateAdBlocker();
                browser.storage.sync.set({ whitelist });
                sendResponse({ success: true });
                break;
            case "removeFromWhitelist":
                whitelist = whitelist.filter(domain => domain !== request.domain);
                updateAdBlocker();
                browser.storage.sync.set({ whitelist });
                sendResponse({ success: true });
                break;
            default:
                sendResponse({ success: false, message: "Unknown action" });
        }
    } catch (error) {
        console.error('Error in message listener:', error);
        sendResponse({ success: false, message: error.message });
    }
});

browser.storage.sync.get(['adBlockerEnabled', 'enabledCategories', 'customRules', 'whitelist']).then((data) => {
    adBlockerEnabled = data.adBlockerEnabled || false;
    enabledCategories = data.enabledCategories || Object.values(RULE_CATEGORIES);
    customRules = data.customRules || [];
    whitelist = data.whitelist || [];
    updateAdBlocker();
}).catch(error => console.error('Error loading settings:', error));