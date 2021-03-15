<script>
  import * as data from "../ontarioData.json";
  import { getMonth } from "./helper";
  const monthNumber = new Date().getMonth();
  const month = getMonth(monthNumber);
  const produce = data.default
    .filter((item) => item.months.includes(monthNumber))
    .map((item) => item.produce);
</script>

<main>
  <h1>What's in your season?</h1>
  <p>It's {month} nao</p>
  <p>You can buy:</p>
  <ul>
    {#each produce as item}
      <li>
        {item}
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
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
