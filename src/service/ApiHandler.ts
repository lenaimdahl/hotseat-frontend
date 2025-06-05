import axios from "axios";
import { API_URL } from "../config/config.index";

export class BackendAPI {
  private api: any;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
    });
  }

  async getLobby(code: string) {
    try {
      const { data } = await this.api.get(`/api/lobby/${code}`);
      return data;
    } catch (error) {
      console.error("Error while getting lobby:", error);
      throw error;
    }
  }

  async createLobby() {
    try {
      const { data } = await this.api.post("/api/lobby");
      return data;
    } catch (error) {
      console.error("Error while saving lobby:", error);
      throw error;
    }
  }

  async joinUser(lobbyCode: string, username: string) {
    try {
      const { data } = await this.api.post(`/api/lobby/${lobbyCode}/join`, {
        username,
      });
      console.log("Lobby created:", data);
      return { user: data.user };
    } catch (error) {
      console.log("Error while joining user to lobby:", error);
      throw error;
    }
  }
}
