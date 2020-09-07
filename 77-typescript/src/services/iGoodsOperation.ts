import DB from "../models/DataBaseOperations";

export default interface iGoodsOperation {
    createDataBase():boolean;
    addToDataBase():boolean;
    removeFromDataBase():boolean;
}