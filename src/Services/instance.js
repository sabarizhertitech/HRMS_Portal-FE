// import axios from "axios";


// // const baseURL = "http://localhost:5000/";
// const baseURL = "http://3.110.123.192:5000";

// const authInstance = axios.create({
//   baseURL: baseURL,
// });

// const portalInstance = axios.create({
//   baseURL: baseURL,
// });

// portalInstance.interceptors.request.use((config) => {
//   const portalData = sessionStorage.getItem("Erti-Portal");

//   if (portalData) {
//     try {
//       const { token } = JSON.parse(portalData);
//       if (token) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//       }
//     } catch (error) {
//       console.error("Error parsing portal data:", error);
//     }
//   }

//   return config;
// });

// portalInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       sessionStorage.removeItem("Erti-Portal");
//       window.location.href = "/";
//     }
//     return Promise.reject(error);
//   }
// );

// export { authInstance, portalInstance };



import axios from "axios";

// Using relative base URL routes requests through Amplify's HTTPS proxy
const baseURL = "/";

const authInstance = axios.create({
  baseURL: baseURL,
});

const portalInstance = axios.create({
  baseURL: baseURL,
});

portalInstance.interceptors.request.use((config) => {
  const portalData = sessionStorage.getItem("Erti-Portal");

  if (portalData) {
    try {
      const { token } = JSON.parse(portalData);
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error parsing portal data:", error);
    }
  }

  return config;
});

portalInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem("Erti-Portal");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export { authInstance, portalInstance };