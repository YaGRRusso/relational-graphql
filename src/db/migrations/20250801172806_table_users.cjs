'use strict';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema
    .createTable('users', (table) => {
      table.uuid('id').primary().defaultTo(knex.fn.uuid());
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.integer('age');
      table.float('wage');
      table.boolean('admin').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.enu('status', ['ACTIVE', 'INACTIVE']).defaultTo('ACTIVE');
    })
    .then(() => {
      return knex('users').insert([]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
