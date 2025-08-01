'use strict';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema
    .createTable('products', (table) => {
      table.uuid('id').primary().defaultTo(knex.fn.uuid());
      table.string('name').notNullable();
      table.float('price').notNullable();
      table.float('discount');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .then(() => {
      return knex('products').insert([]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('products');
};
