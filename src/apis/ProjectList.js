import axios from 'axios';

const getProjectList = (async () => {
    try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbw5LvdR-rN92zHfS7waUWub4OLY9oWvxEyovpFrvYuVmowMABhDobCtS-iJGuSH77ks/exec?action=readData');
        return response.data;
    } catch (error) {
        console.error(error);
    };
});

export { getProjectList }
