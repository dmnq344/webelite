/* ==================================================================
   Spapoursouliers — Logique du site
   ------------------------------------------------------------------
   Sommaire :
     1. translations  — dictionnaire des textes (FR / EN / RO / IT)
     2. priceData     — listes de prix longues (E.2 / E.3 / E.4)
     3. applyLanguage — remplace les textes selon la langue choisie
     4. renderPrices  — génère les lignes de prix
     5. Interactions  — menu mobile, défilement, révélations, bouton flottant
   ------------------------------------------------------------------
   Pour MODIFIER un texte : trouvez sa clé ci-dessous et changez la
   valeur dans les 4 langues. Pour modifier un PRIX : voir `priceData`.
   ================================================================== */

/* =========================================================
   1. DICTIONNAIRE DES TRADUCTIONS
   ========================================================= */
const translations = {

  /* -------------------- FRANÇAIS (défaut) ----------------- */
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.pricing": "Prix",
    "nav.about": "À propos",
    "nav.corporate": "Corporate",
    "nav.donations": "Dons",
    "nav.order": "Passer la commande",

    "hero.eyebrow": "Le spa de vos chaussures",
    "hero.title": "Vos chaussures méritent une seconde vie.",
    "hero.subtitle": "Nous nettoyons, réparons et redonnons de l'éclat à toutes vos chaussures — ramassage et livraison inclus.",
    "hero.langnote": "Nous parlons français, anglais, roumain et italien.",
    "hero.secondary": "Comment ça marche",
    "hero.quote": "Les chaussures transforment ton langage corporel et ton attitude. Elles te soulèvent physiquement et émotionnellement.",

    "how.eyebrow": "Simple et pratique",
    "how.title": "Comment ça marche",
    "how.step1.title": "Vous commandez en ligne",
    "how.step1.text": "Choisissez vos services en quelques clics, depuis chez vous.",
    "how.step2.title": "Nous récupérons vos chaussures",
    "how.step2.text": "Un ramassage à l'adresse de votre choix, à l'heure qui vous convient.",
    "how.step3.title": "Nous livrons vos chaussures propres",
    "how.step3.text": "Nettoyées, réparées et éclatantes, livrées directement chez vous.",

    "services.eyebrow": "Savoir-faire artisanal",
    "services.title": "Nos services",
    "services.intro": "Spapoursouliers propose une gamme complète de services premium pour vos chaussures, réalisés avec professionnalisme et souci du détail. Chaque service est effectué avec des produits de qualité et des techniques modernes, pour que vos articles aient toujours l'air et se sentent impeccables.",
    "services.cleaning.title": "Nettoyage",
    "services.cleaning.1": "Chaussures d'enfants",
    "services.cleaning.2": "Chaussures de sport",
    "services.cleaning.3": "Cuir",
    "services.cleaning.4": "Suède",
    "services.dye.title": "Peinture / teinture",
    "services.dye.1": "Restauration et revitalisation des couleurs",
    "services.repairs.title": "Réparations",
    "services.repairs.1": "Talons",
    "services.repairs.2": "Semelles",
    "services.cobbler.title": "Cordonnerie",
    "services.cobbler.1": "Collage",
    "services.cobbler.2": "Couture",
    "services.cobbler.3": "Élargissement et ajustement (longueur et largeur)",
    "services.support": "Nous réparons et nettoyons tous types de chaussures, sandales, bottes — pour enfants, femmes et hommes. Nous éliminons la saleté, les taches et les odeurs, tout en protégeant les matériaux et en préservant leur qualité.",

    "placeholder.before": "Avant",
    "placeholder.after": "Après",
    "placeholder.color": "Couleur",
    "placeholder.repair": "Réparation",
    "placeholder.craft": "Atelier",

    "pricing.eyebrow": "Transparent et juste",
    "pricing.title": "Nos prix",
    "pricing.fromLabel": "prix à partir de",
    "pricing.spa.title": "Forfaits Spa",
    "pricing.audience.kids": "Enfants",
    "pricing.audience.adult": "Baskets / souliers adulte",
    "pricing.audience.boots": "Bottes adulte",
    "pricing.spa.inout.title": "Spa Intérieur-Extérieur",
    "pricing.spa.inout.f1": "Traitement d'hygiène",
    "pricing.spa.inout.f2": "Nettoyage extérieur",
    "pricing.spa.inout.f3": "Nettoyage des lacets",
    "pricing.spa.inout.f4": "Nettoyage intérieur",
    "pricing.spa.inout.f5": "Parfumage",
    "pricing.spa.inout.f6": "Traitement selon le matériau (cire, crème, etc.)",
    "pricing.spa.inout.f7": "Sac inclus",
    "pricing.spa.luxe.badge": "Le plus complet",
    "pricing.spa.luxe.title": "Spa de Luxe",
    "pricing.spa.luxe.f1": "Traitement d'hygiène",
    "pricing.spa.luxe.f2": "Imperméabilisation",
    "pricing.spa.luxe.f3": "Blanchiment de la semelle (là où c'est possible)",
    "pricing.spa.luxe.f4": "Nouveaux lacets (si nécessaire)",
    "pricing.spa.luxe.f5": "Estompage des rayures (cuir)",
    "pricing.spa.luxe.f6": "Revitalisation de la couleur du cuir / suède",
    "pricing.spa.luxe.f7": "Petites réparations",
    "pricing.spa.luxe.f8": "Sac inclus",
    "pricing.spa.note": "Note : la répartition des services entre les deux forfaits est une interprétation à partir du document fourni — à confirmer.",
    "pricing.women.title": "Cordonnerie — Dames",
    "pricing.men.title": "Cordonnerie — Hommes",
    "pricing.sewing.title": "Couture et nettoyage",
    "pricing.note": "Les prix varient selon l'emplacement et les offres du mois en cours. Service d'orthopédie : à discuter au cas par cas.",

    "about.eyebrow": "Notre histoire",
    "about.title": "Deux générations de cordonniers",
    "about.story": "Issu d'une famille de cordonniers, je représente la deuxième génération à exercer ce métier. Depuis mon plus jeune âge, j'ai grandi dans l'univers du cuir, entouré de chaussures, d'outils et d'un savoir-faire transmis de génération en génération. Cette passion m'a permis d'acquérir plus de 40 ans d'expérience dans la cordonnerie et l'entretien des chaussures. Animé par le désir de moderniser ce métier traditionnel, j'ai suivi une formation entrepreneuriale pour transformer mon expertise artisanale en un projet moderne et innovant.",
    "about.founder": "fondateur",
    "about.placeholder": "Cristian Rotaru",
    "about.mission.title": "Notre mission",
    "about.mission.text": "Notre mission est de redonner une seconde vie à tous les types de chaussures grâce à des services de nettoyage, d'entretien et de réparation réalisés avec soin et professionnalisme. Notre projet fonctionne entièrement en ligne pour offrir une expérience simple et pratique : le client passe sa commande, nous récupérons les chaussures à l'adresse indiquée, effectuons le travail, puis livrons le produit propre.",

    "corporate.eyebrow": "Entreprises",
    "corporate.title": "Élégance et professionnalisme pour votre équipe",
    "corporate.body": "Spapoursouliers apporte ses services professionnels de nettoyage et de reconditionnement directement dans l'univers des entreprises, pour garantir une image soignée et un confort optimal des chaussures de vos collaborateurs. Quelle que soit la taille de votre équipe, nous offrons des solutions personnalisées. Nous proposons aussi des avantages exclusifs pour les employés — codes de réduction ou abonnements mensuels flexibles — pour encourager l'entretien régulier des chaussures. Transformez l'entretien des chaussures en un avantage discret mais essentiel du professionnalisme au quotidien.",
    "corporate.cta": "Nous contacter",

    "donations.eyebrow": "Engagement social",
    "donations.title": "Un geste simple peut changer une vie",
    "donations.body": "Vous avez des chaussures que vous ne portez plus ? Ne les jetez pas. Nous pouvons leur offrir une seconde vie et les remettre entre les mains de personnes qui en ont réellement besoin. Chez Spapoursouliers, nous croyons que chaque geste compte. À travers nos initiatives de récupération, de reconditionnement et de don de chaussures, nous soutenons les personnes dans le besoin. Notre démarche s'inscrit dans une vision durable : en donnant une seconde vie aux chaussures, nous réduisons le gaspillage et participons à la protection de l'environnement. Ensemble, nous pouvons bâtir une communauté plus solidaire et un avenir plus durable.",

    "footer.tagline": "Le spa de vos chaussures, 100 % en ligne.",
    "footer.contact.title": "Nous joindre",
    "footer.phone": "Téléphone",
    "footer.email": "Courriel",
    "footer.areas.title": "Zones desservies",
    "footer.areas.text": "Grand Montréal et environs. Contactez-nous pour vérifier la couverture.",
    "footer.lang.title": "Langue",
    "footer.copyright": "© 2026 Spapoursouliers. Tous droits réservés."
  },

  /* -------------------- ANGLAIS --------------------------- */
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.corporate": "Corporate",
    "nav.donations": "Donations",
    "nav.order": "Place your order",

    "hero.eyebrow": "The spa for your shoes",
    "hero.title": "Your shoes deserve a second life.",
    "hero.subtitle": "We clean, repair and restore the shine of all your shoes — pickup and delivery included.",
    "hero.langnote": "We speak French, English, Romanian and Italian.",
    "hero.secondary": "How it works",
    "hero.quote": "Shoes transform your body language and attitude. They lift you physically and emotionally.",

    "how.eyebrow": "Simple and convenient",
    "how.title": "How it works",
    "how.step1.title": "You order online",
    "how.step1.text": "Choose your services in just a few clicks, from the comfort of home.",
    "how.step2.title": "We pick up your shoes",
    "how.step2.text": "Pickup at the address of your choice, at a time that suits you.",
    "how.step3.title": "We deliver your shoes clean",
    "how.step3.text": "Cleaned, repaired and gleaming, delivered straight to your door.",

    "services.eyebrow": "Artisan craftsmanship",
    "services.title": "Our services",
    "services.intro": "Spapoursouliers offers a complete range of premium services for your shoes, carried out with professionalism and attention to detail. Every service uses quality products and modern techniques, so your items always look and feel impeccable.",
    "services.cleaning.title": "Cleaning",
    "services.cleaning.1": "Children's shoes",
    "services.cleaning.2": "Sneakers",
    "services.cleaning.3": "Leather",
    "services.cleaning.4": "Suede",
    "services.dye.title": "Painting / dyeing",
    "services.dye.1": "Colour restoration and revitalization",
    "services.repairs.title": "Repairs",
    "services.repairs.1": "Heels",
    "services.repairs.2": "Soles",
    "services.cobbler.title": "Cobbling",
    "services.cobbler.1": "Gluing",
    "services.cobbler.2": "Stitching",
    "services.cobbler.3": "Stretching and adjustment (length and width)",
    "services.support": "We repair and clean all types of shoes, sandals and boots — for children, women and men. We remove dirt, stains and odours while protecting the materials and preserving their quality.",

    "placeholder.before": "Before",
    "placeholder.after": "After",
    "placeholder.color": "Colour",
    "placeholder.repair": "Repair",
    "placeholder.craft": "Workshop",

    "pricing.eyebrow": "Transparent and fair",
    "pricing.title": "Our pricing",
    "pricing.fromLabel": "starting from",
    "pricing.spa.title": "Spa packages",
    "pricing.audience.kids": "Kids",
    "pricing.audience.adult": "Adult sneakers / shoes",
    "pricing.audience.boots": "Adult boots",
    "pricing.spa.inout.title": "Inside-Outside Spa",
    "pricing.spa.inout.f1": "Hygiene treatment",
    "pricing.spa.inout.f2": "Exterior cleaning",
    "pricing.spa.inout.f3": "Lace cleaning",
    "pricing.spa.inout.f4": "Interior cleaning",
    "pricing.spa.inout.f5": "Fragrance treatment",
    "pricing.spa.inout.f6": "Material-specific treatment (wax, cream, etc.)",
    "pricing.spa.inout.f7": "Bag included",
    "pricing.spa.luxe.badge": "Most complete",
    "pricing.spa.luxe.title": "Luxury Spa",
    "pricing.spa.luxe.f1": "Hygiene treatment",
    "pricing.spa.luxe.f2": "Waterproofing",
    "pricing.spa.luxe.f3": "Sole whitening (where possible)",
    "pricing.spa.luxe.f4": "New laces (if needed)",
    "pricing.spa.luxe.f5": "Scratch blending (leather)",
    "pricing.spa.luxe.f6": "Leather / suede colour revitalization",
    "pricing.spa.luxe.f7": "Minor repairs",
    "pricing.spa.luxe.f8": "Bag included",
    "pricing.spa.note": "Note: the split of services between the two packages is an interpretation based on the document provided — to be confirmed.",
    "pricing.women.title": "Cobbler service — Women",
    "pricing.men.title": "Cobbler service — Men",
    "pricing.sewing.title": "Stitching and cleaning",
    "pricing.note": "Prices vary depending on location and current monthly offers. Orthopaedic service: discussed on a case-by-case basis.",

    "about.eyebrow": "Our story",
    "about.title": "Two generations of cobblers",
    "about.story": "Coming from a family of cobblers, I am the second generation to practise this craft. From an early age I grew up surrounded by leather, shoes, tools and know-how passed down from generation to generation. This passion has given me more than 40 years of experience in cobbling and shoe care. Driven by the desire to modernize this traditional trade, I completed entrepreneurial training to turn my artisanal expertise into a modern, innovative project.",
    "about.founder": "founder",
    "about.placeholder": "Cristian Rotaru",
    "about.mission.title": "Our mission",
    "about.mission.text": "Our mission is to give a second life to all types of shoes through cleaning, care and repair services carried out with care and professionalism. Our project operates entirely online to offer a simple, practical experience: the customer places an order, we pick up the shoes at the given address, do the work, then deliver the product clean.",

    "corporate.eyebrow": "Businesses",
    "corporate.title": "Elegance and professionalism for your team",
    "corporate.body": "Spapoursouliers brings its professional cleaning and reconditioning services directly into the corporate world, to ensure a polished image and optimal comfort for your employees' shoes. Whatever the size of your team, we offer tailored solutions. We also provide exclusive employee perks — discount codes or flexible monthly subscriptions — to encourage regular shoe care. Turn shoe care into a discreet yet essential everyday mark of professionalism.",
    "corporate.cta": "Contact us",

    "donations.eyebrow": "Social commitment",
    "donations.title": "A simple gesture can change a life",
    "donations.body": "Do you have shoes you no longer wear? Don't throw them away. We can give them a second life and put them into the hands of people who truly need them. At Spapoursouliers, we believe every gesture matters. Through our shoe collection, reconditioning and donation initiatives, we support people in need. Our approach is part of a sustainable vision: by giving shoes a second life, we reduce waste and help protect the environment. Together, we can build a more caring community and a more sustainable future.",

    "footer.tagline": "The spa for your shoes, 100% online.",
    "footer.contact.title": "Get in touch",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.areas.title": "Service areas",
    "footer.areas.text": "Greater Montreal and surroundings. Contact us to check coverage.",
    "footer.lang.title": "Language",
    "footer.copyright": "© 2026 Spapoursouliers. All rights reserved."
  },

  /* -------------------- ROUMAIN --------------------------- */
  ro: {
    "nav.home": "Acasă",
    "nav.services": "Servicii",
    "nav.pricing": "Prețuri",
    "nav.about": "Despre noi",
    "nav.corporate": "Corporate",
    "nav.donations": "Donații",
    "nav.order": "Plasează comanda",

    "hero.eyebrow": "Spa-ul pantofilor tăi",
    "hero.title": "Pantofii tăi merită o a doua viață.",
    "hero.subtitle": "Curățăm, reparăm și redăm strălucirea tuturor pantofilor tăi — ridicare și livrare incluse.",
    "hero.langnote": "Vorbim franceză, engleză, română și italiană.",
    "hero.secondary": "Cum funcționează",
    "hero.quote": "Pantofii îți transformă limbajul corpului și atitudinea. Te ridică fizic și emoțional.",

    "how.eyebrow": "Simplu și practic",
    "how.title": "Cum funcționează",
    "how.step1.title": "Comanzi online",
    "how.step1.text": "Alegi serviciile dorite în câteva clicuri, de acasă.",
    "how.step2.title": "Ridicăm pantofii tăi",
    "how.step2.text": "Ridicare la adresa aleasă de tine, la ora care îți convine.",
    "how.step3.title": "Îți livrăm pantofii curați",
    "how.step3.text": "Curățați, reparați și strălucitori, livrați direct la ușa ta.",

    "services.eyebrow": "Măiestrie artizanală",
    "services.title": "Serviciile noastre",
    "services.intro": "Spapoursouliers oferă o gamă completă de servicii premium pentru pantofii tăi, realizate cu profesionalism și atenție la detalii. Fiecare serviciu folosește produse de calitate și tehnici moderne, astfel încât articolele tale să arate și să se simtă mereu impecabile.",
    "services.cleaning.title": "Curățare",
    "services.cleaning.1": "Pantofi pentru copii",
    "services.cleaning.2": "Pantofi sport",
    "services.cleaning.3": "Piele",
    "services.cleaning.4": "Piele întoarsă (suede)",
    "services.dye.title": "Vopsire / colorare",
    "services.dye.1": "Restaurarea și revitalizarea culorilor",
    "services.repairs.title": "Reparații",
    "services.repairs.1": "Tocuri",
    "services.repairs.2": "Tălpi",
    "services.cobbler.title": "Cizmărie",
    "services.cobbler.1": "Lipire",
    "services.cobbler.2": "Cusut",
    "services.cobbler.3": "Lărgire și ajustare (lungime și lățime)",
    "services.support": "Reparăm și curățăm toate tipurile de pantofi, sandale și cizme — pentru copii, femei și bărbați. Îndepărtăm murdăria, petele și mirosurile, protejând în același timp materialele și păstrându-le calitatea.",

    "placeholder.before": "Înainte",
    "placeholder.after": "După",
    "placeholder.color": "Culoare",
    "placeholder.repair": "Reparație",
    "placeholder.craft": "Atelier",

    "pricing.eyebrow": "Transparent și corect",
    "pricing.title": "Prețurile noastre",
    "pricing.fromLabel": "prețuri începând de la",
    "pricing.spa.title": "Pachete Spa",
    "pricing.audience.kids": "Copii",
    "pricing.audience.adult": "Adidași / pantofi adulți",
    "pricing.audience.boots": "Cizme adulți",
    "pricing.spa.inout.title": "Spa Interior-Exterior",
    "pricing.spa.inout.f1": "Tratament de igienă",
    "pricing.spa.inout.f2": "Curățare exterioară",
    "pricing.spa.inout.f3": "Curățarea șireturilor",
    "pricing.spa.inout.f4": "Curățare interioară",
    "pricing.spa.inout.f5": "Parfumare",
    "pricing.spa.inout.f6": "Tratament în funcție de material (ceară, cremă etc.)",
    "pricing.spa.inout.f7": "Sac inclus",
    "pricing.spa.luxe.badge": "Cel mai complet",
    "pricing.spa.luxe.title": "Spa de Lux",
    "pricing.spa.luxe.f1": "Tratament de igienă",
    "pricing.spa.luxe.f2": "Impermeabilizare",
    "pricing.spa.luxe.f3": "Albirea tălpii (acolo unde este posibil)",
    "pricing.spa.luxe.f4": "Șireturi noi (dacă este necesar)",
    "pricing.spa.luxe.f5": "Estomparea zgârieturilor (piele)",
    "pricing.spa.luxe.f6": "Revitalizarea culorii pielii / pielii întoarse",
    "pricing.spa.luxe.f7": "Reparații minore",
    "pricing.spa.luxe.f8": "Sac inclus",
    "pricing.spa.note": "Notă: împărțirea serviciilor între cele două pachete este o interpretare pe baza documentului furnizat — de confirmat.",
    "pricing.women.title": "Cizmărie — Damă",
    "pricing.men.title": "Cizmărie — Bărbați",
    "pricing.sewing.title": "Cusut și curățare",
    "pricing.note": "Prețurile variază în funcție de locație și de ofertele lunii curente. Serviciu ortopedic: discutat de la caz la caz.",

    "about.eyebrow": "Povestea noastră",
    "about.title": "Două generații de cizmari",
    "about.story": "Provenind dintr-o familie de cizmari, sunt a doua generație care practică această meserie. De mic am crescut în universul pielii, înconjurat de pantofi, unelte și un meșteșug transmis din generație în generație. Această pasiune mi-a adus peste 40 de ani de experiență în cizmărie și îngrijirea pantofilor. Animat de dorința de a moderniza această meserie tradițională, am urmat o formare antreprenorială pentru a transforma expertiza mea artizanală într-un proiect modern și inovator.",
    "about.founder": "fondator",
    "about.placeholder": "Cristian Rotaru",
    "about.mission.title": "Misiunea noastră",
    "about.mission.text": "Misiunea noastră este de a oferi o a doua viață tuturor tipurilor de pantofi prin servicii de curățare, întreținere și reparație realizate cu grijă și profesionalism. Proiectul nostru funcționează complet online pentru a oferi o experiență simplă și practică: clientul plasează comanda, noi ridicăm pantofii de la adresa indicată, efectuăm lucrarea, apoi livrăm produsul curat.",

    "corporate.eyebrow": "Companii",
    "corporate.title": "Eleganță și profesionalism pentru echipa ta",
    "corporate.body": "Spapoursouliers aduce serviciile sale profesionale de curățare și recondiționare direct în lumea companiilor, pentru a garanta o imagine îngrijită și un confort optim al pantofilor angajaților tăi. Indiferent de mărimea echipei, oferim soluții personalizate. Oferim, de asemenea, avantaje exclusive pentru angajați — coduri de reducere sau abonamente lunare flexibile — pentru a încuraja întreținerea regulată a pantofilor. Transformă îngrijirea pantofilor într-un avantaj discret, dar esențial al profesionalismului de zi cu zi.",
    "corporate.cta": "Contactează-ne",

    "donations.eyebrow": "Angajament social",
    "donations.title": "Un gest simplu poate schimba o viață",
    "donations.body": "Ai pantofi pe care nu îi mai porți? Nu îi arunca. Le putem oferi o a doua viață și îi putem pune în mâinile celor care au cu adevărat nevoie de ei. La Spapoursouliers, credem că fiecare gest contează. Prin inițiativele noastre de colectare, recondiționare și donare de pantofi, sprijinim persoanele aflate în nevoie. Demersul nostru face parte dintr-o viziune durabilă: oferind pantofilor o a doua viață, reducem risipa și contribuim la protejarea mediului. Împreună putem construi o comunitate mai solidară și un viitor mai durabil.",

    "footer.tagline": "Spa-ul pantofilor tăi, 100% online.",
    "footer.contact.title": "Contact",
    "footer.phone": "Telefon",
    "footer.email": "E-mail",
    "footer.areas.title": "Zone deservite",
    "footer.areas.text": "Marele Montreal și împrejurimile. Contactează-ne pentru a verifica acoperirea.",
    "footer.lang.title": "Limbă",
    "footer.copyright": "© 2026 Spapoursouliers. Toate drepturile rezervate."
  },

  /* -------------------- ITALIEN --------------------------- */
  it: {
    "nav.home": "Home",
    "nav.services": "Servizi",
    "nav.pricing": "Prezzi",
    "nav.about": "Chi siamo",
    "nav.corporate": "Corporate",
    "nav.donations": "Donazioni",
    "nav.order": "Effettua l'ordine",

    "hero.eyebrow": "La spa delle tue scarpe",
    "hero.title": "Le tue scarpe meritano una seconda vita.",
    "hero.subtitle": "Puliamo, ripariamo e ridoniamo splendore a tutte le tue scarpe — ritiro e consegna inclusi.",
    "hero.langnote": "Parliamo francese, inglese, rumeno e italiano.",
    "hero.secondary": "Come funziona",
    "hero.quote": "Le scarpe trasformano il tuo linguaggio del corpo e il tuo atteggiamento. Ti sollevano fisicamente ed emotivamente.",

    "how.eyebrow": "Semplice e pratico",
    "how.title": "Come funziona",
    "how.step1.title": "Ordini online",
    "how.step1.text": "Scegli i tuoi servizi in pochi clic, comodamente da casa.",
    "how.step2.title": "Ritiriamo le tue scarpe",
    "how.step2.text": "Ritiro all'indirizzo che preferisci, all'orario che ti è più comodo.",
    "how.step3.title": "Ti consegniamo le scarpe pulite",
    "how.step3.text": "Pulite, riparate e splendenti, consegnate direttamente a casa tua.",

    "services.eyebrow": "Maestria artigianale",
    "services.title": "I nostri servizi",
    "services.intro": "Spapoursouliers offre una gamma completa di servizi premium per le tue scarpe, eseguiti con professionalità e cura del dettaglio. Ogni servizio utilizza prodotti di qualità e tecniche moderne, affinché i tuoi articoli appaiano e si sentano sempre impeccabili.",
    "services.cleaning.title": "Pulizia",
    "services.cleaning.1": "Scarpe per bambini",
    "services.cleaning.2": "Scarpe sportive",
    "services.cleaning.3": "Pelle",
    "services.cleaning.4": "Camoscio",
    "services.dye.title": "Pittura / tintura",
    "services.dye.1": "Ripristino e rivitalizzazione dei colori",
    "services.repairs.title": "Riparazioni",
    "services.repairs.1": "Tacchi",
    "services.repairs.2": "Suole",
    "services.cobbler.title": "Calzoleria",
    "services.cobbler.1": "Incollaggio",
    "services.cobbler.2": "Cucitura",
    "services.cobbler.3": "Allargamento e regolazione (lunghezza e larghezza)",
    "services.support": "Ripariamo e puliamo ogni tipo di scarpa, sandalo e stivale — per bambini, donne e uomini. Eliminiamo sporco, macchie e odori, proteggendo i materiali e preservandone la qualità.",

    "placeholder.before": "Prima",
    "placeholder.after": "Dopo",
    "placeholder.color": "Colore",
    "placeholder.repair": "Riparazione",
    "placeholder.craft": "Laboratorio",

    "pricing.eyebrow": "Trasparente e onesto",
    "pricing.title": "I nostri prezzi",
    "pricing.fromLabel": "prezzi a partire da",
    "pricing.spa.title": "Pacchetti Spa",
    "pricing.audience.kids": "Bambini",
    "pricing.audience.adult": "Sneaker / scarpe adulto",
    "pricing.audience.boots": "Stivali adulto",
    "pricing.spa.inout.title": "Spa Interno-Esterno",
    "pricing.spa.inout.f1": "Trattamento igienizzante",
    "pricing.spa.inout.f2": "Pulizia esterna",
    "pricing.spa.inout.f3": "Pulizia dei lacci",
    "pricing.spa.inout.f4": "Pulizia interna",
    "pricing.spa.inout.f5": "Profumazione",
    "pricing.spa.inout.f6": "Trattamento in base al materiale (cera, crema, ecc.)",
    "pricing.spa.inout.f7": "Sacca inclusa",
    "pricing.spa.luxe.badge": "Il più completo",
    "pricing.spa.luxe.title": "Spa di Lusso",
    "pricing.spa.luxe.f1": "Trattamento igienizzante",
    "pricing.spa.luxe.f2": "Impermeabilizzazione",
    "pricing.spa.luxe.f3": "Sbiancamento della suola (ove possibile)",
    "pricing.spa.luxe.f4": "Lacci nuovi (se necessario)",
    "pricing.spa.luxe.f5": "Attenuazione dei graffi (pelle)",
    "pricing.spa.luxe.f6": "Rivitalizzazione del colore di pelle / camoscio",
    "pricing.spa.luxe.f7": "Piccole riparazioni",
    "pricing.spa.luxe.f8": "Sacca inclusa",
    "pricing.spa.note": "Nota: la suddivisione dei servizi tra i due pacchetti è un'interpretazione basata sul documento fornito — da confermare.",
    "pricing.women.title": "Calzoleria — Donna",
    "pricing.men.title": "Calzoleria — Uomo",
    "pricing.sewing.title": "Cucitura e pulizia",
    "pricing.note": "I prezzi variano in base alla località e alle offerte del mese corrente. Servizio ortopedico: da valutare caso per caso.",

    "about.eyebrow": "La nostra storia",
    "about.title": "Due generazioni di calzolai",
    "about.story": "Proveniente da una famiglia di calzolai, rappresento la seconda generazione a esercitare questo mestiere. Fin da piccolo sono cresciuto nell'universo della pelle, circondato da scarpe, strumenti e un saper fare tramandato di generazione in generazione. Questa passione mi ha permesso di maturare oltre 40 anni di esperienza nella calzoleria e nella cura delle scarpe. Spinto dal desiderio di modernizzare questo mestiere tradizionale, ho seguito una formazione imprenditoriale per trasformare la mia competenza artigianale in un progetto moderno e innovativo.",
    "about.founder": "fondatore",
    "about.placeholder": "Cristian Rotaru",
    "about.mission.title": "La nostra missione",
    "about.mission.text": "La nostra missione è dare una seconda vita a ogni tipo di scarpa grazie a servizi di pulizia, manutenzione e riparazione eseguiti con cura e professionalità. Il nostro progetto funziona interamente online per offrire un'esperienza semplice e pratica: il cliente effettua l'ordine, noi ritiriamo le scarpe all'indirizzo indicato, eseguiamo il lavoro e infine consegniamo il prodotto pulito.",

    "corporate.eyebrow": "Aziende",
    "corporate.title": "Eleganza e professionalità per il tuo team",
    "corporate.body": "Spapoursouliers porta i suoi servizi professionali di pulizia e ricondizionamento direttamente nel mondo delle aziende, per garantire un'immagine curata e un comfort ottimale delle scarpe dei tuoi collaboratori. Qualunque sia la dimensione del tuo team, offriamo soluzioni personalizzate. Proponiamo anche vantaggi esclusivi per i dipendenti — codici sconto o abbonamenti mensili flessibili — per incoraggiare la cura regolare delle scarpe. Trasforma la cura delle scarpe in un vantaggio discreto ma essenziale della professionalità quotidiana.",
    "corporate.cta": "Contattaci",

    "donations.eyebrow": "Impegno sociale",
    "donations.title": "Un gesto semplice può cambiare una vita",
    "donations.body": "Hai scarpe che non indossi più? Non gettarle. Possiamo offrire loro una seconda vita e metterle nelle mani di persone che ne hanno davvero bisogno. Da Spapoursouliers crediamo che ogni gesto conti. Attraverso le nostre iniziative di raccolta, ricondizionamento e donazione di scarpe, sosteniamo le persone in difficoltà. Il nostro approccio fa parte di una visione sostenibile: dando alle scarpe una seconda vita, riduciamo gli sprechi e contribuiamo alla protezione dell'ambiente. Insieme possiamo costruire una comunità più solidale e un futuro più sostenibile.",

    "footer.tagline": "La spa delle tue scarpe, 100% online.",
    "footer.contact.title": "Contatti",
    "footer.phone": "Telefono",
    "footer.email": "E-mail",
    "footer.areas.title": "Zone servite",
    "footer.areas.text": "Grande Montreal e dintorni. Contattaci per verificare la copertura.",
    "footer.lang.title": "Lingua",
    "footer.copyright": "© 2026 Spapoursouliers. Tutti i diritti riservati."
  }
};


