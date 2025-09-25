import Image from "next/image";
const ModalContact = ({ closeModal, name}) => {
  return (
    <>
      <div aria-hidden="true" role="presentation" className="fixed inset-0 bg-[#C4C4C466]" onClick={closeModal}></div>
      <div role="dialog" aria-labelledby="contact-title" aria-label={`Contact me ${name}`} className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded p-10 bg-[#DB8876] w-[40%] h-[90%] overflow-auto">
      <h1 id="contact-title" className="text-3xl 2xl:text-5xl mb-4 flex flex-col gap-2">
  <span>Contactez-moi</span>
  <span>{name}</span>
</h1>
      <form action="" className="flex flex-col gap-2">
  <label
    id="label-prenom"
    className="text-xl 2xl:text-3xl text-[#312E2E]"
    htmlFor="prenom"
  >
    Prénom
  </label>
  <input
    id="prenom"
    className="h-8 2xl:h-16 bg-white rounded w-full"
    type="text"
    aria-label="first name"
    aria-labelledby="label-prenom"
  />

  <label
    id="label-nom"
    className="text-xl 2xl:text-3xl text-[#312E2E]"
    htmlFor="nom"
  >
    Nom
  </label>
  <input
    id="nom"
    className="h-8 2xl:h-16 bg-white rounded w-full"
    type="text"
    aria-label="last name"
    aria-labelledby="label-nom"
  />

  <label
    id="label-mail"
    className="text-xl 2xl:text-3xl text-[#312E2E]"
    htmlFor="mail"
  >
    Email
  </label>
  <input
    id="mail"
    className="h-8 2xl:h-16 bg-white rounded w-full"
    type="email"
    aria-label="email"
    aria-labelledby="label-mail"
  />

  <label
    id="label-message"
    className="text-xl 2xl:text-3xl text-[#312E2E]"
    htmlFor="message"
  >
    Votre message
  </label>
  <textarea
    id="message"
    className="h-24 2xl:h-37 bg-white rounded w-full"
    aria-label="your message"
    aria-labelledby="label-message"
  ></textarea>

  <button
    className="bg-[var(--main-color)] mt-3 py-4 text-white font-bold text-lg rounded w-1/3"
    type="submit"
    aria-label="send"
    aria-labelledby="label-submit"
  >
    Envoyer
  </button>
  <span id="label-submit" hidden>Envoyer le formulaire</span>
</form>
        <button type="button" aria-label="Close contact form" onClick={closeModal} className="absolute top-4 right-4 w-7 h-7 text-white">
            <Image src="/croix.svg" width={50} height={50} aria-hidden="true" alt=""/>
        </button>
      </div>
    </>
  );
};
export default ModalContact;
