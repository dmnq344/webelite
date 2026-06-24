/* SPA SHOES — i18n (FR/EN/RO/IT) + données + interactions. Contenu réel réutilisé. */

const translations = {

  /* -------------------- FRANÇAIS -------------------------- */
  fr: {
    "nav.home": "Accueil", "nav.services": "Services", "nav.pricing": "Prix",
    "nav.about": "À propos", "nav.corporate": "Corporate", "nav.donations": "Dons",
    "nav.order": "Passer la commande",

    "hero.eyebrow": "La maison de soin des souliers",
    "hero.title.1": "Vos chaussures méritent",
    "hero.title.2": "une seconde vie.",
    "hero.subtitle": "Nous nettoyons, réparons, teignons et redonnons de l'éclat à toutes vos chaussures — ramassage et livraison inclus.",
    "hero.secondary": "Découvrir le rituel",
    "hero.langnote": "Nous parlons français, anglais, roumain et italien.",
    "hero.slogan": "Donnez une nouvelle vie à vos souliers",
    "hero.badge.years": "40+",
    "hero.badge.label": "ans de savoir-faire",

    "stat.years": "ans d'expérience",
    "stat.gen": "générations de cordonniers",
    "stat.langs": "langues parlées",
    "stat.online": "en ligne, sans déplacement",
    "marquee.words": "Nettoyage · Cordonnerie · Teinture · Cuir · Suède · Réparations · Imperméabilisation · Ramassage & livraison",

    "how.eyebrow": "Simple et raffiné",
    "how.title": "Le rituel, en trois temps",
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
    "services.ortho.eyebrow": "Service spécialisé",
    "services.ortho.title": "Chaussures orthopédiques",
    "services.ortho.text": "Réparation et reconstruction de chaussures orthopédiques, réalisées avec un soin particulier. Chaque demande est évaluée et chiffrée au cas par cas.",
    "services.ortho.tag": "Sur devis",
    "services.ortho.cta": "Demander un devis →",
    "services.support": "Nous réparons et nettoyons tous types de chaussures, sandales, bottes — pour enfants, femmes et hommes. Nous éliminons la saleté, les taches et les odeurs, tout en protégeant les matériaux et en préservant leur qualité. Nous prenons également soin de vos sacs en cuir.",

    "placeholder.beforeafter": "Avant / Après",
    "placeholder.craft": "Atelier",

    "pricing.eyebrow": "Transparent et juste",
    "pricing.title": "La carte des soins",
    "pricing.fromLabel": "prix à partir de",
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
    "pricing.women.title": "Cordonnerie — Dames",
    "pricing.men.title": "Cordonnerie — Hommes",
    "pricing.sewing.title": "Couture et nettoyage",
    "pricing.note": "Les prix varient selon l'emplacement et les offres du mois en cours. Service d'orthopédie : à discuter au cas par cas.",

    "about.eyebrow": "Notre histoire",
    "about.title": "Deux générations de cordonniers",
    "about.lede": "« Le cuir, je l'ai dans les mains depuis l'enfance. »",
    "about.story": "Issu d'une famille de cordonniers, je représente la deuxième génération à exercer ce métier. Depuis mon plus jeune âge, j'ai grandi dans l'univers du cuir, entouré de chaussures, d'outils et d'un savoir-faire transmis de génération en génération. Cette passion m'a permis d'acquérir plus de 40 ans d'expérience dans la cordonnerie et l'entretien des chaussures. Animé par le désir de moderniser ce métier traditionnel, j'ai suivi une formation entrepreneuriale de neuf mois pour transformer mon expertise artisanale en un projet moderne et innovant.",
    "about.founder": "fondateur",
    "about.mission.title": "Notre mission",
    "about.mission.text": "Notre mission est de redonner une seconde vie à tous les types de chaussures grâce à des services de nettoyage, d'entretien et de réparation réalisés avec soin et professionnalisme. Notre projet fonctionne entièrement en ligne pour offrir une expérience simple et pratique : le client passe sa commande, nous récupérons les chaussures à l'adresse indiquée, effectuons le travail, puis livrons le produit propre.",
    "about.heritage.title": "Un héritage et un savoir-faire reconnus",
    "about.heritage.presse": "Cristian Rotaru, une vie au service des chaussures",
    "about.heritage.attestation": "Attestation professionnelle — Québec, 2025",

    "corporate.eyebrow": "Entreprises",
    "corporate.title": "Élégance et professionnalisme pour votre équipe",
    "corporate.tagline": "Des chaussures d'équipe toujours impeccables.",
    "corporate.body": "Spapoursouliers apporte ses services professionnels de nettoyage et de reconditionnement directement dans l'univers des entreprises, pour garantir une image soignée et un confort optimal des chaussures de vos collaborateurs. Quelle que soit la taille de votre équipe, nous offrons des solutions personnalisées. Nous proposons aussi des avantages exclusifs pour les employés — codes de réduction ou abonnements mensuels flexibles — pour encourager l'entretien régulier des chaussures. Transformez l'entretien des chaussures en un avantage discret mais essentiel du professionnalisme au quotidien.",
    "corporate.cta": "Nous contacter",

    "donations.eyebrow": "Engagement social",
    "donations.title": "Un geste simple peut changer une vie",
    "donations.body": "Vous avez des chaussures que vous ne portez plus ? Ne les jetez pas. Nous pouvons leur offrir une seconde vie et les remettre entre les mains de personnes qui en ont réellement besoin. Chez Spapoursouliers, nous croyons que chaque geste compte. À travers nos initiatives de récupération, de reconditionnement et de don de chaussures et d'articles en cuir, nous soutenons les personnes qui vivent dans la rue, dont le nombre ne cesse malheureusement d'augmenter. Notre démarche s'inscrit dans une vision durable : en donnant une seconde vie aux chaussures, nous réduisons le gaspillage et participons à la protection de l'environnement. Ensemble, nous pouvons bâtir une communauté plus solidaire et un avenir plus durable.",

    "footer.cta.title": "Prêt à offrir un nouveau départ à vos souliers ?",
    "footer.tagline": "La maison de soin des souliers, 100 % en ligne.",
    "footer.contact.title": "Nous joindre",
    "footer.phone": "Téléphone",
    "footer.email": "Courriel",
    "footer.areas.title": "Zones desservies",
    "footer.areas.text": "Grand Montréal et environs. Contactez-nous pour vérifier la couverture.",
    "footer.lang.title": "Langue",
    "a11y.skip": "Aller au contenu",
    "footer.copyright": "© 2026 Spapoursouliers. Tous droits réservés."
  },

  /* -------------------- ANGLAIS -------------------------- */
  en: {
    "nav.home": "Home", "nav.services": "Services", "nav.pricing": "Pricing",
    "nav.about": "About", "nav.corporate": "Corporate", "nav.donations": "Donations",
    "nav.order": "Place your order",

    "hero.eyebrow": "The house of shoe care",
    "hero.title.1": "Your shoes deserve",
    "hero.title.2": "a second life.",
    "hero.subtitle": "We clean, repair, dye and restore the shine of all your shoes — pickup and delivery included.",
    "hero.secondary": "Discover the ritual",
    "hero.langnote": "We speak French, English, Romanian and Italian.",
    "hero.slogan": "Give your shoes a new life",
    "hero.badge.years": "40+",
    "hero.badge.label": "years of craftsmanship",

    "stat.years": "years of experience",
    "stat.gen": "generations of cobblers",
    "stat.langs": "languages spoken",
    "stat.online": "online, zero hassle",
    "marquee.words": "Cleaning · Cobbling · Dyeing · Leather · Suede · Repairs · Waterproofing · Pickup & delivery",

    "how.eyebrow": "Simple and refined",
    "how.title": "The ritual, in three steps",
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
    "services.ortho.eyebrow": "Specialized service",
    "services.ortho.title": "Orthopaedic shoes",
    "services.ortho.text": "Repair and reconstruction of orthopaedic shoes, carried out with special care. Each request is assessed and quoted on a case-by-case basis.",
    "services.ortho.tag": "On quote",
    "services.ortho.cta": "Request a quote →",
    "services.support": "We repair and clean all types of shoes, sandals and boots — for children, women and men. We remove dirt, stains and odours while protecting the materials and preserving their quality. We also take care of your leather bags.",

    "placeholder.beforeafter": "Before / After",
    "placeholder.craft": "Workshop",

    "pricing.eyebrow": "Transparent and fair",
    "pricing.title": "The care menu",
    "pricing.fromLabel": "starting from",
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
    "pricing.women.title": "Cobbler service — Women",
    "pricing.men.title": "Cobbler service — Men",
    "pricing.sewing.title": "Stitching and cleaning",
    "pricing.note": "Prices vary depending on location and current monthly offers. Orthopaedic service: discussed on a case-by-case basis.",

    "about.eyebrow": "Our story",
    "about.title": "Two generations of cobblers",
    "about.lede": "“Leather has been in my hands since childhood.”",
    "about.story": "Coming from a family of cobblers, I am the second generation to practise this craft. From an early age I grew up surrounded by leather, shoes, tools and know-how passed down from generation to generation. This passion has given me more than 40 years of experience in cobbling and shoe care. Driven by the desire to modernize this traditional trade, I completed a nine-month entrepreneurial training program to turn my artisanal expertise into a modern, innovative project.",
    "about.founder": "founder",
    "about.mission.title": "Our mission",
    "about.mission.text": "Our mission is to give a second life to all types of shoes through cleaning, care and repair services carried out with care and professionalism. Our project operates entirely online to offer a simple, practical experience: the customer places an order, we pick up the shoes at the given address, do the work, then deliver the product clean.",
    "about.heritage.title": "A recognized heritage and craftsmanship",
    "about.heritage.presse": "Cristian Rotaru, a life dedicated to shoes",
    "about.heritage.attestation": "Professional certification — Québec, 2025",

    "corporate.eyebrow": "Businesses",
    "corporate.title": "Elegance and professionalism for your team",
    "corporate.tagline": "Team shoes that always look impeccable.",
    "corporate.body": "Spapoursouliers brings its professional cleaning and reconditioning services directly into the corporate world, to ensure a polished image and optimal comfort for your employees' shoes. Whatever the size of your team, we offer tailored solutions. We also provide exclusive employee perks — discount codes or flexible monthly subscriptions — to encourage regular shoe care. Turn shoe care into a discreet yet essential everyday mark of professionalism.",
    "corporate.cta": "Contact us",

    "donations.eyebrow": "Social commitment",
    "donations.title": "A simple gesture can change a life",
    "donations.body": "Do you have shoes you no longer wear? Don't throw them away. We can give them a second life and put them into the hands of people who truly need them. At Spapoursouliers, we believe every gesture matters. Through our collection, reconditioning and donation initiatives for shoes and leather goods, we support people living on the street, whose numbers sadly keep growing. Our approach is part of a sustainable vision: by giving shoes a second life, we reduce waste and help protect the environment. Together, we can build a more caring community and a more sustainable future.",

    "footer.cta.title": "Ready to give your shoes a fresh start?",
    "footer.tagline": "The house of shoe care, 100% online.",
    "footer.contact.title": "Get in touch",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.areas.title": "Service areas",
    "footer.areas.text": "Greater Montreal and surroundings. Contact us to check coverage.",
    "footer.lang.title": "Language",
    "a11y.skip": "Skip to content",
    "footer.copyright": "© 2026 Spapoursouliers. All rights reserved."
  },

  /* -------------------- ROUMAIN -------------------------- */
  ro: {
    "nav.home": "Acasă", "nav.services": "Servicii", "nav.pricing": "Prețuri",
    "nav.about": "Despre noi", "nav.corporate": "Corporate", "nav.donations": "Donații",
    "nav.order": "Plasează comanda",

    "hero.eyebrow": "Casa de îngrijire a pantofilor",
    "hero.title.1": "Pantofii tăi merită",
    "hero.title.2": "o a doua viață.",
    "hero.subtitle": "Curățăm, reparăm, vopsim și redăm strălucirea tuturor pantofilor tăi — ridicare și livrare incluse.",
    "hero.secondary": "Descoperă ritualul",
    "hero.langnote": "Vorbim franceză, engleză, română și italiană.",
    "hero.slogan": "Oferă o nouă viață pantofilor tăi",
    "hero.badge.years": "40+",
    "hero.badge.label": "ani de măiestrie",

    "stat.years": "ani de experiență",
    "stat.gen": "generații de cizmari",
    "stat.langs": "limbi vorbite",
    "stat.online": "online, fără deplasare",
    "marquee.words": "Curățare · Cizmărie · Vopsire · Piele · Piele întoarsă · Reparații · Impermeabilizare · Ridicare & livrare",

    "how.eyebrow": "Simplu și rafinat",
    "how.title": "Ritualul, în trei pași",
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
    "services.ortho.eyebrow": "Serviciu specializat",
    "services.ortho.title": "Pantofi ortopedici",
    "services.ortho.text": "Repararea și reconstrucția pantofilor ortopedici, realizate cu o grijă deosebită. Fiecare solicitare este evaluată și estimată de la caz la caz.",
    "services.ortho.tag": "La cerere",
    "services.ortho.cta": "Cere o ofertă →",
    "services.support": "Reparăm și curățăm toate tipurile de pantofi, sandale și cizme — pentru copii, femei și bărbați. Îndepărtăm murdăria, petele și mirosurile, protejând în același timp materialele și păstrându-le calitatea. Avem grijă și de gențile tale din piele.",

    "placeholder.beforeafter": "Înainte / După",
    "placeholder.craft": "Atelier",

    "pricing.eyebrow": "Transparent și corect",
    "pricing.title": "Meniul îngrijirilor",
    "pricing.fromLabel": "prețuri începând de la",
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
    "pricing.women.title": "Cizmărie — Damă",
    "pricing.men.title": "Cizmărie — Bărbați",
    "pricing.sewing.title": "Cusut și curățare",
    "pricing.note": "Prețurile variază în funcție de locație și de ofertele lunii curente. Serviciu ortopedic: discutat de la caz la caz.",

    "about.eyebrow": "Povestea noastră",
    "about.title": "Două generații de cizmari",
    "about.lede": "„Pielea o am în mâini încă din copilărie.”",
    "about.story": "Provenind dintr-o familie de cizmari, sunt a doua generație care practică această meserie. De mic am crescut în universul pielii, înconjurat de pantofi, unelte și un meșteșug transmis din generație în generație. Această pasiune mi-a adus peste 40 de ani de experiență în cizmărie și îngrijirea pantofilor. Animat de dorința de a moderniza această meserie tradițională, am urmat o formare antreprenorială de nouă luni pentru a-mi transforma expertiza artizanală într-un proiect modern și inovator.",
    "about.founder": "fondator",
    "about.mission.title": "Misiunea noastră",
    "about.mission.text": "Misiunea noastră este de a oferi o a doua viață tuturor tipurilor de pantofi prin servicii de curățare, întreținere și reparație realizate cu grijă și profesionalism. Proiectul nostru funcționează complet online pentru a oferi o experiență simplă și practică: clientul plasează comanda, noi ridicăm pantofii de la adresa indicată, efectuăm lucrarea, apoi livrăm produsul curat.",
    "about.heritage.title": "O moștenire și un savoir-faire recunoscute",
    "about.heritage.presse": "Cristian Rotaru, o viață în slujba pantofilor",
    "about.heritage.attestation": "Atestat profesional — Québec, 2025",

    "corporate.eyebrow": "Companii",
    "corporate.title": "Eleganță și profesionalism pentru echipa ta",
    "corporate.tagline": "Pantofii echipei mereu impecabili.",
    "corporate.body": "Spapoursouliers aduce serviciile sale profesionale de curățare și recondiționare direct în lumea companiilor, pentru a garanta o imagine îngrijită și un confort optim al pantofilor angajaților tăi. Indiferent de mărimea echipei, oferim soluții personalizate. Oferim, de asemenea, avantaje exclusive pentru angajați — coduri de reducere sau abonamente lunare flexibile — pentru a încuraja întreținerea regulată a pantofilor. Transformă îngrijirea pantofilor într-un avantaj discret, dar esențial al profesionalismului de zi cu zi.",
    "corporate.cta": "Contactează-ne",

    "donations.eyebrow": "Angajament social",
    "donations.title": "Un gest simplu poate schimba o viață",
    "donations.body": "Ai pantofi pe care nu îi mai porți? Nu îi arunca. Le putem oferi o a doua viață și îi putem pune în mâinile celor care au cu adevărat nevoie de ei. La Spapoursouliers, credem că fiecare gest contează. Prin inițiativele noastre de colectare, recondiționare și donare de pantofi și articole din piele, sprijinim persoanele care trăiesc pe stradă, al căror număr, din păcate, este în continuă creștere. Demersul nostru face parte dintr-o viziune durabilă: oferind pantofilor o a doua viață, reducem risipa și contribuim la protejarea mediului. Împreună putem construi o comunitate mai solidară și un viitor mai durabil.",

    "footer.cta.title": "Gata să oferi pantofilor tăi un nou început?",
    "footer.tagline": "Casa de îngrijire a pantofilor, 100% online.",
    "footer.contact.title": "Contact",
    "footer.phone": "Telefon",
    "footer.email": "E-mail",
    "footer.areas.title": "Zone deservite",
    "footer.areas.text": "Marele Montreal și împrejurimile. Contactează-ne pentru a verifica acoperirea.",
    "footer.lang.title": "Limbă",
    "a11y.skip": "Sari la conținut",
    "footer.copyright": "© 2026 Spapoursouliers. Toate drepturile rezervate."
  },

  /* -------------------- ITALIEN -------------------------- */
  it: {
    "nav.home": "Home", "nav.services": "Servizi", "nav.pricing": "Prezzi",
    "nav.about": "Chi siamo", "nav.corporate": "Corporate", "nav.donations": "Donazioni",
    "nav.order": "Effettua l'ordine",

    "hero.eyebrow": "La casa della cura delle scarpe",
    "hero.title.1": "Le tue scarpe meritano",
    "hero.title.2": "una seconda vita.",
    "hero.subtitle": "Puliamo, ripariamo, tingiamo e ridoniamo splendore a tutte le tue scarpe — ritiro e consegna inclusi.",
    "hero.secondary": "Scopri il rituale",
    "hero.langnote": "Parliamo francese, inglese, rumeno e italiano.",
    "hero.slogan": "Dai una nuova vita alle tue scarpe",
    "hero.badge.years": "40+",
    "hero.badge.label": "anni di maestria",

    "stat.years": "anni di esperienza",
    "stat.gen": "generazioni di calzolai",
    "stat.langs": "lingue parlate",
    "stat.online": "online, senza spostamenti",
    "marquee.words": "Pulizia · Calzoleria · Tintura · Pelle · Camoscio · Riparazioni · Impermeabilizzazione · Ritiro & consegna",

    "how.eyebrow": "Semplice e raffinato",
    "how.title": "Il rituale, in tre tempi",
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
    "services.ortho.eyebrow": "Servizio specializzato",
    "services.ortho.title": "Scarpe ortopediche",
    "services.ortho.text": "Riparazione e ricostruzione di scarpe ortopediche, eseguite con cura particolare. Ogni richiesta è valutata e preventivata caso per caso.",
    "services.ortho.tag": "Su preventivo",
    "services.ortho.cta": "Richiedi un preventivo →",
    "services.support": "Ripariamo e puliamo ogni tipo di scarpa, sandalo e stivale — per bambini, donne e uomini. Eliminiamo sporco, macchie e odori, proteggendo i materiali e preservandone la qualità. Ci prendiamo cura anche delle tue borse in pelle.",

    "placeholder.beforeafter": "Prima / Dopo",
    "placeholder.craft": "Laboratorio",

    "pricing.eyebrow": "Trasparente e onesto",
    "pricing.title": "Il menù dei trattamenti",
    "pricing.fromLabel": "prezzi a partire da",
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
    "pricing.women.title": "Calzoleria — Donna",
    "pricing.men.title": "Calzoleria — Uomo",
    "pricing.sewing.title": "Cucitura e pulizia",
    "pricing.note": "I prezzi variano in base alla località e alle offerte del mese corrente. Servizio ortopedico: da valutare caso per caso.",

    "about.eyebrow": "La nostra storia",
    "about.title": "Due generazioni di calzolai",
    "about.lede": "«La pelle ce l'ho nelle mani fin da bambino.»",
    "about.story": "Proveniente da una famiglia di calzolai, rappresento la seconda generazione a esercitare questo mestiere. Fin da piccolo sono cresciuto nell'universo della pelle, circondato da scarpe, strumenti e un saper fare tramandato di generazione in generazione. Questa passione mi ha permesso di maturare oltre 40 anni di esperienza nella calzoleria e nella cura delle scarpe. Spinto dal desiderio di modernizzare questo mestiere tradizionale, ho seguito una formazione imprenditoriale di nove mesi per trasformare la mia competenza artigianale in un progetto moderno e innovativo.",
    "about.founder": "fondatore",
    "about.mission.title": "La nostra missione",
    "about.mission.text": "La nostra missione è dare una seconda vita a ogni tipo di scarpa grazie a servizi di pulizia, manutenzione e riparazione eseguiti con cura e professionalità. Il nostro progetto funziona interamente online per offrire un'esperienza semplice e pratica: il cliente effettua l'ordine, noi ritiriamo le scarpe all'indirizzo indicato, eseguiamo il lavoro e infine consegniamo il prodotto pulito.",
    "about.heritage.title": "Un'eredità e una maestria riconosciute",
    "about.heritage.presse": "Cristian Rotaru, una vita al servizio delle scarpe",
    "about.heritage.attestation": "Attestato professionale — Québec, 2025",

    "corporate.eyebrow": "Aziende",
    "corporate.title": "Eleganza e professionalità per il tuo team",
    "corporate.tagline": "Le scarpe del team sempre impeccabili.",
    "corporate.body": "Spapoursouliers porta i suoi servizi professionali di pulizia e ricondizionamento direttamente nel mondo delle aziende, per garantire un'immagine curata e un comfort ottimale delle scarpe dei tuoi collaboratori. Qualunque sia la dimensione del tuo team, offriamo soluzioni personalizzate. Proponiamo anche vantaggi esclusivi per i dipendenti — codici sconto o abbonamenti mensili flessibili — per incoraggiare la cura regolare delle scarpe. Trasforma la cura delle scarpe in un vantaggio discreto ma essenziale della professionalità quotidiana.",
    "corporate.cta": "Contattaci",

    "donations.eyebrow": "Impegno sociale",
    "donations.title": "Un gesto semplice può cambiare una vita",
    "donations.body": "Hai scarpe che non indossi più? Non gettarle. Possiamo offrire loro una seconda vita e metterle nelle mani di persone che ne hanno davvero bisogno. Da Spapoursouliers crediamo che ogni gesto conti. Attraverso le nostre iniziative di raccolta, ricondizionamento e donazione di scarpe e articoli in pelle, sosteniamo le persone che vivono in strada, il cui numero purtroppo continua a crescere. Il nostro approccio fa parte di una visione sostenibile: dando alle scarpe una seconda vita, riduciamo gli sprechi e contribuiamo alla protezione dell'ambiente. Insieme possiamo costruire una comunità più solidale e un futuro più sostenibile.",

    "footer.cta.title": "Pronto a dare alle tue scarpe un nuovo inizio?",
    "footer.tagline": "La casa della cura delle scarpe, 100% online.",
    "footer.contact.title": "Contatti",
    "footer.phone": "Telefono",
    "footer.email": "E-mail",
    "footer.areas.title": "Zone servite",
    "footer.areas.text": "Grande Montreal e dintorni. Contattaci per verificare la copertura.",
    "footer.lang.title": "Lingua",
    "a11y.skip": "Vai al contenuto",
    "footer.copyright": "© 2026 Spapoursouliers. Tutti i diritti riservati."
  }
};

