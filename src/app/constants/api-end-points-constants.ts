import { environment } from "../../app/envirnoment/environment"

export class API_END_POINTS{
     public static user = {
        postLogin:`${environment.serverBaseUrl}/auth/login`
     }
}