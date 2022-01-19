import http from "../http-common";

class BailleurDataService {
    //recuperer tout les bailleur
  getAll() {
    return http.get("/bailleur/liste");
  }

  get(id) {
    return http.get(`/bailleur/${id}`);
  }

  create(data) {
    return http.post("/bailleur/nouveau", data);
  }

  update(id, data) {
    return http.put(`/bailleur/modifie_bail/${id}`, data);
  }

  delete(id) {
    return http.delete(`/bailleur/${id}`);
  }

  /*deleteAll() {
    return http.delete(`/tutorials`);
  }
  

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }*/
}

export default new BailleurDataService();