const { UserList } = require("./FakeData.js");

const resolvers = {
    Query: {
        users() {
            return UserList;
        }
    }
}

module.exports = { resolvers };