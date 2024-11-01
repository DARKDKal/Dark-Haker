import { database, ref, onValue } from './firebase-config.js';

const appList = document.getElementById('appList');

onValue(ref(database, 'apps'), (snapshot) => {
    appList.innerHTML = '';
    snapshot.forEach(childSnapshot => {
        const app = childSnapshot.val();
        const appItem = document.createElement('div');
        appItem.innerHTML = `<strong>${app.name}</strong><br><span>${app.description}</span><br><hr>`;
        appList.appendChild(appItem);
    });
});
