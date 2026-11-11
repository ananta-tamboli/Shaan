import type { LangKey } from '@/types/wedding'

export interface Translations {
  // Nav
  navStory: string
  navItinerary: string
  navMoments: string
  navRsvp: string
  navDetails: string

  // Hero
  heroBlessingPill: string
  heroTagline: string
  heroAmpersand: string
  heroDate: string
  heroCountingDown: string
  heroCta: string
  heroExplore: string
  heroCalendar: string
  heroScroll: string

  // Story
  storyScriptHeading: string
  storyH2: string
  storyQuote: string
  storyH3: string
  storyP1: string
  storyP2: string
  milestone1Date: string
  milestone1Title: string
  milestone1Desc: string
  milestone2Date: string
  milestone2Title: string
  milestone2Desc: string
  milestone3Date: string
  milestone3Title: string
  milestone3Desc: string

  // Itinerary
  itineraryScript: string
  itineraryH2: string
  itinerarySubtitle: string
  itineraryCountsDown: string
  itineraryStarted: string
  addToCalendar: string
  viewOnMaps: string
  dressCode: string

  // Gallery
  galleryScript: string
  galleryH2: string
  gallerySubtitle: string

  // RSVP
  rsvpScript: string
  rsvpH2: string
  rsvpSubtitle: string
  rsvpName: string
  rsvpNamePlaceholder: string
  rsvpPhone: string
  rsvpPhonePlaceholder: string
  rsvpEmail: string
  rsvpEmailPlaceholder: string
  rsvpAttendees: string
  rsvpAttendee1: string
  rsvpAttendee2: string
  rsvpAttendee3: string
  rsvpAttendee4: string
  rsvpAttendee5: string
  rsvpEvents: string
  rsvpEvent1: string
  rsvpEvent2: string
  rsvpEvent3: string
  rsvpWishes: string
  rsvpWishesPlaceholder: string
  rsvpSubmit: string
  rsvpWhatsapp: string
  rsvpSuccessTitle: string
  rsvpSuccessMsg: string
  rsvpSuccessReset: string

  // Footer
  footerVenue: string
  footerBlessing: string
  footerBuilt: string
  footerBack: string

  // Music player
  musicPlay: string
  musicPause: string

  // Envelope
  envelopeTagline: string
  envelopeOpen: string
}

