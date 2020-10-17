import ElectronicsType from "../models/ElectronicsType"


export default interface ElectronicsService {
    addElectronics(empl: ElectronicsType):boolean;
    removeElectronics(empl: ElectronicsType): boolean;
    getAllElectronics(): ElectronicsType[];
    updateElectronics(empl: ElectronicsType): boolean;
    getSpecificArr(department: string): ElectronicsType[];
}
