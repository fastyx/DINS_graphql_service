const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const { UserType } = require("../schemas/users");
const data = require("../models/users");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let users = {
    type: new GraphQLList(UserType),
    args: { id: { type: GraphQLID }, username: { type: GraphQLString }, email: { type: GraphQLString } },
    async resolve(parentValue, args) {
        return await data.getUsers();
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.users = users;