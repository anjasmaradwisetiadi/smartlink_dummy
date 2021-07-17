import {enviroments} from '../enviroments/enviroments'
import {dataEmployee} from './dataEmployee'
import { dataBank } from './dataBank'

export const collectionUrl={
    // baseInquiry: enviroments.urlBase+'salary/inquiry',
    // baseBanks: enviroments.urlBase+'salary/bank',
    baseInquiry: dataEmployee,
    baseBanks: dataBank,
    baseSubmitGaji:enviroments.urlBase+'salary/save'
}