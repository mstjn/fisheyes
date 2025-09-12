const ModalContact = ({ closeModal, name}) => {
  return (
    <>
      <div className="fixed inset-0 bg-[#C4C4C466]" onClick={closeModal}></div>
      <div className="fixed z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded p-10 bg-[#DB8876] w-[40%] h-[90%]">
      <h1 className="text-6xl">Contactez-moi <br />{name}</h1>
      <form action="" className="flex flex-col gap-2">
        <label className="text-4xl text-[#312E2E]" htmlFor="">Prénom</label>
        <input className="h-16 bg-white rounded w-full" type="text" />
        <label className="text-4xl text-[#312E2E]" htmlFor="">Nom</label>
        <input className="h-16 bg-white rounded w-full" type="text" />
        <label className="text-4xl text-[#312E2E]" htmlFor="">Email</label>
        <input className="h-16 bg-white rounded w-full" type="mail" />
        <label className="text-4xl text-[#312E2E]" htmlFor="">Votre message</label>
        <textarea className="h-44 bg-white rounded w-full"name="" id=""></textarea>
        <button className="bg-[var(--main-color)] mt-4 py-4 text-white font-bold text-lg rounded w-1/3" type="submit">Envoyer</button>
      </form>
        <button onClick={closeModal} className="absolute top-1 right-1 w-7 h-7 text-white">x</button>
      </div>
    </>
  );
};
export default ModalContact;
