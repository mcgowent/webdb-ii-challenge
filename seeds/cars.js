
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate() // resets the primary key
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '123123123123', make: "Ford", model: "Mustang", mileage: "114111" },
        { VIN: '165163216516', make: "Chevy", model: "Van", mileage: "111411" },
        { VIN: '185436216544', make: "Chevy", model: "Camazo", mileage: "111111" },
      ]);
    });
};
