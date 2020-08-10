//controller with inner logics
import {FormHandler} from './form-handler';
import Orders from './orders'
import {Table} from "./table";
import Spinner from "./spinner";
import OrdersServer from "./orders-server";

const URL ='http://localhost:3000/orders'
var spinner = new Spinner('#spinnerId');

const formOrder = new FormHandler('#form-order');
const coffeeOrders = new OrdersServer(URL, );
const headersKeys =  {
   email: 'Email address',
    coffee: 'Coffee',
    size: 'Cap Size',
    strength: 'Caffeine (%)',
    flavor: 'Flavor'
}

const removeData = {
    id: 'email',
    removeFn: async function(email) {
        try {
            spinner.start();
            const res = await coffeeOrders.removeOrder(email);
            return res;
        }catch (error) {
            return false;
        }finally {
            spinner.stop();
        }

    },
    message: 'order with email'
}

// const removeData = {
//     id: 'email',
//     removeFn: async function(email) {
//         spinner.start();
//         const res = await coffeeOrders.removeOrder(email);
//         spinner.stop();
//         return res;
//     },
//     message: 'order with email'
// }

const tableOrders = new Table('#tr-id', '#tbody-id',
    headersKeys, removeData);

// coffeeOrders.getAllOrders().forEach(o => tableOrders.addRow(o));
coffeeOrders.getAllOrders().then(orders => orders.forEach(o => tableOrders.addRow(o)));

formOrder.addHandler(addOrder );

async function addOrder(order) {
    try {
        spinner.start();
        const res = await coffeeOrders.addOrder(order);
        tableOrders.addRow(order);
        return '';
    }catch (error) {
        return `${removeData.message} ${order.email} already exists`;
    }finally {
        spinner.stop();
    }
}

// async function addOrder(order) {
//     spinner.start();
//         const res = await coffeeOrders.addOrder(order);
//     spinner.stop();
//    if(res !== true) {
//       return `${removeData.message} ${order.email} already exists`;
//    } else {
//       tableOrders.addRow(order);
//    }
//    return '';
// }

