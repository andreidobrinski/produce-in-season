<script>
  export let produce;
  const type = produce[1].type;
  let isExpanded = true;
  function toggle() {
    isExpanded = !isExpanded;
  }
</script>

<button on:click={toggle} type="button">
  <h3>{type}</h3>
</button>
{#if isExpanded}
  <ul>
    {#each produce as item}
      <li>
        {item.produce}
      </li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    padding: 0;
  }

  h3 {
    text-transform: capitalize;
    box-shadow: var(--boxShadow);
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
</style>