const priceData = {
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

const EXTRA = {
  "fr": {
    "nav.works": "Réalisations",
    "nav.contact": "Contact",
    "works.eyebrow": "Réalisations",
    "works.title": "Transformations avant / après",
    "works.intro": "Faites glisser le curseur pour voir la différence.",
    "works.before": "Avant",
    "works.after": "Après",
    "works.gallery": "Quelques-unes de nos réalisations",
    "contact.eyebrow": "Commençons",
    "contact.title": "Planifiez un ramassage",
    "contact.text": "Remplissez le formulaire ou écrivez-nous directement. Réponse sous une heure pendant les heures d'ouverture.",
    "form.name": "Nom",
    "form.phone": "Téléphone",
    "form.service": "Service souhaité",
    "form.details": "Détails",
    "form.submit": "Envoyer la demande",
    "form.hint": "Formulaire de démonstration — à connecter au système de commande.",
    "stat.pairs": "paires soignées",
    "stat.delivery": "délai moyen",
    "contact.area": "Zone desservie",
    "contact.areaVal": "Grand Montréal et environs"
  },
  "en": {
    "nav.works": "Work",
    "nav.contact": "Contact",
    "works.eyebrow": "Our work",
    "works.title": "Before / after transformations",
    "works.intro": "Drag the slider to see the difference.",
    "works.before": "Before",
    "works.after": "After",
    "works.gallery": "A few of our realizations",
    "contact.eyebrow": "Let's start",
    "contact.title": "Schedule a pickup",
    "contact.text": "Fill in the form or write to us directly. We reply within an hour during business hours.",
    "form.name": "Name",
    "form.phone": "Phone",
    "form.service": "Desired service",
    "form.details": "Details",
    "form.submit": "Send request",
    "form.hint": "Demo form — to be connected to the order system.",
    "stat.pairs": "pairs cared for",
    "stat.delivery": "average turnaround",
    "contact.area": "Service area",
    "contact.areaVal": "Greater Montreal and surroundings"
  },
  "ro": {
    "nav.works": "Realizări",
    "nav.contact": "Contact",
    "works.eyebrow": "Realizări",
    "works.title": "Transformări înainte / după",
    "works.intro": "Trage de cursor pentru a vedea diferența.",
    "works.before": "Înainte",
    "works.after": "După",
    "works.gallery": "Câteva dintre realizările noastre",
    "contact.eyebrow": "Să începem",
    "contact.title": "Programează o ridicare",
    "contact.text": "Completează formularul sau scrie-ne direct. Răspundem în maximum o oră în program.",
    "form.name": "Nume",
    "form.phone": "Telefon",
    "form.service": "Serviciu dorit",
    "form.details": "Detalii",
    "form.submit": "Trimite cererea",
    "form.hint": "Formular demonstrativ — se va conecta la sistemul de comenzi.",
    "stat.pairs": "perechi îngrijite",
    "stat.delivery": "timp mediu",
    "contact.area": "Zonă deservită",
    "contact.areaVal": "Marele Montreal și împrejurimile"
  },
  "it": {
    "nav.works": "Lavori",
    "nav.contact": "Contatti",
    "works.eyebrow": "I nostri lavori",
    "works.title": "Trasformazioni prima / dopo",
    "works.intro": "Trascina il cursore per vedere la differenza.",
    "works.before": "Prima",
    "works.after": "Dopo",
    "works.gallery": "Alcune delle nostre realizzazioni",
    "contact.eyebrow": "Iniziamo",
    "contact.title": "Prenota un ritiro",
    "contact.text": "Compila il modulo o scrivici direttamente. Rispondiamo entro un'ora negli orari di lavoro.",
    "form.name": "Nome",
    "form.phone": "Telefono",
    "form.service": "Servizio desiderato",
    "form.details": "Dettagli",
    "form.submit": "Invia la richiesta",
    "form.hint": "Modulo dimostrativo — da collegare al sistema ordini.",
    "stat.pairs": "paia curate",
    "stat.delivery": "tempo medio",
    "contact.area": "Zona servita",
    "contact.areaVal": "Grande Montreal e dintorni"
  }
};

/* ---------- Configuration (réutilise le contenu réel) ---------- */
const SICONS = {
  sparkle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>',
  brush:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 4l6 6-7 7-4 1 1-4z"/><path d="M5 21c1.6-3.2 3.6-4 5-4"/></svg>',
  hammer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 6l4 4-2 2-4-4z"/><path d="M12 8L4 16l2 2 8-8"/><path d="M14 4l6 6"/></svg>',
  needle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21L21 3"/><circle cx="6" cy="18" r="2"/><path d="M14 6l4 4"/></svg>'
};
const SERVICES = [
  { key:'cleaning', ico:'sparkle', img:'service-nettoyage.jpg',  tag:'placeholder.beforeafter', items:['services.cleaning.1','services.cleaning.2','services.cleaning.3','services.cleaning.4'] },
  { key:'dye',      ico:'brush', img:'service-peinture.jpg',    tag:'placeholder.beforeafter', items:['services.dye.1'] },
  { key:'repairs',  ico:'hammer', img:'service-reparation.jpg',  tag:'placeholder.beforeafter', items:['services.repairs.1','services.repairs.2'] },
  { key:'cobbler',  ico:'needle', img:'service-cordonnerie.jpg', tag:'placeholder.craft',       items:['services.cobbler.1','services.cobbler.2','services.cobbler.3'] }
];
const SPA = [
  { title:'pricing.spa.inout.title', feats:['pricing.spa.inout.f1','pricing.spa.inout.f2','pricing.spa.inout.f3','pricing.spa.inout.f4','pricing.spa.inout.f5','pricing.spa.inout.f6','pricing.spa.inout.f7'], prices:[['pricing.audience.kids','30 $'],['pricing.audience.adult','40 $'],['pricing.audience.boots','50 $']], featured:false },
  { title:'pricing.spa.luxe.title', badge:'pricing.spa.luxe.badge', feats:['pricing.spa.luxe.f1','pricing.spa.luxe.f2','pricing.spa.luxe.f3','pricing.spa.luxe.f4','pricing.spa.luxe.f5','pricing.spa.luxe.f6','pricing.spa.luxe.f7','pricing.spa.luxe.f8'], prices:[['pricing.audience.kids','40 $'],['pricing.audience.adult','50 $'],['pricing.audience.boots','60 $']], featured:true }
];
const GALLERY = ['service-peinture.jpg','service-reparation.jpg','service-cordonnerie.jpg','service-orthopedie.jpg','about-craft.jpg','corporate.jpg'];
const PRICE_CATS = [['pricing.women.title','women'],['pricing.men.title','men'],['pricing.sewing.title','sewing']];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

for (const l in EXTRA) Object.assign(translations[l], EXTRA[l]);
const WORKS_PROMISE = {
  fr:{'works.promise':'Chaque paire, restaurée à la main.'},
  en:{'works.promise':'Every pair, restored by hand.'},
  ro:{'works.promise':'Fiecare pereche, restaurată manual.'},
  it:{'works.promise':'Ogni paio, restaurato a mano.'}
};
for (const l in WORKS_PROMISE) Object.assign(translations[l], WORKS_PROMISE[l]);
const REAL_TAG = { fr:{'real.tag':'Avant · Après'}, en:{'real.tag':'Before · After'}, ro:{'real.tag':'Înainte · După'}, it:{'real.tag':'Prima · Dopo'} };
for (const l in REAL_TAG) Object.assign(translations[l], REAL_TAG[l]);

/* Filet de sécurité : titre des forfaits Spa */
const SPA_TITLE = { fr: "Forfaits Spa", en: "Spa packages", ro: "Pachete Spa", it: "Pacchetti Spa" };
for (const l in SPA_TITLE) { if (translations[l] && translations[l]["pricing.spa.title"] === undefined) translations[l]["pricing.spa.title"] = SPA_TITLE[l]; }

let currentLang = 'fr', activeCat = 'women';
function t(key, lang){ const d = translations[lang] || translations.fr; return d[key] !== undefined ? d[key] : (translations.fr[key] || key); }
function priceFor(item, lang){ return typeof item.price === 'string' ? item.price : (item.price[lang] || item.price.fr); }

function renderServices(lang){
  const el = document.getElementById('service-grid'); if(!el) return;
  el.innerHTML = SERVICES.map((s,i)=>`
    <div class="service-cell reveal-card">
      <span class="service-aura" aria-hidden="true"></span>
      <article class="service-card">
        <div class="service-media">
          <img src="assets/img/${s.img}?v=4" alt="" loading="lazy">
          <span class="service-scrim"></span>
          <span class="service-ico">${SICONS[s.ico]||''}</span>
          <span class="media-tag">${t(s.tag,lang)}</span>
          <span class="service-num">0${i+1}</span>
        </div>
        <div class="service-body">
          <h3>${t('services.'+s.key+'.title',lang)}</h3>
          <ul>${s.items.map(k=>`<li>${t(k,lang)}</li>`).join('')}</ul>
        </div>
      </article>
    </div>`).join('');
}
function renderSpa(lang){
  const el = document.getElementById('spa-grid'); if(!el) return;
  el.innerHTML = SPA.map(p=>`
    <article class="spa-card reveal-card${p.featured?' spa-card--feat':''}">
      ${p.badge?`<span class="spa-badge">${t(p.badge,lang)}</span>`:''}
      <h3>${t(p.title,lang)}</h3>
      <ul class="spa-feats">${p.feats.map(f=>`<li>${t(f,lang)}</li>`).join('')}</ul>
      <div class="spa-prices">${p.prices.map(([k,v])=>`<div><span>${t(k,lang)}</span><strong>${v}</strong></div>`).join('')}</div>
    </article>`).join('');
}
const PT_ICONS = {
  women:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4v8c0 3.2 2.2 5.5 6 5.5h8"/><path d="M5 12c4.5 0 6.5 1.6 8.5 5.5"/><path d="M17 17.5V20"/></svg>',
  men:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9v5h16a2 2 0 0 0 2-2c0-1.7-2.2-2.2-5-3-2.2-.6-3.4-2-5-3H3Z"/><path d="M3 14h18"/></svg>',
  sewing:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 18 6"/><path d="M15.5 3.5 20.5 8.5"/><path d="M13.5 8.5c-2.2 0-3.5 1.3-3.5 3.5"/></svg>'
};
function renderPriceTabs(lang){
  const tabs = document.getElementById('price-tabs'); if(!tabs) return;
  tabs.innerHTML = PRICE_CATS.map(([lbl,cat])=>`<button class="price-tab${cat===activeCat?' is-active':''}" data-cat="${cat}" role="tab" aria-selected="${cat===activeCat}"><span class="pt-ico">${PT_ICONS[cat]||''}</span>${t(lbl,lang)}</button>`).join('');
  renderPricePanel(lang);
}
function renderPricePanel(lang){
  const panel = document.getElementById('price-panel'); if(!panel) return;
  const items = priceData[activeCat] || [];
  panel.innerHTML = items.map(it=>`<div class="price-row"><span class="pr-name">${it[lang]||it.fr}</span><span class="pr-lead" aria-hidden="true"></span><span class="pr-val">${priceFor(it,lang)}</span></div>`).join('');
}
function renderGallery(lang){
  const el = document.getElementById('works-grid'); if(!el) return;
  el.innerHTML = GALLERY.map(img=>`<figure class="work-tile reveal-card"><img src="assets/img/${img}" alt="" loading="lazy"><figcaption>${t('placeholder.beforeafter',lang)}</figcaption></figure>`).join('');
}
function buildMarquee(lang){
  const tr = document.getElementById('marquee-track'); if(!tr) return;
  const words = t('marquee.words',lang).split('·').map(s=>s.trim()).filter(Boolean);
  const g = '<div class="marquee-group">' + words.map(w=>`<span class="marquee-item">${w}</span>`).join('') + '</div>';
  tr.innerHTML = g + g;
}
function batchReveal(){
  const cards = document.querySelectorAll('.reveal-card:not(.is-in)');
  if(!('IntersectionObserver' in window)){ cards.forEach(c=>c.classList.add('is-in')); return; }
  const io = new IntersectionObserver((es,ob)=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-in'); ob.unobserve(e.target);} }),{threshold:.12, rootMargin:'0px 0px -6% 0px'});
  cards.forEach(c=>io.observe(c));
}
function applyLanguage(lang){
  if(!translations[lang]) return; currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i18n'), lang); });
  document.documentElement.setAttribute('lang', lang);
  renderServices(lang); renderSpa(lang); renderPriceTabs(lang); renderGallery(lang); buildMarquee(lang);
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('is-active', b.dataset.lang===lang));
  batchReveal();
  try{ localStorage.setItem('sps2-lang', lang); }catch(e){}
}

document.addEventListener('DOMContentLoaded', () => {
  /* langue initiale */
  let initial='fr';
  try{ const s=localStorage.getItem('sps2-lang'); if(s&&translations[s])initial=s; else{const n=(navigator.language||'fr').slice(0,2).toLowerCase(); if(translations[n])initial=n;} }catch(e){}
  applyLanguage(initial);

  /* logo : clone l'emblème cordonnier dans chaque [data-logo] */
  const ltpl=document.getElementById('logo-tpl');
  if(ltpl) document.querySelectorAll('[data-logo]').forEach(el=>{ if(!el.querySelector('svg')) el.appendChild(ltpl.content.firstElementChild.cloneNode(true)); });

  /* bouton social flottant */
  const sf=document.getElementById('social-fab'), st=document.getElementById('social-toggle');
  if(sf&&st){
    const setOpen=o=>{ sf.classList.toggle('is-open',o); st.setAttribute('aria-expanded',String(o)); };
    st.addEventListener('click',e=>{ e.stopPropagation(); setOpen(!sf.classList.contains('is-open')); });
    document.addEventListener('click',e=>{ if(sf.classList.contains('is-open')&&!sf.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&sf.classList.contains('is-open')) setOpen(false); });
  }

  document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>applyLanguage(b.dataset.lang)));

  /* menu mobile */
  const nt=document.getElementById('nav-toggle'), mn=document.getElementById('main-nav');
  if(nt&&mn){ nt.addEventListener('click',()=>{const o=mn.classList.toggle('is-open'); nt.setAttribute('aria-expanded',String(o));});
    mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mn.classList.remove('is-open'); nt.setAttribute('aria-expanded','false');})); }

  /* en-tête + progression */
  const hd=document.querySelector('.site-header'), pr=document.getElementById('scroll-progress'), veil=document.getElementById('sea-veil');
  function onScroll(){ hd.classList.toggle('is-scrolled', window.scrollY>8); const h=document.documentElement, m=h.scrollHeight-h.clientHeight; const f=m>0?h.scrollTop/m:0;
    if(pr) pr.style.width=(f*100)+'%';
    if(veil) veil.style.opacity=Math.min(0.55, f*0.62).toFixed(3); /* crépuscule → nuit */ }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* révélations [data-anim] (éléments statiques) */
  const anim=document.querySelectorAll('[data-anim]');
  if('IntersectionObserver' in window){
    document.querySelectorAll('[data-anim="hero"],[data-anim="hero-visual"]').forEach((el,i)=>setTimeout(()=>el.classList.add('is-in'),90*i));
    const io=new IntersectionObserver((es,ob)=>es.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('is-in'); ob.unobserve(e.target);} }),{threshold:.12, rootMargin:'0px 0px -8% 0px'});
    anim.forEach(el=>{ if(el.dataset.anim!=='hero'&&el.dataset.anim!=='hero-visual') io.observe(el); });
  } else anim.forEach(el=>el.classList.add('is-in'));

  /* nav active */
  const links=[...document.querySelectorAll('.main-nav a[href^="#"]')];
  const secs=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if('IntersectionObserver' in window && secs.length){
    const spy=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){const id='#'+e.target.id; links.forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')===id));} }),{rootMargin:'-45% 0px -50% 0px'});
    secs.forEach(s=>spy.observe(s));
  }

  /* compteurs */
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=parseInt(el.dataset.count,10)||0, suffix=el.dataset.suffix||'';
    const run=()=>{ if(reduceMotion){el.textContent=target.toLocaleString('fr-FR')+suffix; return;} const dur=1300,t0=performance.now();
      const tick=now=>{const p=Math.min((now-t0)/dur,1),e=1-Math.pow(1-p,3); el.textContent=Math.round(e*target).toLocaleString('fr-FR')+suffix; if(p<1)requestAnimationFrame(tick);}; requestAnimationFrame(tick); };
    if('IntersectionObserver' in window){ const o=new IntersectionObserver((es,ob)=>es.forEach(e=>{ if(e.isIntersecting){run(); ob.unobserve(e.target);} }),{threshold:.6}); o.observe(el);} else run();
  });

  /* onglets de prix */
  const tabs=document.getElementById('price-tabs');
  if(tabs) tabs.addEventListener('click',e=>{ const b=e.target.closest('.price-tab'); if(!b)return; activeCat=b.dataset.cat;
    tabs.querySelectorAll('.price-tab').forEach(x=>{x.classList.remove('is-active'); x.setAttribute('aria-selected','false');});
    b.classList.add('is-active'); b.setAttribute('aria-selected','true'); renderPricePanel(currentLang);
    if(window.gsap&&!reduceMotion) gsap.fromTo('#price-panel .price-row',{opacity:0,y:10},{opacity:1,y:0,duration:.4,stagger:.025,ease:'power2.out'});
  });

  /* comparateur avant/après */
  initBA();
  /* tilt 3D */
  initTilt();

  /* GSAP : parallax + reveal cartes */
  if(window.gsap&&!reduceMotion){
    if(window.ScrollTrigger){ gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray('.aurora-blob').forEach((b,i)=>gsap.to(b,{yPercent:i%2?-16:18,ease:'none',scrollTrigger:{trigger:'body',start:'top top',end:'bottom bottom',scrub:true}}));

      /* Hero (interim, gratuit) : « voyage + léger dézoom » piloté au défilement.
         La caméra part rapprochée des souliers, recule en glissant (pan) et
         dézoome jusqu'au moment où les Services apparaissent. Plus de course
         de défilement pour laisser la cinématique respirer.
         (Sera remplacé par la vraie vidéo orbit Higgsfield dès reconnexion.) */
      try {
        const _hero=document.querySelector('.hero');
        const _ov=document.querySelector('.hero-overlay');
        const _bg=document.getElementById('hero-bg');
        if(_hero && _bg){
          if(window.matchMedia('(min-width:900px)').matches){
            ScrollTrigger.create({ trigger:_hero, start:'top top', end:'+=115%', pin:true, scrub:0.6, anticipatePin:1,
              onUpdate:self=>{ const p=self.progress;
                gsap.set(_bg, { scale:1.2-0.2*p, xPercent:-6*p, yPercent:3*p });
                if(_ov) gsap.set(_ov, { yPercent:-13*p, opacity:(1-Math.max(0,(p-0.55)/0.45)).toFixed(3) });
              }});
          } else {
            const stOpt={ trigger:_hero, start:'top top', end:'bottom top', scrub:1 };
            gsap.fromTo(_bg, { scale:1.16 }, { scale:1.0, yPercent:8, ease:'none', scrollTrigger:stOpt });
            if(_ov) gsap.to(_ov, { yPercent:-12, opacity:.3, ease:'none', scrollTrigger:stOpt });
          }
          ScrollTrigger.refresh();
        }
      } catch(e){}

      /* Bande signature : tracé du croquis + lueur des filets */
      try {
        const _sig=document.querySelector('.ba-signature');
        if(_sig){
          const _draws=_sig.querySelectorAll('.sig-draw');
          _draws.forEach(p=>{ const L=p.getTotalLength?p.getTotalLength():260; p.style.strokeDasharray=L; p.style.strokeDashoffset=L; });
          ScrollTrigger.create({ trigger:_sig, start:'top 82%', once:true, onEnter:()=>{
            gsap.to(_sig.querySelectorAll('.sig-draw'), { strokeDashoffset:0, duration:1.5, ease:'power2.out', stagger:.25 });
            gsap.fromTo(_sig.querySelectorAll('.sig-rule'), { scaleX:0 }, { scaleX:1, duration:1.1, ease:'power3.out' });
          }});
        }
      } catch(e){}
    }
  }
});