const en: Translations = {
  navStory: 'Our Story',
  navItinerary: 'Itinerary',
  navMoments: 'Moments',
  navRsvp: 'RSVP',
  navDetails: 'Details',

  heroBlessingPill: '॥ श्री गणेशाय नमः ॥',
  heroTagline: 'Together with their families, invite you to celebrate their union',
  heroAmpersand: '&',
  heroDate: 'Sunday, December 13, 2026',
  heroCountingDown: 'Counting down to forever',
  heroCta: 'RSVP With Us',
  heroExplore: 'Explore Itinerary',
  heroCalendar: 'Add to Google Calendar',
  heroScroll: 'Scroll',

  storyScriptHeading: 'The Journey of',
  storyH2: 'Our Love Story',
  storyQuote: '"When soul connects with soul, even the universe conspires to weave a sacred forever."',
  storyH3: 'From College Corridors to Sacred Pheras',
  storyP1: 'What began on October 10, 2015, between bustling college lecture halls, shared notes, and canteen chai, quickly blossomed into a bond that only grew deeper with time. Through exams, graduation, career beginnings, and eleven unforgettable years of companionship, we grew up together—becoming each other\'s best friend, confidant, and greatest cheerleader.',
  storyP2: 'Now, after more than a decade of shared laughter, enduring friendship, and quiet understanding, we are ready to take the sacred seven steps and begin our forever. Our celebration would be incomplete without the presence, warmth, and blessings of the loved ones who have witnessed our journey from the very beginning.',
  milestone1Date: 'October 10, 2015',
  milestone1Title: 'Where It All Began',
  milestone1Desc: 'Two college sweethearts, an instant spark on campus, and the beginning of a lifelong journey.',
  milestone2Date: 'A Decade of Growing Together',
  milestone2Title: 'From Campus Dreams to Real-World Milestones',
  milestone2Desc: 'Navigating degrees, careers, Pune sunsets, and 11 years of unwavering support and laughter.',
  milestone3Date: 'December 13, 2026',
  milestone3Title: 'The Sacred Pheras & Forever',
  milestone3Desc: 'Sealing eleven years of pure love with sacred vows, stepping into marriage with all of you.',

  itineraryScript: 'Celebration',
  itineraryH2: 'Wedding Itinerary',
  itinerarySubtitle: 'Join us as we revel in colors, music, and sacred traditions',
  itineraryCountsDown: 'Starts in',
  itineraryStarted: 'Celebration has begun!',
  addToCalendar: 'Add to Calendar',
  viewOnMaps: 'View on Google Maps',
  dressCode: 'Dress Code',

  galleryScript: 'Cherished',
  galleryH2: 'Moments of Love',
  gallerySubtitle: 'Capturing glances, laughter, and timeless celebrations',

  rsvpScript: 'Kindly Respond',
  rsvpH2: 'Will You Join Us?',
  rsvpSubtitle: 'Please kindly respond by November 20, 2026 to celebrate with us on December 13, 2026.',
  rsvpName: 'Full Name',
  rsvpNamePlaceholder: 'e.g. Priya & Vikram Malhotra',
  rsvpPhone: 'Phone / WhatsApp',
  rsvpPhonePlaceholder: '+91 98765 43210',
  rsvpEmail: 'Email Address',
  rsvpEmailPlaceholder: 'priya@example.com',
  rsvpAttendees: 'Number of Attendees',
  rsvpAttendee1: '1 Person (Just Me)',
  rsvpAttendee2: '2 Persons (Couple)',
  rsvpAttendee3: '3 Persons (With Family)',
  rsvpAttendee4: '4 Persons (Family)',
  rsvpAttendee5: '5+ Persons (Family Group)',
  rsvpEvents: 'Events You Will Grace',
  rsvpEvent1: 'Haldi Ceremony',
  rsvpEvent2: 'Wedding (Muhurtham)',
  rsvpEvent3: 'Grand Reception',
  rsvpWishes: 'Warm Wishes for the Couple',
  rsvpWishesPlaceholder: 'Can\'t wait to celebrate with you both! Wishing you a lifetime of joy and happiness.',
  rsvpSubmit: 'Send RSVP Confirmation',
  rsvpWhatsapp: 'RSVP via WhatsApp',
  rsvpSuccessTitle: 'Thank You For Your RSVP!',
  rsvpSuccessMsg: 'We are overjoyed to celebrate our special day with you. Your presence means the world to us!',
  rsvpSuccessReset: 'Submit Another RSVP',

  footerVenue: 'Oasis Banquets • Pune, Maharashtra • December 2026',
  footerBlessing: 'With the affectionate blessings of our beloved parents and elders',
  footerBuilt: 'Wedding. Built with love.',
  footerBack: 'Back to Top',

  musicPlay: 'Play',
  musicPause: 'Pause',

  envelopeTagline: 'You are cordially invited',
  envelopeOpen: 'Open Invitation',
}

