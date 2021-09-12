const db = require('./db.js')

const Query = {
    jobs: () => db.jobs.list()
}

module.exports = {Query};