function initBA(){
  const ba=document.getElementById('ba'), before=document.getElementById('ba-before'), handle=document.getElementById('ba-handle');
  if(!ba||!before||!handle) return; let drag=false;
  const set=p=>{ p=Math.max(0,Math.min(100,p)); before.style.clipPath=`inset(0 ${100-p}% 0 0)`; handle.style.left=p+'%'; handle.setAttribute('aria-valuenow',Math.round(p)); };
  const fromE=e=>{ const r=ba.getBoundingClientRect(); const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left; set((x/r.width)*100); };
  set(50);
  ba.addEventListener('pointerdown',e=>{drag=true; fromE(e);});
  window.addEventListener('pointermove',e=>{if(drag)fromE(e);},{passive:true});
  window.addEventListener('pointerup',()=>drag=false);
  handle.addEventListener('keydown',e=>{const c=parseFloat(handle.getAttribute('aria-valuenow'))||50; if(e.key==='ArrowLeft'){set(c-4);e.preventDefault();} if(e.key==='ArrowRight'){set(c+4);e.preventDefault();}});
}
function initTilt(){
  const tl=document.getElementById('hero-tilt'); if(!tl) return;
  if(!window.matchMedia('(hover: hover) and (pointer: fine)').matches || reduceMotion) return;
  const w=tl.parentElement; let raf=null,tx=0,ty=0;
  w.addEventListener('pointermove',e=>{const r=w.getBoundingClientRect(); const px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5; tx=-py*8; ty=px*11; if(!raf)raf=requestAnimationFrame(ap);});
  w.addEventListener('pointerleave',()=>{tx=0;ty=0; if(!raf)raf=requestAnimationFrame(ap);});
  function ap(){ raf=null; tl.style.transform=`rotateX(${tx.toFixed(2)}deg) rotateY(${ty.toFixed(2)}deg)`; }
}
