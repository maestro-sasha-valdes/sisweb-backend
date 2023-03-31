import Model from "../models";

const { User, Order } = Model;

// Retrieve all Users from the database.
export const getAllUsers = (req, res) => {
    User.findAll({include: Order})
      .then((data) => {
        return res.status(200).json({
          status: "success",
          message: "Users successfully retrieved",
          payload: data,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: "error",
          message: "Something happened retrieving all Users. " + err.message,
          payload: null,
        });
      });
  };