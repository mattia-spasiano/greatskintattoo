import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n

    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    navbar: {
                        contacts: 'CONTACT US',
                        about: 'ABOUT',
                        gallery: 'ART GALLERY',
                        services: 'SERVICES'
                    },
                    hero: {
                        description: "My body is my journal, and my tattoos are my story.",
                        author: "Johnny Depp"
                    },
                    homepage: {
                        tattoo: "Realism, anime, stylized, or fine art—whatever your preference, I’ll guide you through the process of bringing your idea to life, from designing the tattoo to inking it onto your skin, with full support throughout the healing process.",
                        piercings: "Our professional piercing service uses only top-of-the-line products and the latest techniques to minimize discomfort and pain, ensuring the safest and best possible healing experience for you.",
                        removal: "I don't just offer the opportunity to create art on your body; I also offer the option to remove designs you're not happy with.",
                        btn: "GET IN TOUCH"
                    },
                    form: {
                        check: "I consent to the use of my personal data for the purposes set forth in the ",
                        required: "means the field is required."
                    },
                    reviews: {
                        overall: "We achieve 100% client satisfaction through quality work, meticulous attention to detail, and exceptional post-treatment support and care.",
                        source: "All reviews are from Google Reviews and totally verifiable, check them out!",
                        review1: "I got a tattoo at GreatSkin and was extremely satisfied with the experience. The result was exactly what I had envisioned. Even though I don't speak fluent Spanish, everything was explained to me clearly and with a lot of patience. The artist took my wishes seriously and showed real care and understanding. I can definitely recommend this Studio.",
                        review2: "Very nice and good work! Very happy about it!!",
                        review3: "The tattoo artist is definitely skilled and professional. I first went to him to have a poorly done tattoo fixed, and he really earned my trust. Since then, I've gotten four more tattoos, all of which were done excellently. I highly recommend this place to anyone looking to get a tattoo.",
                        review4: "I'd been wanting to get a microdermal piercing for years. Finally, I discovered this place, and it was the best decision I could have made. The service was top-notch: my appointment started right on time, the place was spotless, and the staff was incredibly friendly. They gave me detailed aftercare instructions and were always available to answer any questions or offer help with aftercare. They performed this complicated piercing with great precision and kindness. Without a doubt, this is where I'll go for my next piercings or tattoos. Thanks to Giuseppe!!",
                        review5: "It was my first time there, and it was an incredible experience! He gave me great advice on the design and tailored it to my tastes and preferences. He also recommended the best spot for a perfect result. I loved the final result—you can really see the level of detail and professionalism. I'll definitely be back for my next tattoo. He's a true professional!"
                    },
                    privacy: {
                        title: "POLÍTICA DE PRIVACIDAD",
                        paragraph1: "En Europa y en España existen normas de protección de datos pensadas para proteger su información personal de obligado cumplimiento para nuestra entidad. Por ello, es muy importante para nosotros que entienda perfectamente qué vamos a hacer con los datos personales que le pedimos. Así, seremos transparentes y le daremos el control de sus datos, con un lenguaje sencillo y opciones claras que le permitirán decidir qué haremos con su información personal. Por favor, si una vez leída la presente información le queda alguna duda, no dude en preguntarnos. Muchas gracias por su colaboración.",
                        firstTab: {
                            title: "¿Quiénes somos?",

                            first: "Nuestra denominación: (GREAT SKIN & MO.MA. NAILS STUDIO) GIUSEPPE SPASIANO",
                            second: "Nuestro CIF / NIF: Y9141143Z",
                            third: "Nuestra actividad principal: Estudio de tatuaje, piercing y nails.",
                            fourth: "Nuestra dirección: AVDA. CARLOS V, N°13-B, 35240 - INGENIO (Las Palmas)",
                            fifth: "Nuestro teléfono de contacto: 696.03.17.55",
                            sixth: "Nuestra dirección de correo electrónico de contacto: giuseppe.spasiano88@gmail.com",
                            seventh: "Nuestra página web: http://www.greatskintatto.com",
                            eighth: "Estamos a su disposición, no dude en contactar con nosotros."
                        },
                        title2: "¿Para qué vamos a usar sus datos?",
                        paragraph2: {
                            text1: "Con carácter general, sus datos personales serán usados para poder relacionarnos con usted y poder prestarle nuestros servicios.",
                            text2: "Asimismo, también pueden ser usados para otras actividades, como enviarle publicidad o promocionar nuestras actividades."
                        },
                        title3: "¿Por qué necesitamos usar sus datos?",
                        paragraph3: "Sus datos personales son necesarios para poder relacionarnos con usted y poder prestarle nuestros servicios. En este sentido, pondremos a su disposición una serie de casillas que le permitirán decidir de manera clara y sencilla sobre el uso de su información personal.",
                        title4: "¿Quién va a conocer la información que le pedimos?",
                        paragraph4: {
                            text1: "Con carácter general, sólo el personal de nuestra entidad que esté debidamente autorizado podrá tener conocimiento de la información que le pedimos.",
                            text2: "De igual modo, podrán tener conocimiento de su información personal aquellas entidades que necesiten tener acceso a la misma para que podamos prestarle nuestros servicios. Así por ejemplo, nuestro banco conocerá sus datos si el pago de nuestros servicios se realiza mediante tarjeta o transferencia bancaria.",
                            text3: "Asimismo, tendrán conocimiento de su información aquellas entidades públicas o privadas a las cuales estemos obligados a facilitar sus datos personales con motivo del cumplimiento de alguna ley. Poniéndole un ejemplo, la Ley Tributaria obliga a facilitar a la Agencia Tributaria determinada información sobre operaciones económicas que superen una determinada cantidad.",
                            text4: "En el caso de que, al margen de los supuestos comentados, necesitemos dar a conocer  su información personal a otras entidades, le solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir a este respecto."
                        },
                        title5: "¿Cómo vamos a proteger sus datos?",
                        paragraph5: {
                            text1: "Protegeremos sus datos con medidas de seguridad eficaces en función de los riesgos que conlleve el uso de su información.",
                            text2: "Para ello, nuestra entidad ha aprobado una Política de Protección de Datos y se realizan controles y auditorías anuales para verificar que sus datos personales están seguros en todo momento.",
                        },
                        title6: "¿Enviaremos sus datos a otros países?",
                        paragraph6: {
                            text1: "En el mundo hay países que son seguros para sus datos y otros que no lo son tanto. Así por ejemplo, la Unión Europea es un entorno seguro para sus datos. Nuestra política es no enviar su información personal a ningún país que no sea seguro desde el punto de vista de la protección de sus datos.",
                            text2: "En el caso de que, con motivo de prestarle el servicio, sea imprescindible enviar sus datos a un país que no sea tan seguro como España, siempre le solicitaremos previamente su permiso y aplicaremos medidas de seguridad eficaces que reduzcan los riesgos del envío de su información personal a otro país.",
                        },
                        title7: "¿Durante cuánto tiempo vamos a conservar sus datos?",
                        paragraph7: "Conservaremos sus datos durante nuestra relación y mientras nos obliguen las leyes. Una vez finalizados los plazos legales aplicables, procederemos a eliminarlos de forma segura y respetuosa con el medio ambiente.",
                        title8: "¿Cuáles son sus derechos de protección de datos?",
                        paragraph8: {
                            text1: "En cualquier momento puede dirigirse a nosotros para saber qué información tenemos sobre usted, rectificarla si fuese incorrecta y eliminarla una vez finalizada nuestra relación, en el caso de que ello sea legalmente posible.",
                            text2: "También tiene derecho a solicitar el traspaso de su información a otra entidad. Este derecho se llama “portabilidad” y puede ser útil en determinadas situaciones.",
                            text3: "Para solicitar alguno de estos derechos, deberá realizar una solicitud escrita a nuestra dirección, para poder identificarle.",
                            text4: "En las oficinas de nuestra entidad disponemos de formularios específicos para solicitar dichos derechos y le ofrecemos nuestra ayuda para su cumplimentación.",
                            text5: "Para saber más sobre sus derechos de protección de datos, puede consultar la  página web de la Agencia Española de Protección de Datos (www.aepd.es).",
                        },
                        title9: "¿Puede retirar su consentimiento si cambia de opinión en un momento posterior?",
                        paragraph9: {
                            text1: "Usted puede retirar su consentimiento si cambia de opinión sobre el uso de sus datos en cualquier momento.",
                            text2: "Así por ejemplo, si usted en su día estuvo interesado/a en recibir publicidad de nuestros productos o servicios, pero ya no desea recibir más publicidad, puede hacérnoslo constar a través del formulario de oposición al tratamiento disponible en las oficinas de nuestra entidad.",
                        },
                        title10: "En caso de que entienda que sus derechos han sido desatendidos, ¿dónde puede formular una reclamación?",
                        paragraph10: {
                            text1: "En caso de que entienda que sus derechos han sido desatendidos por nuestra entidad, puede formular una reclamación en la Agencia Española de Protección de Datos, a través de alguno de los medios siguientes:",
                            subTab: {
                                text1: "Sede electrónica: www.aepd.es",
                                text2: "Dirección postal: Agencia Española de Protección de Datos C/ Jorge Juan, 628001-Madrid",
                                text3: "Vía telefónica: Telf. 901 100 099 / Telf. 91 266 35 17",
                            },
                            text2: "Formular una reclamación en la Agencia Española de Protección de Datos no conlleva ningún coste y no es necesaria la asistencia de abogado ni procurador.",
                        },
                        title11: "¿Elaboraremos perfiles sobre usted?",
                        paragraph11: {
                            text1: "Nuestra política es no elaborar perfiles sobre los usuarios de nuestros servicios.",
                            text2: "No obstante, pueden existir situaciones en las que, con fines de prestación del servicio, comerciales o de otro tipo, necesitemos elaborar perfiles de información sobre usted. Un ejemplo pudiera ser la utilización de su historial de compras o servicios para poder ofrecerle productos o servicios adaptados a sus gustos o necesidades.",
                            text3: "En tal caso, aplicaremos medidas de seguridad eficaces que protejan su información en todo momento de personas no autorizadas que pretendan utilizarla en su propio beneficio."
                        },
                        title12: "¿Usaremos sus datos para otros fines?",
                        paragraph12: "Nuestra política es no usar sus datos para otras finalidades distintas a las que le hemos explicado. Sí, no obstante, necesitásemos usar sus datos para actividades distintas, siempre le solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir al respecto."
                    },
                    cookies : {
                        title: "POLÍTICA DE COOKIES",
                        paragraph1: "Bienvenida/o a la POLÍTICA DE COOKIES de la página web de la entidad GIUSEPPE SPASIANO, provista de NIF Y9141143Z, donde te explicaremos en un lenguaje claro y sencillo todas las cuestiones necesarias para que puedas tener el control sobre ellas en base a tus decisiones personales.",
                        title1: "¿QUÉ SON LAS COOKIES Y PARA QUÉ LAS USAMOS?",
                        paragraph1: {
                            text1: "Una cookie o galleta informática es un pequeño archivo de información que se guarda en tu ordenador, “smartphone” o tableta cada vez que visitas nuestra página web.",
                            text2: "En principio, una cookie es inofensiva: no contiene virus, troyanos, gusanos, etc. que puedan dañar tu terminal, pero sí tiene cierto impacto sobre tu derecho a la protección de tus datos personales, pues recoge determinada información concerniente a tu persona (hábitos de navegación, identidad, preferencias, etc.).",
                            text3: "Es por ello que, en base a lo establecido en la normativa aplicable (LSSI y normativa vigente de protección de datos personales), la activación de determinados tipos de cookies necesitará de tu autorización previa.",
                            text4: "Antes de ello, te daremos alguna información adicional que te ayudará a una mejor toma de decisiones al respecto:",
                            subTab: {
                                firstPoint: {
                                    point: "Las cookies pueden ser de varios tipos en función de su finalidad:",
                                    text1: "Las cookies técnicas son necesarias para que nuestra página web pueda funcionar, no necesitan de tu autorización y son las únicas que tenemos activadas por defecto.",
                                    text2: "El resto de cookies sirven para mejorar nuestra página, para personalizarla en base a tus preferencias, o para poder mostrarte publicidad ajustada a tus búsquedas, gustos e intereses personales. Puedes aceptar todas estas cookies pulsando el botón ACEPTAR, rechazarlas pulsando el botón RECHAZAR o configurarlas clicando en el apartado CONFIGURACIÓN DE COOKIES."
                                },
                                secondPoint: {
                                    text1: "Algunas cookies son nuestras (las denominaremos cookies propias) y otras pertenecen a empresas externas que prestan servicios para nuestra página web (las denominaremos cookies de terceros: un ejemplo podrían ser las cookies de proveedores externos como Google). En este sentido, es importante que sepas que algunos de dichos proveedores externos pueden estar ubicados fuera de España.",
                                    text2: "A nivel mundial, no todos los países tienen un mismo nivel de protección de datos, existiendo algunos países más seguros que otros (por ejemplo, la Unión Europea es un entorno seguro para tus datos). Nuestra política es recurrir a proveedores confiables que, con independencia de que se encuentren o no ubicados en la Unión Europea, hayan adoptado las garantías adecuadas para la protección de tu información personal. No obstante, en el apartado denominado ¿QUÉ TIPO DE COOKIES SE UTILIZAN ACTUALMENTE EN NUESTRA PÁGINA WEB?, puedes consultar las distintas Políticas de privacidad y protección de datos de cada uno de los referidos proveedores externos, a fin de tomar una decisión consciente sobre la activación o no de las cookies de terceros que utiliza nuestra página web."
                                },
                                thirdPoint: {
                                    point: "Finalmente, indicarte que, en función del plazo de tiempo que permanecen activas, las cookies pueden ser de dos tipos:",
                                    text1: "Cookies de sesión: expiran automáticamente cuando terminas la sesión en tu ordenador, “smartphone” o tableta. Suelen emplearse para conservar la información necesaria mientras se te presta un servicio en una sola ocasión.",
                                    text2: "Cookies persistentes: permanecen almacenadas en tu ordenador, “smartphone” o tableta durante un periodo determinado, que puede variar desde unos minutos hasta varios años."
                                }
                            }
                        },
                        title2: "¿QUÉ TIPO DE COOKIES PODEMOS UTILIZAR EN NUESTRA PÁGINA WEB?",
                        paragraph2: {
                            subTitle: "Cookies Técnicas:",
                            text1: "Las cookies técnicas son estrictamente necesarias para que nuestra página web funcione y puedas navegar por la misma. Este tipo de cookies son las que, por ejemplo, nos permiten identificarte, darte acceso a determinadas partes restringidas de la página si fuese necesario, o recordar diferentes opciones o servicios ya seleccionados por ti, como tus preferencias de privacidad. Por ello, están activadas por defecto, no siendo necesaria tu autorización al respecto.",
                            text2: "A través de la configuración de tu navegador, puedes bloquear o alertar de la presencia de este tipo de cookies, si bien dicho bloqueo afectará al correcto funcionamiento de las distintas funcionalidades de nuestra página web.",
                            subTitle2: "Cookies de Análisis:",
                            text3: "Las cookies de análisis nos permiten estudiar la navegación de los usuarios de nuestra página web en general (por ejemplo, qué secciones de la página son las más visitadas, qué servicios se usan más y si funcionan correctamente, etc.).",
                            text4: "A partir de la información estadística sobre la navegación en nuestra página web, podemos mejorar tanto el propio funcionamiento de la página como los distintos servicios que ofrece. Por tanto, estas cookies no tienen una finalidad publicitaria, sino que únicamente sirven para que nuestra página web funcione mejor, adaptándose a nuestros usuarios en general. Activándolas contribuirás a dicha mejora continua.",
                            text5: "Puedes activar o desactivar estas cookies marcando la casilla correspondiente, estando desactivadas por defecto.",
                            subTitle3: "Cookies de Funcionalidad y Personalización:",
                            text6: "Las cookies de funcionalidad nos permiten recordar tus preferencias, para personalizar a tu medida determinadas características y opciones generales de nuestra página web, cada vez que accedas a la misma (por ejemplo, el idioma en que se te presenta la información, las secciones marcadas como favoritas, tu tipo de navegador, etc.).",
                            text7: "Por tanto, este tipo de cookies no tienen una finalidad publicitaria, sino que activándolas mejorarás la funcionalidad de la página web (por ejemplo, adaptándose a tu tipo de navegador) y la personalización de la misma en base a tus preferencias (por ejemplo, presentando la información en el idioma que hayas escogido en anteriores ocasiones), lo cual contribuirá a la facilidad, usabilidad y comodidad de nuestra página durante tu navegación.",
                            subTitle4: "Cookies de Publicidad:",
                            text9: "Las cookies de publicidad nos permiten la gestión de los espacios publicitarios incluidos en nuestra página web en base a criterios como el contenido mostrado o la frecuencia en la que se muestran los anuncios.",
                            text10: "Así por ejemplo, si se te ha mostrado varias veces un mismo anuncio en nuestra página web, y no has mostrado un interés personal haciendo clic sobre él, este no volverá a aparecer. En resumen, activando este tipo de cookies, la publicidad mostrada en nuestra página web será más útil y diversa, y menos repetitiva.",
                            subTitle5: "Cookies de Publicidad Comportamental:",
                            text11: "Las cookies de publicidad comportamental nos permiten obtener información basada en la observación de tus hábitos y comportamientos de navegación en la web, a fin de poder mostrarte contenidos publicitarios que se ajusten mejor a tus gustos e intereses personales.",
                            text12: "Para que lo entiendas de manera muy sencilla, te pondremos un ejemplo ficticio: si tus últimas búsquedas en la web estuviesen relacionadas con literatura de suspense, te mostraríamos publicidad sobre libros de suspense.",
                            text13: "Por tanto, activando este tipo de cookies, la publicidad que te mostremos en nuestra página web no será genérica, sino que estará orientada a tus búsquedas, gustos e intereses, ajustándose por tanto exclusivamente a ti.",
                        },
                        title3: "¿QUÉ TIPO DE COOKIES SE UTILIZAN ACTUALMENTE EN NUESTRA PÁGINA WEB?",
                        paragraph3: "A continuación, procedemos a informarte sobre todos los tipos de cookies que actualmente se utilizan en nuestra página web y la finalidad de cada una de las mismas:",
                        title4: "¿QUÉ PUEDES HACER CON LAS COOKIES?",
                        paragraph4: {
                            subTab: {
                                text1: "Cuando accedes por primera vez a nuestra página web, se te muestra una ventana en la que te informamos que las cookies pueden ser de varios tipos:",
                                firstPoint: "Las cookies técnicas son necesarias para que nuestra página web pueda funcionar, no necesitan de tu autorización y son las únicas que tenemos activadas por defecto.",
                                secondPoint: "El resto de cookies sirven para mejorar nuestra página, para personalizarla en base a tus preferencias, o para poder mostrarte publicidad ajustada a tus búsquedas, gustos e intereses personales. Puedes aceptar todas estas cookies pulsando el botón ACEPTAR, rechazarlas pulsando el botón RECHAZAR o configurarlas clicando en el apartado CONFIGURACIÓN DE COOKIES.",
                            }
                        },
                        paragraph5: "Informarte también que, una vez que hayas activado cualquier tipo de cookies, tienes la posibilidad de desactivarlas en el momento que desees, con el simple paso de desmarcar la casilla correspondiente en el apartado CONFIGURACIÓN DE COOKIES de nuestra página web. Siempre será tan sencillo para ti activar nuestras cookies propias como desactivarlas.",
                        paragraph6: "Recordarte asimismo que, a través de la configuración de tu navegador, puedes bloquear o alertar de la presencia de cookies, si bien dicho bloqueo puede afectar al correcto funcionamiento de las distintas funcionalidades de nuestra página web en el caso de las cookies técnicas necesarias.",
                        paragraph7: "Por último, indicarte que, si activas cookies de terceros (empresas externas que prestan servicios para nuestra página web) y posteriormente deseas desactivarlas, podrás hacerlo de dos formas: usando las herramientas de desactivación de cookies de tu navegador o a través de los propios sistemas habilitados por dichos proveedores externos."
                    },
                    contacts: {
                        socials: "You can find me in many socials, or you can just contact me through WhatsApp, whatever you prefer. Either way, I will be answering as soon as possible!"
                    },
                    about:{
                        para1: "I am Giuseppe Spasiano, 38 years old italian tattoo artist in Gran Canary, Carrizal. I have always expressed my artistic skills since I was a kid, partecipating at important competitions, even getting myself the second place in a contest organized by Walt Disney. I studied in the digital graphics field, and I worked in that field until I decided that I wanted to persue my dream in becoming a tattoo artist. I started in Italy back in 2014, in Giugliano in Campania, working for many tattoo parlors and perfectioning my artstle. Until I decided to walk different path...",
                        para2: "In 2021 I decided to begin a new adventure, and that's when I decided to move in Gran Canary where I am currently working at, showing my passion and finally having the chance to open my very own shop. I am determined to show my skills and to bring to life all your ideas, excelling in black and white realism, japanese and cortoonish styles among many other. I don't plan in stopping anytime soon, for that reason I also actively participate in contests and conventions!"
                    }
                },
            },
            it: {
                translation: {
                    navbar: {
                        contacts: 'CONTATTI',
                        about: 'CHI SIAMO',
                        gallery: 'ART GALLERY',
                        services: 'SERVIZI'
                    },
                    hero: {
                        description: "Il mio corpo è il mio diario, e i miei tatuaggi sono la mia storia.",
                        author: 'Johnny Depp'
                    },
                    homepage: {
                        tattoo: "Realismo, anime, stilizzato o fineart, qualsiasi sia la tua esigenza ti accompagnerò nella realizzazione della tua idea dalla progettazione del tatuaggio fino alla realizzazione sulla tua pelle, con completa assistenza sulla guarigione.",
                        piercings: "Il nostro servizio per la realizzazione di piercings include il top di gamma dei prodotti e procedure per minimizzare il dolore ed avere la miglior guarigione possibile.",
                        removal: "Non offro solo la possibilità di creare arte sul tuo corpo, ma offro anche la possibilità di rimuovere opere che non ti hanno soddisfatto.",
                        btn: "CONTATTAMI"
                    },
                    reviews: {
                        overall: "Raggiungiamo il 100% di soddisfazione dei clienti attraverso lavori di qualità, attenzione ai dettagli e un supporto eccezionale post-trattamento",
                        source: "Tutte le recensioni sono presenti su Google Reviews, clicca qui per altre informazioni!",
                        review1: "Mi sono fatta un tatuaggio da GreatSkin e sono rimasta estremamente soddisfatta dell'esperienza. Il risultato è stato esattamente come me lo ero immaginato. Anche se non parlo spagnolo fluentemente, mi è stato spiegato tutto in modo chiaro e con molta pazienza. Il tatuatore ha preso sul serio i miei desideri e ha dimostrato grande attenzione e comprensione. Consiglio vivamente questo studio.",
                        review2: "Davvero bello e ben fatto! Ne sono davvero contento!!",
                        review3: "Il tatuatore è decisamente competente e professionale, ho iniziato con lui chiedendogli di aggiustare un disegno di un lavoro fatto male e si è conquistato decisamente la mia fiducia, da lì in poi ho fatto altri 4 tatuaggi, tutti eseguiti in maniera eccellente, è un posto che consiglio vivamente a chi si vuole tatuare.",
                        review4: "Era da anni che volevo farmi un piercing microdermico. Finalmente ho scoperto questo posto, ed è stata la scelta migliore che potessi fare. Il servizio è stato eccellente: l'appuntamento è iniziato puntuale, il locale era pulitissimo e il personale incredibilmente cordiale. Mi hanno fornito istruzioni dettagliate per la cura post-trattamento e sono sempre stati disponibili a rispondere a qualsiasi domanda o a offrire assistenza. Hanno eseguito questo piercing complesso con grande precisione e gentilezza. Senza dubbio, è qui che tornerò per i miei prossimi piercing o tatuaggi. Grazie a Giuseppe!!",
                        review5: "Era la mia prima volta lì ed è stata un'esperienza incredibile! Mi ha dato ottimi consigli sul design e lo ha adattato ai miei gusti e alle mie preferenze. Mi ha anche consigliato la zona migliore per un risultato perfetto. Ho adorato il risultato finale: si può vedere chiaramente il livello di dettaglio e professionalità. Tornerò sicuramente per il mio prossimo tatuaggio. È un vero professionista!"
                    },
                    form: {
                        check: "Acconsento al trattamento dei miei dati per le finalità indicate nella ",
                        required: "significa che il campo è obbligatorio."
                    },
                    privacy: {
                        title: "POLÍTICA DE PRIVACIDAD",
                        paragraph1: "En Europa y en España existen normas de protección de datos pensadas para proteger su información personal de obligado cumplimiento para nuestra entidad. Por ello, es muy importante para nosotros que entienda perfectamente qué vamos a hacer con los datos personales que le pedimos. Así, seremos transparentes y le daremos el control de sus datos, con un lenguaje sencillo y opciones claras que le permitirán decidir qué haremos con su información personal. Por favor, si una vez leída la presente información le queda alguna duda, no dude en preguntarnos. Muchas gracias por su colaboración.",
                        firstTab: {
                            title: "¿Quiénes somos?",
                            first: "Nuestra denominación: (GREAT SKIN & MO.MA. NAILS STUDIO) GIUSEPPE SPASIANO",
                            second: "Nuestro CIF / NIF: Y9141143Z",
                            third: "Nuestra actividad principal: Estudio de tatuaje, piercing y nails.",
                            fourth: "Nuestra dirección: AVDA. CARLOS V, N°13-B, 35240 - INGENIO (Las Palmas)",
                            fifth: "Nuestro teléfono de contacto: 696.03.17.55",
                            sixth: "Nuestra dirección de correo electrónico de contacto: giuseppe.spasiano88@gmail.com",
                            seventh: "Nuestra página web: http://www.greatskintatto.com",
                            eighth: "Estamos a su disposición, no dude en contactar con nosotros."
                        },
                        title2: "¿Para qué vamos a usar sus datos?",
                        paragraph2: {
                            text1: "Con carácter general, sus datos personales serán usados para poder relacionarnos con usted y poder prestarle nuestros servicios.",
                            text2: "Asimismo, también pueden ser usados para otras actividades, como enviarle publicidad o promocionar nuestras actividades."
                        },
                        title3: "¿Por qué necesitamos usar sus datos?",
                        paragraph3: "Sus datos personales son necesarios para poder relacionarnos con usted y poder prestarle nuestros servicios. En este sentido, pondremos a su disposición una serie de casillas que le permitirán decidir de manera clara y sencilla sobre el uso de su información personal.",
                        title4: "¿Quién va a conocer la información que le pedimos?",
                        paragraph4: {
                            text1: "Con carácter general, sólo el personal de nuestra entidad que esté debidamente autorizado podrá tener conocimiento de la información que le pedimos.",
                            text2: "De igual modo, podrán tener conocimiento de su información personal aquellas entidades que necesiten tener acceso a la misma para que podamos prestarle nuestros servicios. Así por ejemplo, nuestro banco conocerá sus datos si el pago de nuestros servicios se realiza mediante tarjeta o transferencia bancaria.",
                            text3: "Asimismo, tendrán conocimiento de su información aquellas entidades públicas o privadas a las cuales estemos obligados a facilitar sus datos personales con motivo del cumplimiento de alguna ley. Poniéndole un ejemplo, la Ley Tributaria obliga a facilitar a la Agencia Tributaria determinada información sobre operaciones económicas que superen una determinada cantidad.",
                            text4: "En el caso de que, al margen de los supuestos comentados, necesitemos dar a conocer  su información personal a otras entidades, le solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir a este respecto."
                        },
                        title5: "¿Cómo vamos a proteger sus datos?",
                        paragraph5: {
                            text1: "Protegeremos sus datos con medidas de seguridad eficaces en función de los riesgos que conlleve el uso de su información.",
                            text2: "Para ello, nuestra entidad ha aprobado una Política de Protección de Datos y se realizan controles y auditorías anuales para verificar que sus datos personales están seguros en todo momento.",
                        },
                        title6: "¿Enviaremos sus datos a otros países?",
                        paragraph6: {
                            text1: "En el mundo hay países que son seguros para sus datos y otros que no lo son tanto. Así por ejemplo, la Unión Europea es un entorno seguro para sus datos. Nuestra política es no enviar su información personal a ningún país que no sea seguro desde el punto de vista de la protección de sus datos.",
                            text2: "En el caso de que, con motivo de prestarle el servicio, sea imprescindible enviar sus datos a un país que no sea tan seguro como España, siempre le solicitaremos previamente su permiso y aplicaremos medidas de seguridad eficaces que reduzcan los riesgos del envío de su información personal a otro país.",
                        },
                        title7: "¿Durante cuánto tiempo vamos a conservar sus datos?",
                        paragraph7: "Conservaremos sus datos durante nuestra relación y mientras nos obliguen las leyes. Una vez finalizados los plazos legales aplicables, procederemos a eliminarlos de forma segura y respetuosa con el medio ambiente.",
                        title8: "¿Cuáles son sus derechos de protección de datos?",
                        paragraph8: {
                            text1: "En cualquier momento puede dirigirse a nosotros para saber qué información tenemos sobre usted, rectificarla si fuese incorrecta y eliminarla una vez finalizada nuestra relación, en el caso de que ello sea legalmente posible.",
                            text2: "También tiene derecho a solicitar el traspaso de su información a otra entidad. Este derecho se llama “portabilidad” y puede ser útil en determinadas situaciones.",
                            text3: "Para solicitar alguno de estos derechos, deberá realizar una solicitud escrita a nuestra dirección, para poder identificarle.",
                            text4: "En las oficinas de nuestra entidad disponemos de formularios específicos para solicitar dichos derechos y le ofrecemos nuestra ayuda para su cumplimentación.",
                            text5: "Para saber más sobre sus derechos de protección de datos, puede consultar la  página web de la Agencia Española de Protección de Datos (www.aepd.es).",
                        },
                        title9: "¿Puede retirar su consentimiento si cambia de opinión en un momento posterior?",
                        paragraph9: {
                            text1: "Usted puede retirar su consentimiento si cambia de opinión sobre el uso de sus datos en cualquier momento.",
                            text2: "Así por ejemplo, si usted en su día estuvo interesado/a en recibir publicidad de nuestros productos o servicios, pero ya no desea recibir más publicidad, puede hacérnoslo constar a través del formulario de oposición al tratamiento disponible en las oficinas de nuestra entidad.",
                        },
                        title10: "En caso de que entienda que sus derechos han sido desatendidos, ¿dónde puede formular una reclamación?",
                        paragraph10: {
                            text1: "En caso de que entienda que sus derechos han sido desatendidos por nuestra entidad, puede formular una reclamación en la Agencia Española de Protección de Datos, a través de alguno de los medios siguientes:",
                            subTab: {
                                text1: "Sede electrónica: www.aepd.es",
                                text2: "Dirección postal: Agencia Española de Protección de Datos C/ Jorge Juan, 628001-Madrid",
                                text3: "Vía telefónica: Telf. 901 100 099 / Telf. 91 266 35 17",
                            },
                            text2: "Formular una reclamación en la Agencia Española de Protección de Datos no conlleva ningún coste y no es necesaria la asistencia de abogado ni procurador.",
                        },
                        title11: "¿Elaboraremos perfiles sobre usted?",
                        paragraph11: {
                            text1: "Nuestra política es no elaborar perfiles sobre los usuarios de nuestros servicios.",
                            text2: "No obstante, pueden existir situaciones en las que, con fines de prestación del servicio, comerciales o de otro tipo, necesitemos elaborar perfiles de información sobre usted. Un ejemplo pudiera ser la utilización de su historial de compras o servicios para poder ofrecerle productos o servicios adaptados a sus gustos o necesidades.",
                            text3: "En tal caso, aplicaremos medidas de seguridad eficaces que protejan su información en todo momento de personas no autorizadas que pretendan utilizarla en su propio beneficio."
                        },
                        title12: "¿Usaremos sus datos para otros fines?",
                        paragraph12: "Nuestra política es no usar sus datos para otras finalidades distintas a las que le hemos explicado. Sí, no obstante, necesitásemos usar sus datos para actividades distintas, siempre le solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir al respecto."
                    },
                    cookies : {
                        title: "POLÍTICA DE COOKIES",
                        paragraph1: "Bienvenida/o a la POLÍTICA DE COOKIES de la página web de la entidad GIUSEPPE SPASIANO, provista de NIF Y9141143Z, donde te explicaremos en un lenguaje claro y sencillo todas las cuestiones necesarias para que puedas tener el control sobre ellas en base a tus decisiones personales.",
                        title1: "¿QUÉ SON LAS COOKIES Y PARA QUÉ LAS USAMOS?",
                        paragraph1: {
                            text1: "Una cookie o galleta informática es un pequeño archivo de información que se guarda en tu ordenador, “smartphone” o tableta cada vez que visitas nuestra página web.",
                            text2: "En principio, una cookie es inofensiva: no contiene virus, troyanos, gusanos, etc. que puedan dañar tu terminal, pero sí tiene cierto impacto sobre tu derecho a la protección de tus datos personales, pues recoge determinada información concerniente a tu persona (hábitos de navegación, identidad, preferencias, etc.).",
                            text3: "Es por ello que, en base a lo establecido en la normativa aplicable (LSSI y normativa vigente de protección de datos personales), la activación de determinados tipos de cookies necesitará de tu autorización previa.",
                            text4: "Antes de ello, te daremos alguna información adicional que te ayudará a una mejor toma de decisiones al respecto:",
                            subTab: {
                                firstPoint: {
                                    point: "Las cookies pueden ser de varios tipos en función de su finalidad:",
                                    text1: "Las cookies técnicas son necesarias para que nuestra página web pueda funcionar, no necesitan de tu autorización y son las únicas que tenemos activadas por defecto.",
                                    text2: "El resto de cookies sirven para mejorar nuestra página, para personalizarla en base a tus preferencias, o para poder mostrarte publicidad ajustada a tus búsquedas, gustos e intereses personales. Puedes aceptar todas estas cookies pulsando el botón ACEPTAR, rechazarlas pulsando el botón RECHAZAR o configurarlas clicando en el apartado CONFIGURACIÓN DE COOKIES."
                                },
                                secondPoint: {
                                    text1: "Algunas cookies son nuestras (las denominaremos cookies propias) y otras pertenecen a empresas externas que prestan servicios para nuestra página web (las denominaremos cookies de terceros: un ejemplo podrían ser las cookies de proveedores externos como Google). En este sentido, es importante que sepas que algunos de dichos proveedores externos pueden estar ubicados fuera de España.",
                                    text2: "A nivel mundial, no todos los países tienen un mismo nivel de protección de datos, existiendo algunos países más seguros que otros (por ejemplo, la Unión Europea es un entorno seguro para tus datos). Nuestra política es recurrir a proveedores confiables que, con independencia de que se encuentren o no ubicados en la Unión Europea, hayan adoptado las garantías adecuadas para la protección de tu información personal. No obstante, en el apartado denominado ¿QUÉ TIPO DE COOKIES SE UTILIZAN ACTUALMENTE EN NUESTRA PÁGINA WEB?, puedes consultar las distintas Políticas de privacidad y protección de datos de cada uno de los referidos proveedores externos, a fin de tomar una decisión consciente sobre la activación o no de las cookies de terceros que utiliza nuestra página web."
                                },
                                thirdPoint: {
                                    point: "Finalmente, indicarte que, en función del plazo de tiempo que permanecen activas, las cookies pueden ser de dos tipos:",
                                    text1: "Cookies de sesión: expiran automáticamente cuando terminas la sesión en tu ordenador, “smartphone” o tableta. Suelen emplearse para conservar la información necesaria mientras se te presta un servicio en una sola ocasión.",
                                    text2: "Cookies persistentes: permanecen almacenadas en tu ordenador, “smartphone” o tableta durante un periodo determinado, que puede variar desde unos minutos hasta varios años."
                                }
                            }
                        },
                        title2: "¿QUÉ TIPO DE COOKIES PODEMOS UTILIZAR EN NUESTRA PÁGINA WEB?",
                        paragraph2: {
                            subTitle: "Cookies Técnicas:",
                            text1: "Las cookies técnicas son estrictamente necesarias para que nuestra página web funcione y puedas navegar por la misma. Este tipo de cookies son las que, por ejemplo, nos permiten identificarte, darte acceso a determinadas partes restringidas de la página si fuese necesario, o recordar diferentes opciones o servicios ya seleccionados por ti, como tus preferencias de privacidad. Por ello, están activadas por defecto, no siendo necesaria tu autorización al respecto.",
                            text2: "A través de la configuración de tu navegador, puedes bloquear o alertar de la presencia de este tipo de cookies, si bien dicho bloqueo afectará al correcto funcionamiento de las distintas funcionalidades de nuestra página web.",
                            subTitle2: "Cookies de Análisis:",
                            text3: "Las cookies de análisis nos permiten estudiar la navegación de los usuarios de nuestra página web en general (por ejemplo, qué secciones de la página son las más visitadas, qué servicios se usan más y si funcionan correctamente, etc.).",
                            text4: "A partir de la información estadística sobre la navegación en nuestra página web, podemos mejorar tanto el propio funcionamiento de la página como los distintos servicios que ofrece. Por tanto, estas cookies no tienen una finalidad publicitaria, sino que únicamente sirven para que nuestra página web funcione mejor, adaptándose a nuestros usuarios en general. Activándolas contribuirás a dicha mejora continua.",
                            text5: "Puedes activar o desactivar estas cookies marcando la casilla correspondiente, estando desactivadas por defecto.",
                            subTitle3: "Cookies de Funcionalidad y Personalización:",
                            text6: "Las cookies de funcionalidad nos permiten recordar tus preferencias, para personalizar a tu medida determinadas características y opciones generales de nuestra página web, cada vez que accedas a la misma (por ejemplo, el idioma en que se te presenta la información, las secciones marcadas como favoritas, tu tipo de navegador, etc.).",
                            text7: "Por tanto, este tipo de cookies no tienen una finalidad publicitaria, sino que activándolas mejorarás la funcionalidad de la página web (por ejemplo, adaptándose a tu tipo de navegador) y la personalización de la misma en base a tus preferencias (por ejemplo, presentando la información en el idioma que hayas escogido en anteriores ocasiones), lo cual contribuirá a la facilidad, usabilidad y comodidad de nuestra página durante tu navegación.",
                            subTitle4: "Cookies de Publicidad:",
                            text9: "Las cookies de publicidad nos permiten la gestión de los espacios publicitarios incluidos en nuestra página web en base a criterios como el contenido mostrado o la frecuencia en la que se muestran los anuncios.",
                            text10: "Así por ejemplo, si se te ha mostrado varias veces un mismo anuncio en nuestra página web, y no has mostrado un interés personal haciendo clic sobre él, este no volverá a aparecer. En resumen, activando este tipo de cookies, la publicidad mostrada en nuestra página web será más útil y diversa, y menos repetitiva.",
                            subTitle5: "Cookies de Publicidad Comportamental:",
                            text11: "Las cookies de publicidad comportamental nos permiten obtener información basada en la observación de tus hábitos y comportamientos de navegación en la web, a fin de poder mostrarte contenidos publicitarios que se ajusten mejor a tus gustos e intereses personales.",
                            text12: "Para que lo entiendas de manera muy sencilla, te pondremos un ejemplo ficticio: si tus últimas búsquedas en la web estuviesen relacionadas con literatura de suspense, te mostraríamos publicidad sobre libros de suspense.",
                            text13: "Por tanto, activando este tipo de cookies, la publicidad que te mostremos en nuestra página web no será genérica, sino que estará orientada a tus búsquedas, gustos e intereses, ajustándose por tanto exclusivamente a ti.",
                        },
                        title3: "¿QUÉ TIPO DE COOKIES SE UTILIZAN ACTUALMENTE EN NUESTRA PÁGINA WEB?",
                        paragraph3: "A continuación, procedemos a informarte sobre todos los tipos de cookies que actualmente se utilizan en nuestra página web y la finalidad de cada una de las mismas:",
                        title4: "¿QUÉ PUEDES HACER CON LAS COOKIES?",
                        paragraph4: {
                            subTab: {
                                text1: "Cuando accedes por primera vez a nuestra página web, se te muestra una ventana en la que te informamos que las cookies pueden ser de varios tipos:",
                                firstPoint: "Las cookies técnicas son necesarias para que nuestra página web pueda funcionar, no necesitan de tu autorización y son las únicas que tenemos activadas por defecto.",
                                secondPoint: "El resto de cookies sirven para mejorar nuestra página, para personalizarla en base a tus preferencias, o para poder mostrarte publicidad ajustada a tus búsquedas, gustos e intereses personales. Puedes aceptar todas estas cookies pulsando el botón ACEPTAR, rechazarlas pulsando el botón RECHAZAR o configurarlas clicando en el apartado CONFIGURACIÓN DE COOKIES.",
                            }
                        },
                        paragraph5: "Informarte también que, una vez que hayas activado cualquier tipo de cookies, tienes la posibilidad de desactivarlas en el momento que desees, con el simple paso de desmarcar la casilla correspondiente en el apartado CONFIGURACIÓN DE COOKIES de nuestra página web. Siempre será tan sencillo para ti activar nuestras cookies propias como desactivarlas.",
                        paragraph6: "Recordarte asimismo que, a través de la configuración de tu navegador, puedes bloquear o alertar de la presencia de cookies, si bien dicho bloqueo puede afectar al correcto funcionamiento de las distintas funcionalidades de nuestra página web en el caso de las cookies técnicas necesarias.",
                        paragraph7: "Por último, indicarte que, si activas cookies de terceros (empresas externas que prestan servicios para nuestra página web) y posteriormente deseas desactivarlas, podrás hacerlo de dos formas: usando las herramientas de desactivación de cookies de tu navegador o a través de los propios sistemas habilitados por dichos proveedores externos."
                    },
                    contacts: {
                        socials: "Puoi trovarmi in vari social, oppure puoi contattarmi tramite WhatsApp. In qualsiasi caso, ti risponderò non appena possibile!"
                    },
                    about:{
                        para1: "Mi chiamo Giuseppe Spasiano, sono un tatuatore italiano di 38 anni e vivo a Gran Canaria, a Carrizal. Ho sempre dato sfogo alle mie capacità artistiche fin da bambino, partecipando a importanti concorsi e aggiudicandomi persino il secondo posto in un concorso organizzato dalla Walt Disney. Ho studiato grafica digitale e ho lavorato in quel settore fino a quando ho deciso di seguire il mio sogno di diventare tatuatore. Ho iniziato in Italia nel 2014, a Giugliano in Campania, lavorando per diversi studi di tatuaggi e perfezionando il mio stile. Finché non ho deciso di intraprendere una strada diversa...",
                        para2: "Nel 2021 ho deciso di intraprendere una nuova avventura, ed è allora che ho deciso di trasferirmi a Gran Canaria, dove attualmente lavoro, dando sfogo alla mia passione e avendo finalmente l'opportunità di aprire un negozio tutto mio. Sono determinato a mettere in mostra le mie capacità e a dare vita a tutte le vostre idee, eccellendo nel realismo in bianco e nero, negli stili giapponese e cartoonesco, oltre a molti altri. Non ho intenzione di fermarmi presto, per questo motivo partecipo attivamente anche a concorsi e convention!"
                    }
                },
            },
            es: {
                translation: {
                    navbar: {
                        contacts: 'CONTACTOS',
                        about: 'QUIÉNES SOMOS',
                        gallery: 'ART GALLERY',
                        services: 'SERVICIOS'
                    },
                    hero: {
                        description: "Mi cuerpo es mi diario, y mis tatuajes son mi historia.",
                        author: 'Johnny Depp'
                    },
                    homepage: {
                        tattoo: "Realismo, anime, estilizado o fine art: te acompañaré en la materialización de tu idea, desde el diseño hasta su realización en tu piel, con seguimiento completo durante la cicatrización.",
                        piercings: "Nuestro servicio de perforación corporal incluye productos y procedimientos de primera calidad para minimizar el dolor y garantizar la mejor cicatrización posible.",
                        removal: "No solo te ofrezco la posibilidad de crear arte en tu cuerpo, sino que también te ofrezco la posibilidad de eliminar los tatuajes que no te hayan convencido.",
                        btn: "CONTACTAR"
                    },
                    form: {
                        check: "Consiento el uso de mis datos para los fines indicados en la política de privacidad ",
                        required: "significa que el campo es obligatorio."
                    },
                    reviews: {
                        overall: "Alcanzamos el 100% de satisfacción del cliente a través de trabajo de calidad, atención al detalle y un soporte excepcional post-tratamiento",
                        source: "Todas las reseñas las gestiona Google Reviews. ¡Haz clic aquí para obtener más información!",
                        review1: "Me hice un tatuaje en GreatSkin y quedé muy satisfecha con la experiencia. El resultado fue exactamente como lo había imaginado. Aunque no hablo español con fluidez, me lo explicaron todo con claridad y mucha paciencia. El tatuador se tomó muy en serio mis deseos y demostró mucha atención y comprensión. Recomiendo encarecidamente este estudio.",
                        review2: "¡Es realmente bonito y está muy bien hecho! ¡Estoy muy contento con él!",
                        review3: "El tatuador es muy competente y profesional; empecé acudiendo a él para que me retocara un tatuaje que me habían hecho mal y se ganó mi confianza por completo; desde entonces me he hecho otros cuatro tatuajes, todos ellos realizados de forma excelente; es un sitio que recomiendo encarecidamente a cualquiera que quiera hacerse un tatuaje.",
                        review4: "Llevaba años queriendo hacerme un piercing microdermal. Al final descubrí este sitio y fue lo mejor. Una atención de 10, con cita puntual, el lugar impoluto y el trato buenísimo. Con explicaciones de cuidados y a disposición de cualquier duda o ayuda en los cuidados. Con mucha precisión, en este piercing complicado y mucha amabilidad. Sin duda, mi sitio para próximos piercing o tattoos. Gracias a Giuseppe!!",
                        review5: "Es la primera vez que iba y la experiencia fue increíble! Me aconsejó bien con el diseño y lo ajustó a mis gustos y preferencias, también me aconsejó sobre la mejor zona para que quedara perfecto. El resultado final me encantó: se nota el nivel de detalle y profesionalismo. Sin duda volveré para el próximo tatuaje. Es todo un profesional!"
                    },
                    privacy: {
                        title: "POLÍTICA DE PRIVACIDAD",
                        paragraph1: "En Europa y en España existen normas de protección de datos pensadas para proteger su información personal de obligado cumplimiento para nuestra entidad. Por ello, es muy importante para nosotros que entienda perfectamente qué vamos a hacer con los datos personales que le pedimos. Así, seremos transparentes y le daremos el control de sus datos, con un lenguaje sencillo y opciones claras que le permitirán decidir qué haremos con su información personal. Por favor, si una vez leída la presente información le queda alguna duda, no dude en preguntarnos. Muchas gracias por su colaboración.",
                        firstTab: {
                            title: "¿Quiénes somos?",
                            first: "Nuestra denominación: (GREAT SKIN & MO.MA. NAILS STUDIO) GIUSEPPE SPASIANO",
                            second: "Nuestro CIF / NIF: Y9141143Z",
                            third: "Nuestra actividad principal: Estudio de tatuaje, piercing y nails.",
                            fourth: "Nuestra dirección: AVDA. CARLOS V, N°13-B, 35240 - INGENIO (Las Palmas)",
                            fifth: "Nuestro teléfono de contacto: 696.03.17.55",
                            sixth: "Nuestra dirección de correo electrónico de contacto: giuseppe.spasiano88@gmail.com",
                            seventh: "Nuestra página web: http://www.greatskintatto.com",
                            eighth: "Estamos a su disposición, no dude en contactar con nosotros."
                        },
                        title2: "¿Para qué vamos a usar sus datos?",
                        paragraph2: {
                            text1: "Con carácter general, sus datos personales serán usados para poder relacionarnos con usted y poder prestarle nuestros servicios.",
                            text2: "Asimismo, también pueden ser usados para otras actividades, como enviarle publicidad o promocionar nuestras actividades."
                        },
                        title3: "¿Por qué necesitamos usar sus datos?",
                        paragraph3: "Sus datos personales son necesarios para poder relacionarnos con usted y poder prestarle nuestros servicios. En este sentido, pondremos a su disposición una serie de casillas que le permitirán decidir de manera clara y sencilla sobre el uso de su información personal.",
                        title4: "¿Quién va a conocer la información que le pedimos?",
                        paragraph4: {
                            text1: "Con carácter general, sólo el personal de nuestra entidad que esté debidamente autorizado podrá tener conocimiento de la información que le pedimos.",
                            text2: "De igual modo, podrán tener conocimiento de su información personal aquellas entidades que necesiten tener acceso a la misma para que podamos prestarle nuestros servicios. Así por ejemplo, nuestro banco conocerá sus datos si el pago de nuestros servicios se realiza mediante tarjeta o transferencia bancaria.",
                            text3: "Asimismo, tendrán conocimiento de su información aquellas entidades públicas o privadas a las cuales estemos obligados a facilitar sus datos personales con motivo del cumplimiento de alguna ley. Poniéndole un ejemplo, la Ley Tributaria obliga a facilitar a la Agencia Tributaria determinada información sobre operaciones económicas que superen una determinada cantidad.",
                            text4: "En el caso de que, al margen de los supuestos comentados, necesitemos dar a conocer  su información personal a otras entidades, le solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir a este respecto."
                        },
                        title5: "¿Cómo vamos a proteger sus datos?",
                        paragraph5: {
                            text1: "Protegeremos sus datos con medidas de seguridad eficaces en función de los riesgos que conlleve el uso de su información.",
                            text2: "Para ello, nuestra entidad ha aprobado una Política de Protección de Datos y se realizan controles y auditorías anuales para verificar que sus datos personales están seguros en todo momento.",
                        },
                        title6: "¿Enviaremos sus datos a otros países?",
                        paragraph6: {
                            text1: "En el mundo hay países que son seguros para sus datos y otros que no lo son tanto. Así por ejemplo, la Unión Europea es un entorno seguro para sus datos. Nuestra política es no enviar su información personal a ningún país que no sea seguro desde el punto de vista de la protección de sus datos.",
                            text2: "En el caso de que, con motivo de prestarle el servicio, sea imprescindible enviar sus datos a un país que no sea tan seguro como España, siempre le solicitaremos previamente su permiso y aplicaremos medidas de seguridad eficaces que reduzcan los riesgos del envío de su información personal a otro país.",
                        },
                        title7: "¿Durante cuánto tiempo vamos a conservar sus datos?",
                        paragraph7: "Conservaremos sus datos durante nuestra relación y mientras nos obliguen las leyes. Una vez finalizados los plazos legales aplicables, procederemos a eliminarlos de forma segura y respetuosa con el medio ambiente.",
                        title8: "¿Cuáles son sus derechos de protección de datos?",
                        paragraph8: {
                            text1: "En cualquier momento puede dirigirse a nosotros para saber qué información tenemos sobre usted, rectificarla si fuese incorrecta y eliminarla una vez finalizada nuestra relación, en el caso de que ello sea legalmente posible.",
                            text2: "También tiene derecho a solicitar el traspaso de su información a otra entidad. Este derecho se llama “portabilidad” y puede ser útil en determinadas situaciones.",
                            text3: "Para solicitar alguno de estos derechos, deberá realizar una solicitud escrita a nuestra dirección, para poder identificarle.",
                            text4: "En las oficinas de nuestra entidad disponemos de formularios específicos para solicitar dichos derechos y le ofrecemos nuestra ayuda para su cumplimentación.",
                            text5: "Para saber más sobre sus derechos de protección de datos, puede consultar la  página web de la Agencia Española de Protección de Datos (www.aepd.es).",
                        },
                        title9: "¿Puede retirar su consentimiento si cambia de opinión en un momento posterior?",
                        paragraph9: {
                            text1: "Usted puede retirar su consentimiento si cambia de opinión sobre el uso de sus datos en cualquier momento.",
                            text2: "Así por ejemplo, si usted en su día estuvo interesado/a en recibir publicidad de nuestros productos o servicios, pero ya no desea recibir más publicidad, puede hacérnoslo constar a través del formulario de oposición al tratamiento disponible en las oficinas de nuestra entidad.",
                        },
                        title10: "En caso de que entienda que sus derechos han sido desatendidos, ¿dónde puede formular una reclamación?",
                        paragraph10: {
                            text1: "En caso de que entienda que sus derechos han sido desatendidos por nuestra entidad, puede formular una reclamación en la Agencia Española de Protección de Datos, a través de alguno de los medios siguientes:",
                            subTab: {
                                text1: "Sede electrónica: www.aepd.es",
                                text2: "Dirección postal: Agencia Española de Protección de Datos C/ Jorge Juan, 628001-Madrid",
                                text3: "Vía telefónica: Telf. 901 100 099 / Telf. 91 266 35 17",
                            },
                            text2: "Formular una reclamación en la Agencia Española de Protección de Datos no conlleva ningún coste y no es necesaria la asistencia de abogado ni procurador.",
                        },
                        title11: "¿Elaboraremos perfiles sobre usted?",
                        paragraph11: {
                            text1: "Nuestra política es no elaborar perfiles sobre los usuarios de nuestros servicios.",
                            text2: "No obstante, pueden existir situaciones en las que, con fines de prestación del servicio, comerciales o de otro tipo, necesitemos elaborar perfiles de información sobre usted. Un ejemplo pudiera ser la utilización de su historial de compras o servicios para poder ofrecerle productos o servicios adaptados a sus gustos o necesidades.",
                            text3: "En tal caso, aplicaremos medidas de seguridad eficaces que protejan su información en todo momento de personas no autorizadas que pretendan utilizarla en su propio beneficio."
                        },
                        title12: "¿Usaremos sus datos para otros fines?",
                        paragraph12: "Nuestra política es no usar sus datos para otras finalidades distintas a las que le hemos explicado. Sí, no obstante, necesitásemos usar sus datos para actividades distintas, siempre le solicitaremos previamente su permiso a través de opciones claras que le permitirán decidir al respecto."
                    },
                    cookies : {
                        title: "POLÍTICA DE COOKIES",
                        paragraph1: "Bienvenida/o a la POLÍTICA DE COOKIES de la página web de la entidad GIUSEPPE SPASIANO, provista de NIF Y9141143Z, donde te explicaremos en un lenguaje claro y sencillo todas las cuestiones necesarias para que puedas tener el control sobre ellas en base a tus decisiones personales.",
                        title1: "¿QUÉ SON LAS COOKIES Y PARA QUÉ LAS USAMOS?",
                        paragraph1: {
                            text1: "Una cookie o galleta informática es un pequeño archivo de información que se guarda en tu ordenador, “smartphone” o tableta cada vez que visitas nuestra página web.",
                            text2: "En principio, una cookie es inofensiva: no contiene virus, troyanos, gusanos, etc. que puedan dañar tu terminal, pero sí tiene cierto impacto sobre tu derecho a la protección de tus datos personales, pues recoge determinada información concerniente a tu persona (hábitos de navegación, identidad, preferencias, etc.).",
                            text3: "Es por ello que, en base a lo establecido en la normativa aplicable (LSSI y normativa vigente de protección de datos personales), la activación de determinados tipos de cookies necesitará de tu autorización previa.",
                            text4: "Antes de ello, te daremos alguna información adicional que te ayudará a una mejor toma de decisiones al respecto:",
                            subTab: {
                                firstPoint: {
                                    point: "Las cookies pueden ser de varios tipos en función de su finalidad:",
                                    text1: "Las cookies técnicas son necesarias para que nuestra página web pueda funcionar, no necesitan de tu autorización y son las únicas que tenemos activadas por defecto.",
                                    text2: "El resto de cookies sirven para mejorar nuestra página, para personalizarla en base a tus preferencias, o para poder mostrarte publicidad ajustada a tus búsquedas, gustos e intereses personales. Puedes aceptar todas estas cookies pulsando el botón ACEPTAR, rechazarlas pulsando el botón RECHAZAR o configurarlas clicando en el apartado CONFIGURACIÓN DE COOKIES."
                                },
                                secondPoint: {
                                    text1: "Algunas cookies son nuestras (las denominaremos cookies propias) y otras pertenecen a empresas externas que prestan servicios para nuestra página web (las denominaremos cookies de terceros: un ejemplo podrían ser las cookies de proveedores externos como Google). En este sentido, es importante que sepas que algunos de dichos proveedores externos pueden estar ubicados fuera de España.",
                                    text2: "A nivel mundial, no todos los países tienen un mismo nivel de protección de datos, existiendo algunos países más seguros que otros (por ejemplo, la Unión Europea es un entorno seguro para tus datos). Nuestra política es recurrir a proveedores confiables que, con independencia de que se encuentren o no ubicados en la Unión Europea, hayan adoptado las garantías adecuadas para la protección de tu información personal. No obstante, en el apartado denominado ¿QUÉ TIPO DE COOKIES SE UTILIZAN ACTUALMENTE EN NUESTRA PÁGINA WEB?, puedes consultar las distintas Políticas de privacidad y protección de datos de cada uno de los referidos proveedores externos, a fin de tomar una decisión consciente sobre la activación o no de las cookies de terceros que utiliza nuestra página web."
                                },
                                thirdPoint: {
                                    point: "Finalmente, indicarte que, en función del plazo de tiempo que permanecen activas, las cookies pueden ser de dos tipos:",
                                    text1: "Cookies de sesión: expiran automáticamente cuando terminas la sesión en tu ordenador, “smartphone” o tableta. Suelen emplearse para conservar la información necesaria mientras se te presta un servicio en una sola ocasión.",
                                    text2: "Cookies persistentes: permanecen almacenadas en tu ordenador, “smartphone” o tableta durante un periodo determinado, que puede variar desde unos minutos hasta varios años."
                                }
                            }
                        },
                        title2: "¿QUÉ TIPO DE COOKIES PODEMOS UTILIZAR EN NUESTRA PÁGINA WEB?",
                        paragraph2: {
                            subTitle: "Cookies Técnicas:",
                            text1: "Las cookies técnicas son estrictamente necesarias para que nuestra página web funcione y puedas navegar por la misma. Este tipo de cookies son las que, por ejemplo, nos permiten identificarte, darte acceso a determinadas partes restringidas de la página si fuese necesario, o recordar diferentes opciones o servicios ya seleccionados por ti, como tus preferencias de privacidad. Por ello, están activadas por defecto, no siendo necesaria tu autorización al respecto.",
                            text2: "A través de la configuración de tu navegador, puedes bloquear o alertar de la presencia de este tipo de cookies, si bien dicho bloqueo afectará al correcto funcionamiento de las distintas funcionalidades de nuestra página web.",
                            subTitle2: "Cookies de Análisis:",
                            text3: "Las cookies de análisis nos permiten estudiar la navegación de los usuarios de nuestra página web en general (por ejemplo, qué secciones de la página son las más visitadas, qué servicios se usan más y si funcionan correctamente, etc.).",
                            text4: "A partir de la información estadística sobre la navegación en nuestra página web, podemos mejorar tanto el propio funcionamiento de la página como los distintos servicios que ofrece. Por tanto, estas cookies no tienen una finalidad publicitaria, sino que únicamente sirven para que nuestra página web funcione mejor, adaptándose a nuestros usuarios en general. Activándolas contribuirás a dicha mejora continua.",
                            text5: "Puedes activar o desactivar estas cookies marcando la casilla correspondiente, estando desactivadas por defecto.",
                            subTitle3: "Cookies de Funcionalidad y Personalización:",
                            text6: "Las cookies de funcionalidad nos permiten recordar tus preferencias, para personalizar a tu medida determinadas características y opciones generales de nuestra página web, cada vez que accedas a la misma (por ejemplo, el idioma en que se te presenta la información, las secciones marcadas como favoritas, tu tipo de navegador, etc.).",
                            text7: "Por tanto, este tipo de cookies no tienen una finalidad publicitaria, sino que activándolas mejorarás la funcionalidad de la página web (por ejemplo, adaptándose a tu tipo de navegador) y la personalización de la misma en base a tus preferencias (por ejemplo, presentando la información en el idioma que hayas escogido en anteriores ocasiones), lo cual contribuirá a la facilidad, usabilidad y comodidad de nuestra página durante tu navegación.",
                            subTitle4: "Cookies de Publicidad:",
                            text9: "Las cookies de publicidad nos permiten la gestión de los espacios publicitarios incluidos en nuestra página web en base a criterios como el contenido mostrado o la frecuencia en la que se muestran los anuncios.",
                            text10: "Así por ejemplo, si se te ha mostrado varias veces un mismo anuncio en nuestra página web, y no has mostrado un interés personal haciendo clic sobre él, este no volverá a aparecer. En resumen, activando este tipo de cookies, la publicidad mostrada en nuestra página web será más útil y diversa, y menos repetitiva.",
                            subTitle5: "Cookies de Publicidad Comportamental:",
                            text11: "Las cookies de publicidad comportamental nos permiten obtener información basada en la observación de tus hábitos y comportamientos de navegación en la web, a fin de poder mostrarte contenidos publicitarios que se ajusten mejor a tus gustos e intereses personales.",
                            text12: "Para que lo entiendas de manera muy sencilla, te pondremos un ejemplo ficticio: si tus últimas búsquedas en la web estuviesen relacionadas con literatura de suspense, te mostraríamos publicidad sobre libros de suspense.",
                            text13: "Por tanto, activando este tipo de cookies, la publicidad que te mostremos en nuestra página web no será genérica, sino que estará orientada a tus búsquedas, gustos e intereses, ajustándose por tanto exclusivamente a ti.",
                        },
                        title3: "¿QUÉ TIPO DE COOKIES SE UTILIZAN ACTUALMENTE EN NUESTRA PÁGINA WEB?",
                        paragraph3: "A continuación, procedemos a informarte sobre todos los tipos de cookies que actualmente se utilizan en nuestra página web y la finalidad de cada una de las mismas:",
                        title4: "¿QUÉ PUEDES HACER CON LAS COOKIES?",
                        paragraph4: {
                            subTab: {
                                text1: "Cuando accedes por primera vez a nuestra página web, se te muestra una ventana en la que te informamos que las cookies pueden ser de varios tipos:",
                                firstPoint: "Las cookies técnicas son necesarias para que nuestra página web pueda funcionar, no necesitan de tu autorización y son las únicas que tenemos activadas por defecto.",
                                secondPoint: "El resto de cookies sirven para mejorar nuestra página, para personalizarla en base a tus preferencias, o para poder mostrarte publicidad ajustada a tus búsquedas, gustos e intereses personales. Puedes aceptar todas estas cookies pulsando el botón ACEPTAR, rechazarlas pulsando el botón RECHAZAR o configurarlas clicando en el apartado CONFIGURACIÓN DE COOKIES.",
                            }
                        },
                        paragraph5: "Informarte también que, una vez que hayas activado cualquier tipo de cookies, tienes la posibilidad de desactivarlas en el momento que desees, con el simple paso de desmarcar la casilla correspondiente en el apartado CONFIGURACIÓN DE COOKIES de nuestra página web. Siempre será tan sencillo para ti activar nuestras cookies propias como desactivarlas.",
                        paragraph6: "Recordarte asimismo que, a través de la configuración de tu navegador, puedes bloquear o alertar de la presencia de cookies, si bien dicho bloqueo puede afectar al correcto funcionamiento de las distintas funcionalidades de nuestra página web en el caso de las cookies técnicas necesarias.",
                        paragraph7: "Por último, indicarte que, si activas cookies de terceros (empresas externas que prestan servicios para nuestra página web) y posteriormente deseas desactivarlas, podrás hacerlo de dos formas: usando las herramientas de desactivación de cookies de tu navegador o a través de los propios sistemas habilitados por dichos proveedores externos."
                    },
                    contacts: {
                        socials: "Puedes encontrarme en varias redes sociales o ponerte en contacto conmigo por WhatsApp. En cualquier caso, ¡te responderé lo antes posible!"
                    },
                    about:{
                        para1: "Soy Giuseppe Spasiano, un tatuador italiano de 38 años afincado en Gran Canaria, en Carrizal. Siempre he dado rienda suelta a mi talento artístico, desde que era niño, participando en importantes concursos e incluso consiguiendo el segundo puesto en un certamen organizado por Walt Disney. Estudié diseño gráfico digital y trabajé en ese campo hasta que decidí que quería perseguir mi sueño de convertirme en tatuador. Empecé en Italia en 2014, en Giugliano in Campania, trabajando para muchos estudios de tatuajes y perfeccionando mi estilo. Hasta que decidí tomar un camino diferente...",
                        para2: "En 2021 decidí emprender una nueva aventura, y fue entonces cuando decidí mudarme a Gran Canaria, donde actualmente trabajo, dando rienda suelta a mi pasión y teniendo por fin la oportunidad de abrir mi propia tienda. Estoy decidido a demostrar mi talento y a hacer realidad todas vuestras ideas, destacando en el realismo en blanco y negro, los estilos japonés y caricaturesco, entre muchos otros. No tengo intención de parar pronto, ¡por eso también participo activamente en concursos y convenciones!"
                    }
                },
            },
        },
    });

export default i18n;