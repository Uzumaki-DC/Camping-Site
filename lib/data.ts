export interface Location {
  id: string
  name: string
  state: string
  shortName: string
  tagline: string
  description: string
  image: string
  coordinates: { lat: number; lng: number }
  region: 'north' | 'south' | 'east' | 'west'
  amenities: string[]
  highlights: string[]
  nearbyAttractions: string[]
  accommodationTypes: AccommodationType[]
  weather: string
  bestTimeToVisit: string
  address: string
  travelNotes: string[]
  comingSoon?: boolean
}

export interface AccommodationType {
  id: string
  name: string
  description: string
  capacity: number
  price: number
  image: string
  features: string[]
  rateUnit?: string
  locationId?: string
}

export interface RateOption {
  id: string
  name: string
  description: string
  category: 'entrance' | 'tent' | 'vehicle' | 'parking' | 'addon'
  dayTourPrice: number
  overnightPrice: number
  unit: string
  includes?: string[]
}

export interface ActivityGroup {
  title: string
  items: string[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  slug: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  location: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export const contactInfo = {
  phone: '0917-328-0907',
  phoneDisplay: '0917-328-0907',
  email: 'rentals@iubi.com.ph',
  facebook: 'https://www.facebook.com/viewpointcafe2022',
  instagram: 'https://www.instagram.com/tanaywindmillsviewpoint/',
  gcash: '0916-766-2930',
  gcashName: 'EDGAR F.',
}

export const locations: Location[] = [
  {
    id: 'tanay',
    name: 'Tanay Windmills Viewpoint',
    state: 'Rizal',
    shortName: 'Tanay, Rizal',
    tagline: 'The highland camp beside the windmills',
    description:
      'A serene hilltop campsite in Sitio Masalat, Sampaloc-Pililla, Tanay with cool wind, foggy mornings, mango trees, Laguna de Bay views, and easy access to the Pililla wind turbines.',
    image: '/images/hero-airstream.jpg',
    coordinates: { lat: 14.5749, lng: 121.3746 },
    region: 'east',
    address: 'Sitio Masalat, Brgy. Sampaloc, Tanay, Rizal',
    travelNotes: [
      'About 1.5 to 2 hours from Metro Manila via Marcos Highway / Marikina-Infanta Highway.',
      'Accessible through the scenic, well-paved Sitio Masalat Sampaloc-Pililla roads.',
      'Public transport: bus to Cubao, then jeepney or UV Express to Tanay.',
    ],
    amenities: [
      'Clean Comfort Rooms',
      'Showers & Washing Bay',
      'Cafe & Snack Bar',
      'Fresh Batangas Coffee',
      'Firepit Areas',
      'Parking Area',
      'Ground Lighting',
      'Pet-Friendly Grounds',
      'Internet Access at Cafe',
      'First Aid Station',
    ],
    highlights: [
      'Seven hectares of orchard farmland with mango trees and carabao grass',
      'Windy hilltop setting often graced with fog and cool highland air',
      'About one kilometer from the Pililla wind turbines',
      'Drone-friendly scenery with sweeping Tanay Windmills Viewpoint landscapes',
      'Visitor numbers are regulated to preserve a peaceful camp atmosphere',
    ],
    nearbyAttractions: [
      'Pililia Wind Farm',
      'Regina Rica',
      'Daranak Falls',
      'Batlag Falls',
      'Calinawan Cave',
      'Masungi Georeserve',
      'Treasure Mountain',
      'Tara sa Gulod',
    ],
    accommodationTypes: [
      {
        id: 'adult-day-tour',
        name: 'Adult Day Tour',
        description: 'Day access to Tanay Windmills Viewpoint from 8:00 AM to 5:00 PM.',
        capacity: 1,
        price: 150,
        image: '/images/campfire.jpg',
        rateUnit: 'per adult',
        locationId: 'tanay',
        features: ['8:00 AM to 5:00 PM', 'Cafe access', 'Viewpoint access'],
      },
      {
        id: 'adult-overnight',
        name: 'Adult Overnight',
        description: 'Overnight entrance for adult campers. Check in from 3:00 PM, check out at 12:00 NN.',
        capacity: 1,
        price: 250,
        image: '/images/campfire.jpg',
        rateUnit: 'per adult',
        locationId: 'tanay',
        features: ['3:00 PM check-in', '12:00 NN check-out', 'Access to camp facilities'],
      },
      {
        id: 'byot-day-tent',
        name: 'BYOT Tent Pitching - Day Tour',
        description: 'Bring your own tent and pitch for the day.',
        capacity: 6,
        price: 150,
        image: '/images/airstream-interior.jpg',
        rateUnit: 'per tent',
        locationId: 'tanay',
        features: ['Bring your own tent', 'Day tour access', 'Grounds and facilities'],
      },
      {
        id: 'byot-overnight-tent',
        name: 'BYOT Tent Pitching - Overnight',
        description: 'Bring your own tent for an overnight campsite stay.',
        capacity: 6,
        price: 200,
        image: '/images/airstream-interior.jpg',
        rateUnit: 'per tent',
        locationId: 'tanay',
        features: ['Bring your own tent', 'Overnight access', 'Fire areas nearby'],
      },
      {
        id: 'moto-overnight',
        name: 'Moto Camping - Overnight',
        description: 'Motorcycle camping package including entrance for two pax and one tent pitch.',
        capacity: 2,
        price: 850,
        image: '/images/campfire.jpg',
        rateUnit: 'per motorcycle package',
        locationId: 'tanay',
        features: ['Entrance for 2 pax', 'One tent pitching', 'Extra persons charged entrance fee'],
      },
    ],
    weather: 'Cool, windy highland weather with foggy mornings and refreshing evenings.',
    bestTimeToVisit: 'Dry season and clear weekends for sunset viewing, stargazing, and windmill rides.',
  },
  {
    id: 'amadeo',
    name: 'Windmills Amadeo',
    state: 'Cavite',
    shortName: 'Amadeo, Cavite',
    tagline: 'Coffee country camp with crisp highland air',
    description:
      'A coffee-farm camp in the rolling hills of Amadeo, the Philippines barako capital, with cool nights, Taal views, firepit gatherings, and farm-style outdoor stays.',
    image: '/images/sonoma.jpg',
    coordinates: { lat: 14.1706, lng: 120.9239 },
    region: 'south',
    address: 'Conchu Road, Barangay Pangil, Amadeo, Cavite',
    travelNotes: [
      'About 1.5 hours from Makati via CAVITEX or SLEX-Sta. Rosa exit.',
      'Public transport: bus to Tagaytay, then jeepney or van for hire toward Amadeo.',
      'Approximately 20 minutes from Tagaytay.',
    ],
    amenities: [
      'Clean Comfort Rooms',
      'Firepit Areas',
      'Parking Area',
      'Ground Lighting',
      'Camp Store',
      'Coffee & Snack Bar',
      'Waste Management',
      'First Aid Station',
    ],
    highlights: [
      'Barako coffee country setting',
      'Easy access from Tagaytay and Cavite routes',
      'Hillside firepit nights and farm walks',
      'Good fit for barkada trips, family weekends, and office outings',
    ],
    nearbyAttractions: [
      'Tagaytay Ridge',
      'Taal Volcano Viewpoints',
      'Coffee Farms',
      'People\'s Park in the Sky',
      'Tagaytay Picnic Grove',
    ],
    accommodationTypes: [
      {
        id: 'hilltop-site',
        name: 'Hilltop Site',
        description: 'BYOT hillside site with firepit, picnic table, parking, and barako coffee.',
        capacity: 6,
        price: 750,
        image: '/images/sonoma.jpg',
        rateUnit: 'per pax/night',
        locationId: 'amadeo',
        features: ['6 x 6 m plot', 'Firepit & firewood', 'Picnic table', 'Parking', 'Barako coffee'],
      },
      {
        id: 'coffee-grove-site',
        name: 'Coffee Grove Site',
        description: 'BYOT site for groups who want a coffee farm setting.',
        capacity: 10,
        price: 750,
        image: '/images/dining.jpg',
        rateUnit: 'per pax/night',
        locationId: 'amadeo',
        features: ['8 x 8 m plot', 'Firepit & firewood', 'Picnic table', 'Parking', 'Barako coffee'],
      },
      {
        id: 'meadow-group-site',
        name: 'Meadow Group Site',
        description: 'Large BYOT site for company outings and big family groups.',
        capacity: 30,
        price: 650,
        image: '/images/family-reunion.jpg',
        rateUnit: 'per pax/night',
        locationId: 'amadeo',
        features: ['15 x 15 m plot', '2 firepits', '4 picnic tables', '4 parking slots', 'Barako coffee'],
      },
    ],
    weather: 'Crisp highland air, cool nights, and misty coffee-farm mornings.',
    bestTimeToVisit: 'Weekends, holidays, and cooler months for farm walks and firepit nights.',
  },
]

export const tanayRateOptions: RateOption[] = [
  {
    id: 'adult',
    name: 'Adult Entrance',
    description: 'Entrance fee for guests 13 years old and above.',
    category: 'entrance',
    dayTourPrice: 150,
    overnightPrice: 250,
    unit: 'per adult',
  },
  {
    id: 'kid',
    name: 'Kids Entrance',
    description: 'Entrance fee for children 3 to 12 years old.',
    category: 'entrance',
    dayTourPrice: 75,
    overnightPrice: 150,
    unit: 'per child',
  },
  {
    id: 'tent-pitching',
    name: 'Bring Your Own Tent Pitching',
    description: 'Tent pitching fee. Campers bring their own tent and gear.',
    category: 'tent',
    dayTourPrice: 150,
    overnightPrice: 200,
    unit: 'per tent',
  },
  {
    id: 'moto-camping',
    name: 'Moto Camping',
    description: 'Includes entrance for two pax and one tent pitching. Extra persons pay entrance fee.',
    category: 'vehicle',
    dayTourPrice: 550,
    overnightPrice: 850,
    unit: 'per motorcycle package',
    includes: ['Entrance for 2 pax', 'One tent pitching'],
  },
  {
    id: 'sedan-suv-car-camping',
    name: 'SUV / Sedan Car Camping',
    description: 'Vehicle camping package for SUV or sedan setups.',
    category: 'vehicle',
    dayTourPrice: 750,
    overnightPrice: 1000,
    unit: 'per car',
  },
  {
    id: 'van-l300-car-camping',
    name: 'Van / L300 Car Camping',
    description: 'Vehicle camping package for van or L300 setups.',
    category: 'vehicle',
    dayTourPrice: 1250,
    overnightPrice: 1500,
    unit: 'per vehicle',
  },
  {
    id: 'motorcycle-parking',
    name: 'Motorcycle Parking',
    description: 'Parking fee for motorcycles.',
    category: 'parking',
    dayTourPrice: 30,
    overnightPrice: 30,
    unit: 'per motorcycle',
  },
  {
    id: 'sedan-suv-parking',
    name: 'Sedan / SUV Parking',
    description: 'Parking fee for sedan or SUV.',
    category: 'parking',
    dayTourPrice: 50,
    overnightPrice: 50,
    unit: 'per vehicle',
  },
  {
    id: 'photoshoot',
    name: 'Photoshoot',
    description: 'Photoshoot fee, exclusive of entrance and parking fees.',
    category: 'addon',
    dayTourPrice: 1000,
    overnightPrice: 1000,
    unit: 'per shoot',
  },
]

export const tanayActivityGroups: ActivityGroup[] = [
  {
    title: 'Nature & Relaxation',
    items: [
      'Camping under the mango trees',
      'Bonfire nights with marshmallow roasting',
      'Hammock lounging and picnic areas',
      'Stargazing',
      'Morning nature walks',
      'Sunset viewing',
      'Outdoor movie night',
    ],
  },
  {
    title: 'Farm & Orchard Experiences',
    items: ['Mango picking (seasonal)', 'Farm tour and orchard walk', 'Fruit harvesting activities'],
  },
  {
    title: 'Team Building & Group Activities',
    items: [
      'Relay games',
      'Tug of war',
      'Amazing race challenges',
      'Camp Olympics',
      'Trust-building activities',
      'Leadership games for schools and corporate groups',
    ],
  },
  {
    title: 'Recreational Games',
    items: ['Volleyball', 'Badminton', 'Frisbee', 'Sack race', 'Scavenger hunt', 'Flashlight tag at night'],
  },
  {
    title: 'Family & Kids',
    items: ['Storytelling by the campfire', 'Arts and crafts', 'Treasure hunt', 'Camp bingo'],
  },
  {
    title: 'Food, Wellness & Add-ons',
    items: [
      'Outdoor grilling / BBQ night',
      'Coffee and breakfast by the orchard',
      'Picnic baskets',
      'Environmental awareness talks',
      'Bird watching',
      'Yoga under the trees',
      'Meditation sessions',
      'Photography area / Instagram spots',
      'Cafe beside the orchard',
    ],
  },
]

export const nearbyAttractions = [
  { name: 'Pililia Wind Farm', time: '12 mins away', distance: '5.3 km' },
  { name: 'Regina Rica', time: '12 mins away', distance: '5.9 km' },
  { name: 'Daranak Falls', time: '27 mins away', distance: '15 km' },
  { name: 'Batlag Falls', time: '47 mins away', distance: '25.2 km' },
  { name: 'Calinawan Cave', time: '31 mins away', distance: '14.9 km' },
  { name: 'Emprest Nature Park', time: '45 mins away', distance: '24.8 km' },
  { name: 'Pupot Cave and Spring', time: '34 mins away', distance: '15.4 km' },
  { name: 'Paglitaw Natural Pool', time: '39 mins away', distance: '16.7 km' },
  { name: 'Masungi Georeserve', time: '34 mins away', distance: '22.1 km' },
  { name: 'Treasure Mountain', time: '35 mins away', distance: '18.1 km' },
  { name: 'El Patio Razon', time: '34 mins away', distance: '18.2 km' },
  { name: 'San Ildefonso de Toledo Parish', time: '34 mins away', distance: '18.7 km' },
  { name: 'Tara sa Gulod', time: '34 mins away', distance: '14.3 km' },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Camping Under the Mango Trees',
    excerpt: 'Settle into the orchard, pitch your tent, light the firepit, and let the cool Tanay wind set the pace.',
    content: 'A guide to slowing down at Tanay Windmills Viewpoint, from hammock time to bonfire nights.',
    image: '/images/campfire.jpg',
    author: 'Windmills Camp Team',
    date: '2026-05-26',
    category: 'Camping',
    slug: 'camping-under-the-mango-trees',
  },
  {
    id: '2',
    title: 'What to Do Around Tanay',
    excerpt: 'Wind farms, waterfalls, caves, nature reserves, and mountain viewpoints are all within a short drive.',
    content: 'Plan a day tour or overnight itinerary around the most accessible Tanay attractions.',
    image: '/images/yosemite.jpg',
    author: 'Windmills Camp Team',
    date: '2026-05-26',
    category: 'Activities',
    slug: 'what-to-do-around-tanay',
  },
  {
    id: '3',
    title: 'BYOT Camping: What to Bring',
    excerpt: 'Bring your own tent, sleeping gear, cooking kit, weather layers, lights, and reusable camp essentials.',
    content: 'A practical packing guide for first-time and returning Windmills campers.',
    image: '/images/airstream-interior.jpg',
    author: 'Windmills Camp Team',
    date: '2026-05-26',
    category: 'Packing Guide',
    slug: 'byot-camping-what-to-bring',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'First time ko mag-camp and sobrang sulit. Our barkada went to the Starfield Site in Tanay and woke up to full Sierra Madre views at sunrise.',
    author: 'Marco Santos',
    location: 'Tanay Camp',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'Brought our barkada to the Coffee Grove Site in Amadeo. Super clean grounds, the staff were so nice, and the views were gorgeous.',
    author: 'Pia Reyes',
    location: 'Amadeo Camp',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'We used the Meadow Group Site for our office outing. All 30 of us had a blast with tons of space and a big firepit.',
    author: 'Jun dela Cruz',
    location: 'Amadeo Camp',
    rating: 5,
  },
]

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Do we need to bring our own tent?',
    answer:
      'Yes. Windmills Camp Grounds is primarily BYOT, or Bring Your Own Tent. Campers bring tents, sleeping gear, and cooking essentials. Tanay also lists tent pitching fees for day tour and overnight stays.',
    category: 'Camping',
  },
  {
    id: '2',
    question: 'What are the Tanay 2026 entrance rates?',
    answer:
      'Adults are PHP 150 for day tour and PHP 250 for overnight. Kids aged 3 to 12 are PHP 75 for day tour and PHP 150 for overnight.',
    category: 'Rates',
  },
  {
    id: '3',
    question: 'What are the check-in times?',
    answer:
      'Day tour access is from 8:00 AM to 5:00 PM. Overnight check-in starts at 3:00 PM and check-out is 12:00 NN.',
    category: 'Reservations',
  },
  {
    id: '4',
    question: 'How do reservations work?',
    answer:
      'Send a reservation request with your name, contact details, camp location, dates, guest count, and setup. A 50% GCash downpayment confirms your slot, with the remaining balance due upon arrival.',
    category: 'Reservations',
  },
  {
    id: '5',
    question: 'Is the camp pet-friendly?',
    answer:
      'Yes. The Tanay narrative confirms the camp is pet-friendly. Guests should still keep pets supervised and respectful of other campers.',
    category: 'Policies',
  },
  {
    id: '6',
    question: 'What is the cancellation policy?',
    answer:
      'The website copy notes free cancellation up to 48 hours before arrival. Cancellations within 48 hours are non-refundable, and rescheduling is allowed with at least 24 hours notice subject to availability.',
    category: 'Policies',
  },
]

export const amenityIcons: Record<string, string> = {
  'Clean Comfort Rooms': 'droplets',
  'Showers & Washing Bay': 'droplets',
  'Cafe & Snack Bar': 'coffee',
  'Fresh Batangas Coffee': 'coffee',
  'Coffee & Snack Bar': 'coffee',
  'Firepit Areas': 'flame',
  'Parking Area': 'car',
  'Ground Lighting': 'lightbulb',
  'Pet-Friendly Grounds': 'dog',
  'Internet Access at Cafe': 'wifi',
  'First Aid Station': 'cross',
  'Camp Store': 'shopping-bag',
  'Waste Management': 'trash',
}
