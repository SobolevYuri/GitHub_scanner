import axios from 'axios';
import { Url } from '../types/Url';
import { DataObject } from '../types/DataObject';

export const axiosGetResponseData = async (url: Url, options: Object): Promise<DataObject> => 
    (await axios.get(url, options)).data;
