<script>
  import { onMount } from "svelte";
  import { getProduceEmojis } from "./helper";

  export let produce;

  let emojis = getProduceEmojis(produce);

  let confetti = new Array(emojis.length * 2)
    .fill()
    .map((_, i) => {
      return {
        character: emojis[i % emojis.length],
        x: Math.random() * 94,
        y: -20 - Math.random() * 100,
        r: 0.1 + Math.random() * 1,
      };
    })
    .sort((a, b) => a.r - b.r);

  onMount(() => {
    let frame;

    function loop() {
      frame = requestAnimationFrame(loop);
      confetti = confetti.map((emoji) => {
        emoji.y += 0.2 * emoji.r;
        if (emoji.y > 140) emoji.y = -20;
        return emoji;
      });
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });
</script>

<div role="presentation">
  {#each confetti as c}
    <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r});">
      {c.character}
    </span>
  {/each}
</div>

<style>
  div {
    max-width: 100vw;
  }
  span {
    z-index: -1;
    position: absolute;
    font-size: 3em;
  }
  @media (min-width: 640px) {
    span {
      font-size: 5vw;
    }
  }
</style>
