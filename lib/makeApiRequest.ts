import axios from "axios";

type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export async function makeApiRequest<T>(data: T, reset: () => void, method: HttpMethod, url: string) {
    try {
        const response = await axios({
          method,
          url,
          data: JSON.stringify(data),
          headers: {
            "Content-type": "application/json"
          } 
        });
        reset();
        return response;
    } catch (error) {
        console.log(error);
    }
}