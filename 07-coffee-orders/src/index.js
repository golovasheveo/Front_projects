//controller with inner logics
import {FormHandler} from './form-handler';
import Orders from './orders'
import {Table} from "./table";

const formOrder = new FormHandler('#form-order');
const coffeeOrders = new Orders();
const headersKeys = {
   email: 'Email address',
   coffee: 'Coffee',
   size: 'Cap Size',
   strength: 'Caffeine (%)',
   flavor: 'Flavor'
}
const removeData = {
   id: 'email',
   removeFn: function (email) {
      return coffeeOrders.removeOrder(email);
   },
   message: 'order with email '
}
const tableOrders = new Table('#tr-id', '#tbody-id', headersKeys, removeData);
//   [ 'email', 'coffee','size', 'strength', 'flavor'], 'email', function(email) {
// return coffeeOrders.removeOrder(email);
//   })
formOrder.addHandler(addOrder);

function addOrder(order) {
   const res = coffeeOrders.addOrder(order);
   if (!res) {
      // return 'order for ' + order.email + ' already exists';
      return `${removeData.message} ${order.email} already exists`;
   } else {
      tableOrders.addRow(order);
   }
}
