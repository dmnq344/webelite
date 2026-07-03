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
  { key:'cleaning', ico:'sparkle', cover:'real/cover-cleaning.jpg', ba:'real/ba-cleaning.jpg',
    gallery:['real/real-02c.jpg','real/real-08.jpg','real/real-09.jpg','real/real-01c.jpg'],
    items:['services.cleaning.1','services.cleaning.2','services.cleaning.3','services.cleaning.4'] },
  { key:'dye', ico:'brush', cover:'real/cover-dye.jpg', ba:'real/ba-dye.jpg',
    gallery:['real/real-11.jpg','real/real-06.jpg','real/real-10.jpg','real/real-04.jpg'],
    items:['services.dye.1'] },
  { key:'repairs', ico:'hammer', cover:'real/cover-repairs.jpg', ba:'real/ba-repairs.jpg',
    gallery:['real/repair-03.jpg','real/repair-01.jpg','real/repair-02.jpg'],
    items:['services.repairs.1','services.repairs.2'] },
  { key:'cobbler', ico:'needle', cover:'real/cover-cobbler.jpg', ba:'real/ba-cobbler.jpg',
    gallery:['real/cobbler-02.jpg','real/cobbler-01.jpg','real/cobbler-03.jpg','real/cobbler-04.jpg'],
    items:['services.cobbler.1','services.cobbler.2','services.cobbler.3'] }
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
// Légendes + textes alternatifs des vraies réalisations (grille « Réalisations »)
const REAL_TILES = {
  fr: {
    'real.t1':'Sneakers enfant · nettoyage', 'real.a1':"Avant/après : sneakers d'enfant très sales puis d'un blanc impeccable",
    'real.t2':'Nike TN · nettoyage profond', 'real.a2':'Avant/après : Nike TN encrassées puis nettoyées en profondeur',
    'real.t3':'Ballerines cuir · ravivées', 'real.a3':'Avant/après : ballerines en cuir noir usées puis ravivées',
    'real.t4':'Brogues · restauration', 'real.a4':'Avant/après : brogues bourgogne rayées puis restaurées et lustrées',
    'real.t5':'Bottines · détachage peinture', 'real.a5':'Avant/après : bottines cloutées tachées de peinture puis nettoyées',
    'real.t6':'Daim · taches éliminées', 'real.a6':'Avant/après : derbies en daim beige tachées puis détachées'
  },
  en: {
    'real.t1':'Kids sneakers · deep clean', 'real.a1':'Before/after: filthy kids sneakers restored to spotless white',
    'real.t2':'Nike TN · deep clean', 'real.a2':'Before/after: grimy Nike TN sneakers deep cleaned',
    'real.t3':'Leather flats · revived', 'real.a3':'Before/after: worn black leather flats brought back to life',
    'real.t4':'Brogues · restoration', 'real.a4':'Before/after: scratched burgundy brogues restored and polished',
    'real.t5':'Boots · paint removal', 'real.a5':'Before/after: studded boots splattered with paint, then cleaned',
    'real.t6':'Suede · stain removal', 'real.a6':'Before/after: stained beige suede derbies, stains removed'
  },
  ro: {
    'real.t1':'Adidași copii · curățare', 'real.a1':'Înainte/după: adidași de copii foarte murdari, redeveniți albi impecabil',
    'real.t2':'Nike TN · curățare profundă', 'real.a2':'Înainte/după: Nike TN murdari, curățați în profunzime',
    'real.t3':'Balerini piele · reînviați', 'real.a3':'Înainte/după: balerini din piele neagră uzați, reînviați',
    'real.t4':'Pantofi brogue · restaurare', 'real.a4':'Înainte/după: pantofi brogue bordo zgâriați, restaurați și lustruiți',
    'real.t5':'Ghete · vopsea îndepărtată', 'real.a5':'Înainte/după: ghete cu ținte pătate de vopsea, apoi curățate',
    'real.t6':'Piele întoarsă · fără pete', 'real.a6':'Înainte/după: pantofi derby din piele întoarsă bej, pete eliminate'
  },
  it: {
    'real.t1':'Sneakers bimbo · pulizia', 'real.a1':'Prima/dopo: sneakers da bambino sporchissime, tornate di un bianco impeccabile',
    'real.t2':'Nike TN · pulizia profonda', 'real.a2':'Prima/dopo: Nike TN incrostate, pulite in profondità',
    'real.t3':'Ballerine pelle · ravvivate', 'real.a3':'Prima/dopo: ballerine in pelle nera usurate, ravvivate',
    'real.t4':'Stringate · restauro', 'real.a4':'Prima/dopo: stringate bordeaux graffiate, restaurate e lucidate',
    'real.t5':'Stivaletti · vernice rimossa', 'real.a5':'Prima/dopo: stivaletti borchiati macchiati di vernice, poi puliti',
    'real.t6':'Camoscio · smacchiato', 'real.a6':'Prima/dopo: derby in camoscio beige macchiate, macchie eliminate'
  }
};
for (const l in REAL_TILES) Object.assign(translations[l], REAL_TILES[l]);
/* === i18n complémentaire : formulaire (services/provinces), ARIA, titre d'onglet, alts === */
const ADD_I18N_2 = {
  fr: {
    'form.svc.spa':'Spa', 'form.svc.cleaning':'Nettoyage', 'form.svc.repairs':'Réparations', 'form.svc.cobbler':'Cordonnerie', 'form.svc.donation':'Don de chaussures (charité)', 'form.photos':'Photos (facultatif)', 'form.photosBtn':'Ajouter des photos', 'form.photosHint':"Montrez-nous vos chaussures — joignez ces photos dans WhatsApp après l'envoi.",
    'form.prov.nb':'Nouveau-Brunswick', 'form.prov.ns':'Nouvelle-Écosse', 'form.prov.bc':'Colombie-Britannique', 'form.prov.pe':'Île-du-Prince-Édouard', 'form.prov.nl':'Terre-Neuve-et-Labrador',
    'form.hint':"Votre demande s'ouvre dans WhatsApp — envoyez-la, on s'occupe du reste.",
    'form.waIntro':'Bonjour ! Je souhaite planifier un ramassage.',
    'a11y.ba':'Avant / Après', 'a11y.menu':'Menu', 'a11y.tabs':'Catégories', 'a11y.social':'Réseaux sociaux', 'a11y.lang':'Langue',
    'bubble.price':'Prix',
    'corporate.a1':'Collection de chaussures pour femmes disposées en cercle', 'charity.artAlt':'Illustration : une main dépose une paire de chaussures dans une boîte de dons', 'corporate.a2':'Souliers habillés pour hommes disposés en cercle',
    'meta.title':'Spapoursouliers — Nettoyage, restauration & cordonnerie de chaussures à Montréal',
    'meta.desc':'Spa pour chaussures dans le Grand Montréal : nettoyage en profondeur, restauration, teinture et cordonnerie. Ramassage et livraison inclus. 438-449-9422.',
    'hero.alt':'Paire de souliers vernis impeccables',
    'works.featAlt':"Avant et après — restauration d'une paire de souliers",
    'about.craftAlt':'Travail du cuir au marteau', 'about.presseAlt':'Article de presse sur Cristian Rotaru', 'about.attestAlt':'Attestation professionnelle — Québec, 2025',
    'blog.a1':'Derbies patinés avant/après restauration', 'blog.a2':'Converse redevenues blanches après nettoyage', 'blog.a3':'Bottes western teintées du fauve au noir'
  },
  en: {
    'form.svc.spa':'Spa', 'form.svc.cleaning':'Cleaning', 'form.svc.repairs':'Repairs', 'form.svc.cobbler':'Cobbling', 'form.svc.donation':'Shoe donation (charity)', 'form.photos':'Photos (optional)', 'form.photosBtn':'Add photos', 'form.photosHint':'Show us your shoes — attach these photos in WhatsApp after sending.',
    'form.prov.nb':'New Brunswick', 'form.prov.ns':'Nova Scotia', 'form.prov.bc':'British Columbia', 'form.prov.pe':'Prince Edward Island', 'form.prov.nl':'Newfoundland and Labrador',
    'form.hint':'Your request opens in WhatsApp — hit send and we handle the rest.',
    'form.waIntro':'Hello! I would like to schedule a pickup.',
    'a11y.ba':'Before / After', 'a11y.menu':'Menu', 'a11y.tabs':'Categories', 'a11y.social':'Social media', 'a11y.lang':'Language',
    'bubble.price':'Price',
    'corporate.a1':'Collection of women\'s shoes arranged in a circle', 'charity.artAlt':'Illustration: a hand drops a pair of shoes into a donation box', 'corporate.a2':'Men\'s dress shoes arranged in a circle',
    'meta.title':'Spapoursouliers — Shoe cleaning, restoration & cobbling in Montreal',
    'meta.desc':'Shoe spa serving Greater Montreal: deep cleaning, restoration, dyeing and cobbling. Pickup and delivery included. 438-449-9422.',
    'hero.alt':'Spotless pair of patent leather shoes',
    'works.featAlt':'Before and after — restoration of a pair of shoes',
    'about.craftAlt':'Leather craftsmanship with a hammer', 'about.presseAlt':'Press article about Cristian Rotaru', 'about.attestAlt':'Professional certification — Quebec, 2025',
    'blog.a1':'Patinated derbies before/after restoration', 'blog.a2':'Converse white again after cleaning', 'blog.a3':'Western boots dyed from tan to black'
  },
  ro: {
    'form.svc.spa':'Spa', 'form.svc.cleaning':'Curățare', 'form.svc.repairs':'Reparații', 'form.svc.cobbler':'Cizmărie', 'form.svc.donation':'Donație de încălțăminte (caritate)', 'form.photos':'Fotografii (opțional)', 'form.photosBtn':'Adaugă fotografii', 'form.photosHint':'Arată-ne pantofii — atașează aceste fotografii în WhatsApp după trimitere.',
    'form.prov.nb':'New Brunswick', 'form.prov.ns':'Noua Scoție', 'form.prov.bc':'Columbia Britanică', 'form.prov.pe':'Insula Prințul Eduard', 'form.prov.nl':'Terranova și Labrador',
    'form.hint':'Cererea ta se deschide în WhatsApp — trimite-o și ne ocupăm noi de rest.',
    'form.waIntro':'Bună ziua! Aș dori să programez o preluare.',
    'a11y.ba':'Înainte / După', 'a11y.menu':'Meniu', 'a11y.tabs':'Categorii', 'a11y.social':'Rețele sociale', 'a11y.lang':'Limbă',
    'bubble.price':'Preț',
    'corporate.a1':'Colecție de pantofi de damă așezați în cerc', 'charity.artAlt':'Ilustrație: o mână așază o pereche de pantofi într-o cutie de donații', 'corporate.a2':'Pantofi eleganți pentru bărbați așezați în cerc',
    'meta.title':'Spapoursouliers — Curățare, restaurare și cizmărie de încălțăminte în Montreal',
    'meta.desc':'Spa pentru încălțăminte în Montreal: curățare profundă, restaurare, vopsire și cizmărie. Preluare și livrare incluse. 438-449-9422.',
    'hero.alt':'Pereche de pantofi de lac impecabili',
    'works.featAlt':'Înainte și după — restaurarea unei perechi de pantofi',
    'about.craftAlt':'Prelucrarea pielii cu ciocanul', 'about.presseAlt':'Articol de presă despre Cristian Rotaru', 'about.attestAlt':'Atestat profesional — Québec, 2025',
    'blog.a1':'Pantofi derby patinați înainte/după restaurare', 'blog.a2':'Converse albe din nou după curățare', 'blog.a3':'Cizme western vopsite din maro în negru'
  },
  it: {
    'form.svc.spa':'Spa', 'form.svc.cleaning':'Pulizia', 'form.svc.repairs':'Riparazioni', 'form.svc.cobbler':'Calzoleria', 'form.svc.donation':'Donazione di scarpe (beneficenza)', 'form.photos':'Foto (facoltativo)', 'form.photosBtn':'Aggiungi foto', 'form.photosHint':"Mostraci le tue scarpe — allega queste foto su WhatsApp dopo l'invio.",
    'form.prov.nb':'Nuovo Brunswick', 'form.prov.ns':'Nuova Scozia', 'form.prov.bc':'Columbia Britannica', 'form.prov.pe':'Isola del Principe Edoardo', 'form.prov.nl':'Terranova e Labrador',
    'form.hint':'La tua richiesta si apre su WhatsApp — inviala e pensiamo a tutto noi.',
    'form.waIntro':'Salve! Vorrei programmare un ritiro.',
    'a11y.ba':'Prima / Dopo', 'a11y.menu':'Menu', 'a11y.tabs':'Categorie', 'a11y.social':'Social', 'a11y.lang':'Lingua',
    'bubble.price':'Prezzo',
    'corporate.a1':'Collezione di scarpe da donna disposte in cerchio', 'charity.artAlt':'Illustrazione: una mano depone un paio di scarpe in una scatola per donazioni', 'corporate.a2':'Scarpe eleganti da uomo disposte in cerchio',
    'meta.title':'Spapoursouliers — Pulizia, restauro e calzoleria di scarpe a Montreal',
    'meta.desc':'Spa per scarpe nella Grande Montreal: pulizia profonda, restauro, tintura e calzoleria. Ritiro e consegna inclusi. 438-449-9422.',
    'hero.alt':'Paio di scarpe di vernice impeccabili',
    'works.featAlt':'Prima e dopo — restauro di un paio di scarpe',
    'about.craftAlt':'Lavorazione del cuoio con il martello', 'about.presseAlt':'Articolo di stampa su Cristian Rotaru', 'about.attestAlt':'Attestato professionale — Québec, 2025',
    'blog.a1':'Derby patinate prima/dopo il restauro', 'blog.a2':'Converse di nuovo bianche dopo la pulizia', 'blog.a3':'Stivali western tinti dal marrone al nero'
  }
};
for (const l in ADD_I18N_2) Object.assign(translations[l], ADD_I18N_2[l]);
/* Services v2 : carte cliquable + modale */
const SVC_V2 = {
  fr: { 'services.see':'Voir les exemples', 'services.egphotos':'exemples', 'a11y.close':'Fermer' },
  en: { 'services.see':'See examples', 'services.egphotos':'examples', 'a11y.close':'Close' },
  ro: { 'services.see':'Vezi exemple', 'services.egphotos':'exemple', 'a11y.close':'Închide' },
  it: { 'services.see':'Vedi esempi', 'services.egphotos':'esempi', 'a11y.close':'Chiudi' }
};
for (const l in SVC_V2) Object.assign(translations[l], SVC_V2[l]);
const SVC_SOON = { fr:{'services.soon':'Talon & semelle — exemples à venir'}, en:{'services.soon':'Heel & sole — examples coming soon'}, ro:{'services.soon':'Toc & talpă — exemple în curând'}, it:{'services.soon':'Tacco & suola — esempi in arrivo'} };
for (const l in SVC_SOON) Object.assign(translations[l], SVC_SOON[l]);

