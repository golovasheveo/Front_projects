//controller with inner logics
import {FormHandler} from './form-handler';
import Orders from './orders'
import {Table} from "./table";
import OrdersServer from "./orders-server";
const URL = 'http://localhost:3000/orders'
const formOrder = new FormHandler('#form-order');
const coffeeOrders = new OrdersServer(URL);
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
            //start spinner
            await coffeeOrders.removeOrder(email);
            return true;
        }catch(error) {
            return false;
        }finally {
            //stop spinner
        }

    },
    message: 'order with email'
}
const tableOrders = new Table('#tr-id', '#tbody-id',
    headersKeys, removeData);
coffeeOrders.getAllOrders().then(orders => orders.forEach(o => tableOrders.addRow(o)));
formOrder.addHandler(addOrder );
async function addOrder(order) {
    try {
        //spinner start
        const res = await coffeeOrders.addOrder(order);
        tableOrders.addRow(order);
        return '';
    } catch(error){
        return `${removeData.message} ${order.email} already exists`;
    }finally {
        //spinner stop
    }

}

