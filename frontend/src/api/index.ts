import axios from "axios";

export default class useAPI {
  public baseUrlRoute: string = "http://localhost:7000/api";

  get users(): { [key: string]: any } {
    return {
      getUsers: () => axios.get(this.baseUrlRoute + "/users"),
      createUser: (data) => axios.post(this.baseUrlRoute + "/users", data),
    };
  }
}
