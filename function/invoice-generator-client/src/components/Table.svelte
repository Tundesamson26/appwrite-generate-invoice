<script>
  export let description;
  export let quantity;
  export let price;
  export let amount
</script>

<section>
  <div class="my-5">
    <table width="100%" class="mb-10">
        <thead>
          <tr class="bg-gray-100 p-1">
            <td class="font-bold">Description</td>
            <td class="font-bold">Quantity</td>
            <td class="font-bold">Price</td>
            <td class="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{$description}</td>
            <td>{$quantity}</td>
            <td>{$price}</td>
            <td>{$amount}</td>
          </tr>
        </tbody>
        
      </table>
  </div>
</section>
