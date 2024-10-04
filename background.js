let adBlockerEnabled = false;

function updateAdBlocker() {
  if (adBlockerEnabled) {
    chrome.declarativeNetRequest.updateDynamicRules(
      {
        removeRuleIds: Array.from({ length: 30 }, (_, i) => i + 1),
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error(
            "Error removing rules:",
            JSON.stringify(chrome.runtime.lastError)
          );
        } else {
          chrome.declarativeNetRequest.updateDynamicRules(
            {
              addRules: [
                {
                  id: 1,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "doubleclick.net",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 2,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "ads.pubmatic.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 3,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "taboola.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 4,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "adservice.google.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 5,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "ad.doubleclick.net",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 6,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "googlesyndication.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 7,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "amazon-adsystem.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 8,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "connect.facebook.net",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 9,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "outbrain.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 10,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "criteo.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 11,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "scorecardresearch.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 12,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "adnxs.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 13,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "yimg.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 14,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "advertising.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 15,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "zedo.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 16,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "smartadserver.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 17,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "adsafeprotected.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 18,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "moatads.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 19,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "yieldmanager.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 20,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "revcontent.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 21,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "*://*.youtube.com/get_video_info*",
                    resourceTypes: ["script", "xmlhttprequest"],
                  },
                },
                {
                  id: 22,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "*://*.youtube.com/watch*",
                    resourceTypes: ["media"],
                  },
                },
                {
                  id: 23,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "*://*.googleads.g.doubleclick.net/*",
                    resourceTypes: ["script", "xmlhttprequest"],
                  },
                },
                {
                  id: 24,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "media.net",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 25,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "gumgum.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 26,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "mediafire.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 27,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "revcontent.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 28,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "popads.net",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 29,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "adroll.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },

                {
                  id: 34,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "doubleverify.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },

                {
                  id: 35,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "bidr.io",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 36,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "triplelift.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 37,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "adsrvr.org",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 38,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "appnexus.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 39,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "adsymptotic.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },
                {
                  id: 42,
                  priority: 1,
                  action: { type: "block" },
                  condition: {
                    urlFilter: "mediaplex.com",
                    resourceTypes: ["script", "image", "xmlhttprequest"],
                  },
                },

                // You can continue adding more blocking rules here...
              ],
              removeRuleIds: [], // No rules to remove when enabling
            },
            () => {
              if (chrome.runtime.lastError) {
                console.error(
                  "Error enabling ad blocking:",
                  JSON.stringify(chrome.runtime.lastError)
                );
              }
            }
          );
        }
      }
    );
  } else {
    // Disable ad blocking rules
    chrome.declarativeNetRequest.updateDynamicRules(
      {
        removeRuleIds: Array.from({ length: 30 }, (_, i) => i + 1),
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error(
            "Error disabling ad blocking:",
            JSON.stringify(chrome.runtime.lastError)
          );
        }
      }
    );
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleBlocking") {
    adBlockerEnabled = request.enabled;
    updateAdBlocker();
    sendResponse({ success: true });
  } else {
    sendResponse({ success: false });
  }
});

chrome.storage.sync.get("adBlockerEnabled", (data) => {
  adBlockerEnabled = data.adBlockerEnabled || false;
  updateAdBlocker();
});
