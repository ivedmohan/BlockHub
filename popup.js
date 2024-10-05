document.addEventListener('DOMContentLoaded', () => {
    const toggleAdBlockerInput = document.getElementById('toggle-adblocker');
    const statusText = document.getElementById('status');

    function toggleAdBlocker(enabled) {
        browser.runtime.sendMessage({ action: "toggleBlocking", enabled: enabled }).then((response) => {
            if (response.success) {
                console.log('Ad blocker state updated:', enabled);
                browser.storage.local.set({ adBlockerEnabled: enabled });
                updateUI(enabled);
            }
        });
    }

    function updateUI(enabled) {
        toggleAdBlockerInput.checked = enabled; 
        statusText.textContent = enabled ? 'Blocker is ON' : 'Blocker is OFF';
    }

    toggleAdBlockerInput.addEventListener('change', () => {
        const isEnabled = toggleAdBlockerInput.checked; 
        toggleAdBlocker(isEnabled); 
    });

    browser.storage.local.get('adBlockerEnabled').then((data) => {
        const adBlockerEnabled = data.adBlockerEnabled || false; 
        updateUI(adBlockerEnabled);
    });
});