/* === Nouveaux contenus (nav, hero tél, citation, adresse, Blog, Corporate, Charité, Avis) === */
const ADD_I18N = {
  fr: {
    'nav.blog':'Blog', 'nav.corporate':'Corporate', 'nav.charity':'Charité', 'nav.reviews':'Avis', 'nav.about':'À propos',
    'hero.callLabel':'Appel & WhatsApp', 'hero.wa':'WhatsApp',
    'services.quote':'« Les chaussures transforment ton langage corporel et ton attitude. Elles te soulèvent physiquement et émotionnellement. »', 'services.quoteBy':'— Jayden Hayes',
    'services.quoteBrand':"Nous faisons en sorte que vos chaussures brillent à nouveau, afin que vous puissiez parcourir ensemble encore une autre étape de la vie.",
    'form.addressTitle':'Adresse de ramassage', 'form.street':'Adresse (n° et rue)', 'form.city':'Ville', 'form.province':'Province', 'form.postal':'Code postal', 'form.provincePick':'Choisir…',
    'blog.eyebrow':'Le journal de l’atelier', 'blog.title':'Réalisations & vidéos', 'blog.intro':'Nos transformations en images et en vidéo, ajoutées régulièrement par l’atelier.', 'blog.video':'Voir la vidéo', 'blog.soon':'Vidéo bientôt en ligne',
    'blog.p1.title':'Restauration cuir', 'blog.p1.text':'Une paire de derbies redonnée à neuf.',
    'blog.p2.title':'Nettoyage sneakers', 'blog.p2.text':'Des baskets blanches comme au premier jour.',
    'blog.p3.title':'Teinture & patine', 'blog.p3.text':'Couleur ravivée, brillance miroir.',
    'corporate.eyebrow':'Entreprises & partenaires', 'corporate.title':'Solutions corporatives', 'corporate.intro':'Pour hôtels, boutiques, équipes et événements : un service de soin de chaussures sur mesure, en volume.',
    'corporate.f1':'Contrats sur mesure', 'corporate.f2':'Tarifs de groupe', 'corporate.f3':'Ramassage & livraison planifiés', 'corporate.cta':'Demander une offre',
    'charity.eyebrow':'Redonner au suivant', 'charity.title':'Notre engagement', 'charity.intro':'Nous restaurons et offrons des chaussures à ceux qui en ont besoin, et soutenons des causes locales.',
    'charity.f1':'Dons de chaussures restaurées', 'charity.f2':'Partenariats locaux', 'charity.f3':'Collectes saisonnières', 'charity.cta':'Participer ou faire un don',
    'reviews.eyebrow':'Ils nous font confiance', 'reviews.title':'Avis de nos clients', 'reviews.intro':'La satisfaction, paire après paire.',
    'reviews.r1.text':'Mes souliers de mariage étaient fichus, ils les ont rendus comme neufs. Service impeccable !', 'reviews.r1.name':'Sophie L.',
    'reviews.r2.text':'Ramassage, nettoyage, livraison — simple et rapide. Mes sneakers sont éclatantes.', 'reviews.r2.name':'Marc T.',
    'reviews.r3.text':'Un vrai savoir-faire. La teinture de mes bottes en cuir est parfaite.', 'reviews.r3.name':'Élodie R.',
    'reviews.r4.text':'Professionnel et passionné. Je recommande les yeux fermés.', 'reviews.r4.name':'David M.'
  },
  en: {
    'nav.blog':'Blog', 'nav.corporate':'Corporate', 'nav.charity':'Charity', 'nav.reviews':'Reviews', 'nav.about':'About',
    'hero.callLabel':'Call & WhatsApp', 'hero.wa':'WhatsApp',
    'services.quote':'“Shoes transform your body language and attitude. They lift you physically and emotionally.”', 'services.quoteBy':'— Jayden Hayes',
    'services.quoteBrand':'We make your shoes shine again, so that together you can walk through yet another stage of life.',
    'form.addressTitle':'Pickup address', 'form.street':'Street address', 'form.city':'City', 'form.province':'Province', 'form.postal':'Postal code', 'form.provincePick':'Choose…',
    'blog.eyebrow':'From the workshop', 'blog.title':'Work & videos', 'blog.intro':'Our transformations in photos and video, added regularly by the workshop.', 'blog.video':'Watch the video', 'blog.soon':'Video coming soon',
    'blog.p1.title':'Leather restoration', 'blog.p1.text':'A pair of derbies brought back to life.',
    'blog.p2.title':'Sneaker cleaning', 'blog.p2.text':'White sneakers like day one.',
    'blog.p3.title':'Dyeing & patina', 'blog.p3.text':'Revived colour, mirror shine.',
    'corporate.eyebrow':'Businesses & partners', 'corporate.title':'Corporate solutions', 'corporate.intro':'For hotels, boutiques, teams and events: a tailored shoe-care service, at scale.',
    'corporate.f1':'Tailored contracts', 'corporate.f2':'Group pricing', 'corporate.f3':'Scheduled pickup & delivery', 'corporate.cta':'Request a quote',
    'charity.eyebrow':'Giving back', 'charity.title':'Our commitment', 'charity.intro':'We restore and donate shoes to those in need, and support local causes.',
    'charity.f1':'Donations of restored shoes', 'charity.f2':'Local partnerships', 'charity.f3':'Seasonal drives', 'charity.cta':'Join or donate',
    'reviews.eyebrow':'Trusted by our clients', 'reviews.title':'Client reviews', 'reviews.intro':'Satisfaction, pair after pair.',
    'reviews.r1.text':'My wedding shoes were ruined — they made them like new. Impeccable service!', 'reviews.r1.name':'Sophie L.',
    'reviews.r2.text':'Pickup, cleaning, delivery — simple and fast. My sneakers are spotless.', 'reviews.r2.name':'Marc T.',
    'reviews.r3.text':'True craftsmanship. The dye on my leather boots is perfect.', 'reviews.r3.name':'Élodie R.',
    'reviews.r4.text':'Professional and passionate. I recommend with eyes closed.', 'reviews.r4.name':'David M.'
  },
  ro: {
    'nav.blog':'Blog', 'nav.corporate':'Corporate', 'nav.charity':'Caritate', 'nav.reviews':'Recenzii', 'nav.about':'Despre',
    'hero.callLabel':'Apel & WhatsApp', 'hero.wa':'WhatsApp',
    'services.quote':'„Pantofii îți transformă limbajul corporal și atitudinea. Te ridică fizic și emoțional.”', 'services.quoteBy':'— Jayden Hayes',
    'services.quoteBrand':'Facem ca pantofii tăi să strălucească din nou, pentru ca împreună să mai parcurgeți încă o etapă a vieții.',
    'form.addressTitle':'Adresă de ridicare', 'form.street':'Adresă (stradă)', 'form.city':'Oraș', 'form.province':'Provincie', 'form.postal':'Cod poștal', 'form.provincePick':'Alege…',
    'blog.eyebrow':'Jurnalul atelierului', 'blog.title':'Realizări & video', 'blog.intro':'Transformările noastre în imagini și video, adăugate regulat de atelier.', 'blog.video':'Vezi videoclipul', 'blog.soon':'Video în curând',
    'blog.p1.title':'Restaurare piele', 'blog.p1.text':'O pereche de derby ca nouă.',
    'blog.p2.title':'Curățare sneakers', 'blog.p2.text':'Adidași albi ca în prima zi.',
    'blog.p3.title':'Vopsire & patină', 'blog.p3.text':'Culoare reînviată, luciu oglindă.',
    'corporate.eyebrow':'Companii & parteneri', 'corporate.title':'Soluții corporative', 'corporate.intro':'Pentru hoteluri, magazine, echipe și evenimente: un serviciu de îngrijire a încălțămintei, la scară.',
    'corporate.f1':'Contracte personalizate', 'corporate.f2':'Prețuri de grup', 'corporate.f3':'Ridicare & livrare programate', 'corporate.cta':'Cere o ofertă',
    'charity.eyebrow':'Să dăm mai departe', 'charity.title':'Angajamentul nostru', 'charity.intro':'Restaurăm și oferim încălțăminte celor în nevoie și sprijinim cauze locale.',
    'charity.f1':'Donații de încălțăminte restaurată', 'charity.f2':'Parteneriate locale', 'charity.f3':'Colecte sezoniere', 'charity.cta':'Participă sau donează',
    'reviews.eyebrow':'Clienții au încredere', 'reviews.title':'Recenziile clienților', 'reviews.intro':'Satisfacție, pereche după pereche.',
    'reviews.r1.text':'Pantofii mei de nuntă erau distruși — i-au făcut ca noi. Serviciu impecabil!', 'reviews.r1.name':'Sophie L.',
    'reviews.r2.text':'Ridicare, curățare, livrare — simplu și rapid. Adidașii mei sunt impecabili.', 'reviews.r2.name':'Marc T.',
    'reviews.r3.text':'Meșteșug adevărat. Vopsirea cizmelor mele din piele e perfectă.', 'reviews.r3.name':'Élodie R.',
    'reviews.r4.text':'Profesionist și pasionat. Recomand cu ochii închiși.', 'reviews.r4.name':'David M.'
  },
  it: {
    'nav.blog':'Blog', 'nav.corporate':'Corporate', 'nav.charity':'Beneficenza', 'nav.reviews':'Recensioni', 'nav.about':'Chi siamo',
    'hero.callLabel':'Chiamata & WhatsApp', 'hero.wa':'WhatsApp',
    'services.quote':'«Le scarpe trasformano il tuo linguaggio del corpo e il tuo atteggiamento. Ti sollevano fisicamente ed emotivamente.»', 'services.quoteBy':'— Jayden Hayes',
    'services.quoteBrand':'Facciamo brillare di nuovo le tue scarpe, così che possiate percorrere insieme un\'altra tappa della vita.',
    'form.addressTitle':'Indirizzo di ritiro', 'form.street':'Indirizzo (via)', 'form.city':'Città', 'form.province':'Provincia', 'form.postal':'CAP', 'form.provincePick':'Scegli…',
    'blog.eyebrow':'Dal laboratorio', 'blog.title':'Lavori & video', 'blog.intro':'Le nostre trasformazioni in foto e video, aggiunte regolarmente dal laboratorio.', 'blog.video':'Guarda il video', 'blog.soon':'Video in arrivo',
    'blog.p1.title':'Restauro pelle', 'blog.p1.text':'Un paio di derby tornati come nuovi.',
    'blog.p2.title':'Pulizia sneakers', 'blog.p2.text':'Sneakers bianche come il primo giorno.',
    'blog.p3.title':'Tintura & patina', 'blog.p3.text':'Colore ravvivato, lucentezza a specchio.',
    'corporate.eyebrow':'Aziende & partner', 'corporate.title':'Soluzioni corporate', 'corporate.intro':'Per hotel, boutique, team ed eventi: un servizio di cura delle scarpe su misura, in volume.',
    'corporate.f1':'Contratti su misura', 'corporate.f2':'Prezzi di gruppo', 'corporate.f3':'Ritiro & consegna programmati', 'corporate.cta':'Richiedi un preventivo',
    'charity.eyebrow':'Restituire', 'charity.title':'Il nostro impegno', 'charity.intro':'Restauriamo e doniamo scarpe a chi ne ha bisogno e sosteniamo cause locali.',
    'charity.f1':'Donazioni di scarpe restaurate', 'charity.f2':'Partnership locali', 'charity.f3':'Raccolte stagionali', 'charity.cta':'Partecipa o dona',
    'reviews.eyebrow':'Si fidano di noi', 'reviews.title':'Recensioni dei clienti', 'reviews.intro':'Soddisfazione, paio dopo paio.',
    'reviews.r1.text':'Le mie scarpe da sposa erano rovinate — le hanno fatte come nuove. Servizio impeccabile!', 'reviews.r1.name':'Sophie L.',
    'reviews.r2.text':'Ritiro, pulizia, consegna — semplice e veloce. Le mie sneakers sono splendenti.', 'reviews.r2.name':'Marc T.',
    'reviews.r3.text':'Vero artigianato. La tintura dei miei stivali in pelle è perfetta.', 'reviews.r3.name':'Élodie R.',
    'reviews.r4.text':'Professionale e appassionato. Lo consiglio a occhi chiusi.', 'reviews.r4.name':'David M.'
  }
};
for (const l in ADD_I18N) Object.assign(translations[l], ADD_I18N[l]);

