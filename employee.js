const { db } = require('./data')

const fetchUserById = (id, callback) => {
    if (typeof id === 'number') {

        setTimeout(() => {
        const results = db.users.find(i => i.id === id);
        results ?
            callback(null, results) :
            callback('Not found', null);
        }, 2000);
    }
    else {
        callback('The number provided must be of type number', null);
    }
};

fetchUserById(1, (err, user) => {
    if (err) {
        console.log('Error:', err);
        return;
    }
    console.log('User Details:', user);
});

console.log('Execution after fetchUserById');