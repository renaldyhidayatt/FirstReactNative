const Employee = require("../models/employee.models");

exports.getAll = async (req, res) => {
  await Employee.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.Adding = async (req, res) => {
  const newEmp = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    salary: req.body.salary,
    position: req.body.position,
  });

  await newEmp
    .save()
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateData = async (req, res) => {
  await Employee.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    salary: req.body.salary,
    position: req.body.position,
  })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteData = async (req, res) => {
  await Employee.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
