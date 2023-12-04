<script>
  export let description;
  export let quantity;
  export let price;
  export let amount;

//   import {useEffect} from 'react'

//   useEffect(()=>{
//      const calculateAmount = (amount) =>{
//     setAmount(quantity * price)
//   }

//   calculateAmount(amount);
//   }, [amount, quantity, price, setAmount])

</script>

<section>
  <div class="flex flex-col md:mt-16">
    <label for="description">Item Description</label>
    <input
      type="text"
      name="description"
      id="description"
      placeholder="Item description"
      bind:value={$description}
    />
  </div>
  <div class="md:grid grid-cols-3 gap-10">
    <div class="flex flex-col">
      <label for="quantity">Quantity</label>
      <input
        type="text"
        name="quantity"
        id="quantity"
        placeholder="Quantity"
        bind:value={$quantity}
      />
    </div>
    <div class="flex flex-col">
      <label for="price">Price</label>
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Price"
        bind:value={$price}
      />
    </div>
    <div class="flex flex-col">
      <label for="amount">Amount</label>
      <p>{$amount}</p>
    </div>
  </div>
</section>
