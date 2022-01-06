import React from "react";

const Componente1 = () => {
  return (
    <section>
      <Saluto />
      <Saluto />
      <Saluto />
    </section>
  );
};

const Persona = () => {
  return <h2>Ciao sono Tommy</h2>;
};

const Messaggio = () => <h4>Son un messaggio</h4>;

const Saluto = () => {
  return (
    <React.Fragment>
      <Persona />
      <Messaggio />
    </React.Fragment>
  );
};

export default Componente1;
