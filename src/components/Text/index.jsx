import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[30px] md:text-[32px] text-[34px]",
  h2: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h3: "font-bold text-[20px]",
  h4: "text-[18px]",
  h5: "text-[16px]",
  h6: "text-[14px]",
  body1: "font-normal text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
