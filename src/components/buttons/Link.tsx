interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
  withPadding?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const Link = ({
  href,
  className = '',
  children,
  onClick = () => {},
  withPadding = false,
  ...rest
}: Props) => {
  if (withPadding) {
    return (
      <a href={href} className={` ${className}`} onClick={onClick} {...rest}>
        <span className="relative w-fit text-white">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`relative  text-white ${className} group`}
      onClick={onClick}
      {...rest}
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:outline-none group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
    </a>
  );
};

export default Link;
