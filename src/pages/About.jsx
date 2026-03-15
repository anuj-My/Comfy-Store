const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Compy
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        similique dolor aliquid impedit nihil asperiores animi tempora itaque
        recusandae saepe minus pariatur illo provident quod ratione, sapiente
        repudiandae libero ullam, perspiciatis officia? Autem, illo ullam
        veritatis doloremque earum cupiditate quisquam!.
      </p>
    </>
  );
};

export default About;
