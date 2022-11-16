import { OrdersModel } from "../../models/order";
import { order_type } from "../../types/orderType";

const orderModel = new OrdersModel();
describe('Test Order Model ',()=>{

it("should create new order and return new order record", async (): Promise<void> => {
    const order: order_type = {
      id : 12,
      status: "active",
      user_id: 1,
    };
    const newOrder: order_type = await orderModel.create(order);
    expect(newOrder).toEqual({
      id: 12,
      status: "active",
      user_id: 1,
    });
})    
      it('Should return all orders',async()=>{
    const orders = await orderModel.index();
    expect(orders[0]).toBeTruthy();
 })
  it('Should return product by id orders',async()=>{
    const order = await orderModel.show(1)
    expect(order).toBeTruthy();
  })
});