/* =========================================================
   2. LISTES DE PRIX (E.2 / E.3 / E.4)
   ---------------------------------------------------------
   Chaque ligne = { fr, en, ro, it, price }.
   - `price` peut être une chaîne unique (identique partout)
     ou un objet { fr, en, ro, it } quand l'unité doit être traduite.
   Pour modifier un prix : changez la valeur `price` ci-dessous.
   ========================================================= */

// Unités réutilisables (servent à composer certains prix multilingues)
const U = {
  pair: { fr: "/paire", en: "/pair", ro: "/pereche", it: "/paio" },
  each: { fr: "ch.", en: "each", ro: "buc.", it: "cad." },
  thePair: { fr: "la paire", en: "the pair", ro: "perechea", it: "il paio" },
  min: { fr: "min.", en: "min.", ro: "min.", it: "min." }
};

const priceData = {

  /* --- E.2 — Dames --- */
  women: [
    { fr: "Talons classiques", en: "Classic heels", ro: "Tocuri clasice", it: "Tacchi classici", price: "30 $" },
    { fr: "Rehausse de talons aiguilles", en: "Stiletto heel raise", ro: "Înălțare tocuri cui", it: "Rialzo tacchi a spillo", price: "19,95 $" },
    { fr: "Semelles de protection Svig", en: "Svig protective soles", ro: "Tălpi de protecție Svig", it: "Suole protettive Svig", price: "50 $" },
    { fr: "Semelles en résine (plus épaisses)", en: "Resin soles (thicker)", ro: "Tălpi din rășină (mai groase)", it: "Suole in resina (più spesse)", price: "60 $" },
    { fr: "Demi-semelles en cuir", en: "Leather half soles", ro: "Jumătăți de talpă din piele", it: "Mezze suole in pelle", price: "75 $" },
    { fr: "Tiges métalliques", en: "Metal shanks", ro: "Tije metalice", it: "Aste metalliche", price: "30 $" },
    { fr: "Réattacher le bloc de talon", en: "Reattach heel block", ro: "Refixarea blocului de toc", it: "Riattaccare il blocco del tacco", price: "30 $" },
    { fr: "Semelles miroir", en: "Mirror soles", ro: "Tălpi oglindă", it: "Suole a specchio", price: "70 $" },
    { fr: "Semelles Topy", en: "Topy soles", ro: "Tălpi Topy", it: "Suole Topy", price: "80 $" },
    { fr: "Talons Topy", en: "Topy heels", ro: "Tocuri Topy", it: "Tacchi Topy", price: "40 $" },
    { fr: "Semelles complètes Vibram", en: "Full Vibram soles", ro: "Tălpi complete Vibram", it: "Suole complete Vibram", price: "100 $" },
    { fr: "Demi-semelles Vibram", en: "Vibram half soles", ro: "Jumătăți de talpă Vibram", it: "Mezze suole Vibram", price: "80 $" },
    { fr: "Recouvrir les talons", en: "Recover heels", ro: "Reacoperirea tocurilor", it: "Rivestire i tacchi", price: "75 $" }
  ],

  /* --- E.3 — Hommes --- */
  men: [
    { fr: "Talons ordinaires", en: "Ordinary heels", ro: "Tocuri obișnuite", it: "Tacchi normali", price: "50 $" },
    { fr: "Talons cowboy", en: "Cowboy heels", ro: "Tocuri cowboy", it: "Tacchi cowboy", price: "60 $" },
    { fr: "Talons de randonnée", en: "Hiking heels", ro: "Tocuri de drumeție", it: "Tacchi da trekking", price: "55 $" },
    { fr: "Semelles protectrices Svig", en: "Svig protective soles", ro: "Tălpi protectoare Svig", it: "Suole protettive Svig", price: "60 $" },
    { fr: "Semelles en résine (plus épaisses)", en: "Resin soles (thicker)", ro: "Tălpi din rășină (mai groase)", it: "Suole in resina (più spesse)", price: "70 $" },
    { fr: "Demi-semelles de randonnée", en: "Hiking half soles", ro: "Jumătăți de talpă de drumeție", it: "Mezze suole da trekking", price: "75 $" },
    { fr: "Semelles Topy", en: "Topy soles", ro: "Tălpi Topy", it: "Suole Topy", price: "85 $" },
    { fr: "Talons Topy", en: "Topy heels", ro: "Tocuri Topy", it: "Tacchi Topy", price: "50 $" },
    { fr: "Chaussures d'escalade", en: "Climbing shoes", ro: "Pantofi de escaladă", it: "Scarpe da arrampicata", price: "70 $" },
    { fr: "Demi-semelles Vibram", en: "Vibram half soles", ro: "Jumătăți de talpă Vibram", it: "Mezze suole Vibram", price: "85 $" },
    { fr: "Semelles Vibram Gumlite complètes", en: "Full Vibram Gumlite soles", ro: "Tălpi complete Vibram Gumlite", it: "Suole complete Vibram Gumlite", price: "100 $" },
    { fr: "Semelles complètes en caoutchouc Vibram", en: "Full Vibram rubber soles", ro: "Tălpi complete din cauciuc Vibram", it: "Suole complete in gomma Vibram", price: "125 $" },
    { fr: "Semelles complètes Topy", en: "Full Topy soles", ro: "Tălpi complete Topy", it: "Suole complete Topy", price: "100 $" },
    { fr: "Semelles complètes en cuir", en: "Full leather soles", ro: "Tălpi complete din piele", it: "Suole complete in pelle", price: "100 $" },
    { fr: "Demi-semelles en cuir", en: "Leather half soles", ro: "Jumătăți de talpă din piele", it: "Mezze suole in pelle", price: "95 $" }
  ],

  /* --- E.4 — Couture et nettoyage --- */
  sewing: [
    { fr: "Lustrage de chaussures", en: "Shoe shine", ro: "Lustruirea pantofilor", it: "Lucidatura scarpe", price: "20 $" },
    { fr: "Shampoing pour chaussures", en: "Shoe shampoo", ro: "Șampon pentru pantofi", it: "Shampoo per scarpe",
      price: { fr: "25 $ /paire", en: "$25 /pair", ro: "25 $ /pereche", it: "25 $ /paio" } },
    { fr: "Lustrage de bottes", en: "Boot shine", ro: "Lustruirea cizmelor", it: "Lucidatura stivali",
      price: { fr: "25 $ /paire", en: "$25 /pair", ro: "25 $ /pereche", it: "25 $ /paio" } },
    { fr: "Shampoing pour bottes", en: "Boot shampoo", ro: "Șampon pentru cizme", it: "Shampoo per stivali",
      price: { fr: "30 $ /paire", en: "$30 /pair", ro: "30 $ /pereche", it: "30 $ /paio" } },
    { fr: "Nettoyage en profondeur", en: "Deep cleaning", ro: "Curățare în profunzime", it: "Pulizia profonda",
      price: { fr: "50 $ /paire", en: "$50 /pair", ro: "50 $ /pereche", it: "50 $ /paio" } },
    { fr: "Brillance miroir", en: "Mirror shine", ro: "Strălucire oglindă", it: "Brillantezza a specchio",
      price: { fr: "60 $ /paire", en: "$60 /pair", ro: "60 $ /pereche", it: "60 $ /paio" } },
    { fr: "Nouvel élastique", en: "New elastic", ro: "Elastic nou", it: "Elastico nuovo",
      price: { fr: "20 $ ch. / 30 $ la paire", en: "$20 each / $30 the pair", ro: "20 $ buc. / 30 $ perechea", it: "20 $ cad. / 30 $ il paio" } },
    { fr: "Nouveau Velcro", en: "New Velcro", ro: "Velcro nou", it: "Velcro nuovo",
      price: { fr: "20 $ ch. / 30 $ la paire", en: "$20 each / $30 the pair", ro: "20 $ buc. / 30 $ perechea", it: "20 $ cad. / 30 $ il paio" } },
    { fr: "Élastiques Blundstone", en: "Blundstone elastics", ro: "Elastice Blundstone", it: "Elastici Blundstone",
      price: { fr: "25 $ ch. / 4 pour 80 $", en: "$25 each / 4 for $80", ro: "25 $ buc. / 4 la 80 $", it: "25 $ cad. / 4 a 80 $" } },
    { fr: "Curseurs de fermeture éclair", en: "Zipper sliders", ro: "Cursoare de fermoar", it: "Cursori per cerniera", price: "15 $" },
    { fr: "Nouvelles fermetures éclair", en: "New zippers", ro: "Fermoare noi", it: "Cerniere nuove", price: "45 $" },
    { fr: "Fermetures éclair montant jusqu'au genou", en: "Knee-high zippers", ro: "Fermoare până la genunchi", it: "Cerniere fino al ginocchio", price: "50 $" },
    { fr: "Fermetures éclair pour équitation", en: "Riding zippers", ro: "Fermoare pentru echitație", it: "Cerniere da equitazione", price: "70 $" },
    { fr: "Élargissement de chaussures", en: "Shoe stretching", ro: "Lărgirea pantofilor", it: "Allargamento scarpe",
      price: { fr: "19,95 $ /paire", en: "$19.95 /pair", ro: "19,95 $ /pereche", it: "19,95 $ /paio" } },
    { fr: "Élargissement de mollets de bottes", en: "Boot calf widening", ro: "Lărgirea gambei cizmelor", it: "Allargamento gambale stivali",
      price: { fr: "29,95 $ /paire", en: "$29.95 /pair", ro: "29,95 $ /pereche", it: "29,95 $ /paio" } },
    { fr: "Teinture de chaussures et bottes", en: "Shoe & boot dyeing", ro: "Vopsirea pantofilor și cizmelor", it: "Tintura scarpe e stivali", price: "50 $" },
    { fr: "Tous travaux à la colle", en: "All glue work", ro: "Toate lucrările cu lipici", it: "Tutti i lavori con colla",
      price: { fr: "min. 15 $", en: "min. $15", ro: "min. 15 $", it: "min. 15 $" } }
  ]
};


