import http from "../http-common";

class BeneficiariosDataService {
  getAll(params) {
    return http.get("/jornadas", { params });
  }

  delete(id) {
    return http.delete("/jornadas/" + id);
  }

  getEstados() {
    return http.get("/estados");
  }

  // other CRUD methods
}

export default new BeneficiariosDataService();
