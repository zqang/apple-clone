"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto xl:px-6 md:px-4 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
