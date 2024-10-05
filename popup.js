document.addEventListener('DOMContentLoaded', () => {
    const toggleAdBlockerInput = document.getElementById('toggle-adblocker');
    const statusText = document.getElementById('status');
    const categoryInputs = document.querySelectorAll('.categories input');
    const customRuleInput = document.getElementById('custom-rule-input');
    const addCustomRuleButton = document.getElementById('add-custom-rule');
    const customRulesList = document.getElementById('custom-rules-list');
    const whitelistInput = document.getElementById('whitelist-input');
    const addToWhitelistButton = document.getElementById('add-to-whitelist');
    const whitelistElement = document.getElementById('whitelist');
    const totalBlockedElement = document.getElementById('total-blocked');

    function toggleAdBlocker(enabled) {
        browser.runtime.sendMessage({ action: "toggleBlocking", enabled: enabled }).then((response) => {
            if (response.success) {
                console.log('Ad blocker state updated:', enabled);
                updateUI(enabled);
            }
        });
    }

    function updateCategories() {
        const enabledCategories = Array.from(categoryInputs)
            .filter(input => input.checked)
            .map(input => input.id.replace('category-', ''));
        
        browser.runtime.sendMessage({ action: "updateCategories", categories: enabledCategories });
    }

    function addCustomRule() {
        const rule = customRuleInput.value.trim();
        if (rule) {
            browser.runtime.sendMessage({ action: "addCustomRule", rule: rule }).then((response) => {
                if (response.success) {
                    customRuleInput.value = '';
                    updateCustomRulesList();
                }
            });
        }
    }

    function removeCustomRule(rule) {
        browser.runtime.sendMessage({ action: "removeCustomRule", rule: rule }).then((response) => {
            if (response.success) {
                updateCustomRulesList();
            }
        });
    }

    function addToWhitelist() {
        const domain = whitelistInput.value.trim();
        if (domain) {
            browser.runtime.sendMessage({ action: "addToWhitelist", domain: domain }).then((response) => {
                if (response.success) {
                    whitelistInput.value = '';
                    updateWhitelist();
                }
            });
        }
    }

    function removeFromWhitelist(domain) {
        browser.runtime.sendMessage({ action: "removeFromWhitelist", domain: domain }).then((response) => {
            if (response.success) {
                updateWhitelist();
            }
        });
    }

    function updateUI(enabled) {
        toggleAdBlockerInput.checked = enabled;
        statusText.textContent = enabled ? 'Blocker is ON' : 'Blocker is OFF';
        updateStats();
        updateCustomRulesList();
        updateWhitelist();
    }

    function updateStats() {
        browser.runtime.sendMessage({ action: "getStats" }).then((response) => {
            if (response.success) {
                totalBlockedElement.textContent = response.stats.totalBlocked;
            }
        });
    }

    function updateCustomRulesList() {
        browser.storage.sync.get('customRules').then((data) => {
            const customRules = data.customRules || [];
            customRulesList.innerHTML = '';
            customRules.forEach(rule => {
                const li = document.createElement('li');
                li.textContent = rule;
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => removeCustomRule(rule);
                li.appendChild(removeButton);
                customRulesList.appendChild(li);
            });
        });
    }

    function updateWhitelist() {
        browser.storage.sync.get('whitelist').then((data) => {
            const whitelist = data.whitelist || [];
            whitelistElement.innerHTML = '';
            whitelist.forEach(domain => {
                const li = document.createElement('li');
                li.textContent = domain;
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => removeFromWhitelist(domain);
                li.appendChild(removeButton);
                whitelistElement.appendChild(li);
            });
        });
    }

    toggleAdBlockerInput.addEventListener('change', () => {
        toggleAdBlocker(toggleAdBlockerInput.checked);
    });

    categoryInputs.forEach(input => {
        input.addEventListener('change', updateCategories);
    });

    addCustomRuleButton.addEventListener('click', addCustomRule);
    addToWhitelistButton.addEventListener('click', addToWhitelist);

    browser.storage.sync.get('adBlockerEnabled').then((data) => {
        const adBlockerEnabled = data.adBlockerEnabled || false;
        updateUI(adBlockerEnabled);
    });
});