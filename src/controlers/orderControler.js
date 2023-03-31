import Model from "../models";

const { Order, User } = Model;

// Retrieve all Orders from the database.
export const getAllOrders = (req, res) => {
    Order.findAll({include: User})
      .then((data) => {
        return res.status(200).json({
          status: "success",
          message: "Orders successfully retrieved",
          payload: data,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: "error",
          message: "Something happened retrieving all orders. " + err.message,
          payload: null,
        });
      });
  };