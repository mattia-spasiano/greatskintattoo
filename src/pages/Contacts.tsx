import ContactForm from "../components/ContactForm"
import { useTranslation } from "react-i18next"

export default function Contacts() {

    const { t } = useTranslation();

    return (
        <>
            <section className="contact-form flex mbe-10 h-screen w-screen md:h-150 mbs-10">
                <div className="contacts-img bg-white lg:w-150 md:w-90">
                </div>
                <div className="contact-form lg:w-2xl md:w-80 my-auto mx-auto">
                    <ContactForm />
                </div>
            </section>
            <section className="contacts flex h-100 w-full">
                <div className="my-auto mx-auto w-100">
                    <p>{t('contacts.socials')}</p>
                    <ul className="contacts-about flex justify-between my-10">
                        <li className="hover:underline">TIT TOK</li>
                        <li className="hover:underline">ISNTAGRAM</li>
                        <li className="hover:underline">WHATSAPP</li>
                    </ul>
                </div>
                <div className="bg-white h-full w-200 ">
                </div>
            </section>
        </>
    )
}