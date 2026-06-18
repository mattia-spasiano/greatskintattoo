import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants/services.ts";
import ServicesContent from "../components/ServicesContent.tsx";
import ReviewsList from "../components/Reviews.tsx";
import Cookies from "../components/Cookie.tsx";
import { useEffect } from "react";
import Logo from "../assets/GTS Logo.png";
import Hero from "../assets/hero.jpg"

export default function HomePage() {
    const { t } = useTranslation();

    useEffect(() => {
        if (!sessionStorage.getItem("alertShown")) {
            alert("Please, keep in mind this site is under construction!");
            sessionStorage.setItem("alertShown", "true");
        }        
    }, [])

    return (
        <>
        <div className="relative">
        <Cookies/>
            <section id="hero" className="mb-5 mbs-7">
                <div style={{ backgroundImage: `url(${Hero})` }} className="w-full h-screen relative bg-center bg-cover">
                    <div className="w-full h-full bg-black opacity-85"></div>
                    <div className="w-full text-center absolute top-80">
                        <p>{t('hero.description')}</p>
                        <h2>-{t('hero.author')}</h2>
                    </div>
                    <figure className="absolute w-full lg:top-110 md:top-120 sm: top-120">
                        <img src={Logo} alt="" className="logo flex mx-auto w-70" />
                    </figure>
                    <div className="name absolute w-full top-95 text-center">
                        <p className="font-semibold text-4xl underline decoration-2"><Link to="/about">GREAT SKIN TATTOO</Link></p>
                    </div>
                </div>
            </section>
            {SERVICES.map((service, index) => (
                <ServicesContent key={service.id}
                service={service}
                isEven={index % 2 === 0}
                isThird={index === 2} />
            ))}
            { /* Passiamo isEven per fare in modo di ottenere le prop che ci servono all'interno del componente, spiegando anche in che modo utilizzare la prop da aggiungere come booleano all'interno della nostra interface. */}
            <section id="reviews" className="flex relative bg-[#0E0E0E] h-100 mx-auto overflow-hidden">
                <ReviewsList />
            </section>
            </div>
        </>
    )
}