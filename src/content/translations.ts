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
  rsvpEvent4: string
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
  rsvpEvent1: 'Seemant Pujan',
  rsvpEvent2: 'Haldi Ceremony',
  rsvpEvent3: 'Wedding (Muhurtham)',
  rsvpEvent4: 'Grand Reception',
  rsvpWishes: 'Dietary Preferences or Warm Wishes',
  rsvpWishesPlaceholder: 'e.g. Pure Vegetarian / Jain food preferred. Can\'t wait to celebrate with you both!',
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
  heroTagline: 'अपने परिवारों के साथ, आपको अपने विवाह उत्सव में आमंत्रित करते हैं',
  heroAmpersand: '&',
  heroDate: 'रविवार, १३ दिसंबर २०२६',
  heroCountingDown: 'हमारे हमेशा की उलटी गिनती',
  heroCta: 'आरएसवीपी करें',
  heroExplore: 'कार्यक्रम देखें',
  heroCalendar: 'गूगल कैलेंडर में जोड़ें',
  heroScroll: 'नीचे स्क्रॉल करें',

  storyScriptHeading: 'यात्रा',
  storyH2: 'हमारी प्रेम कहानी',
  storyQuote: '"जब आत्मा से आत्मा मिलती है, तो ब्रह्मांड भी एक पवित्र अनंत बुनने में सहायता करता है।"',
  storyH3: 'कॉलेज की गलियारों से पवित्र फेरों तक',
  storyP1: '१० अक्टूबर २०१५ को कॉलेज की व्यस्त कक्षाओं, साझा नोट्स और कैंटीन की चाय के बीच जो शुरू हुआ, वह समय के साथ एक गहरे बंधन में बदल गया। परीक्षाओं, स्नातक, करियर की शुरुआत और ग्यारह अविस्मरणीय वर्षों की साझेदारी में हम साथ बड़े हुए — एक-दूसरे के सबसे अच्छे दोस्त, विश्वासपात्र और सबसे बड़े प्रशंसक बन गए।',
  storyP2: 'अब एक दशक से अधिक की साझा हँसी, स्थायी मित्रता और शांत समझ के बाद, हम पवित्र सात फेरे लेने और अपना हमेशा शुरू करने के लिए तैयार हैं। हमारा उत्सव उन प्रियजनों की उपस्थिति, गर्मजोशी और आशीर्वाद के बिना अधूरा होगा जिन्होंने हमारी यात्रा की शुरुआत से गवाही दी है।',
  milestone1Date: '१० अक्टूबर २०१५',
  milestone1Title: 'जहाँ सब शुरू हुआ',
  milestone1Desc: 'दो कॉलेज प्रेमी, कैंपस पर एक तत्काल चिंगारी, और एक जीवनभर की यात्रा की शुरुआत।',
  milestone2Date: 'साथ बढ़ने का एक दशक',
  milestone2Title: 'कैंपस के सपनों से वास्तविक उपलब्धियों तक',
  milestone2Desc: 'डिग्री, करियर, पुणे की शामें और ११ साल का अटूट समर्थन और हँसी।',
  milestone3Date: '१३ दिसंबर २०२६',
  milestone3Title: 'पवित्र फेरे और हमेशा',
  milestone3Desc: 'पवित्र वचनों के साथ ग्यारह साल के शुद्ध प्रेम को सील करना, आप सभी के साथ विवाह में कदम रखना।',

  itineraryScript: 'उत्सव',
  itineraryH2: 'विवाह कार्यक्रम',
  itinerarySubtitle: 'रंगों, संगीत और पवित्र परंपराओं में हमारे साथ आनंद लें',
  itineraryCountsDown: 'शुरू होने में',
  itineraryStarted: 'उत्सव शुरू हो गया!',
  addToCalendar: 'कैलेंडर में जोड़ें',
  viewOnMaps: 'गूगल मैप्स पर देखें',
  dressCode: 'पहनावा',

  galleryScript: 'संजोई हुई',
  galleryH2: 'प्रेम के पल',
  gallerySubtitle: 'नज़रें, हँसी और कालातीत उत्सव',

  rsvpScript: 'कृपया जवाब दें',
  rsvpH2: 'क्या आप हमारे साथ आएंगे?',
  rsvpSubtitle: 'कृपया २० नवंबर २०२६ तक जवाब दें और १३ दिसंबर २०२६ को हमारे साथ उत्सव मनाएं।',
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
  rsvpEvent1: 'सीमांत पूजन',
  rsvpEvent2: 'हल्दी समारोह',
  rsvpEvent3: 'विवाह (मुहूर्त)',
  rsvpEvent4: 'भव्य स्वागत समारोह',
  rsvpWishes: 'आहार प्राथमिकता या शुभकामनाएं',
  rsvpWishesPlaceholder: 'जैसे: शुद्ध शाकाहारी / जैन भोजन पसंद। आप दोनों के साथ उत्सव मनाने का इंतजार नहीं हो रहा!',
  rsvpSubmit: 'आरएसवीपी भेजें',
  rsvpWhatsapp: 'व्हाट्सएप से आरएसवीपी करें',
  rsvpSuccessTitle: 'आपके आरएसवीपी के लिए धन्यवाद!',
  rsvpSuccessMsg: 'हम आपके साथ अपना विशेष दिन मनाकर बेहद खुश हैं। आपकी उपस्थिति हमारे लिए बहुत मायने रखती है!',
  rsvpSuccessReset: 'एक और आरएसवीपी भेजें',

  footerVenue: 'ओएसिस बैंक्वेट्स • पुणे, महाराष्ट्र • दिसंबर २०२६',
  footerBlessing: 'अपने प्रिय माता-पिता और बड़ों के स्नेहपूर्ण आशीर्वाद के साथ',
  footerBuilt: 'विवाह। प्रेम से बनाया गया।',
  footerBack: 'शीर्ष पर जाएं',

  musicPlay: 'चलाएं',
  musicPause: 'रोकें',

  envelopeTagline: 'आपको सादर आमंत्रित किया जाता है',
  envelopeOpen: 'निमंत्रण खोलें',
}

