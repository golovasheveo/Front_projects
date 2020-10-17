import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ItemProfile from "./ItemProfile";
import ElectrinicsServiceFirebase from "../../../services/ElectrinicsServiceFirebase";
import { useDispatch, useSelector } from "react-redux";
import { ReducersType } from "../../../store/store";
import ElectronicsType from "../../../models/ElectronicsType";
import { userCartCounterIncrementAction } from "../../../store/actions";
import Navbar from "../../library/Navbar";
import { getMenuItems } from "../../pages/Home";

type Props = {
    service: ElectrinicsServiceFirebase
}

const ItemProfileContainer: React.FC<RouteComponentProps&Props> = (props: RouteComponentProps&Props) => {
    const userData = useSelector((state: ReducersType) => state.userData);
    const [backFl, setBackFl] = useState<boolean>(false)

    const stateElArr: ElectronicsType[] = useSelector((state: ReducersType) => state.IPHONE)
    // @ts-ignore
    const itemToShow: ElectronicsType = stateElArr.filter(item => item.id === props.match.params.itemId as number)[0]
    const dispatch = useDispatch();

 const onSubmitToCart = () => {
     // @ts-ignore
     const cart = {mail: userData.user, id: (props.match.params.itemId as number)}
     props.service.addToCart(cart)
     dispatch( userCartCounterIncrementAction(1))
     setBackFl(true);
 }
 const onSubmitToBuy = () => {
     // @ts-ignore
     const cart = {mail: userData.user, id: (props.match.params.itemId as number)}
     props.service.itemWasBoughtedFromStart(cart)
     setBackFl(true);
 }

return <React.Fragment>
    <Navbar menu={getMenuItems(userData)}/>

    <ItemProfile
        backFl={backFl}
        onSubmitToCart={onSubmitToCart}
        onSubmitToBuy={onSubmitToBuy}
        backPath={props.history}
        profile = {itemToShow} />
</React.Fragment>
};

export default withRouter(ItemProfileContainer);
