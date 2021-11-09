import { nasaAPI } from "./AxiosService"

class NasaAPODService{
    async getAPOD() {
        await nasaAPI.get()
    }

}

export const nasaAPODService = new NasaAPODService