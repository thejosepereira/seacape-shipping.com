// ── Seacape Language Switcher ──────────────────────────────────────────────
// Supports English (en) and Spanish (es). Language persists in localStorage.
// Usage: setLanguage('es') / setLanguage('en')

const translations = {
  en: {
    // ── Navigation ─────────────────────────────────────────────────────────
    nav_home:       'Home',
    nav_about:      'About',
    nav_services:   'Services',
    nav_routes:     'Routes',
    nav_tools:      'Tools',
    nav_contact:    'Contact Us',

    // ── Index — Hero ───────────────────────────────────────────────────────
    hero_title_html: 'Worldwide<br/><em>Logistics</em>',
    hero_sub:        'A leading dry bulk shipping company with over 60 years of industry experience, providing reliable maritime solutions worldwide.',
    hero_btn_contact: 'Contact Us',
    hero_btn_routes:  'Our Routes',

    // ── Stats Bar ──────────────────────────────────────────────────────────
    stat_years_label:     'Years of Experience',
    stat_offices_label:   'Office Locations',
    stat_mt_label:        'MT Moved Per Year',
    stat_languages_label: 'Languages Supported',

    // ── Index — Services Section ───────────────────────────────────────────
    services_heading:  'Our Services',
    services_sub:      'Comprehensive maritime and logistics solutions, backed by the expertise to move the world\'s most demanding cargoes.',
    services_cta_btn:  'View All Services',

    svc_01_title: 'Industrial Dry Bulk Shipping',
    svc_01_desc:  'Global maritime logistics across Handysize to Panamax segments for the world\'s most demanding dry bulk commodities.',
    svc_02_title: 'Steel & Metallurgical Cargo Logistics',
    svc_02_desc:  'End-to-end transport of steel products, copper concentrates, and metallurgical bulks with Blue Condition standards.',
    svc_03_title: 'Project Cargo & Heavy Lift Solutions',
    svc_03_desc:  'Specialized handling of oversized and complex cargo with full route engineering and port supervision.',
    svc_04_title: 'Chartering & Vessel Commercial Management',
    svc_04_desc:  'Matching cargo demand with vessels, negotiating charter contracts, and managing voyage performance.',
    svc_05_title: 'Freight Forwarder',
    svc_05_desc:  'Door-to-door multimodal logistics — ocean, inland, and air freight for general cargo, bulk, reefer, and IMO classes.',
    svc_06_title: 'Inland Logistics',
    svc_06_desc:  'Port-to-plant haulage coordination worldwide, fully integrated with our maritime operations.',
    svc_07_title: 'Agency in Chile',
    svc_07_desc:  'Maritime agency services in Punta Arenas and Port Ventanas, coordinating port calls, pilotage, and vessel formalities.',

    // ── Index — Routes Section ─────────────────────────────────────────────
    routes_heading: 'Global Corridors',
    routes_sub:     'A global network of trade lanes connecting the world\'s major loading and discharging ports across every ocean basin.',
    routes_cta_btn: 'See Our Routes',

    route_01_title: 'Black Sea & Mediterranean',
    route_02_title: 'East Coast & Gulf',
    route_03_title: 'Far East — Japan & China',
    route_04_title: 'West & Central South America',
    route_05_title: 'Continent & Baltic',

    // ── Index — Pillars Section ────────────────────────────────────────────
    why_heading: 'Built on Three Pillars',
    why_sub:     'Seacape has earned its reputation as a trusted partner in global maritime logistics.',

    pillar_01_num:   '01 / Service',
    pillar_01_title: 'Excellent Service',
    pillar_01_text:  'Dedicated teams with deep industry knowledge, providing hands-on support throughout every shipment.',
    pillar_02_num:   '02 / Rates',
    pillar_02_title: 'Competitive Rates',
    pillar_02_text:  'Leveraging long-standing partnerships and market expertise to deliver the most competitive freight rates.',
    pillar_03_num:   '03 / Reliability',
    pillar_03_title: 'Unquestioned Reliability',
    pillar_03_text:  'A 60-year track record of on-time delivery and transparent communication you can depend on.',

    // ── Index — Offices Section ────────────────────────────────────────────
    offices_heading:  'Our Offices',
    offices_sub:      'We are proud to highlight our expanding global footprint. In addition to our headquarters in Miami and our South American hub in Santiago, we now have offices in Brazil and Peru — locations below.',
    offices_cta_btn:  'Contact Our Team',
    office_miami_role:    'Global Headquarters',
    office_santiago_role: 'South American Operations',
    office_saopaulo_role: 'Brazil Office',
    office_lima_role:     'Peru Office',
    office_shanghai_role: 'China Office',
    office_zug_role:      'Europe Office',
    office_odessa_role:   'Ukraine Office',

    // ── Footer ─────────────────────────────────────────────────────────────
    footer_desc:          'Worldwide maritime and logistics solutions. Connecting global markets through precision, reliability, and over 60 years of industry expertise.',
    footer_quick_links:   'Quick Links',
    footer_our_services:  'Our Services',
    footer_presence:      'International Presence',
    footer_contact_us:    'Contact Us',
    footer_copy:          '© 2025 Seacape Logistics & Management Services Inc. All Rights Reserved.',

    footer_svc_drybulk:    'Industrial Dry Bulk Shipping',
    footer_svc_steel:      'Steel & Metallurgical Cargo',
    footer_svc_project:    'Project Cargo & Heavy Lift',
    footer_svc_chartering: 'Chartering & Vessel Management',
    footer_svc_freight:    'Freight Forwarder',
    footer_svc_inland:     'Inland Logistics',

    footer_loc_miami:    'Miami, USA — Headquarters',
    footer_loc_santiago: 'Santiago, Chile',
    footer_loc_lima:     'Lima, Peru',
    footer_loc_brazil:   'São Paulo, Brazil',
    footer_loc_shanghai: 'Shanghai, China',
    footer_loc_zug:      'Zug, Switzerland',
    footer_loc_odessa:   'Odessa, Ukraine',

    // ── About Page ─────────────────────────────────────────────────────────
    about_hero_title:     'About Seacape',
    about_hero_sub:       'Over 60 years of maritime heritage, a global team, and an unwavering commitment to operational excellence.',
    about_story_label:    'Our Story',
    about_story_heading:  'Premier Dry Bulk Shipping Since 1965',
    about_stat_years:     'Years of Experience',
    about_stat_offices:   'Global Offices',
    about_stat_mt:        'MT Moved Per Year',
    about_body_1: 'Seacape is a premier dry bulk shipping company delivering comprehensive maritime and logistics solutions to clients across the diverse sectors of the global economy. Leveraging over 60 years of industry experience through its company principals, Seacape has cultivated a deep expertise in the transportation of bulk and breakbulk commodities. The company\'s operational portfolio is extensive, encompassing the global movement of steel products, sugar, coal, and copper concentrates, as well as fertilizers, grains, forest products, and specialized project cargo.',
    about_body_2: 'The company primarily operates within the Handysize to Panamax vessel segments, where it is recognized for providing reliable, efficient, and tailored marine transportation services to major international trading houses and industrial conglomerates. By maintaining a versatile fleet approach, Seacape ensures the seamless delivery of a wide range of dry bulk materials while adhering to the highest standards of operational excellence.',
    about_body_3: 'Headquartered in Miami, Florida, and supported by a strategic commercial office in Santiago, Chile, Seacape maintains a robust international presence. This geographic footprint, complemented by an expansive network of commercial representatives across key global markets, allows the company to ensure close client coordination and comprehensive operational coverage, bridging the gap between global logistics and localized expertise.',
    about_team_heading: 'Our Team',
    about_team_sub:     'A global network of maritime professionals dedicated to delivering operational excellence across every trade lane we serve.',
    about_usa_team:     'USA Team',
    about_intl_team:    'International Team',

    team_ceo:           'Chief Executive Officer',
    team_md:            'Chief Financial Officer, Managing Director',
    team_coo:           'Chief Operations Officer',
    team_chartering_dir:'Chartering Director',
    team_ops_mgr:       'Operations Manager',
    team_chartering_mgr:'Chartering Manager',
    team_ops_senior:    'Operations Senior Executive',
    team_proj_dev:      'Director of Project Development',
    team_latam_dir:     'Director of Latam',
    team_eu_dir:        'Director of Europe',
    team_cm_peru:       'Country Manager, Peru',
    team_cm_brazil:     'Country Manager, Brazil',
    team_cm_china:      'Country Manager, China',
    team_superintendent:'Superintendent, Ukraine',

    // ── Services Page ──────────────────────────────────────────────────────
    svc_hero_title: 'Our Services',
    svc_hero_sub:   'Comprehensive maritime and logistics solutions, built on over 60 years of expertise moving the world\'s most demanding cargoes.',

    svc_drybulk_title: 'Industrial Dry Bulk Shipping',
    svc_drybulk_intro: 'Seacape is a premier dry bulk shipping enterprise, delivering comprehensive global maritime logistics solutions across a diverse range of economic sectors.',
    svc_drybulk_p1: 'With a leadership team boasting over 60 years of maritime heritage, Seacape specializes in the complex transport of bulk and breakbulk commodities. Our expertise includes the specialized handling of steel products, sugar, coal, copper concentrates, and grains, among other essential dry cargoes.',
    svc_drybulk_p2: 'We maintain a strategic operational focus on Handysize through Panamax vessel segments, providing dependable ocean freight services to a portfolio of world-class trading houses and industrial partners.',
    svc_drybulk_p3: 'Headquartered in Miami, Florida, with a key commercial hub in Santiago, Chile, Seacape maintains a robust global presence through a network of strategic representatives in all major international markets.',

    svc_steel_title: 'Steel & Metallurgical Cargo Logistics',
    svc_steel_intro: 'Seacape provides high-performance maritime solutions specifically engineered for the global steel and metallurgical industries.',
    svc_steel_p1: 'We specialize in the end-to-end transport of high-value industrial commodities, including finished steel, copper concentrates, and metallurgical bulks. By leveraging our strategic fleet of Handysize to Panamax vessels, we provide the reliability and technical expertise required to move large-scale industrial cargo across major international markets.',
    svc_steel_p2: 'Our primary operational focus is the maintenance of "Blue Condition" standards. We recognize that for premium steel products, surface integrity and the prevention of oxidation are critical. Through rigorous technical supervision, specialized stowage, and moisture-control protocols, we ensure that cargo reaches its final destination in its original, rust-free, and prime commercial state.',

    svc_chartering_title: 'Chartering & Vessel Commercial Management',
    svc_chartering_intro: 'Our Chartering team is responsible for securing profitable employment for vessels by matching cargo demand with available ships and negotiating charter contracts.',
    svc_chartering_p1: 'We analyze market trends, hire rates, and bunker costs to make informed commercial decisions, while managing relationships with charterers, shipowners, and brokers. We are also involved in negotiating key terms such as hire, duration, cargo and trading ranges.',
    svc_chartering_p2: 'By coordinating with operations teams to ensure efficient voyage execution and managing commercial risks, our chartering desk serves as a key driver of revenue and performance for each engagement.',

    svc_inland_title: 'Inland Logistics',
    svc_inland_intro: 'Our Inland Logistics Department is responsible for the strategic planning and coordination of cargo transport, managing movements from port terminals or private bonded warehouses to various client destinations and production plants.',
    svc_inland_p1: 'By optimizing route management and resource allocation, the department ensures strict adherence to established lead times and the specific operational parameters required for each shipment. Core functional responsibilities include the procurement and coordination of haulage assets, meticulous dispatch planning, and the rigorous supervision of loading processes.',
    svc_inland_p2: 'This area facilitates seamless communication between motor carriers and all relevant stakeholders, maintaining end-to-end visibility through real-time delivery tracking to ensure a proactive response to any operational contingencies.',
    svc_inland_p3: 'The primary objective of the department is to guarantee a secure, agile, and streamlined cargo transit process. By delivering timely and cost-effective logistics solutions, the team remains dedicated to meeting the complex supply chain demands of our clients — across both Chile and Peru — with maximum operational efficiency.',

    svc_agency_title: 'Agency in Chile',
    svc_agency_intro: 'A maritime agency in Punta Arenas plays a key role in coordinating vessels transiting the Magellan Strait, managing port calls, pilotage services, vessel supplies, and all formalities with authorities such as customs and immigration.',
    svc_agency_p1: 'In addition, it organizes the transit safely according to weather conditions, maintains constant communication with maritime authorities, and provides operational reports to the shipowner, ensuring efficient and smooth navigation.',
    svc_agency_p2: 'A maritime agency in Port Ventanas plays a key role in coordinating port operations, managing vessel arrivals and departures, berth scheduling, cargo operations, and all formalities with authorities such as customs and immigration. It also arranges pilotage, tug services, and vessel supplies, while maintaining close communication with terminal operators and maritime authorities. Additionally, it provides timely operational updates to the shipowner, ensuring efficient port calls and smooth operations.',

    svc_project_title: 'Project Cargo & Heavy Lift Solutions',
    svc_project_intro: 'Project Cargo & Heavy Lift Solutions refers to specialized logistics services focused on the handling, transportation, and coordination of oversized, heavy, or complex cargo.',
    svc_project_p1: 'These solutions include detailed planning, route analysis, coordination of lifting equipment and specialized vessels, as well as close supervision of operations to ensure safety and efficiency.',
    svc_project_p2: 'They are tailored to meet each project\'s specific requirements, providing reliable and seamless execution from origin to destination.',

    svc_freight_title: 'Freight Forwarder',
    svc_freight_intro: 'We provide a comprehensive door-to-door integrated logistics service encompassing multimodal transport solutions, including inland, ocean, and air freight, on both a domestic and international scale.',
    svc_freight_p1: 'Our firm specializes in the management of general cargo, containerized freight (FCL/LCL), temperature-controlled shipments (reefer), dry bulk, and dangerous goods (IMO classes). We possess extensive expertise in the cold chain logistics of fresh fruit, salmon, and food products, as well as the transport of healthcare supplies.',
    svc_freight_p2: 'Furthermore, we maintain a core competency in the shipment of steel products via container; by leveraging our dedicated inland logistics department, we guarantee precision-engineered coordination regarding stowage, haulage, and final delivery to ensure the utmost integrity of the cargo throughout the supply chain.',

    svc_see_more: 'See more',
    svc_see_less: 'See less',

    svc_cta_heading: 'Ready to Move Your Cargo?',
    svc_cta_sub:     'Contact our team to discuss your requirements and receive a tailored freight solution.',
    svc_cta_btn:     'Get in Touch',

    // ── Routes Page ────────────────────────────────────────────────────────
    routes_hero_title: 'Our Shipping Routes',
    routes_hero_sub:   'Reliable and efficient shipping solutions across key international trade lanes, connecting major exporting and importing regions through flexible and commercially driven logistics strategies.',

    route_01_corridor: 'Med > WC/ECSA',
    route_01_title_full: 'Black Sea & Mediterranean',
    route_01_p1: 'One of the world\'s most active bulk shipping corridors, the Black Sea and Mediterranean route bridges Europe\'s leading producers with prime markets across Western Europe, the Americas, and beyond. For decades, Seacape has been a trusted leader in this region, seamlessly driving the maritime carriage of grains, steel, and high-value commodities.',
    route_01_p2: '',

    route_02_corridor: 'ECSA > WC/USG/NCSA',
    route_02_title_full: 'East Coast & Gulf',
    route_02_p1: 'With our headquarters in Miami, Florida, Seacape delivers real-time coordination and direct on-site support for all cargo transiting this corridor, guaranteeing efficiency across East Coast and Gulf ports.',
    route_02_p2: 'This route serves as a vital gateway for dry bulk commodities and industrial cargoes, facilitating the movement of grains, fertilizers, steel products, and other strategic exports between North America, South America, and global markets.',

    route_03_corridor: 'FEAST > WC',
    route_03_title_full: 'Far East — Japan & China',
    route_03_p1: 'The Far East trade corridor represents one of Seacape\'s core operating markets. Through this established trade lane, Seacape manages robust two-way trade flows, seamlessly connecting producers and buyers of steel, concentrates, and other bulk commodities across Far East with the Americas. Supported by strong regional expertise and an extensive commercial network, we optimize supply chain efficiency across both regions, ensuring reliable transportation solutions and direct access to key markets throughout the American West Coast.',
    route_03_p2: '',

    route_04_corridor: 'ECSA > WCSA/WCCA',
    route_04_title_full: 'West & Central South America',
    route_04_p1: 'South America represents one of Seacape\'s most strategic markets. With a commercial office in Santiago, Chile, and an established presence across Peru and Brazil, we are well positioned to support the region\'s evolving trade flows and logistics requirements on both the Atlantic and Pacific coasts.',
    route_04_p2: 'Our extensive regional coverage is backed by deep market knowledge, strong local relationships, and proven operational expertise, enabling the efficient movement of bulk and breakbulk cargoes throughout one of the world\'s most dynamic trading environments.',

    route_05_corridor: 'Cont-Baltic > WCSA/WCCA/ECSA',
    route_05_title_full: 'Continent & Baltic',
    route_05_p1: 'The Continent and Baltic region is a key origin market for dry bulk trade into Latin America. Leveraging extensive experience along this corridor, Seacape provides efficient transportation solutions for a diverse range of commodities, connecting European exporters with strategic markets across WCSA, WCCA, and ECSA through reliable execution and consistent cargo flows.',
    route_05_p2: '',

    routes_cta_heading: 'Shipping to or from These Routes?',
    routes_cta_sub:     'Contact our team to discuss availability, rates, and scheduling for your next shipment.',
    routes_page_cta_btn: 'Contact Our Team',

    // ── Contact Page ───────────────────────────────────────────────────────
    contact_hero_title: 'Contact Seacape',
    contact_hero_sub:   'Our team in Miami and Santiago is ready to assist with your shipping inquiries, freight quotes, and operational questions.',
    contact_intro_heading: 'Let\'s talk cargo.',
    contact_intro_p:    'Whether you\'re exploring a new shipping route, need a competitive freight quote, or want to discuss a long-term partnership, our experienced team is here to help.',
    contact_miami_role:    'Global Headquarters',
    contact_santiago_role: 'South American Operations',
    contact_shanghai_role: 'China Office',
    contact_zug_role:      'Europe Office',
    contact_odessa_role:   'Ukraine Office',
    contact_lima_role:     'Peru Office',
    contact_saopaulo_role: 'Brazil Office',
    contact_lang_note:  'Our team is available to assist in English, Spanish, Portuguese, Ukrainian, German, and Chinese.',
    contact_cta_text:   'Prefer to reach us directly?',
    contact_cta_btn:    'Email Our Team',

    form_heading:             'Send Us a Message',
    form_sub:                 'Fill in the form below and our team will respond within one business day.',
    form_name_label:          'Full Name',
    form_country_label:       'Country',
    form_email_label:         'Email Address',
    form_phone_label:         'Phone Number',
    form_subject_label:       'Subject',
    form_message_label:       'Message',
    form_name_placeholder:    'John Smith',
    form_country_placeholder: 'Select country',
    form_subject_placeholder: 'Select a topic',
    form_message_placeholder: 'Please describe your cargo requirements, route, volume, and any other relevant details…',
    form_submit:              'Send Message',
    form_subject_quote:       'Freight Quote Request',
    form_subject_routes:      'Route Inquiry',
    form_subject_services:    'Services Information',
    form_subject_partner:     'Partnership / Agency',
    form_subject_other:       'Other',

    // ── Tools Page ─────────────────────────────────────────────────────────
    tools_hero_title:        'Shipping Glossary',
    tools_hero_sub:          'Key terms and definitions for international maritime cargo transport.',
    tools_search_placeholder:'Search terms…',
  },

  // ────────────────────────────────────────────────────────────────────────
  es: {
    // ── Navigation ─────────────────────────────────────────────────────────
    nav_home:       'Inicio',
    nav_about:      'Nosotros',
    nav_services:   'Servicios',
    nav_routes:     'Rutas',
    nav_tools:      'Herramientas',
    nav_contact:    'Contáctenos',

    // ── Index — Hero ───────────────────────────────────────────────────────
    hero_title_html: 'Logística<br/><em>Mundial</em>',
    hero_sub:        'Una empresa líder en transporte marítimo de graneles secos con más de 60 años de experiencia en la industria, brindando soluciones marítimas confiables en todo el mundo.',
    hero_btn_contact: 'Contáctenos',
    hero_btn_routes:  'Nuestras Rutas',

    // ── Stats Bar ──────────────────────────────────────────────────────────
    stat_years_label:     'Años de Experiencia',
    stat_offices_label:   'Oficinas Globales',
    stat_mt_label:        'TM Movilizadas por Año',
    stat_languages_label: 'Idiomas de Atención',

    // ── Index — Services Section ───────────────────────────────────────────
    services_heading:  'Nuestros Servicios',
    services_sub:      'Desde el transporte marítimo de graneles industriales hasta la logística interior, nuestra oferta integrada cubre cada etapa de la cadena marítima y logística.',
    services_cta_btn:  'Ver Todos los Servicios',

    svc_01_title: 'Transporte Marítimo de Graneles Secos',
    svc_01_desc:  'Logística marítima global en segmentos Handysize a Panamax para los graneles secos más exigentes del mundo.',
    svc_02_title: 'Logística de Carga de Acero y Metalúrgica',
    svc_02_desc:  'Transporte integral de productos de acero, concentrados de cobre y graneles metalúrgicos con estándares Blue Condition.',
    svc_03_title: 'Carga de Proyectos y Elevación Pesada',
    svc_03_desc:  'Manejo especializado de carga sobredimensionada y compleja con ingeniería de ruta completa y supervisión portuaria.',
    svc_04_title: 'Fletamento y Gestión Comercial de Buques',
    svc_04_desc:  'Coordinación de demanda de carga con buques, negociación de contratos de fletamento y gestión del rendimiento de viaje.',
    svc_05_title: 'Agente de Carga',
    svc_05_desc:  'Logística multimodal puerta a puerta — flete marítimo, interior y aéreo para carga general, graneles, refrigerados y clases IMO.',
    svc_06_title: 'Logística Interior',
    svc_06_desc:  'Coordinación de transporte puerto a planta a nivel mundial, completamente integrada con nuestras operaciones marítimas.',
    svc_07_title: 'Agencia en Chile',
    svc_07_desc:  'Servicios de agencia marítima en Punta Arenas y Puerto Ventanas, coordinando escalas, practicaje y formalidades de buques.',

    // ── Index — Routes Section ─────────────────────────────────────────────
    routes_heading: 'Corredores Globales',
    routes_sub:     'Una red global de rutas comerciales que conecta los principales puertos de carga y descarga del mundo en todas las cuencas oceánicas.',
    routes_cta_btn: 'Ver Todas las Rutas',

    route_01_title: 'Mar Negro y Mediterráneo',
    route_02_title: 'Costa Este y Golfo',
    route_03_title: 'Lejano Oriente — Japón y China',
    route_04_title: 'Sudamérica Occidental y Central',
    route_05_title: 'Continente y Báltico',

    // ── Index — Pillars Section ────────────────────────────────────────────
    why_heading: 'Sustentado en Tres Pilares',
    why_sub:     'Seacape se ha ganado su reputación como socio de confianza en la logística marítima global.',

    pillar_01_num:   '01 / Servicio',
    pillar_01_title: 'Excelente Servicio',
    pillar_01_text:  'Equipos dedicados con profundo conocimiento del sector, brindando apoyo personalizado en cada envío.',
    pillar_02_num:   '02 / Tarifas',
    pillar_02_title: 'Tarifas Competitivas',
    pillar_02_text:  'Aprovechando alianzas de larga data y experiencia de mercado para ofrecer las tarifas de flete más competitivas.',
    pillar_03_num:   '03 / Confiabilidad',
    pillar_03_title: 'Confiabilidad Indiscutida',
    pillar_03_text:  'Un historial de 60 años de entrega puntual y comunicación transparente en la que puede confiar.',

    // ── Index — Offices Section ────────────────────────────────────────────
    offices_heading:  'Nuestras Oficinas',
    offices_sub:      'Nos enorgullece destacar nuestra creciente huella global. Además de nuestra sede en Miami y nuestro hub sudamericano en Santiago, ahora contamos con oficinas en Brasil y Perú — ubicaciones a continuación.',
    offices_cta_btn:  'Contactar a Nuestro Equipo',
    office_miami_role:    'Sede Global',
    office_santiago_role: 'Operaciones Sudamericanas',
    office_saopaulo_role: 'Oficina Brasil',
    office_lima_role:     'Oficina Perú',
    office_shanghai_role: 'Oficina China',
    office_zug_role:      'Oficina Europa',
    office_odessa_role:   'Oficina Ucrania',

    // ── Footer ─────────────────────────────────────────────────────────────
    footer_desc:          'Soluciones marítimas y logísticas mundiales. Conectando mercados globales con precisión, confiabilidad y más de 60 años de experiencia en la industria.',
    footer_quick_links:   'Enlaces Rápidos',
    footer_our_services:  'Nuestros Servicios',
    footer_presence:      'Presencia Internacional',
    footer_contact_us:    'Contáctenos',
    footer_copy:          '© 2025 Seacape Logistics & Management Services Inc. Todos los Derechos Reservados.',

    footer_svc_drybulk:    'Transporte de Graneles Secos',
    footer_svc_steel:      'Carga de Acero y Metalúrgica',
    footer_svc_project:    'Carga de Proyectos y Elevación Pesada',
    footer_svc_chartering: 'Fletamento y Gestión de Buques',
    footer_svc_freight:    'Agente de Carga',
    footer_svc_inland:     'Logística Interior',

    footer_loc_miami:    'Miami, EE.UU. — Sede Principal',
    footer_loc_santiago: 'Santiago, Chile',
    footer_loc_lima:     'Lima, Perú',
    footer_loc_brazil:   'São Paulo, Brasil',
    footer_loc_shanghai: 'Shanghái, China',
    footer_loc_zug:      'Zug, Suiza',
    footer_loc_odessa:   'Odessa, Ucrania',

    // ── About Page ─────────────────────────────────────────────────────────
    about_hero_title:     'Sobre Seacape',
    about_hero_sub:       'Más de 60 años de herencia marítima, un equipo global y un compromiso inquebrantable con la excelencia operacional.',
    about_story_label:    'Nuestra Historia',
    about_story_heading:  'Transporte de Graneles Secos de Primer Nivel Desde 1965',
    about_stat_years:     'Años de Experiencia',
    about_stat_offices:   'Oficinas Globales',
    about_stat_mt:        'TM Movilizadas por Año',
    about_body_1: 'Seacape es una empresa líder en transporte marítimo de graneles secos que brinda soluciones integrales de logística marítima a clientes en los diversos sectores de la economía global. Aprovechando más de 60 años de experiencia en la industria a través de sus directivos, Seacape ha cultivado una profunda experticia en el transporte de mercancías a granel y carga fraccionada. El portafolio operativo de la empresa es extenso, abarcando el movimiento global de productos de acero, azúcar, carbón y concentrados de cobre, así como fertilizantes, granos, productos forestales y carga de proyecto especializada.',
    about_body_2: 'La empresa opera principalmente en los segmentos de buques Handysize a Panamax, donde es reconocida por brindar servicios de transporte marítimo confiables, eficientes y personalizados a las principales casas comerciales internacionales y conglomerados industriales. Al mantener un enfoque de flota versátil, Seacape garantiza la entrega fluida de una amplia gama de materiales a granel, adhiriéndose a los más altos estándares de excelencia operacional.',
    about_body_3: 'Con sede en Miami, Florida, y apoyada por una oficina comercial estratégica en Santiago de Chile, Seacape mantiene una sólida presencia internacional. Esta huella geográfica, complementada por una extensa red de representantes comerciales en los principales mercados globales, permite a la empresa garantizar una estrecha coordinación con los clientes y una cobertura operativa integral, uniendo la logística global con la experiencia localizada.',
    about_team_heading: 'Nuestro Equipo',
    about_team_sub:     'Una red global de profesionales marítimos dedicados a brindar excelencia operacional en cada ruta comercial que servimos.',
    about_usa_team:     'Equipo EE.UU.',
    about_intl_team:    'Equipo Internacional',

    team_ceo:           'Director Ejecutivo',
    team_md:            'Director Financiero, Director Gerente',
    team_coo:           'Director de Operaciones',
    team_chartering_dir:'Director de Fletamento',
    team_ops_mgr:       'Gerente de Operaciones',
    team_chartering_mgr:'Gerente de Fletamento',
    team_ops_senior:    'Ejecutivo Senior de Operaciones',
    team_proj_dev:      'Director de Desarrollo de Proyectos',
    team_latam_dir:     'Director de Latinoamérica',
    team_eu_dir:        'Directora de Europa',
    team_cm_peru:       'Country Manager, Perú',
    team_cm_brazil:     'Country Manager, Brasil',
    team_cm_china:      'Country Manager, China',
    team_superintendent:'Superintendente, Ucrania',

    // ── Services Page ──────────────────────────────────────────────────────
    svc_hero_title: 'Nuestros Servicios',
    svc_hero_sub:   'Soluciones marítimas y logísticas integrales, basadas en más de 60 años de experiencia en el manejo de las cargas más exigentes del mundo.',

    svc_drybulk_title: 'Transporte Marítimo de Graneles Secos',
    svc_drybulk_intro: 'Seacape es una empresa líder en transporte de graneles secos, brindando soluciones integrales de logística marítima global en una amplia gama de sectores económicos.',
    svc_drybulk_p1: 'Con un equipo directivo que acumula más de 60 años de herencia marítima, Seacape se especializa en el transporte complejo de mercancías a granel y carga fraccionada. Nuestra experiencia incluye el manejo especializado de productos de acero, azúcar, carbón, concentrados de cobre y granos, entre otras cargas secas esenciales.',
    svc_drybulk_p2: 'Mantenemos un enfoque operativo estratégico en los segmentos de buques Handysize a Panamax, brindando servicios de flete oceánico confiables a un portafolio de casas comerciales de primer nivel y socios industriales.',
    svc_drybulk_p3: 'Con sede en Miami, Florida, y un hub comercial clave en Santiago de Chile, Seacape mantiene una sólida presencia global a través de una red de representantes estratégicos en todos los principales mercados internacionales.',

    svc_steel_title: 'Logística de Carga de Acero y Metalúrgica',
    svc_steel_intro: 'Seacape brinda soluciones marítimas de alto rendimiento específicamente diseñadas para la industria global del acero y la metalurgia.',
    svc_steel_p1: 'Nos especializamos en el transporte integral de commodities industriales de alto valor, incluyendo acero terminado, concentrados de cobre y graneles metalúrgicos. Aprovechando nuestra flota estratégica de buques Handysize a Panamax, brindamos la confiabilidad y la experiencia técnica necesarias para movilizar carga industrial a gran escala en los principales mercados internacionales.',
    svc_steel_p2: 'Nuestro principal enfoque operativo es el mantenimiento de los estándares "Blue Condition". Reconocemos que para los productos de acero premium, la integridad superficial y la prevención de la oxidación son críticas. A través de una rigurosa supervisión técnica, estiba especializada y protocolos de control de humedad, garantizamos que la carga llegue a su destino final en su estado original, libre de óxido y en condición comercial óptima.',

    svc_chartering_title: 'Fletamento y Gestión Comercial de Buques',
    svc_chartering_intro: 'Nuestro equipo de Fletamento es responsable de conseguir empleo rentable para los buques, coordinando la demanda de carga con los buques disponibles y negociando contratos de fletamento.',
    svc_chartering_p1: 'Analizamos tendencias del mercado, tarifas de arrendamiento y costos de combustible para tomar decisiones comerciales informadas, gestionando relaciones con fletadores, armadores y corredores. También participamos en la negociación de términos clave como el flete, la duración, la carga y los rangos de navegación.',
    svc_chartering_p2: 'Al coordinar con los equipos de operaciones para garantizar una ejecución eficiente del viaje y gestionar los riesgos comerciales, nuestra mesa de fletamento actúa como un motor clave de ingresos y rendimiento en cada contrato.',

    svc_inland_title: 'Logística Interior',
    svc_inland_intro: 'Nuestro Departamento de Logística Interior es responsable de la planificación estratégica y coordinación del transporte de carga, gestionando los movimientos desde terminales portuarias o almacenes fiscales privados hasta los distintos destinos de los clientes y plantas de producción.',
    svc_inland_p1: 'Al optimizar la gestión de rutas y la asignación de recursos, el departamento garantiza el cumplimiento estricto de los plazos establecidos y los parámetros operativos específicos requeridos para cada envío. Las responsabilidades funcionales principales incluyen la adquisición y coordinación de activos de transporte, la planificación meticulosa del despacho y la supervisión rigurosa de los procesos de carga.',
    svc_inland_p2: 'Esta área facilita la comunicación fluida entre transportistas y todas las partes interesadas relevantes, manteniendo una visibilidad de extremo a extremo mediante el seguimiento de entregas en tiempo real para garantizar una respuesta proactiva ante cualquier contingencia operativa.',
    svc_inland_p3: 'El objetivo principal del departamento es garantizar un proceso de tránsito de carga seguro, ágil y optimizado. Al brindar soluciones logísticas oportunas y rentables, el equipo se mantiene comprometido con satisfacer las complejas demandas de la cadena de suministro de nuestros clientes — tanto en Chile como en Perú — con la máxima eficiencia operativa.',

    svc_agency_title: 'Agencia en Chile',
    svc_agency_intro: 'Una agencia marítima en Punta Arenas desempeña un papel clave en la coordinación de buques en tránsito por el Estrecho de Magallanes, gestionando escalas, servicios de practicaje, suministros de buques y todas las formalidades ante autoridades como aduana e inmigración.',
    svc_agency_p1: 'Además, organiza el tránsito de manera segura según las condiciones meteorológicas, mantiene comunicación constante con las autoridades marítimas y proporciona informes operativos al armador, garantizando una navegación eficiente y sin contratiempos.',
    svc_agency_p2: 'Una agencia marítima en Puerto Ventanas desempeña un papel clave en la coordinación de operaciones portuarias, gestionando llegadas y salidas de buques, programación de muelles, operaciones de carga y todas las formalidades ante autoridades como aduana e inmigración. También coordina practicaje, servicios de remolcadores y suministros de buques, manteniendo comunicación estrecha con los operadores de terminales y autoridades marítimas. Además, proporciona actualizaciones operativas oportunas al armador, garantizando escalas eficientes y operaciones fluidas.',

    svc_project_title: 'Carga de Proyectos y Soluciones de Elevación Pesada',
    svc_project_intro: 'La Carga de Proyectos y las Soluciones de Elevación Pesada se refieren a servicios logísticos especializados orientados al manejo, transporte y coordinación de cargas sobredimensionadas, pesadas o complejas.',
    svc_project_p1: 'Estas soluciones incluyen planificación detallada, análisis de rutas, coordinación de equipos de izaje y buques especializados, así como supervisión estrecha de las operaciones para garantizar seguridad y eficiencia.',
    svc_project_p2: 'Están diseñadas para satisfacer los requisitos específicos de cada proyecto, brindando una ejecución confiable y sin interrupciones desde el origen hasta el destino.',

    svc_freight_title: 'Agente de Carga',
    svc_freight_intro: 'Brindamos un servicio logístico integral puerta a puerta que abarca soluciones de transporte multimodal, incluyendo flete interior, marítimo y aéreo, tanto a escala nacional como internacional.',
    svc_freight_p1: 'Nuestra empresa se especializa en la gestión de carga general, flete en contenedores (FCL/LCL), envíos a temperatura controlada (reefer), graneles secos y mercancías peligrosas (clases IMO). Contamos con amplia experiencia en la logística de cadena de frío de fruta fresca, salmón y productos alimenticios, así como en el transporte de insumos de salud.',
    svc_freight_p2: 'Además, mantenemos una competencia central en el transporte de productos de acero en contenedor; aprovechando nuestro departamento de logística interior dedicado, garantizamos una coordinación de precisión en materia de estiba, transporte y entrega final para asegurar la máxima integridad de la carga a lo largo de la cadena de suministro.',

    svc_see_more: 'Ver más',
    svc_see_less: 'Ver menos',

    svc_cta_heading: '¿Listo para Mover su Carga?',
    svc_cta_sub:     'Contáctenos para discutir sus requerimientos y recibir una solución de flete a medida.',
    svc_cta_btn:     'Ponerse en Contacto',

    // ── Routes Page ────────────────────────────────────────────────────────
    routes_hero_title: 'Nuestras Rutas de Navegación',
    routes_hero_sub:   'Soluciones de transporte marítimo confiables y eficientes en rutas comerciales internacionales clave, conectando las principales regiones exportadoras e importadoras a través de estrategias logísticas flexibles y orientadas al mercado.',

    route_01_corridor: 'Corredor 1',
    route_01_title_full: 'Mar Negro y Mediterráneo',
    route_01_p1: 'Uno de los corredores de transporte a granel más activos del mundo, la ruta del Mar Negro y el Mediterráneo conecta las principales naciones productoras de granos en Europa del Este con los consumidores industriales de Europa Occidental, el norte de África y más allá. Seacape ha operado en esta región durante décadas, acumulando profunda experiencia en operaciones portuarias, fletadores y agentes locales.',
    route_01_p2: 'Nuestra cobertura incluye los principales puertos de carga de Ucrania, Rumanía y Bulgaria, así como los principales destinos de descarga en Turquía, Egipto, Italia, España y más al occidente.',

    route_02_corridor: 'Corredor 2',
    route_02_title_full: 'Costa Este y Golfo',
    route_02_p1: 'Con nuestra sede en Miami, Florida, Seacape tiene acceso y conocimiento incomparables de los puertos de la Costa Este y el Golfo de EE.UU. Este corredor es crítico para las exportaciones agrícolas estadounidenses, las importaciones de acero y el movimiento de commodities a granel entre América del Norte y los mercados globales.',
    route_02_p2: 'Nuestra oficina en Miami brinda coordinación en tiempo real y apoyo directo para todos los envíos que transitan por este corredor, garantizando el cumplimiento normativo, la eficiencia portuaria y el manejo fluido de la carga.',

    route_03_corridor: 'Corredor 3',
    route_03_title_full: 'Lejano Oriente — Japón y China',
    route_03_p1: 'Asia es el mayor consumidor mundial de commodities de graneles secos. El corredor de Lejano Oriente de Seacape conecta a los productores de acero, importadores de carbón y compradores agrícolas en Japón, China, Corea del Sur y el Sudeste Asiático con las fuentes de suministro en las Américas y Europa.',
    route_03_p2: 'Nuestras relaciones establecidas con fletadores asiáticos, agentes portuarios y armadores nos permiten operar eficientemente en este mercado altamente competitivo, brindando a nuestros clientes una cobertura confiable y tarifas competitivas.',

    route_04_corridor: 'Corredor 4',
    route_04_title_full: 'Sudamérica Occidental y Central',
    route_04_p1: 'Sudamérica representa uno de los corredores comerciales más dinámicos para Seacape. Con representación directa de oficina a través de nuestra operación en Santiago de Chile y presencia regional en Perú y Brasil, estamos posicionados de manera única para atender este mercado desde ambos extremos.',
    route_04_p2: 'Desde concentrado de cobre y fertilizantes en la costa del Pacífico hasta soja, mineral de hierro y maíz en el lado del Atlántico, nuestra cobertura en Sudamérica es integral y profundamente experimentada.',

    route_05_corridor: 'Cont-Báltico > WC',
    route_05_title_full: 'Continente y Báltico',
    route_05_p1: 'Para la ruta del Continente/Báltico a la Costa Oeste de Sudamérica (WCSA), nos enfocamos principalmente en oportunidades de carga inmediata, incluyendo fertilizantes, granos y otras materias primas a granel. Este comercio ofrece atractivas perspectivas de empleo, respaldadas por un flujo constante de cargas y sólidos programas estacionales de granos.',
    route_05_p2: 'Durante las respectivas temporadas de exportación, el mercado proporciona volumen y flexibilidad constantes, lo que lo convierte en un área de comercio interesante y confiable para los buques graneleros equipados.',

    routes_cta_heading: '¿Envíos desde o hacia estas rutas?',
    routes_cta_sub:     'Contáctenos para discutir disponibilidad, tarifas y programación para su próximo envío.',
    routes_page_cta_btn: 'Contactar a Nuestro Equipo',

    // ── Contact Page ───────────────────────────────────────────────────────
    contact_hero_title: 'Contáctenos',
    contact_hero_sub:   'Nuestro equipo en Miami y Santiago está listo para atender sus consultas de envío, cotizaciones de flete y preguntas operativas.',
    contact_intro_heading: 'Hablemos de su carga.',
    contact_intro_p:    'Ya sea que esté explorando una nueva ruta de envío, necesite una cotización de flete competitiva, o quiera discutir una asociación a largo plazo, nuestro experimentado equipo está aquí para ayudarle.',
    contact_miami_role:    'Sede Global',
    contact_santiago_role: 'Operaciones Sudamericanas',
    contact_shanghai_role: 'Oficina China',
    contact_zug_role:      'Oficina Europa',
    contact_odessa_role:   'Oficina Ucrania',
    contact_lima_role:     'Oficina Perú',
    contact_saopaulo_role: 'Oficina Brasil',
    contact_lang_note:  'Nuestro equipo está disponible para atenderle en inglés, español, portugués, ucraniano, alemán y chino.',
    contact_cta_text:   '¿Prefiere contactarnos directamente?',
    contact_cta_btn:    'Escríbanos',

    form_heading:             'Envíenos un Mensaje',
    form_sub:                 'Complete el formulario a continuación y nuestro equipo responderá en un día hábil.',
    form_name_label:          'Nombre Completo',
    form_country_label:       'País',
    form_email_label:         'Correo Electrónico',
    form_phone_label:         'Número de Teléfono',
    form_subject_label:       'Asunto',
    form_message_label:       'Mensaje',
    form_name_placeholder:    'Juan García',
    form_country_placeholder: 'Seleccione país',
    form_subject_placeholder: 'Seleccione un tema',
    form_message_placeholder: 'Describa los requerimientos de su carga, ruta, volumen y cualquier otro detalle relevante…',
    form_submit:              'Enviar Mensaje',
    form_subject_quote:       'Solicitud de Cotización de Flete',
    form_subject_routes:      'Consulta de Rutas',
    form_subject_services:    'Información de Servicios',
    form_subject_partner:     'Asociación / Agencia',
    form_subject_other:       'Otro',

    // ── Tools Page ─────────────────────────────────────────────────────────
    tools_hero_title:        'Glosario Marítimo',
    tools_hero_sub:          'Términos y definiciones clave del transporte marítimo internacional de carga.',
    tools_search_placeholder:'Buscar términos…',
  }
};

// ── Core i18n engine ────────────────────────────────────────────────────────
let currentLang = 'en';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations.en && translations.en[key]) ||
         key;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // textContent swap
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  // innerHTML swap (for elements with <br/>, <em>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  // placeholder swap
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = translations[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

  // Update active flag button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ── Auto-init on load ───────────────────────────────────────────────────────
(function () {
  const saved = localStorage.getItem('lang') || 'en';
  // Run after DOM is ready (script is defer-loaded or at end of body)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setLanguage(saved));
  } else {
    setLanguage(saved);
  }
})();