/* =========================================================
   3. APPLICATION DE LA LANGUE
   ========================================================= */
let currentLang = "fr";

function translate(key, lang) {
  const dict = translations[lang] || translations.fr;
  return dict[key] !== undefined ? dict[key] : (translations.fr[key] || key);
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  // a) Remplace tous les textes marqués data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = translate(el.getAttribute("data-i18n"), lang);
  });

  // b) Met à jour l'attribut lang de la page (SEO / accessibilité)
  document.documentElement.setAttribute("lang", lang);

  // c) Regénère les listes de prix dans la bonne langue
  renderPrices(lang);

  // d) Met à jour l'état actif des sélecteurs de langue (en-tête + pied de page)
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });

  // e) Mémorise le choix pour la prochaine visite
  try { localStorage.setItem("sps-lang", lang); } catch (e) { /* stockage indisponible */ }
}


/* =========================================================
   4. GÉNÉRATION DES LIGNES DE PRIX
   ========================================================= */
function priceFor(item, lang) {
  return typeof item.price === "string" ? item.price : (item.price[lang] || item.price.fr);
}

function renderPriceList(targetId, items, lang) {
  const ul = document.getElementById(targetId);
  if (!ul) return;
  ul.innerHTML = items.map((item) => `
    <li>
      <span class="price-name">${item[lang] || item.fr}</span>
      <span class="price-value">${priceFor(item, lang)}</span>
    </li>`).join("");
}

