<svelte:options accessors />

<script>
  import { v4 as uuidv4 } from "uuid";

  export let description;
  export let quantity;
  export let price;
  export let amount;
  export let list;

  const handleSubmit = async () => {
    amount.update((item) => (item = $quantity * $price));

    const newItem = {
      id: uuidv4(),
      description: $description,
      price: $price,
      quantity: $quantity,
      amount: $amount,
    };

    list.update((items) => {
      items.push(newItem);
      console.log(items);
      return items;
    });

    description.update((item) => (item = ""));
    quantity.update((item) => (item = ""));
    price.update((item) => (item = ""));
    amount.update((item) => (item = ""));
  };
</script>

<section>
  <form action="" on:submit|preventDefault={handleSubmit}>
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
        <p>{$quantity * $price}</p>
      </div>
    </div>
    <button
      type="submit"
      class="mb-5 bg-blue-500 py-2 px-8 text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
      >Add Item</button
    >
  </form>
</section>
