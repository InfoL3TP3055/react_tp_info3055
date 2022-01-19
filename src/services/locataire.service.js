import http from "../http-common";

class LocataireDataService {
    //recuperer tout les locataires
  getAll() {
    return http.get("/locataire/liste");
  }

  get(locatid) {
    return http.get(`/locataire/${locatid}`);
  }

  create(data) {
    return http.post("/locataire/nouveau", data);
  }

  update(locatid, data) {
    return http.put(`/locataire/modifie_loca/${locatid}`, data);
  }

  delete(locatid) {
    return http.delete(`/locataire/${locatid}`);
  }

  /*deleteAll() {
    return http.delete(`/tutorials`);
  }
  

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }*/
}

export default new LocataireDataService();