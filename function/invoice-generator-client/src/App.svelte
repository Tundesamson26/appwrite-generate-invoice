<script>
  import { onMount } from "svelte";

  import ClientDetails from "./components/ClientDetails.svelte";
  import Dates from "./components/Dates.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import MainDetails from "./components/MainDetails.svelte";
  import Notes from "./components/Notes.svelte";
  import Table from "./components/Table.svelte";

  let showInvoice = false;

  const handlePrint = () => {
    window.print();
  };

  const togglePreview = () => {
    showInvoice = !showInvoice;
  };

  // Optionally, you can use onMount to set up any initial conditions
  onMount(() => {
    // You can add any initialization logic here
  });
</script>

<main class="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
  <div>
    {#if showInvoice}
      <!-- Show Invoice -->
      <Header {handlePrint} />
      <MainDetails />
      <ClientDetails />
      <Dates />
      <Table />
      <Notes />
      <Footer />
      <button
        class="mt-5 bg-blue-500 py-2 px-8 text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        on:click={togglePreview}>Edit Invoice</button
      >
    {:else}
      <!-- Show Input Element and Preview Invoice Button -->
      <div class="flex flex-col justify-center">
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Enter data for preview"
          autocomplete="off"
        />
        <button
          class="bg-blue-500 py-2 px-8 text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          on:click={togglePreview}>Preview Invoice</button
        >
      </div>
    {/if}
  </div>
</main>

<style>
</style>