const hi: Translations = {
  navStory: 'हमारी कहानी',
  navItinerary: 'कार्यक्रम',
  navMoments: 'यादें',
  navRsvp: 'आरएसवीपी',
  navDetails: 'विवरण',

  heroBlessingPill: '॥ श्री गणेशाय नमः ॥',
  heroTagline: 'अपने परिवारों के साथ, आप सभी को हमारे विवाह उत्सव में सादर आमंत्रित करते हैं',
  heroAmpersand: '&',
  heroDate: 'रविवार, १३ दिसंबर २०२६',
  heroCountingDown: 'शुभ विवाह की उल्टी गिनती',
  heroCta: 'आरएसवीपी करें',
  heroExplore: 'कार्यक्रम देखें',
  heroCalendar: 'गूगल कैलेंडर में जोड़ें',
  heroScroll: 'नीचे स्क्रॉल करें',

  storyScriptHeading: 'एक सुंदर सफर',
  storyH2: 'हमारी प्रेम कहानी',
  storyQuote: '"जब दो आत्माएं एक होती हैं, तो संपूर्ण कायनात भी इस पवित्र बंधन को सदा के लिए संवारने लगती है।"',
  storyH3: 'कॉलेज के गलियारों से पवित्र फेरों तक',
  storyP1: '१० अक्टूबर २०१५ को कॉलेज की व्यस्त कक्षाओं, साझा नोट्स और कैंटीन की चाय के बीच जो शुरू हुआ, वह समय के साथ एक गहरे और अटूट रिश्ते में बदल गया। परीक्षाओं, डिग्री, करियर की शुरुआत और ग्यारह अविस्मरणीय वर्षों के सफर में हम साथ बड़े हुए — एक-दूसरे के सबसे अच्छे दोस्त, विश्वासपात्र और सबसे बड़े समर्थक बन गए।',
  storyP2: 'अब एक दशक से अधिक की साझा हँसी, अटूट दोस्ती और आपसी समझ के बाद, हम पवित्र सात फेरे लेने और जीवनभर के नए सफर की शुरुआत करने के लिए तैयार हैं। हमारा यह उत्सव उन सभी प्रियजनों की उपस्थिति और आशीर्वाद के बिना अधूरा होगा, जो शुरुआत से हमारे इस खूबसूरत सफर के साक्षी रहे हैं।',
  milestone1Date: '१० अक्टूबर २०१५',
  milestone1Title: 'जहाँ सब शुरू हुआ',
  milestone1Desc: 'कॉलेज की पहली मुलाकात, दिलों का मासूम जुड़ाव और जीवनभर के सफर की शुरुआत।',
  milestone2Date: 'साथ-साथ आगे बढ़ने का एक दशक',
  milestone2Title: 'कॉलेज के सपनों से जीवन के नए मुकाम तक',
  milestone2Desc: 'डिग्री, करियर, पुणे की हसीन शामें और ११ वर्षों का अटूट साथ, विश्वास और खुशियां।',
  milestone3Date: '१३ दिसंबर २०२६',
  milestone3Title: 'पवित्र फेरे और जीवनभर का साथ',
  milestone3Desc: 'पवित्र वचनों के साथ ग्यारह वर्षों के प्रेम को विवाह के बंधन में बांधना, और आप सभी के आशीर्वाद से नए जीवन में कदम रखना।',

  itineraryScript: 'उत्सव',
  itineraryH2: 'विवाह कार्यक्रम',
  itinerarySubtitle: 'रंग, संगीत और पवित्र परंपराओं के इस उत्सव में हमारे साथ शामिल हों',
  itineraryCountsDown: 'शुरू होने में',
  itineraryStarted: 'उत्सव शुरू हो गया!',
  addToCalendar: 'कैलेंडर में जोड़ें',
  viewOnMaps: 'गूगल मैप्स पर देखें',
  dressCode: 'पहनावा',

  galleryScript: 'संजोई हुई',
  galleryH2: 'प्रेम के पल',
  gallerySubtitle: 'प्यार भरे लम्हे, मीठी मुस्कान और सदाबहार यादें',

  rsvpScript: 'सादर आमंत्रण',
  rsvpH2: 'क्या आप हमारे इस उत्सव में शामिल होंगे?',
  rsvpSubtitle: 'कृपया २० नवंबर २०२६ तक अपनी उपस्थिति की पुष्टि करें, ताकि १३ दिसंबर २०२६ को हम सब मिलकर खुशियां मना सकें।',
  rsvpName: 'पूरा नाम',
  rsvpNamePlaceholder: 'जैसे: प्रिया और विक्रम मलहोत्रा',
  rsvpPhone: 'फोन / व्हाट्सएप',
  rsvpPhonePlaceholder: '+91 98765 43210',
  rsvpEmail: 'ईमेल पता',
  rsvpEmailPlaceholder: 'priya@example.com',
  rsvpAttendees: 'उपस्थित लोगों की संख्या',
  rsvpAttendee1: '१ व्यक्ति (केवल मैं)',
  rsvpAttendee2: '२ व्यक्ति (दंपति)',
  rsvpAttendee3: '३ व्यक्ति (परिवार के साथ)',
  rsvpAttendee4: '४ व्यक्ति (परिवार)',
  rsvpAttendee5: '५+ व्यक्ति (पारिवारिक समूह)',
  rsvpEvents: 'आप किन समारोहों में शामिल होंगे',
  rsvpEvent1: 'हल्दी समारोह',
  rsvpEvent2: 'विवाह (मुहूर्त)',
  rsvpEvent3: 'भव्य स्वागत समारोह',
  rsvpWishes: 'वर-वधू के लिए शुभकामनाएं',
  rsvpWishesPlaceholder: 'आप दोनों के साथ उत्सव मनाने का बेसब्री से इंतजार है! जीवन भर की खुशियों के लिए ढेरों शुभकामनाएं।',
  rsvpSubmit: 'आरएसवीपी भेजें',
  rsvpWhatsapp: 'व्हाट्सएप से आरएसवीपी करें',
  rsvpSuccessTitle: 'आपके आरएसवीपी के लिए धन्यवाद!',
  rsvpSuccessMsg: 'हम अपने इस खास दिन पर आपकी उपस्थिति के लिए अत्यंत उत्सुक हैं। आपकी उपस्थिति हमारे लिए अमूल्य है!',
  rsvpSuccessReset: 'एक और आरएसवीपी भेजें',

  footerVenue: 'ओएसिस बैंक्वेट्स • पुणे, महाराष्ट्र • दिसंबर २०२६',
  footerBlessing: 'पूज्य माता-पिता एवं समस्त ज्येष्ठ-जनों के सस्नेह आशीर्वाद सहित',
  footerBuilt: 'शुभ विवाह • सप्रेम समर्पित',
  footerBack: 'शीर्ष पर जाएं',

  musicPlay: 'चलाएं',
  musicPause: 'रोकें',

  envelopeTagline: 'आप सपरिवार सादर आमंत्रित हैं',
  envelopeOpen: 'निमंत्रण खोलें',
}

