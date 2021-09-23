<script>
  export let item;
  let isChecked = false;
  function toggle() {
    isChecked = !isChecked;
  }
  const colours = ["--purple", "--blue", "--violet", "--green", "--lightGreen"];
  const getRandomColourIndex = () =>
    Math.floor(Math.random() * (colours.length + 1));
  const colour = colours[getRandomColourIndex()];
</script>

<li>
  <button
    on:click={toggle}
    class={isChecked ? "checked" : ""}
    style={`text-decoration-color: var(${colour});`}
    aria-label={`${isChecked ? "uncheck" : "check"} ${item}`}
  >
    <input type="checkbox" bind:checked={isChecked} />
    {item}
  </button>
</li>

<style>
  button {
    display: flex;
    align-items: center;
    text-align: start;
  }

  .checked {
    text-decoration: line-through;
    text-decoration-thickness: 4px;
  }

  input {
    margin: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
</style>
