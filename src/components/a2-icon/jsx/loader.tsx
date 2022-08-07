import SvgIcon from "./SvgIcon";

export default () => (
  <SvgIcon>
    <circle
      vectorEffect="non-scaling-stroke"
      opacity=".25"
      fill="none"
      cx="35"
      cy="35"
      r="8.5"
    />
    <path
      vectorEffect="non-scaling-stroke"
      fill="none"
      d="M43.5 35c0-4.7-3.8-8.5-8.5-8.5"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 35 35"
        to="360 35 35"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </SvgIcon>
);
