<script>
  import { onMount } from "svelte";
  const height = document.documentElement.scrollHeight;

  let characters = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎"];

  let confetti = new Array(50)
    .fill()
    .map((_, i) => {
      return {
        character: characters[i % characters.length],
        x: Math.random() * 100,
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
        if (emoji.y > 160) emoji.y = -20;
        return emoji;
      });
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });
</script>

{#each confetti as c}
  <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">
    {c.character}
  </span>
{/each}

<style>
  span {
    z-index: -1;
    position: absolute;
    font-size: 3vw;
  }
</style>