function renderPrices(lang) {
  renderPriceList("price-women", priceData.women, lang);
  renderPriceList("price-men", priceData.men, lang);
  renderPriceList("price-sewing", priceData.sewing, lang);
}


/* =========================================================
   5. INTERACTIONS
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ---- 5.0 Langue initiale (mémorisée ou navigateur) ---- */
  let initial = "fr";
  try {
    const saved = localStorage.getItem("sps-lang");
    if (saved && translations[saved]) {
      initial = saved;
    } else {
      const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
      if (translations[nav]) initial = nav;
    }
  } catch (e) { /* ignore */ }
  applyLanguage(initial);

  /* ---- 5.1 Sélecteurs de langue (en-tête + pied de page) ---- */
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
  });

  /* ---- 5.2 Menu mobile ---- */
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  function closeMenu() {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    // Ferme le menu après un clic sur un lien
    mainNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  }

  /* ---- 5.3 En-tête : ombre au défilement ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- 5.4 Décalage progressif (stagger) des grilles ----
     On attribue un index --i à chaque enfant .reveal d'un [data-stagger]. */
  document.querySelectorAll("[data-stagger]").forEach((group) => {
    group.querySelectorAll(":scope > .reveal").forEach((child, i) => {
      child.style.setProperty("--i", i);
    });
  });

  /* ---- 5.5 Révélations au défilement (IntersectionObserver) ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // on n'anime qu'une fois
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    // Repli : tout visible si l'API n'existe pas
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---- 5.6 Navigation active selon la section visible ---- */
  const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((sec) => spy.observe(sec));
  }

  /* ---- 5.7 Bouton flottant de contact (déploiement) ---- */
  const fab = document.getElementById("contact-fab");
  const fabToggle = document.getElementById("fab-toggle");

  function openFab(open) {
    fab.classList.toggle("is-open", open);
    fabToggle.setAttribute("aria-expanded", String(open));
    fabToggle.setAttribute(
      "aria-label",
      open ? "Fermer les options de contact" : "Ouvrir les options de contact"
    );
  }
  if (fab && fabToggle) {
    fabToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      openFab(!fab.classList.contains("is-open"));
    });
    // Ferme si on clique en dehors
    document.addEventListener("click", (e) => {
      if (fab.classList.contains("is-open") && !fab.contains(e.target)) openFab(false);
    });
    // Ferme avec la touche Échap
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && fab.classList.contains("is-open")) openFab(false);
    });
  }

  /* ---- 5.8 Boutons « contact » qui ouvrent le bouton flottant ----
     Les liens internes #contact-fab (Corporate, Prix) ouvrent le menu
     de contact au lieu de défiler vers une ancre vide. */
  document.querySelectorAll('a[href="#contact-fab"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      // Amène la vue en bas si besoin puis déploie le bouton flottant
      if (fab && fabToggle) {
        openFab(true);
        fabToggle.focus({ preventScroll: true });
      }
    });
  });
});
