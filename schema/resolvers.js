const { UserList, MovieList } = require("./FakeData.js");
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parents, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        }
    },

    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) =>
                movie.year >= 2000 && movie.year <= 2021
            )
        }
    },

    Mutation: {
        createUser: (parent, arges) => {
            const user = arges.input;

            const lastId = UserList[UserList.length - 1].id
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        }
    }
}

module.exports = { resolvers };