<script>
   export let handlePrint;
</script>

<header
  class="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between"
>
  <div>
    <h1 class="font-bold uppercase tracking-wide text-4xl mb-3">Invoice</h1>
  </div>
  <div>
    <ul class="flex flex-wrap items-center justify-between">
      <li><button type="button" class="btn btn-print" on:click={handlePrint}>Print</button></li>
      <li><button class="btn btn-download">Download</button></li>
      <li><button class="btn btn-send">Send</button></li>
    </ul>
  </div>
</header>
