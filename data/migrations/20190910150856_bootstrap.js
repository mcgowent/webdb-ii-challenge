
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.string('VIN').unique().notNullable()
        tbl.string('make').notNullable()
        tbl.string('model').notNullable()
        tbl.integer('mileage').notNullable()

        tbl.string('transmission')
        tbl.string('titleStatus')

    })
    // VIN, make, model, mileage
    // VIN: string 128
    //make: string
    //model: string
    //mileage: intereger

    // transmission type, and status of title(clean, salavage)
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};

// to create a migration: knex migrate:make
// to run all pending migrations: knex migrate:latest
// to undo migrations: knex migrate:rollback