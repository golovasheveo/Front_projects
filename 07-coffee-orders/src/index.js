//controller with inner logics
import {FormHandler} from './form-handler';
import Orders from './orders'
import {Table} from "./table";

const formOrder = new FormHandler('#form-order');
const coffeeOrders = new Orders();
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
        return await coffeeOrders.removeOrder(email);
    },
    message: 'order with email'
}
const tableOrders = new Table('#tr-id', '#tbody-id',
    headersKeys, removeData);
formOrder.addHandler(addOrder );

async function addOrder(order) {
   const res = await coffeeOrders.addOrder(order);
   if(res !== true) {
      return `${removeData.message} ${order.email} already exists`;
   } else {
      tableOrders.addRow(order);
   }
   return '';
}

