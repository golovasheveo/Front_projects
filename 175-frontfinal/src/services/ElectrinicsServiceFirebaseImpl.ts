import ElectrinicsServiceFirebase from "./ElectrinicsServiceFirebase";
import ElectronicsType from "../models/ElectronicsType";
import {Observable, of} from "rxjs";
import appFirebase from "../config/firebaseConf";
import {collectionData, docData} from "rxfire/firestore";
import {map, mergeMap} from "rxjs/operators";
import firebase from "firebase";
import {UserData} from "./AuthService";
import {authState} from "rxfire/auth";
export type UserCart = {
    mail: string,
    id: number,
}
export default class ElectrinicsServiceFirebaseImpl implements ElectrinicsServiceFirebase {
    db: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
    cartDb: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
    constructor(collection: string) {
        this.db = appFirebase.firestore().collection(collection);
        this.cartDb = appFirebase.firestore().collection('cart');//TODO make separate confiq file
    }
    exists(id: number) : Promise<boolean> {
        return this.db.doc(id.toString()).get().then(doc => doc.exists);
    }
    addElectronics(item: ElectronicsType): Promise<any> {
        return this.db.doc(item.id.toString()).set(item)
    }
    async removeElectronics(empl: ElectronicsType): Promise<any> {
        if (await this.exists(empl.id)) {
            return this.db.doc(empl.id.toString()).delete();
        }
    }
    async updateElectronics(empl: ElectronicsType): Promise<any> {
        if (await this.exists(empl.id)) {
            return this.db.doc(empl.id.toString()).set(empl)
        }
    }
    getAllElectronics(): Observable<ElectronicsType[]> {
        return collectionData<ElectronicsType>(this.db) //что я принимаю (Типизация как Props)
    }
    getAllElectronicsTV(): Observable<ElectronicsType[]> {
        return collectionData<ElectronicsType>(this.db).pipe(map(item => {
            return item.filter(dep => dep.department === "Tv")
        }))
    }
    getAllElectronicsComputer(): Observable<ElectronicsType[]> {
        return collectionData<ElectronicsType>(this.db).pipe(map(item => {
            return item.filter(dep => dep.department === "Computer")
        }))
    }
    getAllElectronicsMobile(): Observable<ElectronicsType[]> {
        return collectionData<ElectronicsType>(this.db).pipe(map(item => {
            return item.filter(dep => dep.department === "Mobile")
        }))
    }
    //USER PART //TODO ArchThinking (separate Service?)
    existsCart(mail: string) : Promise<boolean> {
        return this.cartDb.doc(mail).get().then(doc => doc.exists)
    }
    async addToCart(item: UserCart): Promise<any> {
        if(await this.existsCart(item.mail)){
            return this.cartDb.doc(item.mail).update({
                cart: firebase.firestore.FieldValue.arrayUnion(item.id
                )})
        }
        return this.cartDb.doc(item.mail).set({user: item.mail,cart:[item.id], bought:[]})
    }
    async addToBuy(item: UserCart): Promise<any> {
        if(await this.existsCart(item.mail)){
            return this.cartDb.doc(item.mail).update({
                bought: firebase.firestore.FieldValue.arrayUnion(item.id
                )})
        }
        return this.cartDb.doc(item.mail).set({user: item.mail,cart:[], bought:[item.id]})
    }
    getAllCart(): Observable<any> {
        return authState(appFirebase.auth())
            .pipe(mergeMap<firebase.User, Observable<any>>(user => {
                if (user && user.email) {
                    return docData(appFirebase.firestore().collection('cart').doc(user.email))
                        .pipe(map(data => {
                            return data
                        }))
                }
                return of({})
            }))
    }
    getSpecificElectronicsP(itemsId: number[]): Observable<ElectronicsType[]> {
        return collectionData<ElectronicsType>(this.db).pipe(
            map(value => {
                // [{…}, {…}, {…}]
                return value.filter(item =>
                    // console.log("ITEM",item)
                    // item.id.toString()
                    itemsId.includes(Number(item.id))
                )
            })
        )
    }
    getSpecificElectronicsO(itemsId: number[]): Observable<ElectronicsType[]> {
        return collectionData<ElectronicsType>(this.db)
    }
    async deleteItemFromCart(item: UserCart): Promise<any>  {
        if(await this.existsCart(item.mail)){
            return this.cartDb.doc(item.mail).update({
                cart: firebase.firestore.FieldValue
                    .arrayRemove(item.id)
            })
        }
        return false
    }
    async itemWasBoughtedFromCart(item: UserCart): Promise<any> {
        this.deleteItemFromCart(item).then(
            await this.addToBuy(item)
        )
    }
    async itemWasBoughtedFromStart(item: UserCart): Promise<any> {
        await this.addToBuy(item)
    }
    // getAllCartBought(): any {
    //     appFirebase.firestore().collection("cart").get().then( (a) => {
    //         a.forEach(function(doc) {
    //             // doc.data() is never undefined for query doc snapshots
    //             console.log(doc.id, " => ", doc.data());
    //         });
    //     })
    //
    // }
    getAllCartBought(): Observable<any> { //WORKING
        return collectionData<{ user: string, bought: string[] }>(this.cartDb)
            .pipe(
                map(item => {
                        return item.filter(bt => bt.bought.length > 0)
                            .map(spec => {
                                return {usr: spec.user, val: spec.bought}
                            })
                    }
                )
            )
    }
    // getUserData(): Observable<UserData> {
    //     return authState(appFirebase.auth()) //USERS[]
    //         .pipe(mergeMap<firebase.User, Observable<UserData>>(user => { //User
    //             if (user && user.email) {
    //                 return docData(appFirebase.firestore().collection(this.adminCollection).doc(user.email)) //docData - оббертывает сабскрибшн в Обсервабл
    //                     .pipe(map(admin => {
    //                         return {user: user.email as string, isAdmin: !!admin && !!(admin as any).uid}
    //                     }))
    //             }
    //             return of({user: '', isAdmin: false})
    //         }))
    // }
    //TODO ITEM QTY
}