/* Filet de sécurité : titre des forfaits Spa */
const SPA_TITLE = { fr: "Forfaits Spa", en: "Spa packages", ro: "Pachete Spa", it: "Pacchetti Spa" };
for (const l in SPA_TITLE) { if (translations[l] && translations[l]["pricing.spa.title"] === undefined) translations[l]["pricing.spa.title"] = SPA_TITLE[l]; }

let currentLang = 'fr', activeCat = 'women';
function t(key, lang){ const d = translations[lang] || translations.fr; return d[key] !== undefined ? d[key] : (translations.fr[key] || key); }
function priceFor(item, lang){ return typeof item.price === 'string' ? item.price : (item.price[lang] || item.price.fr); }

function renderServices(lang){
  const el = document.getElementById('service-grid'); if(!el) return;
  const seeTxt = t('services.see', lang);
  el.innerHTML = SERVICES.map((s,i)=>{
    const n = (s.gallery?s.gallery.length:0) + 1; /* + l'avant/après vedette */
    const title = t('services.'+s.key+'.title', lang);
    return `
    <div class="service-cell reveal-card">
      <span class="service-aura" aria-hidden="true"></span>
      <article class="service-card" data-service="${s.key}" role="button" tabindex="0" aria-haspopup="dialog" aria-label="${title} — ${seeTxt}">
        <div class="sc-media">
          <img class="sc-cover" src="assets/img/${s.cover}?v=39" alt="${title}" loading="lazy">
          <span class="sc-scrim"></span>
          <span class="sc-ico">${SICONS[s.ico]||''}</span>
          <span class="sc-num">0${i+1}</span>
          <span class="sc-badge">${n} <span>${t('services.egphotos',lang)}</span></span>
          <span class="sc-reveal" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          </span>
        </div>
        <div class="sc-body">
          <h3>${title}</h3>
          <span class="sc-cta">${seeTxt} <span class="sc-arrow" aria-hidden="true">→</span></span>
        </div>
      </article>
    </div>`;
  }).join('');
  bindServiceCards();
}

