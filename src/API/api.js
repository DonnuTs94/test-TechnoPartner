import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://soal.staging.id/",
})

export { axiosInstance }
