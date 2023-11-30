<script>
  import ClientDetails from "./components/ClientDetails.svelte";
  import Dates from "./components/Dates.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import MainDetails from "./components/MainDetails.svelte";
  import Notes from "./components/Notes.svelte";
  import Table from "./components/Table.svelte";

  const handlePrint = () =>{
    window.print();
  }
</script>

<main class="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
  <div>
    <Header />
    <MainDetails />
    <ClientDetails />
    <Dates />
    <Table />
    <Notes />
    <Footer />
  </div>
</main>

<style>
</style>