/* ---- Cartes services : ouverture de la modale « déploiement » avant/après ---- */
let _svmLast=null;
function bindServiceCards(){
  document.querySelectorAll('.service-card[data-service]').forEach(card=>{
    if(card._bound) return; card._bound=true;
    const open=()=>openServiceModal(card.dataset.service, card);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); } });
    /* léger tilt 3D cinématique au survol (souris fine seulement) */
    if(window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion){
      const m=card.querySelector('.sc-media');
      card.addEventListener('pointermove',e=>{ const r=card.getBoundingClientRect();
        const px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5;
        card.style.transform=`perspective(900px) rotateY(${px*6}deg) rotateX(${-py*6}deg) translateY(-4px)`;
        if(m) m.style.transform=`translateZ(30px)`; });
      card.addEventListener('pointerleave',()=>{ card.style.transform=''; if(m) m.style.transform=''; });
    }
  });
}

function openServiceModal(key, sourceCard){
  const s=SERVICES.find(x=>x.key===key); if(!s) return;
  const modal=document.getElementById('svc-modal'); if(!modal) return;
  const lang=currentLang;
  _svmLast=sourceCard||document.activeElement;
  modal.querySelector('.svm-ico').innerHTML=SICONS[s.ico]||'';
  modal.querySelector('.svm-title').textContent=t('services.'+s.key+'.title',lang);
  modal.querySelector('.svm-chips').innerHTML=s.items.map(k=>`<li>${t(k,lang)}</li>`).join('');
  modal.querySelector('.svm-ba-img').src='assets/img/'+s.ba+'?v=39';
  modal.querySelector('.svm-ba-img').alt=t('services.'+s.key+'.title',lang)+' — '+t('real.tag',lang);
  modal.querySelector('.svm-before').textContent=t('works.before',lang);
  modal.querySelector('.svm-after').textContent=t('works.after',lang);
  const gal=modal.querySelector('.svm-gallery');
  gal.innerHTML=(s.gallery||[]).map(p=>`<figure class="svm-tile"><img src="assets/img/${p}?v=39" alt="${t('real.tag',lang)}" loading="lazy"></figure>`).join('');
  modal.hidden=false; document.body.style.overflow='hidden';
  requestAnimationFrame(()=>modal.classList.add('is-open'));
  /* animation de déploiement 3D */
  if(window.gsap && !reduceMotion){
    gsap.fromTo(modal.querySelector('.svc-modal-panel'),{y:26,scale:.97,opacity:0},{y:0,scale:1,opacity:1,duration:.5,ease:'power3.out'});
    gsap.fromTo(modal.querySelector('.svm-ba'),{opacity:0,scale:1.04},{opacity:1,scale:1,duration:.6,delay:.08,ease:'power2.out'});
    gsap.fromTo(modal.querySelector('.svm-ba-line'),{scaleY:0},{scaleY:1,duration:.6,delay:.35,ease:'power3.inOut'});
    gsap.fromTo(modal.querySelectorAll('.svm-ba-label'),{opacity:0,y:8},{opacity:1,y:0,duration:.5,delay:.5,stagger:.12,ease:'power2.out'});
    gsap.fromTo(gal.querySelectorAll('.svm-tile'),{opacity:0,y:40,rotationY:-38,z:-180,transformOrigin:'left center'},
      {opacity:1,y:0,rotationY:0,z:0,duration:.7,delay:.3,stagger:.09,ease:'power3.out'});
  }
  const closeBtn=modal.querySelector('.svc-modal-close'); if(closeBtn) closeBtn.focus();
}
function closeServiceModal(){
  const modal=document.getElementById('svc-modal'); if(!modal||modal.hidden) return;
  modal.classList.remove('is-open');
  document.body.style.overflow='';
  setTimeout(()=>{ modal.hidden=true; if(_svmLast&&_svmLast.focus) _svmLast.focus(); }, 260);
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
  tabs.innerHTML = PRICE_CATS.map(([lbl,cat])=>`<button class="price-tab${cat===activeCat?' is-active':''}" data-cat="${cat}" role="tab" aria-selected="${cat===activeCat}" tabindex="${cat===activeCat?'0':'-1'}"><span class="pt-ico">${PT_ICONS[cat]||''}</span>${t(lbl,lang)}</button>`).join('');
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
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{ el.setAttribute('alt', t(el.getAttribute('data-i18n-alt'), lang)); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{ el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), lang)); });
  document.title = t('meta.title', lang);
  const mdesc = document.querySelector('meta[name="description"]'); if (mdesc) mdesc.setAttribute('content', t('meta.desc', lang));
  document.documentElement.setAttribute('lang', lang);
  renderServices(lang); renderSpa(lang); renderPriceTabs(lang); renderGallery(lang); buildMarquee(lang);
  document.querySelectorAll('.lang-btn').forEach(b=>{ const on=b.dataset.lang===lang; b.classList.toggle('is-active', on); b.setAttribute('aria-pressed', String(on)); });
  batchReveal();
  try{ localStorage.setItem('sps2-lang', lang); }catch(e){}
}

