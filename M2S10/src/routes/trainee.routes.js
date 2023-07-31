const {
  createOneTrainee,
  listTrainees,
  listOneTrainee,
  updateOneTrainee,
} = require("../controllers/trainee.controller");
const { Router } = require("express");
const { auth } = require("../middlewares/auth");

class TraineeRouter {
  routesFromTrainee() {
    const traineeRoutes = Router();
    traineeRoutes.post("/createOneTrainee", auth, createOneTrainee);
    traineeRoutes.get("/listTrainees", auth, listTrainees);
    traineeRoutes.get("/listOneTrainee", auth, listOneTrainee);
    traineeRoutes.put("/updateOneTrainee", auth, updateOneTrainee);
    return traineeRoutes;
  }
}

module.exports = new TraineeRouter();
