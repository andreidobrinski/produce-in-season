<script>
  export let orientation;
  const config = () => {
    switch (orientation) {
      case "top-right":
        return {
          style: "position: fixed; top: 0; right: 0;",
          rotation: "rotate(180, 54, 54)",
          colour: "var(--blue)",
        };
      case "bottom-left":
        return {
          style: "position: fixed; bottom: 0; left: 0;",
          rotation: "rotate(0, 54, 54)",
          colour: "var(--violet)",
        };
      default:
        return {
          style: "display: none;",
        };
    }
  };
</script>

<svg
  width="108"
  height="108"
  viewBox="0 0 108 108"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={config().style}
>
  <g transform={config().rotation}>
    <path
      d="M4 17.4715V104H97.9086L49.1777 56.3316L104 4"
      stroke={config().colour}
      stroke-width="8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>
