
import React, {useCallback, useEffect, useState} from "react";
import {Button, Container, FormControl, Grid, InputLabel, Select, TextField, MenuItem} from "@material-ui/core";
import {MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';
import {Order} from "../service/StorageImp";
import DateFnsUtils from "@date-io/date-fns";
import StorageInterface from "../service/StorageInterface";
import { useSelector } from "react-redux";

type Props = {
    // orders: StorageInterface;
    // xrenFn: ()=>void;
}

function getEmptyCoffeeOrder(): Order {
    return {
        id: NaN,
        nameClient: '',
        price: NaN,
        coffetype: '',
    };
}

const CoffeeForm: React.FC<Props> = (props: Props) => {

    const orderTools: StorageInterface = useSelector((state: StorageInterface) => state);

    const emptyCoffeeOrder = useCallback(getEmptyCoffeeOrder,[])
    const [coffeeOrder, setCoffeeOrder] = useState<Order>(emptyCoffeeOrder)



    function onSubmit(event: any) {
        event.preventDefault();
        // props.orders.addCoffee(coffeeOrder);
        setCoffeeOrder(getEmptyCoffeeOrder());
        // props.xrenFn();
        orderTools.addCoffee(coffeeOrder);
        alert('Added successfuly')
    }

    function handleInput(event: any) {
        const name: string = event.target.name
        // @ts-ignore
        coffeeOrder[name] = event.target.value;
        setCoffeeOrder({...coffeeOrder});
    }

    //START ID VaLIDATION

    function validateId() {
        if (isNaN(coffeeOrder.id)) return 0;
        if (coffeeOrder.id <= 0) return -1;
        return 1;
    }

    const [isValid, setValid] = useState<boolean>(false);
    const validateIdHook = useCallback(validateId, [coffeeOrder]);

    useEffect(() => {
        const validate = (): boolean => {
            return coffeeOrder.id >= 0
                && coffeeOrder.coffetype !== '' //&& validateDepartment()
                && coffeeOrder.nameClient !== ''
                && coffeeOrder.price > 0
                && validateIdHook() > 0;
        }

        setValid(validate());
    }, [coffeeOrder, validateIdHook]);

    function getErrorTextId() {
        const validCode = validateId();
        switch (validCode) {
            case -1:
                return 'ID can\'t be less or equal than 0';
            // case -2:
            //     return 'Employee with such ID already exists';
            default:
                return '';
        }
    }

    //END ID VaLIDATION

    function onReset() {
        setCoffeeOrder(getEmptyCoffeeOrder());
    }


    function validateName() {
        return true;
    }

    function getErrorTextName() {
        return "getErrorTextName Text";
    }

    function validatePrice() {
        return true;
    }

    function getErrorTextPrice() {
        return "getErrorTextPrice Text";
    }


    return <React.Fragment>
        <Container maxWidth="xs">
            <form onSubmit={onSubmit} onReset={onReset}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField fullWidth label={'ID'} name={'id'} type={'number'}
                                   onInput={handleInput}
                                   error={validateId() < 0} helperText={getErrorTextId()}
                                   value={isNaN(coffeeOrder.id) ? '' : coffeeOrder.id}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label={'NameClient'} name={'nameClient'} type={'text'}
                                   onInput={handleInput}
                                   error={!validateName()} helperText={getErrorTextName()}
                                   value={coffeeOrder.nameClient}/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth label={'Price'} name={'price'} type={'number'}
                                   onInput={handleInput}
                                   error={!validatePrice()} helperText={getErrorTextPrice()}
                                   value={isNaN(coffeeOrder.price) ? '' : coffeeOrder.price}/>
                    </Grid>


                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>CoffeeType</InputLabel>
                            <Select name={"coffetype"}
                                    value={coffeeOrder.coffetype}
                                    onChange={handleInput}
                            >
                                {/*{SAMPLE_DEPARTMENT.map(d => <MenuItem key={d} value={d}>{d}</MenuItem>)}*/}
                                {<MenuItem key={Math.random()} value={"Esspresso"}>{"Esspresso"}</MenuItem>}
                                {<MenuItem key={Math.random()} value={"Americano"}>{"Americano"}</MenuItem>}
                                {<MenuItem key={Math.random()} value={"Cappuchino"}>{"Cappuchino"}</MenuItem>}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                        <Button fullWidth disabled={!isValid} variant="contained" color="primary"
                                type={'submit'}>Submit</Button>
                    </Grid>

                    {/*<Grid item xs={6}>*/}
                    {/*    {props.employee ?*/}
                    {/*        <Button fullWidth variant={"contained"} color={"primary"} type={"button"}*/}
                    {/*                onClick={props.onCancel}>Cancel</Button>*/}
                    {/*        :*/}
                    {/*        <Button fullWidth variant="contained" color="primary"*/}
                    {/*                type={'reset'}>Reset</Button>*/}
                    {/*    }*/}
                    {/*</Grid>*/}
                </Grid>

            </form>
        </Container>

    </React.Fragment>
}
export default CoffeeForm;





// import React, {useCallback, useEffect, useState} from "react";
//
//
//
// const CoffeeForm: React.FC= () => {
//     return <React.Fragment>
//
//     </React.Fragment>
//
// }