document.addEventListener('DOMContentLoaded', () => {
  /* langue initiale : FR par défaut (le site est indexé en français — pas d'auto-détection
     navigateur, sinon Googlebot, qui se présente en en-US, indexerait la version anglaise) */
  let initial='fr';
  try{ const s=localStorage.getItem('sps2-lang'); if(s&&translations[s])initial=s; }catch(e){}
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

  /* formulaire de commande → message WhatsApp pré-rempli (aucun serveur requis) */
  const cform=document.getElementById('contact-form');
  if(cform) cform.addEventListener('submit',e=>{
    e.preventDefault();
    if(typeof cform.reportValidity==='function' && !cform.reportValidity()) return;
    const v=id=>{const el=document.getElementById(id); return el?el.value.trim():'';};
    const optText=id=>{const el=document.getElementById(id); return (el&&el.selectedIndex>-1&&el.value!=='')?el.options[el.selectedIndex].text.trim():'';};
    const L=currentLang;
    const addrCore=[v('cf-street'), v('cf-city')].filter(Boolean);
    const addr=addrCore.length ? [...addrCore, optText('cf-prov'), v('cf-postal')].filter(Boolean).join(', ') : '';
    const lines=[t('form.waIntro',L),
      `${t('form.name',L)}: ${v('cf-name')}`,
      `${t('form.phone',L)}: ${v('cf-phone')}`,
      `${t('form.service',L)}: ${optText('cf-service')||v('cf-service')}`];
    if(addr) lines.push(`${t('form.addressTitle',L)}: ${addr}`);
    if(v('cf-msg')) lines.push(`${t('form.details',L)}: ${v('cf-msg')}`);
    const ph=document.getElementById('cf-photos');
    if(ph&&ph.files&&ph.files.length) lines.push(`${t('form.photos',L).replace(/\s*\(.*\)$/,'')}: ${ph.files.length} 📷`);
    window.open('https://wa.me/14384499422?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener');
  });

  /* sélecteur de photos : aperçu miniatures (jointes ensuite dans WhatsApp) */
  const phIn=document.getElementById('cf-photos'), phPrev=document.getElementById('cf-photo-preview');
  if(phIn&&phPrev) phIn.addEventListener('change',()=>{
    phPrev.querySelectorAll('img').forEach(img=>URL.revokeObjectURL(img.src));
    phPrev.innerHTML='';
    [...phIn.files].slice(0,8).forEach(f=>{
      const img=document.createElement('img');
      img.src=URL.createObjectURL(f); img.alt=f.name;
      phPrev.appendChild(img);
    });
  });

  /* eau profonde : image lourde téléchargée seulement après le chargement de la page */
  const sd=document.getElementById('sea-deep');
  if(sd){ const ready=()=>sd.classList.add('is-ready');
    if(document.readyState==='complete') setTimeout(ready,300);
    else window.addEventListener('load',()=>setTimeout(ready,300),{once:true}); }

  /* modale des services : fermeture (X, fond, Échap) */
  const svm=document.getElementById('svc-modal');
  if(svm){
    svm.querySelector('.svc-modal-close')?.addEventListener('click', closeServiceModal);
    svm.querySelector('.svc-modal-backdrop')?.addEventListener('click', closeServiceModal);
    document.addEventListener('keydown', e=>{ if(e.key==='Escape' && !svm.hidden) closeServiceModal(); });
  }

  /* menu mobile */
  const nt=document.getElementById('nav-toggle'), mn=document.getElementById('main-nav');
  if(nt&&mn){ nt.addEventListener('click',()=>{const o=mn.classList.toggle('is-open'); nt.setAttribute('aria-expanded',String(o));});
    mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mn.classList.remove('is-open'); nt.setAttribute('aria-expanded','false');})); }

  /* en-tête + progression */
  const hd=document.querySelector('.site-header'), pr=document.getElementById('scroll-progress'), veil=document.getElementById('sea-veil');
  let sTick=false;
  function onScroll(){ if(sTick) return; sTick=true;
    requestAnimationFrame(()=>{ sTick=false;
      hd.classList.toggle('is-scrolled', window.scrollY>8);
      const h=document.documentElement, m=h.scrollHeight-h.clientHeight; const f=m>0?h.scrollTop/m:0;
      if(pr){ pr.style.width=(f*100)+'%'; pr.style.opacity=f>0.003?'1':'0'; }
      if(veil) veil.style.opacity=Math.min(0.55, f*0.62).toFixed(3); /* crépuscule → nuit */
    });
  }
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
    /* efface l'état actif quand on est dans le hero (aucune section de nav visible) */
    const heroSec=document.getElementById('hero');
    if(heroSec){
      const spyClear=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) links.forEach(a=>a.classList.remove('is-active')); }),{rootMargin:'-45% 0px -50% 0px'});
      spyClear.observe(heroSec);
    }
  }

  /* compteurs */
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=parseInt(el.dataset.count,10)||0, suffix=el.dataset.suffix||'';
    const run=()=>{ if(reduceMotion){el.textContent=target.toLocaleString('fr-FR')+suffix; return;} const dur=1300,t0=performance.now();
      const tick=now=>{const p=Math.min((now-t0)/dur,1),e=1-Math.pow(1-p,3); el.textContent=Math.round(e*target).toLocaleString('fr-FR')+suffix; if(p<1)requestAnimationFrame(tick);}; requestAnimationFrame(tick); };
    if('IntersectionObserver' in window){ const o=new IntersectionObserver((es,ob)=>es.forEach(e=>{ if(e.isIntersecting){run(); ob.unobserve(e.target);} }),{threshold:.6}); o.observe(el);} else run();
  });

  /* onglets de prix (souris + clavier : flèches, Début/Fin) */
  const tabs=document.getElementById('price-tabs');
  const activateTab=b=>{ if(!b)return; activeCat=b.dataset.cat;
    tabs.querySelectorAll('.price-tab').forEach(x=>{const on=x===b; x.classList.toggle('is-active',on); x.setAttribute('aria-selected',String(on)); x.setAttribute('tabindex',on?'0':'-1');});
    renderPricePanel(currentLang);
    if(window.gsap&&!reduceMotion) gsap.fromTo('#price-panel .price-row',{opacity:0,y:10},{opacity:1,y:0,duration:.4,stagger:.025,ease:'power2.out'});
  };
  if(tabs){
    tabs.addEventListener('click',e=>activateTab(e.target.closest('.price-tab')));
    tabs.addEventListener('keydown',e=>{
      const list=[...tabs.querySelectorAll('.price-tab')]; if(!list.length)return;
      const i=list.indexOf(document.activeElement); let to=-1;
      if(e.key==='ArrowRight'||e.key==='ArrowDown') to=(i+1+list.length)%list.length;
      else if(e.key==='ArrowLeft'||e.key==='ArrowUp') to=(i-1+list.length)%list.length;
      else if(e.key==='Home') to=0; else if(e.key==='End') to=list.length-1;
      if(to<0) return; e.preventDefault(); list[to].focus(); activateTab(list[to]);
    });
  }

  /* comparateur avant/après */
  initBA();
  /* tilt 3D */
  initTilt();

  /* Étincelles marines / poussière d'or — canvas léger (reduced-motion + hors-écran = off) */
  (function heroSparks(){
    if(reduceMotion) return;
    const cv=document.getElementById('hero-spark'); if(!cv) return;
    const ctx=cv.getContext('2d',{alpha:true}); if(!ctx) return;
    let W=0,H=0,dpr=1,parts=[],raf=null,vis=true,inview=true;
    const N=38, rnd=(a,b)=>a+Math.random()*(b-a);
    function resize(){ dpr=Math.min(2,window.devicePixelRatio||1); const r=cv.getBoundingClientRect();
      W=cv.width=Math.max(1,Math.round(r.width*dpr)); H=cv.height=Math.max(1,Math.round(r.height*dpr)); }
    function spawn(){ return { x:rnd(0,W), y:rnd(0,H), r:rnd(0.3,1.2)*dpr, s:rnd(0.04,0.22)*dpr, a:rnd(0.14,0.46), tw:rnd(0,6.28), tv:rnd(0.008,0.03), dx:rnd(-0.06,0.06)*dpr }; }
    function build(){ resize(); parts=[]; for(let i=0;i<N;i++) parts.push(spawn()); }
    function step(){ raf=null; if(!vis||!inview) return; ctx.clearRect(0,0,W,H);
      for(const p of parts){ p.y-=p.s; p.x+=p.dx; p.tw+=p.tv;
        if(p.y<-6){ p.y=H+6; p.x=rnd(0,W); } if(p.x<-6) p.x=W+6; else if(p.x>W+6) p.x=-6;
        const al=p.a*(Math.sin(p.tw)*0.4+0.6);
        const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*4);
        g.addColorStop(0,'rgba(245,227,182,'+al.toFixed(3)+')');
        g.addColorStop(0.5,'rgba(191,226,245,'+(al*0.4).toFixed(3)+')');
        g.addColorStop(1,'rgba(245,227,182,0)');
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,p.r*4,0,6.283); ctx.fill(); }
      run(); }
    function run(){ if(!raf&&vis&&inview) raf=requestAnimationFrame(step); }
    function stop(){ if(raf){ cancelAnimationFrame(raf); raf=null; } }
    build();
    let rt=null; window.addEventListener('resize',()=>{ clearTimeout(rt); rt=setTimeout(build,180); },{passive:true});
    document.addEventListener('visibilitychange',()=>{ vis=!document.hidden; vis?run():stop(); });
    if('IntersectionObserver' in window){ const io=new IntersectionObserver(es=>{ inview=es[0].isIntersecting; inview?run():stop(); },{threshold:0}); io.observe(cv); }
    run();
  })();

  /* GSAP : parallax + reveal cartes */
  if(window.gsap&&!reduceMotion){
    if(window.ScrollTrigger){ gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray('.aurora-blob').forEach((b,i)=>gsap.to(b,{yPercent:i%2?-16:18,ease:'none',scrollTrigger:{trigger:'body',start:'top top',end:'bottom bottom',scrub:true}}));
      /* parallaxe éditoriale : le portrait de l'atelier glisse doucement dans son cadre */
      gsap.utils.toArray('.about-media img').forEach(img=>{
        gsap.fromTo(img,{yPercent:-7,scale:1.15},{yPercent:7,scale:1.15,ease:'none',
          scrollTrigger:{trigger:img.closest('figure'),start:'top bottom',end:'bottom top',scrub:.6}});
      });

      /* Hero « plongée dans la mer » : en défilant, les souliers zooment et tournent
         légèrement pendant que le décor descend SOUS la surface (le soleil sort du
         cadre, l'eau devient profonde) — on arrive aux Services dans la mer, avec
         les vagues, en gardant le côté spectaculaire et pro. */
      try {
        const _hero=document.querySelector('.hero');
        const _ov=document.querySelector('.hero-overlay');
        const _bg=document.getElementById('hero-bg');
        const _mist=document.getElementById('hero-mist');
        const _shoe=document.querySelector('.shoe-main');
        const _refl=document.querySelector('.hero-shoes-refl');
        const _world=document.querySelector('.world-sea');
        const _deep=document.getElementById('sea-deep');
        const _radiance=document.querySelector('.hero-shoes-radiance');
        const _caustic=document.querySelector('.hero-shoes-caustic');
        const _sun=document.getElementById('hero-sun');
        const _bloom=document.querySelector('.hero-shoes-bloom');
        const seg=(p,a,b)=>Math.max(0,Math.min(1,(p-a)/(b-a)));
        if(_hero && _bg){
          if(window.matchMedia('(min-width:900px)').matches){
            /* Cinématique 3 actes (épinglée, longue → l'attente devient mémorable) :
               1) souliers TERNES → 2) ils deviennent BRILLANTS & parfaits →
               3) le soleil s'approche, ils se SUBLIMENT dans la lumière pendant que
                  la mer descend et que le soleil se couche (arrivée aux Services sous l'eau). */
            ScrollTrigger.create({ trigger:_hero, start:'top top', end:'+=150%', pin:true, scrub:0.9, anticipatePin:1,
              onUpdate:self=>{ const p=self.progress;
                const T=seg(p,0.05,0.40);    /* transformation terne → brillant, dès le début du défilement */
                const E=seg(p,0.52,0.84);    /* sublimation / évaporation dans la lumière */
                const Dn=seg(p,0.46,1);      /* descente sous la mer */
                const bloom=Math.sin(seg(p,0.46,0.96)*Math.PI);  /* éclat qui culmine puis retombe */

                /* mer : descente (monte + zoom) + eau profonde qui envahit */
                if(_world) gsap.set(_world, { yPercent:-15*Dn, scale:1+0.22*Dn });
                if(_deep)  gsap.set(_deep,  { opacity:(Dn*0.96).toFixed(3) });

                /* souliers : terne & sombre → clair & brillant → sublimation (montée + éclat) */
                const br=(0.6+0.55*T+0.85*E), ct=(0.78+0.36*T), sa=(0.45+0.62*T), bl=(0.8*(1-T)+3.6*E);
                if(_shoe) gsap.set(_shoe, { transformPerspective:1400, rotationY:(8*T).toFixed(2), rotationX:(2-4*Dn).toFixed(2),
                    scale:(1.0+0.07*T+0.16*E), yPercent:(-6*T-48*E), opacity:(1-Math.min(1,E*1.05)).toFixed(3),
                    filter:'blur('+bl.toFixed(2)+'px) brightness('+br.toFixed(3)+') contrast('+ct.toFixed(3)+') saturate('+sa.toFixed(3)+')' });
                if(_refl)  gsap.set(_refl,  { opacity:(0.18*(1-T)).toFixed(3) });     /* le reflet terne s'efface quand ça brille */
                if(_caustic) gsap.set(_caustic, { opacity:0 });

                /* soleil : s'approche (grandit + s'éclaire), puis se couche avec la descente */
                if(_sun)   gsap.set(_sun,   { opacity:(Math.max(seg(p,0.3,0.62), bloom*0.7)*(1-0.78*seg(p,0.82,1))).toFixed(3),
                    scale:(0.6+1.05*seg(p,0.3,0.74)), xPercent:(-14*(1-seg(p,0.3,0.64))).toFixed(1), yPercent:(40*Dn).toFixed(1) });
                /* éclat de sublimation des souliers */
                if(_bloom) gsap.set(_bloom, { opacity:(bloom*0.96).toFixed(3), scale:(0.5+2.1*seg(p,0.46,1)) });
                /* halo doré de base : présent à la transformation, éteint en profondeur */
                if(_radiance) gsap.set(_radiance, { opacity:(0.72*(1-Math.max(0.25*T, 0.92*Dn))).toFixed(3) });

                if(_bg)   gsap.set(_bg, { transformPerspective:1600, transformOrigin:'50% 42%', scale:1.12-0.05*Dn, yPercent:-4*Dn, opacity:(1-0.55*Dn).toFixed(3) });
                if(_mist) gsap.set(_mist, { yPercent:-22*Dn, scale:1+0.14*Dn, opacity:(0.5+0.4*Dn).toFixed(2) });
                if(_ov)   gsap.set(_ov,   { yPercent:(-16*p).toFixed(1), opacity:(1-seg(p,0.1,0.36)).toFixed(3) });
              }});
          } else {
            const stOpt={ trigger:_hero, start:'top top', end:'bottom top', scrub:1 };
            if(_world) gsap.fromTo(_world, { yPercent:0, scale:1 }, { yPercent:-12, scale:1.18, ease:'none', scrollTrigger:stOpt });
            if(_deep)  gsap.fromTo(_deep, { opacity:0 }, { opacity:.92, ease:'none', scrollTrigger:stOpt });
            if(_shoe)  gsap.fromTo(_shoe, { filter:'blur(0.6px) brightness(0.74) contrast(0.84) saturate(0.6)' }, { filter:'blur(0px) brightness(1.1) contrast(1.12) saturate(1.08)', ease:'none', scrollTrigger:{ trigger:_hero, start:'top top', end:'center top', scrub:1 } });
            gsap.to('.hero-shoes-bob', { yPercent:-8, ease:'none', scrollTrigger:stOpt });
            if(_ov) gsap.to(_ov, { yPercent:-10, opacity:.3, ease:'none', scrollTrigger:stOpt });
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

      /* démonstration du comparateur au premier passage — invite au geste */
      try {
        const _b=document.getElementById('ba'), _bf=document.getElementById('ba-before'), _bh=document.getElementById('ba-handle');
        if(_b&&_bf&&_bh){
          ScrollTrigger.create({ trigger:_b, start:'top 72%', once:true, onEnter:()=>{
            const o={p:50};
            gsap.to(o,{ keyframes:[{p:68,duration:.7,ease:'power2.inOut'},{p:38,duration:.85,ease:'power2.inOut'},{p:50,duration:.6,ease:'power3.out'}], delay:.35,
              onUpdate:()=>{ _bf.style.clipPath=`inset(0 ${100-o.p}% 0 0)`; _bh.style.left=o.p+'%'; _bh.setAttribute('aria-valuenow',Math.round(o.p)); } });
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
