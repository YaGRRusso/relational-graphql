'use strict';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('users_products', (table) => {
    table.uuid('user_id').notNullable().references('users.id');
    table.uuid('product_id').notNullable().references('products.id');
    table.primary(['user_id', 'product_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('users_products').then(() => {
    return knex('users_products').insert([]);
  });
};
