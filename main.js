// No dynamic logic required for this minimalist design.
// You may expand this file for interactive effects if needed in future.

// AJAX loader for profile pages, music keeps playing
function loadProfile(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Only get the relevant profile-page div
            const temp = document.createElement('div');
            temp.innerHTML = html;
            const profile = temp.querySelector('.profile-page');
            document.getElementById('profile-content').innerHTML = '';
            if (profile) {
                document.getElementById('profile-content').appendChild(profile);
            }
        })
        .catch(() => {
            document.getElementById('profile-content').innerHTML = '<div style="padding:2em;">No se pudo cargar el perfil.</div>';
        });
}

// Load first profile by default, optional
// loadProfile('sofia-moreno.html');
