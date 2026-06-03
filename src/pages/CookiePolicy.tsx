import { useTranslation } from "react-i18next";

export default function CookiePolicy() {
    const { t } = useTranslation();
    return (
        <>
            <section className="h-fit w-[90%] mx-auto mbs-10 mbe-20">
                <h1 className="text-center font-bold text-lg my-5">{t('cookies.title')}</h1>
                <p className="ms-7 mbs-2">{t('cookies.paragraph1.text1')}</p>
                <p className="ms-7 mbs-2">{t('cookies.paragraph1.text2')}</p>
                <p className="ms-7 mbs-2">{t('cookies.paragraph1.text3')}</p>
                <p className="ms-7 mbs-2">{t('cookies.paragraph1.text4')}</p>
                <h1 className="mbs-5 font-bold">{t('cookies.title1')}</h1>
                <p className="mbs-2">1.</p><p className="ms-9 mbs-2">{t('cookies.paragraph1.subTab.firstPoint.point')}</p>
                <p className="ms-12 mbs-2">• {t('cookies.paragraph1.subTab.firstPoint.text1')}</p>
                <p className="ms-12 mbs-2">• {t('cookies.paragraph1.subTab.firstPoint.text2')}</p>
                <p className="mbs-2">2.</p><p className="ms-9 mbs-2">{t('cookies.paragraph1.subTab.secondPoint.text1')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph1.subTab.secondPoint.text2')}</p>
                <p className="mbs-2">3.</p><p className="ms-9 mbs-2">{t('cookies.paragraph1.subTab.thirdPoint.point')}</p>
                <p className="ms-12 mbs-2">• {t('cookies.paragraph1.subTab.thirdPoint.text1')}</p>
                <p className="ms-12 mbs-2">• {t('cookies.paragraph1.subTab.thirdPoint.text2')}</p>

                <h1 className="mbs-5 font-bold">{t('cookies.title2')}</h1>
                <p className="ms-7 mbs-5 font-bold">• {t('cookies.paragraph2.subTitle')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text1')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text2')}</p>
                <p className="ms-7 mbs-5 font-bold">• {t('cookies.paragraph2.subTitle2')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text3')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text4')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text5')}</p>
                <p className="ms-7 mbs-5 font-bold">• {t('cookies.paragraph2.subTitle3')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text6')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text7')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text5')}</p>
                <p className="ms-7 mbs-5 font-bold">• {t('cookies.paragraph2.subTitle4')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text9')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text10')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text5')}</p>
                <p className="ms-7 mbs-5 font-bold">• {t('cookies.paragraph2.subTitle5')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text11')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text12')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text13')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph2.text5')}</p>

                <h1 className="mbs-5 font-bold">{t('cookies.title2')}</h1>
                <p className="ms-12 mbs-2">{t('cookies.paragraph3')}</p>
                <table className="bg-[#0E0E0E] w-full rounded h-20">
                    <tr className="border-be">
                        <th className="border-e">Tipo de cookie</th>
                        <th className="border-e">Finalidad</th>
                        <th className="border-e">Entidad responsable</th>
                        <th>Plazo de tiempo</th>
                    </tr>
                    <tr className="text-center">
                        <td className="border-e">COOKIES TÉCNICAS NECESARIAS</td>
                        <td className="border-e">Correcto funcionamiento de la página web</td>
                        <td className="border-e">Giuseppe Spasiano</td>
                        <td>Persistente</td>
                    </tr>
                </table>
                <h1 className="mbs-5 font-bold">{t('cookies.title4')}</h1>
                <p className="ms-12 mbs-2">{t('cookies.paragraph4.subTab.text1')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph4.subTab.firstPoint')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph4.subTab.secondPoint')}</p>

                <p className="ms-12 mbs-2">{t('cookies.paragraph5')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph6')}</p>
                <p className="ms-12 mbs-2">{t('cookies.paragraph7')}</p>

            </section>
        </>
    )
}