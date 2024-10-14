document.addEventListener('DOMContentLoaded', () => {
    const toggleAdBlockerInput = document.getElementById('toggle-adblocker');
    const statusText = document.getElementById('status');

    function toggleAdBlocker(enabled) {
        chrome.runtime.sendMessage({ action: "toggleBlocking", enabled: enabled }, (response) => {
            if (response.success) {
                console.log('Ad blocker state updated:', enabled);
                chrome.storage.local.set({ adBlockerEnabled: enabled });
                updateUI(enabled);
            }
        });
    }

    function updateUI(enabled) {
        toggleAdBlockerInput.checked = enabled;
        statusText.textContent = enabled ? 'Blocker is ON' : 'Blocker is OFF';
        statusText.style.color = enabled ? '#00ff00' : '#ff0000';
    }

    toggleAdBlockerInput.addEventListener('change', () => {
        const isEnabled = toggleAdBlockerInput.checked;
        updateUI(isEnabled); // Immediately update UI
        toggleAdBlocker(isEnabled);
    });

    chrome.storage.local.get('adBlockerEnabled', (data) => {
        const adBlockerEnabled = data.adBlockerEnabled || false;
        toggleAdBlockerInput.checked = adBlockerEnabled; // Set the initial state of the toggle
        updateUI(adBlockerEnabled);
    });
});
