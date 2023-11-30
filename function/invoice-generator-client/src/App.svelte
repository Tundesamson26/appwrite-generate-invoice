<script>
  import ClientDetails from "./components/ClientDetails.svelte";
  import Dates from "./components/Dates.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import MainDetails from "./components/MainDetails.svelte";
  import Notes from "./components/Notes.svelte";
  import Table from "./components/Table.svelte";
</script>

<main class="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
  <!-- header section -->
  <Header />
  <!-- End of header sections -->

  <!-- your details section -->
  <MainDetails />
  <!-- end of your detials -->

  <!-- client's details  -->
  <ClientDetails />
  <!-- end of client's details  -->

  <!-- dates sections -->
  <Dates />
  <!-- end od dates sections -->

  <!-- Table sections -->
  <Table />
  <!-- End of Table sections -->

  <!-- Notes -->
  <Notes />
  <!-- End of Notes -->

  <!-- Footer sections -->
  <Footer />
  <!-- End of footer sections -->
</main>

<style>
</style>
