import { useTranslation  } from "react-i18next"

export default function About() {

    const { t } = useTranslation();

    return(
        <>
            <section className="about-hero flex w-full h-screen my-10">
                <div className="about-hero-txt w-350 my-auto grid grid-rows-8 h-full mx-auto bg-[#0E0E0E]">
                    <p className="w-150 text-justify mx-auto row-start-4">{t('about.para1')}</p>
                </div>
                <div className="about-hero-img bg-white w-full">
                    <div className="img-shadow"></div>
                </div>
            </section>

            <section className="about-content flex w-screen h-75">
                <div className="img bg-white w-full h-full"> 
                </div>
                <div className="txt w-300 grid grid-rows-8 h-full mx-auto bg-[#0E0E0E]">
                    <p className="w-120 text-justify h-fit mx-auto row-start-2">{t('about.para2')}</p>
                </div>
            </section>
        </>
    )
}