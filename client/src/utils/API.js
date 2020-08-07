import axios from "axios";

export default {
  //   getNumbers: function () {
  //     return axios.get("/api/routes/numbers");
  //   },
  //   // Gets the powerball number with the given id
  //   getNumber: function (id) {
  //     return axios.get("/api/routes/numbers/" + id);
  //   },
  //   // Deletes the powerball number with the given id
  //   deleteNumber: function (id) {
  //     return axios.delete("/api/routes/numbers/" + id);
  //   },
  // Saves apowerball number to the database
  saveDemoData: function (numberData) {
    return axios.post("/api/routes/numbers", numberData);
  },
};