const mr: Translations = {
  navStory: 'आमची कथा',
  navItinerary: 'कार्यक्रम',
  navMoments: 'आठवणी',
  navRsvp: 'आरएसव्हीपी',
  navDetails: 'तपशील',

  heroBlessingPill: '॥ श्री गणेशाय नमः ॥',
  heroTagline: 'आपल्या कुटुंबांसह, आपणास आमच्या विवाह सोहळ्यात आमंत्रित करतो',
  heroAmpersand: '&',
  heroDate: 'रविवार, १३ डिसेंबर २०२६',
  heroCountingDown: 'आमच्या चिरंतन क्षणाची उलटी गणना',
  heroCta: 'आरएसव्हीपी करा',
  heroExplore: 'कार्यक्रम पाहा',
  heroCalendar: 'गूगल कॅलेंडरमध्ये जोडा',
  heroScroll: 'खाली स्क्रोल करा',

  storyScriptHeading: 'प्रवास',
  storyH2: 'आमची प्रेमकथा',
  storyQuote: '"जेव्हा आत्मा आत्म्याशी जोडतो, तेव्हा विश्वही एक पवित्र अनंत विणण्यास साथ देते।"',
  storyH3: 'कॉलेजच्या गलियांपासून पवित्र सप्तपदीपर्यंत',
  storyP1: '१० ऑक्टोबर २०१५ रोजी गजबजलेल्या कॉलेजच्या वर्गखोल्या, सामायिक नोट्स आणि कॅन्टीनच्या चहासह जे सुरू झाले, ते लवकरच एक खोल नात्यात बहरले. परीक्षा, पदवी, करिअरची सुरुवात आणि अकरा अविस्मरणीय वर्षांच्या सोबतीत आम्ही एकमेकांचे सर्वोत्तम मित्र, विश्वासू आणि सर्वात मोठे चाहते बनलो.',
  storyP2: 'आता एक दशकाहून अधिक काळाच्या सामायिक हास्य, चिरस्थायी मित्रत्व आणि शांत समजुतीनंतर, आम्ही पवित्र सप्तपदी घेण्यास आणि आमचा कायमचा प्रवास सुरू करण्यास तयार आहोत. ज्यांनी आमच्या प्रवासाची सुरुवातीपासून साक्ष दिली अशा प्रियजनांच्या उपस्थिती, उबदारपणा आणि आशीर्वादाशिवाय आमचा उत्सव अपूर्ण राहील.',
  milestone1Date: '१० ऑक्टोबर २०१५',
  milestone1Title: 'सुरुवात कुठून झाली',
  milestone1Desc: 'दोन कॉलेज प्रेमी, कॅम्पसवर तात्काळ ठिणगी आणि आजीवन प्रवासाची सुरुवात.',
  milestone2Date: 'एकत्र वाढण्याचे एक दशक',
  milestone2Title: 'कॅम्पसच्या स्वप्नांपासून वास्तविक उपलब्धींपर्यंत',
  milestone2Desc: 'पदव्या, करिअर, पुण्याचे संध्याकाळ आणि ११ वर्षांचा अटूट पाठिंबा व हास्य.',
  milestone3Date: '१३ डिसेंबर २०२६',
  milestone3Title: 'पवित्र सप्तपदी आणि कायमचे',
  milestone3Desc: 'पवित्र वचनांनी अकरा वर्षांच्या शुद्ध प्रेमाला मोहोर लावणे, आप सर्वांसमवेत विवाहबंधनात प्रवेश करणे.',

  itineraryScript: 'उत्सव',
  itineraryH2: 'विवाह कार्यक्रम',
  itinerarySubtitle: 'रंग, संगीत आणि पवित्र परंपरांमध्ये आमच्यासोबत आनंद घ्या',
  itineraryCountsDown: 'सुरू होण्यास',
  itineraryStarted: 'उत्सव सुरू झाला!',
  addToCalendar: 'कॅलेंडरमध्ये जोडा',
  viewOnMaps: 'गूगल मॅप्सवर पाहा',
  dressCode: 'पोशाख',

  galleryScript: 'जपलेल्या',
  galleryH2: 'प्रेमाचे क्षण',
  gallerySubtitle: 'नजरा, हास्य आणि चिरकालीन उत्सव',

  rsvpScript: 'कृपया उत्तर द्या',
  rsvpH2: 'आपण आमच्यासोबत याल का?',
  rsvpSubtitle: 'कृपया २० नोव्हेंबर २०२६ पर्यंत उत्तर द्या आणि १३ डिसेंबर २०२६ रोजी आमच्यासोबत उत्सव साजरा करा.',
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
  rsvpEvent1: 'सीमांत पूजन',
  rsvpEvent2: 'हळद समारंभ',
  rsvpEvent3: 'विवाह (मुहूर्त)',
  rsvpEvent4: 'भव्य स्वागत समारंभ',
  rsvpWishes: 'आहार प्राधान्य किंवा शुभेच्छा',
  rsvpWishesPlaceholder: 'उदा. शुद्ध शाकाहारी / जैन जेवण पसंत. आपणा दोघांसमवेत उत्सव साजरा करण्याची आतुरता आहे!',
  rsvpSubmit: 'आरएसव्हीपी पाठवा',
  rsvpWhatsapp: 'व्हॉट्सॲपद्वारे आरएसव्हीपी करा',
  rsvpSuccessTitle: 'आपल्या आरएसव्हीपीसाठी आभारी!',
  rsvpSuccessMsg: 'आपल्यासोबत आमचा खास दिवस साजरा करताना आम्हाला खूप आनंद होत आहे. आपली उपस्थिती आमच्यासाठी खूप महत्त्वाची आहे!',
  rsvpSuccessReset: 'आणखी एक आरएसव्हीपी पाठवा',

  footerVenue: 'ओएसिस बँक्वेट्स • पुणे, महाराष्ट्र • डिसेंबर २०२६',
  footerBlessing: 'आमच्या प्रिय आई-वडील आणि वडीलधाऱ्यांच्या स्नेहपूर्ण आशीर्वादासह',
  footerBuilt: 'विवाह. प्रेमाने बनवले.',
  footerBack: 'वरती जा',

  musicPlay: 'वाजवा',
  musicPause: 'थांबवा',

  envelopeTagline: 'आपणास सादर आमंत्रण आहे',
  envelopeOpen: 'आमंत्रण उघडा',
}

export const translations: Record<LangKey, Translations> = { en, hi, mr }
