<script>
  export let item;
  let isChecked = false;
  function toggle() {
    isChecked = !isChecked;
  }
  const colours = ["--purple", "--blue", "--violet", "--green", "--lightGreen"];
  const getRandomColourIndex = () => Math.floor(Math.random() * colours.length);
  const colour = colours[getRandomColourIndex()];
  const skew = Math.floor(Math.random() * 35);
</script>

<li>
  <button
    on:click={toggle}
    aria-label={`${isChecked ? "uncheck" : "check"} ${item}`}
  >
    <input type="checkbox" bind:checked={isChecked} />
    <span
      style="
        --checkedColour: var({colour});
        --isChecked: {isChecked ? '100%' : '0'};
        --skew: skew({skew}deg);
      "
    >
      {item}
    </span>
  </button>
</li>

<style>
  button {
    position: relative;
    display: flex;
    align-items: center;
    text-align: start;
  }

  span::before {
    content: "";
    display: inline-block;
    background: var(--checkedColour);
    transform: rotate(2deg);
    display: inline-block;
    transform: var(--skew);
    position: absolute;
    width: var(--isChecked);
    height: 20%;
    left: 0px;
    top: 43%;
    transition: width 0.3s ease-in;
    opacity: 90%;
  }

  input {
    margin: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
</style>
