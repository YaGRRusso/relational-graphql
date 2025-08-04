/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { _empty as Query__empty } from './../schemas/base/resolvers/Query/_empty';
import    { me as Query_me } from './../schemas/users/resolvers/Query/me';
import    { product as Query_product } from './../schemas/products/resolvers/Query/product';
import    { products as Query_products } from './../schemas/products/resolvers/Query/products';
import    { secure as Query_secure } from './../schemas/users/resolvers/Query/secure';
import    { user as Query_user } from './../schemas/users/resolvers/Query/user';
import    { users as Query_users } from './../schemas/users/resolvers/Query/users';
import    { version as Query_version } from './../schemas/base/resolvers/Query/version';
import    { _empty as Mutation__empty } from './../schemas/base/resolvers/Mutation/_empty';
import    { addUserProducts as Mutation_addUserProducts } from './../schemas/users/resolvers/Mutation/addUserProducts';
import    { createProduct as Mutation_createProduct } from './../schemas/products/resolvers/Mutation/createProduct';
import    { createUser as Mutation_createUser } from './../schemas/users/resolvers/Mutation/createUser';
import    { deleteProduct as Mutation_deleteProduct } from './../schemas/products/resolvers/Mutation/deleteProduct';
import    { deleteUser as Mutation_deleteUser } from './../schemas/users/resolvers/Mutation/deleteUser';
import    { removeUserProducts as Mutation_removeUserProducts } from './../schemas/users/resolvers/Mutation/removeUserProducts';
import    { updateProduct as Mutation_updateProduct } from './../schemas/products/resolvers/Mutation/updateProduct';
import    { updateUser as Mutation_updateUser } from './../schemas/users/resolvers/Mutation/updateUser';
import    { Product } from './../schemas/products/resolvers/Product';
import    { User } from './../schemas/users/resolvers/User';
import    { Email } from './../schemas/base/resolvers/Email';
import    { DateResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { _empty: Query__empty,me: Query_me,product: Query_product,products: Query_products,secure: Query_secure,user: Query_user,users: Query_users,version: Query_version },
      Mutation: { _empty: Mutation__empty,addUserProducts: Mutation_addUserProducts,createProduct: Mutation_createProduct,createUser: Mutation_createUser,deleteProduct: Mutation_deleteProduct,deleteUser: Mutation_deleteUser,removeUserProducts: Mutation_removeUserProducts,updateProduct: Mutation_updateProduct,updateUser: Mutation_updateUser },
      
      Product: Product,
User: User,
Email: Email,
Date: DateResolver
    }