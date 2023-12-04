<script>
  import { onMount } from "svelte";

  import ClientDetails from "./components/ClientDetails.svelte";
  import Dates from "./components/Dates.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import MainDetails from "./components/MainDetails.svelte";
  import Notes from "./components/Notes.svelte";
  import Table from "./components/Table.svelte";
  import { writable } from "svelte/store";

  const name = writable("");
  const address = writable("");
  const email = writable("");
  const phone = writable("");
  const bankName = writable("");
  const bankAccount = writable("");
  const website = writable("");
  const clientName = writable("");
  const clientAddress = writable("");
  const invoiceNumber = writable("");
  const invoiceDate = writable("");
  const dueDate = writable("");
  const notes = writable("");
  const description = writable("");
  const quantity = writable("");
  const price = writable("");
  const amount = writable("");

  const handlePrint = () => {
    window.print();
  };

  let showInvoice = false;

  const togglePreview = () => {
    showInvoice = !showInvoice;
  };

  // Optionally, you can use onMount to set up any initial conditions
  onMount(() => {
    // You can add any initialization logic here
  });
</script>

<main class="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
  <div>
    {#if showInvoice}
      <!-- Show Invoice -->
      <Header {handlePrint} />
      <MainDetails {name} {address} />
      <ClientDetails {clientName} {clientAddress} />
      <Dates {invoiceNumber} {invoiceDate} {dueDate} />
      <Table />
      <Notes {notes} />
      <Footer {name} {address} {email} {phone} {website} {bankAccount} {bankName} />
      <button
        class="mt-5 bg-blue-500 py-2 px-8 text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        on:click={togglePreview}>Edit Invoice</button
      >
    {:else}
      <!-- Show Input Element and Preview Invoice Button -->
      <div class="flex flex-col justify-center">
        <label for="name">Enter your name</label>
        <input
          type="text"
          id="name"
          name="text"
          placeholder="Enter your name"
          autocomplete="off"
          bind:value={$name}
        />

        <label for="address">Enter your address</label>
        <input
          type="text"
          id="address"
          name="text"
          placeholder="Enter your address"
          autocomplete="off"
          bind:value={$address}
        />

        <label for="email">Enter your email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          autocomplete="off"
          bind:value={$email}
        />

        <label for="website">Enter your website</label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="Enter your website"
          autocomplete="off"
          bind:value={$website}
        />

        <label for="phone">Enter your phone</label>
        <input
          type="text"
          id="phone"
          name="text"
          placeholder="Enter your phone"
          autocomplete="off"
          bind:value={$phone}
        />

        <label for="bankName">Enter your bank name</label>
        <input
          type="text"
          id="bankName"
          name="bankName"
          placeholder="Enter your bank name"
          autocomplete="off"
          bind:value={$bankName}
        />

        <label for="bankAccount">Enter your bank account number</label>
        <input
          type="text"
          id="bankAccount"
          name="bankAccount"
          placeholder="Enter your bank account number"
          autocomplete="off"
          bind:value={$bankAccount}
        />

        <label for="clientName">Enter your client/s name</label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          placeholder="Enter your client's name"
          autocomplete="off"
          bind:value={$clientName}
        />

        <label for="clientAddress">Enter your client's address</label>
        <input
          type="text"
          id="clientAddress"
          name="clientAddress"
          placeholder="Enter your client's address"
          autocomplete="off"
          bind:value={$clientAddress}
        />

        <label for="invoiceNumber">Invoice Number</label>
        <input
          type="text"
          id="invoiceNumber"
          name="invoiceNumber"
          placeholder="Invoice Number"
          autocomplete="off"
          bind:value={$invoiceNumber}
        />

        <label for="invoiceDate">Invoice Date</label>
        <input
          type="date"
          id="invoiceDate"
          name="invoiceDate"
          placeholder="Invoice Date"
          autocomplete="off"
          bind:value={$invoiceDate}
        />

        <label for="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          placeholder="Due Date"
          autocomplete="off"
          bind:value={$dueDate}
        />

        <label for="notes">Additional Notes</label>
        <textarea
          name="notes"
          id="notes"
          cols="30"
          rows="10"
          placeholder="Additional notes to the client"
          bind:value={$notes}
        ></textarea>

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
