<script>
  import * as data from "../ontarioData.json";
  import { getMonth } from "./helper";
  import ProduceList from "./ProduceList.svelte";
  import Confetti from "./Confetti.svelte";
  import Footer from "./Footer.svelte";

  const monthNumber = new Date().getMonth();
  const month = getMonth(monthNumber);
  const initialProduce = {
    fruit: [],
    vegetable: [],
  };
  const produce = data.default.filter((item) =>
    item.months.includes(monthNumber)
  );
  const sorted = produce.reduce(
    (acc, current) => ({
      ...acc,
      [current.type]: [...acc[current.type], { ...current }],
    }),
    initialProduce
  );
</script>

<Confetti {produce} />
<main>
  <h1>What's in season, Ontario?</h1>
  <h2>It's <span class="month">{month}</span>, so try:</h2>
  <ProduceList produce={sorted.fruit} />
  <ProduceList produce={sorted.vegetable} />
</main>
<Footer {produce} />

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.7);
  }

  h1 {
    color: var(--purple);
    font-size: 3em;
    font-weight: 100;
    margin-top: 16px;
  }

  :root {
    --purple: rgb(61, 43, 86);
    --blue: rgb(44, 73, 127);
    --violet: rgb(128, 138, 159);
    --green: rgb(186, 210, 159);
    --lightGreen: rgb(204, 245, 172);
    --shadowColour: var(--green);
    --boxShadow: inset 0 -8px 0 0 var(--shadowColour);
  }
</style>
