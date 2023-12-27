/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('categoría');
    table.string('descripcion');
    table.integer('cantidad').unsigned().notNullable();
    table.decimal('precio', 10, 3);
    table.boolean('is_active');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
