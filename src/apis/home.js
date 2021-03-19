import { LOGIN } from '../config/urls';
import { apiDelete, apiGet, apiPost, apiPut } from '../utils/utils';




export function GetUserProfile(query) {
  return apiGet(LOGIN + query);
}
