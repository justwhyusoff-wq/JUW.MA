export const blogPosts = [
  {
    slug: 'why-templates-fail-moroccan-restaurants',
    title: 'Why generic templates fail Moroccan restaurants',
    excerpt:
      "Reservation flows, multilingual menus, Ramadan hours — the things off-the-shelf themes ignore.",
    category: 'Restaurants',
    date: '2025-08-12',
    readTime: 6,
    cover: 'restaurant',
    tone: 'ember',
    body: [
      "Most Moroccan restaurants don't lose customers because their food isn't good. They lose them at the digital threshold — the moment someone tries to book, see the menu, or check tonight's specials.",
      "Off-the-shelf templates are built for a Western dining context: one language, one currency, one set of dietary norms. In Morocco, that context breaks. Customers expect Arabic and French side by side. Ramadan hours change everything for a month. And reservation flows still leak into WhatsApp because there's nobody on the other end of that 'reserve a table' form.",
      "Our approach is to map your operation first — front-of-house, kitchen, owner — before we touch a single design file. The interface follows the operation, not the template gallery.",
    ],
  },
  {
    slug: 'car-rental-booking-system-morocco',
    title: 'What a car rental booking system should look like in 2025',
    excerpt:
      "Tourists arriving in Marrakech want to book before they land. Most local sites don't let them.",
    category: 'Car Rental',
    date: '2025-07-28',
    readTime: 8,
    cover: 'cars',
    tone: 'mint',
    body: [
      "The Moroccan car rental market runs on trust, repeat customers, and tourist traffic. The systems running it, in most cases, do not.",
      "A modern booking flow needs to handle real-time availability, dynamic pricing, deposits, and digital contracts — and it has to work for someone tapping it on a phone in transit at CMN airport. We've broken down what that looks like, piece by piece.",
    ],
  },
  {
    slug: 'real-estate-leads-morocco',
    title: 'The real reason your real estate leads don\'t convert',
    excerpt:
      "Spoiler: it's not the agent. It's the seven steps between WhatsApp and 'I'm interested'.",
    category: 'Real Estate',
    date: '2025-07-15',
    readTime: 5,
    cover: 'realestate',
    tone: 'ember',
    body: [
      "Agents in Casablanca spend hours every week qualifying leads — most of whom were never going to buy. The qualification needs to happen *before* the conversation, not after.",
      "We walk through a lead-capture flow that filters tire-kickers automatically — without scaring off serious buyers.",
    ],
  },
  {
    slug: 'multilingual-from-day-one',
    title: 'Multilingual from day one — or never properly',
    excerpt:
      "Retrofitting Arabic into a French-only site is harder than starting trilingual. Here's why.",
    category: 'Insights',
    date: '2025-06-30',
    readTime: 4,
    cover: 'multilingual',
    tone: 'mint',
    body: [
      "RTL is not a CSS flag. It's a design discipline. If you didn't think about Arabic on day one, the third language pass will cost you more than the first two combined.",
    ],
  },
  {
    slug: 'whatsapp-as-the-real-cta',
    title: 'WhatsApp is the real CTA in Morocco',
    excerpt:
      "Forms convert at 2%. WhatsApp deeplinks convert at 18%. Stop fighting it.",
    category: 'Insights',
    date: '2025-06-18',
    readTime: 5,
    cover: 'whatsapp',
    tone: 'ember',
    body: [
      "We've tracked dozens of CTAs across Moroccan business sites. The pattern is consistent: WhatsApp deep-links beat contact forms 9 times out of 10.",
      "But that doesn't mean WhatsApp replaces a real system. It just means the entry point belongs there.",
    ],
  },
  {
    slug: 'travel-agency-quotes-faster',
    title: 'How travel agencies can quote 5x faster',
    excerpt:
      "Most Moroccan agencies still build quotes in Word. There's a better way.",
    category: 'Travel',
    date: '2025-06-02',
    readTime: 6,
    cover: 'travel',
    tone: 'mint',
    body: [
      "Quote-building eats more agency hours than any other task. Templating it doesn't lose the personal touch — it frees you to focus on it.",
    ],
  },
];

export function getPost(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

export const categories = ['All', 'Restaurants', 'Car Rental', 'Real Estate', 'Travel', 'Insights'];
