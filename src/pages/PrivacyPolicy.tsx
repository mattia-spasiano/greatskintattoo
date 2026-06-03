import { useTranslation } from "react-i18next";

export default function PrivacyPolicy () {
    const { t } = useTranslation();
    return (
        <>
           <section className="h-fit w-[90%] mx-auto mbs-10 mbe-20">
                <h1 className="text-center font-bold text-lg my-5">{t('privacy.title')}</h1>
                <p>{t('privacy.paragraph1')}</p>
                <p className="ms-7 mbs-5">- {t('privacy.firstTab.title')}</p>
                <p className="ms-12 mbs-2">• {t('privacy.firstTab.first')}</p>
                <p className="ms-12">• {t('privacy.firstTab.second')}</p>
                <p className="ms-12">• {t('privacy.firstTab.third')}</p>
                <p className="ms-12">• {t('privacy.firstTab.fourth')}</p>
                <p className="ms-12">• {t('privacy.firstTab.fifth')}</p>
                <p className="ms-12">• {t('privacy.firstTab.sixth')}</p>
                <p className="ms-12">• {t('privacy.firstTab.seventh')}</p>
                <p className="ms-12">• {t('privacy.firstTab.eighth')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title2')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph2.text1')}</p>
                <p className="ms-12">{t('privacy.paragraph2.text2')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title3')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph3')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title4')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph4.text1')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph4.text2')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph4.text3')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph4.text4')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title5')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph5.text1')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph5.text2')}</p>
                
                <p className="ms-7 mbs-5">- {t('privacy.title6')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph6.text1')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph6.text2')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title7')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph7')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title8')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph8.text1')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph8.text2')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph8.text3')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph8.text4')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph8.text5')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title9')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph9.text1')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph9.text2')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title10')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph10.text1')}</p>
                <p className="ms-12 mbs-2">• {t('privacy.paragraph10.subTab.text1')}</p>
                <p className="ms-12 mbs-2">• {t('privacy.paragraph10.subTab.text2')}</p>
                <p className="ms-12 mbs-2">• {t('privacy.paragraph10.subTab.text3')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title11')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph11.text1')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph11.text2')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph11.text3')}</p>

                <p className="ms-7 mbs-5">- {t('privacy.title12')}</p>
                <p className="ms-12 mbs-2">{t('privacy.paragraph12')}</p>
            </section>
        </>
    )
}