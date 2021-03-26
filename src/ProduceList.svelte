<script>
  export let produce;
  const type = produce[1].type;
</script>

<h3>{type}</h3>
<ul>
  {#each produce as item}
    <li>
      {item.produce}
    </li>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
  }

  h3 {
    text-transform: capitalize;
  }
</style>
