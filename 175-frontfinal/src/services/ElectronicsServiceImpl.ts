import ElectronicsService from "./ElectronicsService";
import ElectronicsType from "../models/ElectronicsType";
import { depList } from "../config/applConf";


export default class ElectronicsServiceImpl implements ElectronicsService {


    private electronicsMap: Map<number, {}>[][] = [];
    private orderList: [] = [];

    constructor() {

        Object.values(depList).forEach(dep => {
            // @ts-ignore
            this.orderList.push(dep)
            this.electronicsMap.push(
                [new Map<number, {}>()]
            )
            }
        )
    }

    addElectronics(elec: ElectronicsType): boolean {
        // console.log("1",this.orderList)
        // console.log("2",elec)
        // @ts-ignore
        const index = this.orderList.indexOf(elec.department);
        // console.log("3",index)
        if(index !== -1){
            const store = this.electronicsMap[index][0]    //[Map(0)] => Map(0)
            // console.log("4",store)
            if (store.get(elec.id)){
                return false;
            }
            store.set(elec.id, elec)
            return true
        }
       return false;
    }

    getAllElectronics(): any {
        return this.electronicsMap
    }


    removeElectronics(elec: ElectronicsType): boolean {
        return false;
    }

    updateElectronics(elec: ElectronicsType): boolean {
        return false;
    }

    getSpecificArr(department:string): any {
        const res: any = [];
        // @ts-ignore
        const index = this.orderList.indexOf(department);
        // @ts-ignore
        this.electronicsMap[index].forEach(a => {
            // @ts-ignore
            res.push(Object.fromEntries(a))
        })
        return res

    }

}












//Map< number, ElectronicsType >
// export default class ElectronicsServiceImpl implements ElectronicsService {
//     private electronicsMap: Map< number, ElectronicsType >
//     constructor() {
//         this.electronicsMap = new Map<number, ElectronicsType>();
//     }
//     addElectronics(elec: ElectronicsType): boolean {
//         if(this.electronicsMap.get(elec.id)){
//             return false;
//         }
//         this.electronicsMap.set(elec.id, elec);
//         return true;
//     }
//     getAllElectronics(): ElectronicsType[] {
//         const res: any[] = [];
//
//         this.electronicsMap.forEach((elec) => {
//             res.push(elec);
//         })
//         return res;
//     }
//     removeElectronics(id: number): boolean {
//         if(this.electronicsMap.get(id)){
//              this.electronicsMap.delete(id);
//              return true;
//         }
//         return false
//     }
//     updateElectronics(id: number, elecT: ElectronicsType): boolean {
//         const elec = this.electronicsMap.get(id);
//         if(elec) {
//             elec.price =  elecT.price;
//             return true
//         }
//         return false;
//     }
// }
