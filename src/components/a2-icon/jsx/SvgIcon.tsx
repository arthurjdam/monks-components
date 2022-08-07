type Props = {
  children?: React.ReactNode;
};

const SvgIcon: React.FC<Props> = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 70 70"
    fill="none"
    stroke="currentColor"
  >
    {children}
  </svg>
);

export default SvgIcon;
