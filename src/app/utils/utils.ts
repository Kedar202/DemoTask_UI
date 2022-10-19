import * as moment from "moment";

export const randomReferenceNumber = () => {
    return `CUS${moment().format('YYYYMMDD')}${Math.floor(Math.random()*(999-100+1)+100)}`
};