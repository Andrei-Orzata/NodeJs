const findUser = (username, password) => {
    if (username === 'admin' && password === '1234') {
        return username
    } else {
        return null
    }
}
module.exports = findUser
