import { useEffect, useState } from "react"

export default function Cookies() {
    const [isVisible, setIsVisible] = useState(false);
    const [cookiePrefs, setCookiePrefs] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("cookieAccepted");
        if (!accepted) setIsVisible(true)
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieAccepted", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
        <div className="absolute w-full h-full">
            <section>
                <div className={`${cookiePrefs === true ? 'hidden' : ''} h-20 w-full bg-black absolute fixed z-1000 pointer-events-auto`}>
                    <div className="cookie-text my-4 flex gap-10 mx-5">
                        <p className="w-[65%]">We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
                        <div className="w-[35%] flex justify-between">
                            <button className="h-10 my-auto bg-white text-black font-semibold px-3 rounded-lg hover:bg-[#c7c7c7]" onClick={handleAccept}>ACCEPT ALL</button>
                            <button className="h-10 my-auto bg-white text-black font-semibold px-3 rounded-lg hover:bg-[#c7c7c7]" onClick={handleAccept}>REJECT ALL</button>
                            <button className="h-10 my-auto bg-white text-black font-semibold px-3 rounded-lg hover:bg-[#c7c7c7]" onClick={() => setCookiePrefs(!cookiePrefs)}>PREFERENCES</button>
                        </div>
                    </div>
                </div>
            </section>
            {cookiePrefs === true ?
                <>
                    <section className="relative z-100000 bg-black top-30 w-200 mx-auto rounded-lg py-2 px-4">
                        <h2 className="font-bold text-center">Basic information about Cookies</h2>
                        <p>Welcome to the basic information about the cookies of the website under the responsibility of the entity:
                            GIUSEPPE SPASIANO <br />
                            We use cookies to improve your browsing experience and show you personalised content. Some are essential for the site to work, others help us personalise your experience. You can accept, reject or manage your preferences at any time. For more information, see our Cookie Policy. </p>
                        <div className="h-50 overflow-auto mbs-10">
                            <div className="my-1 border-bs py-3 mx-5">
                                <h2 className="font-bold">Essentials:</h2> <p>Those cookies are stored inside your pc and are essential for the correct function of the website. ALWAYS ACTIVE.</p>
                            </div>
                            <div className="my-1 border-bs py-3 mx-5">
                                <h2 className="font-bold">Marketing:</h2> <p>Used to provide visitors customized advertizements. THERE ARE NO COOKIES TO DISPLAY.</p>
                            </div>
                            <div className="my-1 border-bs py-3 mx-5">
                                <h2 className="font-bold">Analytics:</h2> <p>Used to understand how the visitors interact with the website. THERE ARE NO COOKIES TO DISPLAY.</p>
                            </div>
                            <div className="my-1 border-bs py-3 mx-5">
                                <h2 className="font-bold">Personalization:</h2> <p>Used to offer a more personalized experience. Such data can be pronouns  THERE ARE NO COOKIES TO DISPLAY.</p>
                            </div>
                            <div className="my-1 border-bs py-3 mx-5">
                                <h2 className="font-bold">Performance:</h2> <p>Used to understand key functionalities and the general performance of the website. THERE ARE NO COOKIES TO DISPLAY.</p>
                            </div>
                            <div className="my-1 border-bs py-3 mx-5">
                                <h2 className="font-bold">Functional:</h2> <p>Used to gather data about feedbacks and other functions like sharing the content of the website on social media platforms. THERE ARE NO COOKIES TO DISPLAY.</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button className="h-10 my-auto bg-white text-black font-semibold px-6 rounded-lg hover:bg-[#c7c7c7]" onClick={handleAccept}>ACCEPT ALL</button>
                            <button className="h-10 my-auto bg-white text-black font-semibold px-6 rounded-lg hover:bg-[#c7c7c7]" onClick={handleAccept}>REJECT ALL</button>
                            <button className="h-10 my-auto bg-white text-black font-semibold px-6 rounded-lg hover:bg-[#c7c7c7]" onClick={handleAccept}>SAVE PREFERENCIES</button>
                        </div>
                    </section></>
                : ''
            }
            </div>
        </>
    )
}