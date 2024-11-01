import { database, ref, set, push } from './firebase-config.js';

document.getElementById('addAppButton').addEventListener('click', () => {
    const name = document.getElementById('appName').value;
    const description = document.getElementById('appDescription').value;

    if (name && description) {
        const appRef = push(ref(database, 'apps'));
        set(appRef, {
            name: name,
            description: description
        }).then(() => {
            alert('تمت إضافة التطبيق بنجاح');
            document.getElementById('appName').value = '';
            document.getElementById('appDescription').value = '';
        }).catch(error => {
            alert('حدث خطأ: ' + error.message);
        });
    } else {
        alert('يرجى ملء جميع الحقول');
    }
});
