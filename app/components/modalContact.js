import Image from "next/image";
const ModalContact = ({ closeModal, name}) => {
  return (
    <>
      <div aria-hidden="true" role="presentation" className="fixed inset-0 bg-[#C4C4C466]" onClick={closeModal}></div>
      <div role="dialog" className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded p-10 bg-[#DB8876] w-[40%] h-[90%] overflow-auto">
      <h1 id="contact-title" className="text-3xl 2xl:text-5xl mb-4 flex flex-col gap-2">
  <span>Contactez-moi</span>
  <span>{name}</span>
</h1>
      <form action="" className="flex flex-col gap-2">
        <label className="text-xl 2xl:text-3xl text-[#312E2E]" htmlFor="prenom">Prénom</label>
        <input className="h-8 2xl:h-16 bg-white rounded w-full" type="text" id="prenom"/>
        <label className="text-xl 2xl:text-3xl text-[#312E2E]" htmlFor="nom">Nom</label>
        <input className="h-8 2xl:h-16 bg-white rounded w-full" type="text" id="nom" />
        <label className="text-xl 2xl:text-3xl text-[#312E2E]" htmlFor="mail">Email</label>
        <input className="h-8 2xl:h-16 bg-white rounded w-full" type="email" id="mail"/>
        <label className="text-xl 2xl:text-3xl text-[#312E2E]" htmlFor="message">Votre message</label>
        <textarea className="h-24 2xl:h-37 bg-white rounded w-full" id="message"></textarea>
        <button className="bg-[var(--main-color)] mt-3 py-4 text-white font-bold text-lg rounded w-1/3" type="submit">Envoyer</button>
      </form>
        <button type="button" aria-label="Fermer"onClick={closeModal} className="absolute top-4 right-4 w-7 h-7 text-white">
            <Image src="/croix.svg" width={50} height={50} aria-hidden="true" alt=""/>
        </button>
      </div>
    </>
  );
};
export default ModalContact;
