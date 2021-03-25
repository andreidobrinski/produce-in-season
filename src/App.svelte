<script>
  import * as data from "../ontarioData.json";
  import { getMonth } from "./helper";
  const monthNumber = new Date().getMonth();
  const month = getMonth(monthNumber);
  const initialProduce = {
    fruit: [],
    vegetable: [],
  };
  const produce = data.default
    .filter((item) => item.months.includes(monthNumber))
    .reduce((acc, current) => {
      return {
        ...acc,
        [current.type]: [...acc[current.type], { ...current }],
      };
    }, initialProduce);
  console.log("produce", produce);
</script>

<main>
  <h1>What's in season, Ontario?</h1>
  <h2>It's <span class="month">{month}</span>, so try:</h2>
  <h3>Fruit</h3>
  <ul>
    {#each produce.fruit as item}
      <li>
        {item.produce}
      </li>
    {/each}
  </ul>
  <h3>Vegetables</h3>
  <ul>
    {#each produce.vegetable as item}
      <li>
        {item.produce}
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: var(--purple);
    font-size: 4em;
    font-weight: 100;
  }

  ul {
    padding: 0;
  }

  .month {
    box-shadow: inset 0 -8px 0 0 var(--green);
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  :root {
    --purple: rgb(61, 43, 86);
    --blue: rgb(44, 73, 127);
    --violet: rgb(128, 138, 159);
    --green: rgb(186, 210, 159);
    --lightGreen: rgb(204, 245, 172);
  }
</style>
