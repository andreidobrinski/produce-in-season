<script>
  import { fly } from "svelte/transition";
  import ProduceListItem from "./ProduceListItem.svelte";
  export let produce;
  const type = produce[1].type;
  const formattedType = type === "vegetable" ? "vegetables" : type;
  let isExpanded = true;
  function toggle() {
    isExpanded = !isExpanded;
  }
</script>

<button on:click={toggle} type="button">
  <h3>{formattedType}</h3>
</button>
{#if isExpanded}
  <ul transition:fly={{ y: -50, duration: 500 }}>
    {#each produce as item}
      <ProduceListItem item={item.produce} />
    {/each}
  </ul>
{/if}

<style>
  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
  }

  h3 {
    text-transform: capitalize;
    box-shadow: var(--boxShadow);
  }

  button {
    padding: 0;
    margin: 0;
  }
</style>