const mr: Translations = {
  navStory: 'आमची गोष्ट',
  navItinerary: 'कार्यक्रम',
  navMoments: 'आठवणी',
  navRsvp: 'आरएसव्हीपी',
  navDetails: 'तपशील',

  heroBlessingPill: '॥ श्री गणेशाय नमः ॥',
  heroTagline: 'आमच्या कुटुंबीयांसह, आपणास आमच्या विवाह सोहळ्यात सादर निमंत्रित करत आहोत',
  heroAmpersand: '&',
  heroDate: 'रविवार, १३ डिसेंबर २०२६',
  heroCountingDown: 'शुभ मुहूर्ताचे वेध',
  heroCta: 'आरएसव्हीपी करा',
  heroExplore: 'कार्यक्रम पाहा',
  heroCalendar: 'गूगल कॅलेंडरमध्ये जोडा',
  heroScroll: 'खाली स्क्रोल करा',

  storyScriptHeading: 'प्रवास',
  storyH2: 'आमची प्रेमकथा',
  storyQuote: '"जेव्हा दोन मने आणि आत्मे एक होतात, तेव्हा संपूर्ण सृष्टीही त्या पवित्र नात्याला आयुष्यभराचा आशीर्वाद देते."',
  storyH3: 'कॉलेजच्या आवारापासून पवित्र सप्तपदीपर्यंत',
  storyP1: '१० ऑक्टोबर २०१५ रोजी गजबजलेल्या कॉलेजच्या वर्गखोल्या, सामायिक नोट्स आणि कॅन्टीनच्या चहासह जे सुरू झाले, ते लवकरच एका अतूट व सुंदर नात्यात बहरले. परीक्षा, पदवी, करिअरची सुरुवात आणि अकरा अविस्मरणीय वर्षांच्या सोबतीत आम्ही एकमेकांचे सर्वोत्तम मित्र, विश्वासू आणि खंबीर पाठिराखे बनलो.',
  storyP2: 'आता एका दशकाहून अधिक काळाचे सामायिक हास्य, अतूट मैत्री आणि परस्पर समजुतीनंतर, आम्ही पवित्र सप्तपदी घेण्यास आणि आमचा आयुष्यभराचा प्रवास सुरू करण्यास सज्ज झालो आहोत. ज्यांनी सुरुवातीपासून आमच्या या प्रवासाची साक्ष पाहिली आहे अशा सर्व आप्तेष्टांच्या उपस्थिती, आपुलकी आणि आशीर्वादाशिवाय आमचा हा सोहळा अपूर्ण राहील.',
  milestone1Date: '१० ऑक्टोबर २०१५',
  milestone1Title: 'सुरुवात एका सुंदर प्रवासाची',
  milestone1Desc: 'कॉलेजच्या दिवसांतील ती पहिली भेट, अनामिक ओढ आणि आयुष्यभराच्या प्रवासाची सुरुवात.',
  milestone2Date: 'एकत्र घडण्याचे एक दशक',
  milestone2Title: 'कॅम्पसमधल्या स्वप्नांपासून आयुष्यातील महत्त्वाच्या टप्प्यांपर्यंत',
  milestone2Desc: 'पदव्या, करिअर, पुण्याच्या सोनेरी संध्याकाळी आणि ११ वर्षांची अतूट साथ, विश्वास व आनंद.',
  milestone3Date: '१३ डिसेंबर २०२६',
  milestone3Title: 'पवित्र सप्तपदी आणि आयुष्यभराची साथ',
  milestone3Desc: 'पवित्र सप्तपदीच्या वचनांनी अकरा वर्षांच्या या प्रेमाला विवाहबंधनात गुंफणे, आणि आपल्या सर्वांच्या आशीर्वादाने संसारात पदार्पण करणे.',

  itineraryScript: 'सोहळा',
  itineraryH2: 'विवाह कार्यक्रम',
  itinerarySubtitle: 'रंग, संगीत आणि पवित्र परंपरांच्या या सोहळ्यात सहकुटुंब सहभागी व्हा',
  itineraryCountsDown: 'सुरू होण्यास',
  itineraryStarted: 'उत्सव सुरू झाला!',
  addToCalendar: 'कॅलेंडरमध्ये जोडा',
  viewOnMaps: 'गूगल मॅप्सवर पाहा',
  dressCode: 'पोशाख',

  galleryScript: 'जपलेल्या',
  galleryH2: 'प्रेमाचे क्षण',
  gallerySubtitle: 'काही गोड क्षण, सुंदर हास्य आणि आयुष्यभराच्या आठवणी',

  rsvpScript: 'कृपया आपली उपस्थिती कळवा',
  rsvpH2: 'आपण आमच्या आनंदात सहभागी व्हाल ना?',
  rsvpSubtitle: 'कृपया २० नोव्हेंबर २०२६ पर्यंत आपल्या उपस्थितीची नोंद करावी, जेणेकरून १३ डिसेंबर २०२६ रोजी आपण सर्वजण एकत्र येऊन हा सोहळा साजरा करू शकू.',
  rsvpName: 'पूर्ण नाव',
  rsvpNamePlaceholder: 'उदा. प्रिया आणि विक्रम मल्होत्रा',
  rsvpPhone: 'फोन / व्हॉट्सॲप',
  rsvpPhonePlaceholder: '+91 98765 43210',
  rsvpEmail: 'ईमेल पत्ता',
  rsvpEmailPlaceholder: 'priya@example.com',
  rsvpAttendees: 'उपस्थित व्यक्तींची संख्या',
  rsvpAttendee1: '१ व्यक्ती (फक्त मी)',
  rsvpAttendee2: '२ व्यक्ती (जोडपे)',
  rsvpAttendee3: '३ व्यक्ती (कुटुंबासह)',
  rsvpAttendee4: '४ व्यक्ती (कुटुंब)',
  rsvpAttendee5: '५+ व्यक्ती (कुटुंब गट)',
  rsvpEvents: 'आपण कोणत्या समारंभांना उपस्थित राहाल',
  rsvpEvent1: 'हळद समारंभ',
  rsvpEvent2: 'विवाह (मुहूर्त)',
  rsvpEvent3: 'भव्य स्वागत समारंभ',
  rsvpWishes: 'वधू-वरांसाठी मनःपूर्वक शुभेच्छा',
  rsvpWishesPlaceholder: 'आपणा दोघांसमवेत उत्सव साजरा करण्याची आतुरता आहे! वैवाहिक जीवनासाठी हार्दिक शुभेच्छा.',
  rsvpSubmit: 'आरएसव्हीपी पाठवा',
  rsvpWhatsapp: 'व्हॉट्सॲपद्वारे आरएसव्हीपी करा',
  rsvpSuccessTitle: 'आपल्या प्रतिसादाबद्दल मनःपूर्वक धन्यवाद!',
  rsvpSuccessMsg: 'आमच्या या मंगल सोहळ्यात आपल्यासोबत आनंद साजरा करण्यासाठी आम्ही उत्सुक आहोत. आपली उपस्थिती आमच्यासाठी अत्यंत मोलाची आहे!',
  rsvpSuccessReset: 'आणखी एक आरएसव्हीपी पाठवा',

  footerVenue: 'ओएसिस बँक्वेट्स • पुणे, महाराष्ट्र • डिसेंबर २०२६',
  footerBlessing: 'आई-वडील आणि वडीलधाऱ्यांच्या सस्नेह आशीर्वादाने',
  footerBuilt: 'शुभ विवाह • प्रेमाने साकारले',
  footerBack: 'वरती जा',

  musicPlay: 'वाजवा',
  musicPause: 'थांबवा',

  envelopeTagline: 'आपणास सस्नेह निमंत्रण',
  envelopeOpen: 'निमंत्रण पत्रिका उघडा',
}

export const translations: Record<LangKey, Translations> = { en, hi, mr }
