interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: Props) {
  return <button {...props}>{children}</button>;
}

export default Button;
