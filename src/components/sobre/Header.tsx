export const Header = () => {
  return (
    <div className="w-full h-auto">
    <div className="relative bg-emerald-800">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-gray-900 "
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Sobre Nós
          </h2>
          <p className="mb-10 text-xs font-thin tracking-wide text-gray-300 sm:text-sm sm:mx-auto md:mb-16 w-full ">
            A TechGuard é uma plataforma especializada em seguros para eletrônicos, criada para proteger o que faz parte da sua rotina digital. Sabemos o quanto dispositivos como celulares, notebooks, tablets e outros equipamentos são essenciais no dia a dia — seja para trabalho, estudo ou lazer. <br />

            Nosso objetivo é oferecer segurança, praticidade e tranquilidade, com planos acessíveis e um processo simples e rápido de contratação. Utilizamos tecnologia para tornar o seguro mais descomplicado, com atendimento eficiente e soluções pensadas para as necessidades do mundo moderno.
            <br />

            Na TechGuard, protegemos sua tecnologia para que você possa focar no que realmente importa.
          </p>
          
        </div>
      </div>
    </div>
    </div>
  );
};