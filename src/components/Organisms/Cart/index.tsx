import React from 'react';

const Cart = ({ carts }: { carts: any[] }) => {

  return (
    <div className="container mx-auto p-6">

  {carts && carts.length > 0 ? (
    carts.map((cart: any) => (
      <div key={cart.id} className="mt-6 p-4 rounded-lg">
        {/* Centering Cart ID */}
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Cart #{cart.id}
        </h2>
        <div className="grid lg:grid-cols-2 gap-4">
          {cart.products && cart.products.map((product: any) => (
            <div key={product.id} className="w-full p-2">
              <div className="bg-white border rounded-lg h-full shadow-md p-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-32 object-cover rounded-md"
                />
                <h3 className="text-lg font-medium text-gray-800 mt-2">{product.title}</h3>
                <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-gray-600">Total: ${product.total.toFixed(2)}</p>
                <p className="text-gray-600">Discounted Total: ${product.discountedTotal.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid place-items-center">
          <p className="font-semibold text-gray-800">Total (Before Discount): ${cart.total.toFixed(2)}</p>
          <p className="font-semibold text-gray-800">Total (After Discount): ${cart.discountedTotal.toFixed(2)}</p>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-600">No carts available.</p>
  )}
</div>

  );
};

export default Cart;
