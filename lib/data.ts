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

export interface NearbyAttraction {
  name: string
  time: string
  distance: string
  image?: string
  imageAlt?: string
  link?: {
    href: string
    label: string
  }
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  body: string[]
  image: string
  imageAlt: string
  dateLabel: string
  publishedAt: string
  category: string
  slug: string
  section: 'guide' | 'activity'
}

export interface ActivityFeature {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  location: 'tanay' | 'amadeo'
}

export interface Testimonial {
  id: string
  author: string
  date?: string
  quote: string
  rating?: number
  sourceUrl?: string
}

export interface InfluencerFeature {
  id: string
  creator: string
  links: Array<{
    platform: 'facebook' | 'youtube'
    href: string
  }>
}

export interface CampMedia {
  heroImage: string
  heroAlt: string
  gallery: Array<{ src: string; alt: string; title: string; description: string }>
}

export interface CampMap {
  label: string
  query: string
  directionsUrl: string
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

export const campMaps: Record<string, CampMap> = {
  tanay: {
    label: 'Tanay Windmills Viewpoint Cafe',
    query: 'Tanay Windmills Viewpoint Cafe',
    directionsUrl: 'https://maps.app.goo.gl/QmTnGU7nLqdaSnrM8',
  },
  amadeo: {
    label: 'EMF Farm (Pangil), Pangil, Amadeo, Cavite',
    query: 'EMF Farm (Pangil), Pangil, Amadeo, Cavite',
    directionsUrl: 'https://maps.app.goo.gl/WqjmjsqaKGeLnsBHA',
  },
}

export const campMedia: Record<string, CampMedia> = {
  tanay: {
    heroImage: '/images/tanay-campers/camper-14.jpg',
    heroAlt: 'Sunset over Windmills Viewpoint Camps in Tanay',
    gallery: [
      { src: '/images/tanay-campers/camper-14.jpg', alt: 'Sunset view over the Tanay camp with windmills in the distance', title: 'Sunset over camp', description: 'Late-afternoon sky, windmill silhouettes, and wide orchard grounds.' },
      { src: '/images/tanay-campers/camper-24.jpg', alt: 'Welcome sign at Windmills Viewpoint Cafe', title: 'Cafe and welcome point', description: 'Coffee, seating, and a relaxed arrival point beside the grounds.' },
      { src: '/images/tanay-campers/camper-10.jpg', alt: 'Gravel path lined with mango trees inside the Tanay campsite', title: 'Tree-lined camp paths', description: 'Orchard lanes and walking paths through the camp.' },
      { src: '/images/tanay-campers/camper-8.jpg', alt: 'Wide orchard lawn at the Tanay campsite', title: 'Seven hectares of orchard', description: 'Clearings under mango trees for tents, parking, and activities.' },
      { src: '/images/feedback/tanay-night-camp-tents.jpg', alt: 'Illuminated family tents under the trees at Tanay', title: 'Camp after dark', description: 'Evening setups settle into a quieter fire-lit atmosphere.' },
    ],
  },
  amadeo: {
    heroImage: '/images/pangil-farm-2026/amadeo-hero-field-139.jpg',
    heroAlt: 'Open green field and mature trees at Pangil Farm in Amadeo',
    gallery: [
      { src: '/images/pangil-farm-2026/amadeo-open-field-135.jpg', alt: 'Open field with grazing animals at Pangil Farm', title: 'Open fields', description: 'Wide green grounds with space for future outdoor stays.' },
      { src: '/images/pangil-farm-2026/amadeo-sports-field-137.jpg', alt: 'Grass sports field with football goals at Pangil Farm', title: 'Sports field', description: 'An open lawn prepared for games and group activities.' },
      { src: '/images/pangil-farm-2026/amadeo-kubo-garden-141.jpg', alt: 'Garden path beside a wooden kubo at Pangil Farm', title: 'Kubo garden', description: 'Shaded rest areas sit among mature tropical planting.' },
      { src: '/images/pangil-farm-2026/amadeo-kubos-148.jpg', alt: 'Wooden kubos under mature mango trees at Pangil Farm', title: 'Kubos and rest areas', description: 'Outdoor tables and huts create relaxed gathering spaces.' },
      { src: '/images/pangil-farm-2026/amadeo-flower-garden-145.jpg', alt: 'Flower garden and lawn at Pangil Farm', title: 'Flower garden', description: 'Colorful planting borders the farm lawns and pathways.' },
      { src: '/images/pangil-farm-2026/amadeo-fern-garden-146.jpg', alt: 'Fern garden and fenced lawn at Pangil Farm', title: 'Fern garden', description: 'A landscaped path leads through garden and grazing areas.' },
      { src: '/images/pangil-farm-2026/amadeo-coconut-field-158.jpg', alt: 'Coconut trees across a green field at Pangil Farm', title: 'Coconut field', description: 'Rows of coconut trees open onto the wider farm landscape.' },
      { src: '/images/pangil-farm-2026/amadeo-grazing-field-161.jpg', alt: 'Cattle grazing among coconut trees at Pangil Farm', title: 'Animal grazing areas', description: 'Working farm views remain part of the Pangil landscape.' },
    ],
  },
}

const tanayGuestGallery: GalleryImage[] = Array.from({ length: 24 }, (_, index) => ({
  id: `tanay-guest-${index + 1}`,
  src: `/images/tanay-campers/camper-${index + 1}.jpg`,
  alt: `Guest campsite photo from Windmills Viewpoint Camps in Tanay, image ${index + 1}`,
  title: 'Guest photo, Tanay',
  location: 'tanay',
}))

export const galleryImages: GalleryImage[] = [
  ...tanayGuestGallery,
  {
    id: 'tanay-benches',
    src: '/images/feedback/gallery-benches-tanay.jpg',
    alt: 'White wagon-wheel benches beneath mango trees at the Tanay campground',
    title: 'Benches, Tanay',
    location: 'tanay',
  },
  {
    id: 'passion-fruit-vines',
    src: '/images/feedback/gallery-passion-fruit-vines.jpg',
    alt: 'Passion fruit vines hanging across a farm trellis',
    title: 'Passion fruit vines, Amadeo & Tanay farms',
    location: 'tanay',
  },
  {
    id: 'tanay-mango-orchard',
    src: '/images/feedback/gallery-mango-orchard.jpg',
    alt: 'Mature mango orchard across the Tanay campground',
    title: 'Mango trees, Tanay',
    location: 'tanay',
  },
  {
    id: 'tanay-mango-tree',
    src: '/images/feedback/gallery-mango-tree.jpg',
    alt: 'Large mango tree beside a campground path in Tanay',
    title: 'Mango trees, Tanay',
    location: 'tanay',
  },
  {
    id: 'tanay-viewpoint-cafe',
    src: '/images/feedback/gallery-viewpoint-cafe.jpg',
    alt: 'Open-air Windmills Viewpoint Cafe building in Tanay',
    title: 'Windmills Viewpoint Cafe, Tanay',
    location: 'tanay',
  },
  {
    id: 'tanay-welcome-sign',
    src: '/images/feedback/gallery-welcome-sign.jpg',
    alt: 'Wooden welcome sign for Windmills Viewpoint Cafe',
    title: 'Welcome sign, Tanay',
    location: 'tanay',
  },
  ...campMedia.amadeo.gallery.map((photo, index) => ({
    id: `amadeo-${index + 1}`,
    src: photo.src,
    alt: photo.alt,
    title: `${photo.title}, Amadeo`,
    location: 'amadeo' as const,
  })),
]

export const locations: Location[] = [
  {
    id: 'tanay',
    name: 'Tanay Windmills Viewpoint',
    state: 'Rizal',
    shortName: 'Tanay, Rizal',
    tagline: 'The highland camp beside the windmills',
    description:
      'A serene hilltop campsite in Sitio Masalat, Sampaloc-Pililla, Tanay with cool wind, foggy mornings, mango trees, Laguna de Bay views, and easy access to the Pililla wind turbines.',
    image: campMedia.tanay.heroImage,
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
    ],
    highlights: [
      'Seven hectares of orchard farmland with mango trees and carabao grass',
      'Windy hilltop setting often graced with fog and cool highland air',
      'About one kilometer from the Pililla wind turbines',
      'Drone-friendly scenery with sweeping Tanay Windmills Viewpoint landscapes',
      'Visitor numbers are regulated to preserve a peaceful camp atmosphere',
    ],
    nearbyAttractions: [
      'Pililla Wind Farm',
      'Regina Rica',
      'Daranak Falls',
      'Batlag Falls',
      'Calinawan Cave',
      'Pupot Cave and Spring',
      'Mount Kulis',
      'Tanay Parola',
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
    image: campMedia.amadeo.heroImage,
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
      'Coffee & Snack Bar',
      'Waste Management',
    ],
    highlights: [
      'Barako coffee country setting',
      'Easy access from Tagaytay and Cavite routes',
      'Hillside firepit nights and farm walks',
      'Good fit for barkada trips, family weekends, and office outings',
    ],
    nearbyAttractions: [
      'Balite Falls',
      'Mayang Falls',
      'People\'s Park in the Sky',
      'Palsahingin Falls',
    ],
    accommodationTypes: [
      {
        id: 'hilltop-site',
        name: 'Hilltop Site',
        description: 'BYOT hillside site with firepit, picnic table, parking, and barako coffee.',
        capacity: 6,
        price: 750,
        image: campMedia.amadeo.gallery[0].src,
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
        image: campMedia.amadeo.gallery[4].src,
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
        image: campMedia.amadeo.gallery[2].src,
        rateUnit: 'per pax/night',
        locationId: 'amadeo',
        features: ['15 x 15 m plot', '2 firepits', '4 picnic tables', '4 parking slots', 'Barako coffee'],
      },
    ],
    weather: 'Crisp highland air, cool nights, and misty coffee-farm mornings.',
    bestTimeToVisit: 'Weekends, holidays, and cooler months for farm walks and firepit nights.',
    comingSoon: true,
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

const cafeOfferings: ActivityGroup = {
  title: 'Cafe Offerings',
  items: [
    'All-day Filipino breakfast: Tapsilog',
    'Philippine coffee beans: Barako, Benguet, Arabica, and Robusta',
  ],
}

const seasonalActivities: ActivityGroup = {
  title: 'Seasonal Activities',
  items: ['Passion fruit picking', 'Mango picking'],
}

const otherGroupActivities: ActivityGroup = {
  title: 'Other Group Activities',
  items: ['Weddings', 'Photo shoots', 'Corporate offsite', 'Private events', 'Video shoots'],
}

export const activityFeatures: ActivityFeature[] = [
  {
    id: 'stargazing-photo-safari',
    title: 'Stargazing & Photo Safari',
    description: 'Slow evenings, darker skies, and quiet viewpoints for nature photography.',
    image: '/images/feedback/activity-stargazing.jpg',
    imageAlt: 'Night sky above a dark tree line at the camp',
  },
  {
    id: 'filipino-breakfast',
    title: 'All-day Filipino Breakfast',
    description: 'Start or finish the day with a filling tapsilog meal at the cafe.',
    image: '/images/feedback/activity-filipino-breakfast.jpg',
    imageAlt: 'Plate of tapsilog with beef tapa, garlic rice, and a fried egg',
  },
  {
    id: 'philippine-coffee',
    title: 'Philippine Coffee',
    description: 'Enjoy Barako, Benguet, Arabica, and Robusta beans in the highland air.',
    image: '/images/feedback/activity-barako-coffee.jpg',
    imageAlt: 'Barako coffee beans, press, and coffee cup at the viewpoint cafe',
  },
  {
    id: 'passion-fruit-picking',
    title: 'Passion Fruit Picking',
    description: 'A seasonal farm activity offered when the vines are ready for harvest.',
    image: '/images/feedback/activity-passion-fruit-picking.jpg',
    imageAlt: 'Passion fruit growing across a leafy trellis',
  },
  {
    id: 'mango-picking',
    title: 'Mango Picking',
    description: 'Explore mature mango trees during the farm harvest season.',
    image: '/images/feedback/activity-mango-picking.jpg',
    imageAlt: 'Mangoes growing across a mature tree at the farm',
  },
  {
    id: 'outdoor-bbq',
    title: 'Outdoor BBQ',
    description: 'Gather around the grill for an easy camp meal under the trees.',
    image: '/images/feedback/activity-bbq.jpg',
    imageAlt: 'Tent and barbecue setup beneath mango trees at camp',
  },
  {
    id: 'meetings-team-events',
    title: 'Meetings & Team Events',
    description: 'Open lawns make room for corporate offsites and larger group gatherings.',
    image: '/images/feedback/activity-team-events.jpg',
    imageAlt: 'Large team event group gathered on the campground lawn',
  },
  {
    id: 'outdoor-movie-nights',
    title: 'Outdoor Movie Nights',
    description: 'Settle in beneath the tents for a relaxed shared movie after dark.',
    image: '/images/feedback/activity-outdoor-movie.jpg',
    imageAlt: 'Campers watching a movie beneath a dark tent canopy',
  },
  {
    id: 'prewedding-photo-shoots',
    title: 'Pre-wedding Photo Shoots',
    description: 'Use the orchard, mature trees, and sunset views as a natural backdrop.',
    image: '/images/feedback/activity-prewedding-shoot.jpg',
    imageAlt: 'Couple posing beneath tall trees during a pre-wedding photo shoot',
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
  cafeOfferings,
  seasonalActivities,
  otherGroupActivities,
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
      'Picnic baskets',
      'Environmental awareness talks',
      'Bird watching',
      'Yoga under the trees',
      'Meditation sessions',
      'Photography area / Instagram spots',
    ],
  },
]

export const amadeoActivityGroups: ActivityGroup[] = [
  {
    title: 'Farm & Garden Time',
    items: ['Farm walks', 'Garden picnics', 'Coffee-country mornings', 'Relaxed outdoor stays'],
  },
  cafeOfferings,
  seasonalActivities,
  otherGroupActivities,
  {
    title: 'Camp Evenings',
    items: ['Firepit kwentuhan', 'Camp cooking', 'Stargazing', 'Cool-night gatherings'],
  },
  {
    title: 'Group Trips',
    items: ['Barkada stays', 'Family weekends', 'Office outings', 'Team gatherings'],
  },
]

export const campActivityGroups: Record<string, ActivityGroup[]> = {
  tanay: tanayActivityGroups,
  amadeo: amadeoActivityGroups,
}

export const tanayNearbyAttractions: NearbyAttraction[] = [
  {
    name: 'Pililla Wind Farm',
    time: '12 mins away',
    distance: '5.3 km',
    image: '/images/attractions/pililla-wind-farm.jpg',
    imageAlt: 'Wind turbines at Pililla Wind Farm in Rizal',
    link: { href: 'https://maps.app.goo.gl/2mVmbryMtJRLd1b47', label: 'Get directions' },
  },
  {
    name: 'Regina Rica',
    time: '12 mins away',
    distance: '5.9 km',
    image: '/images/attractions/regina-rica.jpg',
    imageAlt: 'Regina Rica pilgrimage grounds in Tanay, Rizal',
    link: { href: 'https://maps.app.goo.gl/qsBDMb57nbptRm2QA', label: 'Get directions' },
  },
  {
    name: 'Daranak Falls',
    time: '27 mins away',
    distance: '15 km',
    image: '/images/feedback/daranak-falls.jpg',
    imageAlt: 'Daranak Falls waterfall and swimming area in Tanay',
    link: { href: 'https://maps.app.goo.gl/RMVghKyztbEUqudb7', label: 'Get directions' },
  },
  {
    name: 'Calinawan Cave',
    time: '31 mins away',
    distance: '14.9 km',
    image: '/images/attractions/calinawan-cave.jpg',
    imageAlt: 'Limestone entrance of Calinawan Cave in Tanay',
    link: { href: 'https://maps.app.goo.gl/Y7bYFGbsXbMxu5HC6', label: 'Get directions' },
  },
  {
    name: 'Tara sa Gulod',
    time: '34 mins away',
    distance: '14.3 km',
    image: '/images/attractions/tara-sa-gulod.jpg',
    imageAlt: 'Ridge viewpoint and mountain scenery at Tara sa Gulod',
    link: { href: 'https://maps.app.goo.gl/J8aoMrwo9BdTHdiPA', label: 'Get directions' },
  },
  {
    name: 'Pupot Cave and Spring',
    time: '34 mins away',
    distance: '15.4 km',
    image: '/images/attractions/pupot-bukal.webp',
    imageAlt: 'Clear spring water and shaded riverside huts at Pupot Bukal in Tanay',
    link: {
      href: 'https://maps.app.goo.gl/sKcevhsHj192N8yn8',
      label: 'Get directions',
    },
  },
  {
    name: 'Mount Kulis',
    time: '36 mins away',
    distance: '18.1 km',
    image: '/images/attractions/mount-kulis.jpg',
    imageAlt: 'Mount Kulis summit marker overlooking the green ridges of Tanay',
    link: {
      href: 'https://www.google.com/maps/dir/?api=1&destination=Mount+Kulis+Tanay+Rizal',
      label: 'Get directions',
    },
  },
  {
    name: 'Tanay Parola',
    time: '45 mins away',
    distance: '19.9 km',
    image: '/images/attractions/tanay-parola.jpg',
    imageAlt: 'Tanay Parola lighthouse beside the water at sunset',
    link: {
      href: 'https://www.google.com/maps/dir/?api=1&destination=Tanay+Parola+Tanay+Rizal',
      label: 'Get directions',
    },
  },
  {
    name: 'San Ildefonso de Toledo Parish',
    time: '34 mins away',
    distance: '18.7 km',
    image: '/images/attractions/san-ildefonso-parish.jpg',
    imageAlt: 'Stone facade of San Ildefonso de Toledo Parish in Tanay',
    link: {
      href: 'https://maps.app.goo.gl/vZVBLhTAy5oSELH77',
      label: 'Get directions',
    },
  },
  {
    name: 'Masungi Georeserve',
    time: '34 mins away',
    distance: '22.1 km',
    image: '/images/attractions/masungi-georeserve.jpg',
    imageAlt: 'Limestone landscape and trail scenery at Masungi Georeserve',
    link: { href: 'https://maps.app.goo.gl/is3UDeodJAva9j3C9', label: 'Get directions' },
  },
  {
    name: 'Treasure Mountain',
    time: '35 mins away',
    distance: '18.1 km',
    image: '/images/attractions/treasure-mountain.jpg',
    imageAlt: 'Mountain ridges and cloud views from Treasure Mountain in Tanay',
    link: { href: 'https://maps.app.goo.gl/CZJaeAAPc1LARfua8', label: 'Get directions' },
  },
  {
    name: 'Paglitaw Natural Pool',
    time: '39 mins away',
    distance: '16.7 km',
    image: '/images/attractions/paglitaw-natural-pool.jpg',
    imageAlt: 'Turquoise natural pool surrounded by trees at Paglitaw Natural Pool',
    link: { href: 'https://maps.app.goo.gl/HgtxV2JFGKtrwkjB7', label: 'Get directions' },
  },
  {
    name: 'Emprest Nature Park',
    time: '45 mins away',
    distance: '24.8 km',
    image: '/images/attractions/emprest-nature-park.png',
    imageAlt: 'Clear natural pool surrounded by rocks and forest at Emprest Nature Park',
    link: {
      href: 'https://maps.app.goo.gl/1rcqXTvfQEQczRUA9',
      label: 'Get directions',
    },
  },
  {
    name: 'Batlag Falls',
    time: '47 mins away',
    distance: '25.2 km',
    image: '/images/attractions/batlag-falls.jpg',
    imageAlt: 'Batlag Falls waterfall in Tanay, Rizal',
    link: { href: 'https://maps.app.goo.gl/PjhZxGRoZqah8GUX9', label: 'Get directions' },
  },
]

export const amadeoNearbyAttractions: NearbyAttraction[] = [
  {
    name: 'Balite Falls',
    time: '12 mins away',
    distance: '7.4 km',
    image: '/images/attractions/amadeo/balite-falls.jpg',
    imageAlt: 'Wide cascades flowing into the natural pool at Balite Falls in Amadeo',
    link: { href: 'https://maps.app.goo.gl/nmbgDmDiVCQma1Qd6', label: 'Get directions' },
  },
  {
    name: 'Mayang Falls',
    time: '6 mins away',
    distance: '4.5 km',
    image: '/images/attractions/amadeo/mayang-falls.jpg',
    imageAlt: 'Rocky cascade and tropical foliage at Mayang Falls in Trece Martires, Cavite',
    link: { href: 'https://maps.app.goo.gl/srD5zAe8t1oZXbbaA', label: 'Get directions' },
  },
  {
    name: "People's Park in the Sky",
    time: '41 mins away',
    distance: '21.3 km',
    image: '/images/attractions/amadeo/peoples-park-in-the-sky.jpg',
    imageAlt: "Hilltop terraces and panoramic views at People's Park in the Sky in Tagaytay",
    link: { href: 'https://maps.app.goo.gl/rKsLkH33P5ZMzzem7', label: 'Get directions' },
  },
  {
    name: 'Palsahingin Falls',
    time: '7 mins away',
    distance: '3.4 km',
    image: '/images/attractions/amadeo/palsahingin-falls.jpg',
    imageAlt: 'Forest waterfall and turquoise pool at Palsahingin Falls in Indang, Cavite',
    link: { href: 'https://maps.app.goo.gl/DqQXA2gjZCXxcuHN7', label: 'Get directions' },
  },
  {
    name: 'Tagaytay Picnic Grove',
    time: '33 mins away',
    distance: '17.5 km',
    image: '/images/attractions/amadeo/tagaytay-picnic-grove.jpg',
    imageAlt: 'Picnic shelters across the grassy hillside at Tagaytay Picnic Grove',
    link: { href: 'https://maps.app.goo.gl/DtkaBo7ny64vnPeo6', label: 'Get directions' },
  },
  {
    name: 'Mahogany Falls',
    time: '2 mins away',
    distance: '1.7 km',
    image: '/images/attractions/amadeo/mahogany-falls.jpg',
    imageAlt: 'Small forest cascades and natural pool at Mahogany Falls in Trece Martires, Cavite',
    link: { href: 'https://maps.app.goo.gl/DGmMkr9By4LJ5wdJ7', label: 'Get directions' },
  },
  {
    name: 'Pulunan Bridge',
    time: '15 mins away',
    distance: '9.4 km',
    image: '/images/attractions/amadeo/pulunan-bridge.jpg',
    imageAlt: 'Pulunan steel bridge above the riverside recreation area in Trece Martires, Cavite',
    link: { href: 'https://maps.app.goo.gl/wd4iEAKcLPPbVq496', label: 'Get directions' },
  },
  {
    name: 'Paradizoo Theme Park',
    time: '22 mins away',
    distance: '13.5 km',
    image: '/images/attractions/amadeo/paradizoo-theme-park.jpg',
    imageAlt: 'Paradizoo entrance sign surrounded by tropical greenery in Mendez, Cavite',
    link: { href: 'https://maps.app.goo.gl/3Z8L5WixRDHj7F7o8', label: 'Get directions' },
  },
  {
    name: "Yoki's Farm",
    time: '26 mins away',
    distance: '15.7 km',
    image: '/images/attractions/amadeo/yokis-farm.webp',
    imageAlt: "Yoki's Farm entrance sign and garden wall in Mendez, Cavite",
    link: { href: 'https://maps.app.goo.gl/FbqJ4E7P6AEBk58c8', label: 'Get directions' },
  },
  {
    name: 'Puzzle Mansion',
    time: 'See directions',
    distance: 'Nearby Amadeo',
    image: '/images/attractions/amadeo/puzzle-mansion.jpg',
    imageAlt: 'Puzzle Mansion museum entrance and puzzle-shaped sign near Tagaytay',
    link: { href: 'https://maps.app.goo.gl/NdE5KV765yQekqWq9', label: 'Get directions' },
  },
]

export const whatsNewPosts: BlogPost[] = [
  {
    id: 'camping-under-mango-trees',
    title: 'Camping Under the Mango Trees',
    excerpt: 'Settle into the orchard, pitch your tent, light the firepit, and let the cool Tanay wind set the pace.',
    body: [
      'A stay beneath the mango trees is an invitation to slow down. Choose a shaded clearing, settle into your campsite, and let the cool Tanay wind set the pace for the day.',
      'Spend the afternoon in a hammock or around the cafe, then gather beside the firepit as the campsite grows quieter after sunset.',
    ],
    image: '/images/feedback/filipino-family-camping.jpg',
    imageAlt: 'Filipino family enjoying a camping trip together',
    dateLabel: 'May 26, 2026',
    publishedAt: '2026-05-26',
    category: 'Camping',
    slug: 'camping-under-the-mango-trees',
    section: 'guide',
  },
  {
    id: 'what-to-do-around-tanay',
    title: 'What to Do Around Tanay',
    excerpt: 'Wind farms, waterfalls, caves, nature reserves, and mountain viewpoints are all within a short drive.',
    body: [
      'Tanay makes it easy to combine a campsite stay with a day of exploring. Wind farms, waterfalls, caves, nature reserves, and mountain viewpoints are all within driving distance of the camp.',
      'Choose one or two nearby stops for a relaxed itinerary, then return to Windmills Viewpoint Camps before sunset for dinner, coffee, and an evening beneath the trees.',
    ],
    image: '/images/tanay-campers/camper-22.jpg',
    imageAlt: 'Pililla wind turbines across the hills near the Tanay camp',
    dateLabel: 'May 26, 2026',
    publishedAt: '2026-05-26',
    category: 'Activities',
    slug: 'what-to-do-around-tanay',
    section: 'guide',
  },
  {
    id: 'byot-camping-what-to-bring',
    title: 'BYOT Camping: What to Bring',
    excerpt: 'Bring your own tent, sleeping gear, cooking kit, weather layers, lights, and reusable camp essentials.',
    body: [
      'A comfortable bring-your-own-tent stay starts with dependable shelter, sleeping gear, lighting, and clothing for changing highland weather.',
      'Pack a cooking kit, drinking water, reusable dining essentials, personal toiletries, and a small rubbish bag so your campsite stays organized throughout the visit.',
    ],
    image: '/images/tanay-campers/camper-4.jpg',
    imageAlt: 'Guest tents and vehicles set up beneath the mango trees in Tanay',
    dateLabel: 'May 26, 2026',
    publishedAt: '2026-05-26',
    category: 'Packing Guide',
    slug: 'byot-camping-what-to-bring',
    section: 'guide',
  },
  {
    id: 'passion-fruit-picking-offer',
    title: 'Passion Fruit Picking Season at Tanay',
    excerpt: 'When the vines are ready, passion fruit picking adds a fresh farm experience to a day tour or overnight camp.',
    body: [
      'Passion fruit grows across trellised sections of the Tanay farm, creating a leafy walk beneath hanging vines and ripening fruit.',
      'When harvest conditions allow, campers can make fruit picking part of a day tour or overnight stay and enjoy a closer look at the working landscape around the campsite.',
      'The activity depends on the harvest, weather, and fruit availability. Contact the camp before visiting to confirm whether picking is available on your preferred date.',
    ],
    image: '/images/feedback/activity-passion-fruit-picking.jpg',
    imageAlt: 'Passion fruit growing from leafy trellised vines at the Tanay farm',
    dateLabel: 'May 1, 2026',
    publishedAt: '2026-05-01',
    category: 'Seasonal Activity',
    slug: 'passion-fruit-picking-offer',
    section: 'activity',
  },
  {
    id: 'overnight-camping-august-offer',
    title: 'A Holiday Weekend Under the Windmills',
    excerpt: 'Cool evenings, illuminated tents, and quiet orchard grounds make long weekends a natural fit for an overnight stay.',
    body: [
      'Holiday weekends bring families and friends together beneath the mango trees for a slower evening away from the city.',
      'As daylight fades, campsite lights and firepit gatherings transform the orchard into a relaxed overnight setting for shared meals, coffee, and conversation.',
      'Long-weekend stays are reservation based and availability changes with the season. Contact the camp for current dates, rates, and remaining campsite capacity.',
    ],
    image: '/images/feedback/tanay-night-camp-tents.jpg',
    imageAlt: 'Illuminated family tents beneath the trees at the Tanay campsite',
    dateLabel: 'August 29, 2025',
    publishedAt: '2025-08-29',
    category: 'Camp Story',
    slug: 'overnight-camping-august-offer',
    section: 'activity',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'wigo-wanders',
    author: 'Wigo Wanders',
    date: 'June 18, 2025',
    quote:
      "Very accessible ang road, and the camping ground is well maintained. Madaming mga puno kaya hindi ganun kainit ng tanghali. Security and staff: 10/10. It's yay! Babalikan namin tong campsite na 'to - very chill lang ng stay namin.",
    rating: 5,
  },
  {
    id: 'sky-averie',
    author: 'Sky Averie',
    quote:
      "Thanks for the very pleasant and good accommodation. Nag-enjoy po kami, we'll visit soon again. God bless. Keep it up.",
  },
  {
    id: 'elaine-perete',
    author: 'Elaine Perete',
    date: 'May 5, 2025',
    quote:
      'Camping at Tanay Windmills Viewpoint always brings me peace - the rustling leaves, the steady breeze, the cool air, and the gentle sounds of nature remind me how simple and beautiful the world can be.',
  },
  {
    id: 'camp-vibes-ph',
    author: 'Camp Vibes PH',
    date: 'March 2, 2025',
    quote:
      'We enjoyed our two-night stay at Tanay Windmills Viewpoint. It was peaceful, and the weather was refreshing as we camped under the mango trees.',
  },
  {
    id: 'ronan-israel-ramos',
    author: 'Ronan Israel Ramos',
    date: 'January 26, 2025',
    quote:
      'A tranquil experience. They have very friendly and accommodating staff. The whole camp area is quite big and could put up a lot of campers at the same time. It is also easy to get to. We will definitely come back.',
  },
]

export const influencerFeatures: InfluencerFeature[] = [
  {
    id: 'yats-tv',
    creator: 'Yats TV',
    links: [{ platform: 'facebook', href: 'https://www.facebook.com/share/r/196Vu7D8SV/' }],
  },
  {
    id: 'the-wondering-two-ph',
    creator: 'thewonderingtwoph',
    links: [
      { platform: 'facebook', href: 'https://www.facebook.com/share/r/14ii9kXhJsj/' },
      { platform: 'facebook', href: 'https://www.facebook.com/share/r/1FDXY8h1Ph/' },
    ],
  },
  {
    id: 'arki-campin',
    creator: 'Arki Campin',
    links: [{ platform: 'youtube', href: 'https://youtu.be/C6Y7Rm3VSik?si=tz6Q9w7bRbSQ70xD' }],
  },
  {
    id: 'ed-jhay',
    creator: 'Ed Jhay',
    links: [{ platform: 'youtube', href: 'https://youtu.be/bqI6h5d1yfY?si=Gi6F5coQRsfW78iZ' }],
  },
  {
    id: 'rango-adventures',
    creator: 'Rango Adventures',
    links: [{ platform: 'youtube', href: 'https://youtu.be/igq6x1_QQi8?si=DsAzDPtNg4wdRplL' }],
  },
  {
    id: 'the-nomads',
    creator: 'The Nomads',
    links: [
      { platform: 'facebook', href: 'https://www.facebook.com/share/p/1DrqMDj8xn/' },
      { platform: 'facebook', href: 'https://www.facebook.com/share/r/14cJePqiBJK/' },
    ],
  },
  {
    id: 'mabs-and-may',
    creator: 'Mabs & May',
    links: [{ platform: 'youtube', href: 'https://youtu.be/ceddFGIEnrg?si=A20TLYfI-xREDSGc' }],
  },
  {
    id: 'bgtv',
    creator: 'BGtv',
    links: [
      { platform: 'facebook', href: 'https://www.facebook.com/share/v/1Baap1YfAv/' },
      { platform: 'facebook', href: 'https://www.facebook.com/share/r/1Cu1SJVRcT/' },
    ],
  },
  {
    id: 'unoss-vlog',
    creator: 'Unoss Vlog',
    links: [{ platform: 'youtube', href: 'https://youtu.be/ox03ZNtreN4?si=3bKOB2as3I1EU9oM' }],
  },
  {
    id: 'kanoki-adventure',
    creator: 'Kanoki Adventure',
    links: [
      { platform: 'facebook', href: 'https://www.facebook.com/share/r/1J7N5XtY6t/' },
      { platform: 'youtube', href: 'https://youtu.be/UZ37S-lQLmw?si=H9tTOADFhBXaweVy' },
    ],
  },
  {
    id: 'rventures-ph',
    creator: 'Rventures PH',
    links: [{ platform: 'youtube', href: 'https://youtu.be/dXIYUZvU_6Y?si=uckHlAsAOIk3dGIs' }],
  },
  {
    id: 'koywenfamily-tv',
    creator: 'KoyWenFamily TV',
    links: [{ platform: 'youtube', href: 'https://youtu.be/WE54JzgLhSE?si=LaeCxw12SfeR6Kmx' }],
  },
  {
    id: 'lakwatsero-projectlaboy',
    creator: 'Lakwatsero projectlaboy',
    links: [{ platform: 'facebook', href: 'https://www.facebook.com/share/v/1Awwh3RNge/' }],
  },
  {
    id: 'wanderbeans',
    creator: 'WanderBeans',
    links: [{ platform: 'facebook', href: 'https://www.facebook.com/share/r/1B3QRC7Bmn/' }],
  },
]

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Do we need to bring our own tent?',
    answer:
      'Yes. Windmills Viewpoint Camps is primarily BYOT, or Bring Your Own Tent. Campers bring tents, sleeping gear, and cooking essentials. Tanay also lists tent pitching fees for day tour and overnight stays.',
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
      'Yes. The Tanay camp is pet-friendly. Guests should keep their pets supervised and respectful of other campers, and all campers should also be careful of the well-being and safety of other guests\' pets.',
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
  'Waste Management': 'trash',
}
