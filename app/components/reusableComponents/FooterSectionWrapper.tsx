function FooterSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="xxs:w-full md:w-1/2 lg:w-1/4 px-9 mt-10 lg:mt-0">
      {children}
    </div>
  );
}

export default FooterSectionWrapper;
