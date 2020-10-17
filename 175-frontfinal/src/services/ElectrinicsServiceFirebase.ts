import ElectronicsType from "../models/ElectronicsType"
import {Observable} from "rxjs";
import {UserCart} from "./ElectrinicsServiceFirebaseImpl"
import {collectionData} from "rxfire/firestore";
import {map} from "rxjs/operators";
export default interface ElectrinicsServiceFirebase {
    addElectronics(empl: ElectronicsType):Promise<any>;
    removeElectronics(empl: ElectronicsType): Promise<any>;
    getAllElectronics(): Observable<ElectronicsType[]>;
    updateElectronics(empl: ElectronicsType): Promise<any>;
    getSpecificElectronicsO(itemsId: number[]): Observable<ElectronicsType[]>;
    //  Promise<ElectronicsType>
    // getSpecificElectronicsP(itemsId: number[]): any;
    getSpecificElectronicsP(itemsId: number[]): Observable<ElectronicsType[]>;
    getAllElectronicsTV(): Observable<ElectronicsType[]> ;
    getAllElectronicsComputer(): Observable<ElectronicsType[]>;
    getAllElectronicsMobile(): Observable<ElectronicsType[]> ;
    //TODO make in separate interface
    addToCart(item: UserCart):Promise<any>;
    getAllCart(): Observable<{cart:[]}>;
    deleteItemFromCart(item: UserCart): Promise<any>;
    itemWasBoughtedFromCart(item: UserCart): Promise<any>;
    itemWasBoughtedFromStart(item: UserCart): Promise<any>
    addToBuy(item: UserCart): Promise<any>;
    getAllCartBought(): Observable<any>;
}