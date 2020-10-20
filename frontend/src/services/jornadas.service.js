import http from "../http-common";

class BeneficiariosDataService {
  getAll(params) {
    return http.get("/jornadas", { params });
  }

  getEstados() {
    return http.get("/estados");
  }

  // other CRUD methods
}

export default new BeneficiariosDataService();
