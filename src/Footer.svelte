<script>
  import { getRandomEmoji } from "./helper";

  export let produce;

  const produceEmoji = getRandomEmoji(produce);
</script>

<footer>
  <div>
    <a href="https://github.com/andreidobrinski/produce-in-season">Built</a>
    with
    <span role="img" aria-label="love"> &#10084;&#65039; </span>
    and
    <span role="img" aria-label="produce"> {produceEmoji} </span>
    by <a href="https://andreidobrinski.com">Andrei Dobrinski</a>
  </div>
  <div>
    Data from
    <a href="https://www.ontario.ca/foodland/page/availability-guide">
      Ontario.ca
    </a>
  </div>
</footer>

<style>
  footer {
    margin-top: 64px;
    margin-bottom: 32px;
    text-align: end;
  }

  a {
    padding: 0 1px;
    box-shadow: inset 0 -6px 0 0 var(--green);
    transition: all 0.3s ease-in;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  a:hover {
    box-shadow: inset 0 -20px 0 0 var(--green);
  }

  div {
    margin-top: 8px;
  }
</style>
