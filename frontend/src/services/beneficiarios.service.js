import http from "../http-common";

class BeneficiariosDataService {
    getAll(params) {
        return http.get("/beneficiarios", { params });
    }

    // other CRUD methods
}

export default new BeneficiariosDataService();