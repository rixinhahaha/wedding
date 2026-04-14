/* ============================================
   i18n — Lightweight translation system
   Supports English (en) and Chinese (zh)
   ============================================ */

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.story': 'Our Story',
    'nav.singapore': 'Singapore',
    'nav.rsvp': 'RSVP',

    // Hero
    'hero.name1': 'Ri Xin',
    'hero.name2': 'Beryl',
    'hero.subtitle': "We're getting married",
    'hero.date': 'Saturday, December 19, 2026 · 12:00 PM SGT',
    'hero.location': 'Singapore',
    'countdown.days': 'Days',
    'countdown.hours': 'Hours',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
    'scroll.text': 'Scroll',

    // Our Story
    'story.title': 'Our Story',
    'story.subtitle': 'How it all began',
    'story.met.title': 'How We Met',
    'story.met.text': 'We met in UCLA, right outside the math science building during orientation.',
    'story.date.title': 'First Date',
    'story.date.text': 'Our first date was at Sawtelle!',
    'story.adventures.title': 'Adventures Together',
    'story.adventures.text': 'Taken at the top of Haleakala in Hawaii.',
    'story.game.title': 'Game Day',
    'story.game.text': 'Go Bruins!',
    'story.graduation.title': 'Graduation',
    'story.graduation.text': 'Dr Sui graduates with a PHD in Electrical Engineering <span class="hashtag">#girlboss</span> <span class="hashtag">#womeninstem</span>',
    'story.proposal.title': 'The Proposal',
    'story.proposal.text': 'Will you marry me!',
    'story.registration.title': 'Registration',
    'story.registration.text': 'We had our registration in San Francisco and held a mini celebration with our friends!',
    'video.title': 'Then & Now',

    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.subtitle': "We can't wait to celebrate with you",
    'rsvp.name': 'Full Name',
    'rsvp.name.placeholder': 'Your full name',
    'rsvp.email': 'Email',
    'rsvp.email.placeholder': 'your@email.com',
    'rsvp.attending': 'Will you be attending?',
    'rsvp.accepts': 'Joyfully Accepts',
    'rsvp.declines': 'Regretfully Declines',
    'rsvp.plusone': 'Will you be bringing a plus one?',
    'rsvp.yes': 'Yes',
    'rsvp.no': 'No',
    'rsvp.plusone.name': "Plus One's Name",
    'rsvp.plusone.name.placeholder': 'Their full name',
    'rsvp.dietary': 'Dietary Restrictions',
    'rsvp.dietary.none': 'No restrictions',
    'rsvp.dietary.vegetarian': 'Vegetarian',
    'rsvp.dietary.vegan': 'Vegan',
    'rsvp.dietary.halal': 'Halal',
    'rsvp.dietary.gluten': 'Gluten-free',
    'rsvp.dietary.nut': 'Nut allergy',
    'rsvp.dietary.other': 'Other (please specify)',
    'rsvp.dietary.specify': 'Please specify dietary requirements',
    'rsvp.dietary.specify.placeholder': 'e.g. No shellfish',
    'rsvp.plusone.dietary': "Plus One's Dietary Restrictions",
    'rsvp.message': 'Message for the Couple',
    'rsvp.message.placeholder': 'Share your well wishes...',
    'rsvp.deadline': 'Please respond by <strong>August 19, 2026</strong>',
    'rsvp.submit': 'Send RSVP',
    'rsvp.sending': 'Sending...',
    'rsvp.success.yes.title': 'Thank You!',
    'rsvp.success.yes.text': "Your RSVP has been received.<br>We can't wait to celebrate with you!",
    'rsvp.success.no.title': "We'll Miss You!",
    'rsvp.success.no.text': "We're sad you can't make it, but we appreciate you letting us know.<br>You'll be in our hearts on the big day!",
    'rsvp.error': 'Something went wrong. Please try again or contact us directly.',
    'rsvp.notconnected': 'RSVP form is not yet connected. Please set up Google Sheets integration (see SETUP.md).',

    // Travel CTA
    'travel.title': 'Travelling from Abroad?',
    'travel.text': 'Check out our Singapore guide for flights, hotels, visa info, and things to explore.',
    'travel.btn': 'Singapore Travel Guide',

    // Footer
    'footer.names': 'Ri Xin & Beryl',
    'footer.date': 'December 19, 2026',

    // ===== Singapore Page =====
    'sg.hero.subtitle': 'December 19, 2026',
    'sg.hero.title': 'Your Guide to Singapore',
    'sg.hero.tagline': 'Everything you need to know for the trip',

    // Getting There
    'sg.getting.title': 'Getting There',
    'sg.getting.subtitle': 'Plan your arrival',
    'sg.getting.intro': 'We recommend arriving on <strong>Friday, December 18</strong> or earlier to settle in and adjust to the time zone (Singapore is 13 hours ahead of PST / 16 hours ahead of EST). Singapore Changi Airport (SIN) is consistently rated one of the best airports in the world &mdash; you might not want to leave!',
    'sg.getting.booking': 'December is peak travel season in Singapore, so <strong>book your flights early</strong> for the best prices and availability. The flight is roughly 18&ndash;19 hours, so plan for a full travel day.',
    'sg.getting.direct': 'Direct Flights from the US',
    'sg.getting.nyc': 'From New York (JFK/EWR)',
    'sg.getting.sfo': 'From San Francisco (SFO)',
    'sg.getting.tip': '<strong>Tip:</strong> Singapore Airlines is consistently ranked among the world\'s best airlines and offers the most nonstop options from the US. Set up fare alerts on <a href="https://www.google.com/travel/flights" target="_blank" rel="noopener noreferrer">Google Flights</a> to catch the best deals. Changi Airport also has free city tours for transit passengers with layovers of 5.5+ hours!',

    // Weather
    'sg.weather.title': 'Weather',
    'sg.weather.subtitle': 'What to expect in December',
    'sg.weather.intro': 'Singapore is tropical year-round with temperatures between <strong>25&ndash;31&deg;C (77&ndash;88&deg;F)</strong>. December falls within the northeast monsoon season, so expect occasional rain showers &mdash; usually short but heavy.',
    'sg.weather.pack': 'What to Pack',
    'sg.weather.pack1': 'Light, breathable clothing (cotton, linen)',
    'sg.weather.pack2': 'A compact umbrella or rain jacket',
    'sg.weather.pack3': 'A light layer for air-conditioned indoors (malls, restaurants, MRT)',
    'sg.weather.pack4': 'Comfortable walking shoes',
    'sg.weather.pack5': 'Sunscreen and sunglasses',

    // Venue
    'sg.venue.title': 'The Venue',
    'sg.venue.subtitle': 'Minjiang at Dempsey',
    'sg.venue.desc': 'Our wedding lunch will be held at <strong>Minjiang at Dempsey</strong>, a renowned Chinese restaurant nestled in the lush greenery of Dempsey Hill. The restaurant is set within a beautifully restored colonial-era building surrounded by tropical foliage.',
    'sg.venue.address.label': 'Address',
    'sg.venue.address': '7A Dempsey Road, Singapore 249684',
    'sg.venue.datetime.label': 'Date & Time',
    'sg.venue.datetime': 'Saturday, December 19, 2026 · 12:00 PM',
    'sg.venue.map': 'View on Google Maps',
    'sg.venue.getting': 'Getting to the Venue',
    'sg.venue.getting.intro': 'Dempsey Hill is accessible by car or taxi but not directly by MRT. Your best options:',
    'sg.venue.getting.grab': '<strong>Grab / Taxi</strong> &mdash; The easiest option. Grab is Singapore\'s ride-hailing app (like Uber). A ride from most central hotels takes 10&ndash;20 minutes.',
    'sg.venue.getting.mrt': '<strong>MRT + Bus/Grab</strong> &mdash; Take the MRT to Botanic Gardens station, then a short Grab or bus 7, 75, 77, 105, or 106.',
    'sg.venue.tip': '<strong>About Dempsey Hill:</strong> The area is a charming enclave of dining, art galleries, and boutiques set among former British military barracks. Arrive early or stay after to explore!',

    // Hotels
    'sg.hotels.title': 'Where to Stay',
    'sg.hotels.subtitle': 'Hotel recommendations',
    'sg.hotels.intro': 'Singapore has excellent hotels at every price point. Here are our recommendations, organized by area:',
    'sg.hotels.near': 'Near the Venue',
    'sg.hotels.near.title': 'Dempsey Hill & Tanglin Area',
    'sg.hotels.orchard': 'Orchard Road',
    'sg.hotels.orchard.title': 'Shopping & Central',
    'sg.hotels.marina': 'Marina Bay',
    'sg.hotels.marina.title': 'Iconic Views',
    'sg.hotels.midrange': 'Mid-Range',
    'sg.hotels.midrange.title': 'Great Value, Great Location',
    'sg.hotels.tip': '<strong>Tip:</strong> Book early! December is peak season in Singapore due to holidays and year-end travel. Orchard Road and Marina Bay areas offer the most options and are 15&ndash;20 minutes from the venue by Grab.',

    // Travel Essentials
    'sg.essentials.title': 'Travel Essentials',
    'sg.essentials.subtitle': 'Good to know',
    'sg.essentials.visa.title': 'Visa',
    'sg.essentials.visa.text': 'Most nationalities enjoy <strong>visa-free entry for 30 days</strong>. Check with the <a href="https://www.ica.gov.sg/enter-transit/entering-singapore" target="_blank" rel="noopener noreferrer">ICA website</a> to confirm your eligibility.',
    'sg.essentials.currency.title': 'Currency',
    'sg.essentials.currency.text': 'Singapore Dollar (SGD). ~1 USD = 1.35 SGD. <strong>Credit cards are widely accepted</strong> everywhere. ATMs are easy to find.',
    'sg.essentials.timezone.title': 'Timezone',
    'sg.essentials.timezone.text': 'Singapore Standard Time (SGT) = UTC+8. That\'s <strong>13 hours ahead of PST</strong> and <strong>16 hours ahead of EST</strong>. Give yourself a day to adjust!',
    'sg.essentials.sim.title': 'SIM & WiFi',
    'sg.essentials.sim.text': 'Pick up a <strong>tourist SIM card at Changi Airport</strong> (Singtel, StarHub, or M1). Free WiFi is available at most malls, cafes, and MRT stations.',
    'sg.essentials.transport.title': 'Getting Around',
    'sg.essentials.transport.text': 'The <strong>MRT</strong> (subway) is fast and affordable. Use <strong>Grab</strong> for ride-hailing. Get an <strong>EZ-Link card</strong> at any MRT station and manage it with the <strong>SimplyGo</strong> app for easy top-ups and transit.',
    'sg.essentials.food.title': 'Food',
    'sg.essentials.food.text': 'Singapore is a food paradise! Hawker centres offer incredible meals for $3&ndash;5 SGD. Don\'t miss <strong>chicken rice, laksa, and chili crab</strong>.',
    'sg.apps.title': 'Helpful Apps to Download',
    'sg.apps.intro': 'Get these on your phone before you land:',
    'sg.apps.grab.desc': "Ride-hailing & food delivery (Southeast Asia's Uber)",
    'sg.apps.maps.desc': 'Navigation with MRT/bus directions built in',
    'sg.apps.translate.desc': 'English is widely spoken, but handy for menus in hawker centres',
    'sg.apps.klook.desc': 'Discounted tickets for attractions, tours & experiences',
    'sg.apps.simplygo.desc': 'Top up your EZ-Link transit card, pay for MRT & buses',
    'sg.apps.wise.desc': 'Low-fee currency exchange & international debit card',

    // Places to Explore
    'sg.places.title': 'Places to Explore',
    'sg.places.subtitle': 'Make the most of your trip',
    'sg.places.mbs.title': 'Marina Bay Sands & Gardens by the Bay',
    'sg.places.mbs.text': 'The iconic skyline. Walk through the Supertree Grove, visit the Cloud Forest dome, and catch the nightly light show at the waterfront.',
    'sg.places.hawker.title': 'Hawker Centres',
    'sg.places.hawker.text': 'Experience Singapore\'s famous street food culture. Try <strong>Maxwell Food Centre</strong> (Chinatown) or <strong>Lau Pa Sat</strong> (CBD). Affordable and delicious.',
    'sg.places.orchard.title': 'Orchard Road',
    'sg.places.orchard.text': "Singapore's premier shopping belt. Miles of malls, department stores, and restaurants. Great for holiday shopping in December!",
    'sg.places.cultural.title': 'Cultural Districts',
    'sg.places.cultural.text': 'Explore <strong>Chinatown</strong> for temples and street food, <strong>Little India</strong> for vibrant colours and spices, and <strong>Kampong Glam</strong> for the stunning Sultan Mosque and Haji Lane boutiques.',
    'sg.places.sentosa.title': 'Sentosa Island',
    'sg.places.sentosa.text': 'A resort island with Universal Studios, beaches, the S.E.A. Aquarium, and plenty of family-friendly activities. A full day trip on its own.',
    'sg.places.zoo.title': 'Singapore Zoo & Night Safari',
    'sg.places.zoo.text': 'World-class zoo set in a rainforest. The <strong>Night Safari</strong> is a unique after-dark experience &mdash; one of Singapore\'s must-dos.',
    'sg.places.botanic.title': 'Botanic Gardens',
    'sg.places.botanic.text': 'A <strong>UNESCO World Heritage Site</strong> just minutes from the venue. Stroll through the National Orchid Garden and enjoy 160+ years of tropical greenery.',
    'sg.places.eastcoast.title': 'East Coast Park',
    'sg.places.eastcoast.text': 'A beautiful coastal stretch perfect for cycling, rollerblading, or enjoying seafood at the nearby East Coast Lagoon Food Village.',

    // Extend Your Trip
    'sg.extend.title': 'Extend Your Trip',
    'sg.extend.subtitle': 'Explore the region while you\'re here',
    'sg.extend.intro': "You're already flying halfway around the world &mdash; why not make the most of it? Singapore is a perfect launchpad to explore Southeast Asia. Flights are short and affordable, and December is a fantastic time to visit the region.",
    'sg.extend.malaysia': 'Malaysia',
    'sg.extend.malaysia.flight': '1\u20132 hr flight \u00b7 or bus/train',
    'sg.extend.malaysia.text': '<strong>Kuala Lumpur</strong> for the Petronas Towers, incredible food, and Batu Caves. <strong>Penang</strong> for the best street food in Asia. <strong>Langkawi</strong> for duty-free island beaches. You can even take a bus to <strong>Malacca</strong> (2 hrs) for a charming heritage day trip.',
    'sg.extend.bali': 'Bali, Indonesia',
    'sg.extend.bali.flight': '~2.5 hr flight',
    'sg.extend.bali.text': 'Temples, rice terraces, world-class surfing, and stunning sunsets in Ubud and Seminyak. An incredibly affordable tropical getaway that pairs perfectly with a Singapore trip.',
    'sg.extend.thailand': 'Thailand',
    'sg.extend.thailand.flight': '~2 hr flight',
    'sg.extend.thailand.text': '<strong>Bangkok</strong> for temples, street food, and night markets. <strong>Phuket</strong> or <strong>Krabi</strong> for stunning beaches and island hopping. Thai food alone is worth the trip.',
    'sg.extend.vietnam': 'Vietnam',
    'sg.extend.vietnam.flight': '~2 hr flight',
    'sg.extend.vietnam.text': '<strong>Ho Chi Minh City</strong> for buzzing energy and pho. <strong>Hanoi</strong> for the Old Quarter and Halong Bay cruises. <strong>Da Nang / Hoi An</strong> for lantern-lit streets and beautiful beaches.',
    'sg.extend.cambodia': 'Cambodia',
    'sg.extend.cambodia.flight': '~2 hr flight',
    'sg.extend.cambodia.text': 'Visit the magnificent <strong>Angkor Wat</strong> temple complex in Siem Reap &mdash; one of the wonders of the world. December is dry season, perfect for exploring. Phnom Penh offers rich history and riverside dining.',
    'sg.extend.philippines': 'Philippines',
    'sg.extend.philippines.flight': '~3.5 hr flight',
    'sg.extend.philippines.text': 'Over 7,000 islands to explore. <strong>Palawan</strong> for crystal-clear lagoons, <strong>Boracay</strong> for white sand beaches, and <strong>Cebu</strong> for whale shark encounters and waterfalls.',
    'sg.extend.tip': '<strong>Tip:</strong> Budget airlines like Scoot, AirAsia, and Jetstar fly out of Changi with great deals to most of these destinations. Book early for December travel!',

    // CTA
    'sg.cta.title': 'Ready to Join Us?',
    'sg.cta.text': "We can't wait to celebrate with you in Singapore!",
    'sg.cta.btn': 'RSVP Now',
  },

  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.story': '我们的故事',
    'nav.singapore': '新加坡',
    'nav.rsvp': '回复邀请',

    // Hero
    'hero.name1': '日新',
    'hero.name2': '文惠',
    'hero.subtitle': '我们要结婚啦',
    'hero.date': '2026年12月19日 星期六 · 中午12:00 (新加坡时间)',
    'hero.location': '新加坡',
    'countdown.days': '天',
    'countdown.hours': '时',
    'countdown.minutes': '分',
    'countdown.seconds': '秒',
    'scroll.text': '向下滑动',

    // Our Story
    'story.title': '我们的故事',
    'story.subtitle': '一切是怎么开始的',
    'story.met.title': '我们相识',
    'story.met.text': '我们在UCLA相识，就在数学科学楼外的新生迎新活动上。',
    'story.date.title': '第一次约会',
    'story.date.text': '我们的第一次约会是在Sawtelle！',
    'story.adventures.title': '一起冒险',
    'story.adventures.text': '拍摄于夏威夷Haleakala山顶。',
    'story.game.title': '比赛日',
    'story.game.text': '加油，棕熊队！',
    'story.graduation.title': '毕业典礼',
    'story.graduation.text': 'Sui博士获得电气工程博士学位 <span class="hashtag">#女强人</span> <span class="hashtag">#理工女</span>',
    'story.proposal.title': '求婚',
    'story.proposal.text': '你愿意嫁给我吗！',
    'story.registration.title': '登记结婚',
    'story.registration.text': '我们在旧金山进行了婚姻登记，并和朋友们举办了一个小型庆祝活动！',
    'video.title': '今昔对比',

    // RSVP
    'rsvp.title': '回复邀请',
    'rsvp.subtitle': '我们迫不及待想和您一起庆祝',
    'rsvp.name': '姓名',
    'rsvp.name.placeholder': '请输入您的全名',
    'rsvp.email': '电子邮箱',
    'rsvp.email.placeholder': 'your@email.com',
    'rsvp.attending': '您是否出席？',
    'rsvp.accepts': '荣幸出席',
    'rsvp.declines': '遗憾缺席',
    'rsvp.plusone': '是否携伴出席？',
    'rsvp.yes': '是',
    'rsvp.no': '否',
    'rsvp.plusone.name': '同伴姓名',
    'rsvp.plusone.name.placeholder': '请输入同伴全名',
    'rsvp.dietary': '饮食限制',
    'rsvp.dietary.none': '无限制',
    'rsvp.dietary.vegetarian': '素食',
    'rsvp.dietary.vegan': '纯素',
    'rsvp.dietary.halal': '清真',
    'rsvp.dietary.gluten': '无麸质',
    'rsvp.dietary.nut': '坚果过敏',
    'rsvp.dietary.other': '其他（请注明）',
    'rsvp.dietary.specify': '请注明您的饮食要求',
    'rsvp.dietary.specify.placeholder': '例如：不吃海鲜',
    'rsvp.plusone.dietary': '同伴的饮食限制',
    'rsvp.message': '给新人的祝福',
    'rsvp.message.placeholder': '写下您的祝福...',
    'rsvp.deadline': '请在 <strong>2026年8月19日</strong> 前回复',
    'rsvp.submit': '提交回复',
    'rsvp.sending': '提交中...',
    'rsvp.success.yes.title': '谢谢您！',
    'rsvp.success.yes.text': '已收到您的回复。<br>期待与您共庆！',
    'rsvp.success.no.title': '我们会想念您！',
    'rsvp.success.no.text': '很遗憾您无法出席，感谢您的回复。<br>大喜之日，您将在我们心中！',
    'rsvp.error': '出了点问题，请重试或直接联系我们。',
    'rsvp.notconnected': '回复表单尚未连接。请设置Google Sheets集成（参见SETUP.md）。',

    // Travel CTA
    'travel.title': '从海外出发？',
    'travel.text': '查看我们的新加坡指南，了解航班、酒店、签证信息和旅游推荐。',
    'travel.btn': '新加坡旅行指南',

    // Footer
    'footer.names': '日新 & 文惠',
    'footer.date': '2026年12月19日',

    // ===== Singapore Page =====
    'sg.hero.subtitle': '2026年12月19日',
    'sg.hero.title': '新加坡旅行指南',
    'sg.hero.tagline': '关于这次旅行，您需要知道的一切',

    // Getting There
    'sg.getting.title': '如何前往',
    'sg.getting.subtitle': '规划您的行程',
    'sg.getting.intro': '我们建议在 <strong>12月18日（星期五）</strong>或更早抵达，以便安顿并调整时差（新加坡比美西时间早13小时 / 比美东时间早16小时）。新加坡樟宜机场（SIN）一直被评为世界上最好的机场之一——您可能不想离开！',
    'sg.getting.booking': '12月是新加坡的旅游旺季，所以<strong>请尽早预订机票</strong>以获得最优价格。飞行时间大约18-19小时，请做好全天旅行的准备。',
    'sg.getting.direct': '从美国出发的直飞航班',
    'sg.getting.nyc': '从纽约 (JFK/EWR)',
    'sg.getting.sfo': '从旧金山 (SFO)',
    'sg.getting.tip': '<strong>提示：</strong>新加坡航空一直名列世界最佳航空公司之一，提供从美国出发的最多直飞选择。在 <a href="https://www.google.com/travel/flights" target="_blank" rel="noopener noreferrer">Google Flights</a> 上设置价格提醒以获取最佳优惠。樟宜机场还为转机时间超过5.5小时的乘客提供免费城市观光！',

    // Weather
    'sg.weather.title': '天气',
    'sg.weather.subtitle': '12月的天气情况',
    'sg.weather.intro': '新加坡全年为热带气候，温度在 <strong>25-31°C（77-88°F）</strong>之间。12月属于东北季风季节，偶尔会有阵雨——通常时间短但雨量大。',
    'sg.weather.pack': '行李建议',
    'sg.weather.pack1': '轻便透气的衣物（棉、麻）',
    'sg.weather.pack2': '便携雨伞或雨衣',
    'sg.weather.pack3': '一件薄外套（商场、餐厅、地铁空调较强）',
    'sg.weather.pack4': '舒适的步行鞋',
    'sg.weather.pack5': '防晒霜和太阳镜',

    // Venue
    'sg.venue.title': '婚宴场地',
    'sg.venue.subtitle': '闽江 Dempsey',
    'sg.venue.desc': '我们的婚宴午餐将在 <strong>闽江 Dempsey</strong> 举行，这是一家位于Dempsey Hill郁郁葱葱绿荫中的知名中餐厅。餐厅坐落于一栋经过精心修复的殖民时期建筑中，周围环绕着热带植被。',
    'sg.venue.address.label': '地址',
    'sg.venue.address': '7A Dempsey Road, Singapore 249684',
    'sg.venue.datetime.label': '日期与时间',
    'sg.venue.datetime': '2026年12月19日 星期六 · 中午12:00',
    'sg.venue.map': '在Google地图中查看',
    'sg.venue.getting': '如何到达场地',
    'sg.venue.getting.intro': 'Dempsey Hill可乘汽车或出租车前往，但不直通地铁。最佳交通方式：',
    'sg.venue.getting.grab': '<strong>Grab / 出租车</strong> — 最便捷的选择。Grab是新加坡的叫车应用（类似Uber）。从大多数市中心酒店出发约10-20分钟。',
    'sg.venue.getting.mrt': '<strong>地铁 + 巴士/Grab</strong> — 乘坐地铁到植物园站，然后短途搭乘Grab或公交7、75、77、105或106路。',
    'sg.venue.tip': '<strong>关于Dempsey Hill：</strong>这片区域是由前英国军营改造的迷人街区，汇集了餐厅、艺术画廊和精品店。可以提前到达或餐后游览！',

    // Hotels
    'sg.hotels.title': '住宿推荐',
    'sg.hotels.subtitle': '酒店推荐',
    'sg.hotels.intro': '新加坡各价位都有优质酒店。以下是我们按区域整理的推荐：',
    'sg.hotels.near': '靠近婚宴场地',
    'sg.hotels.near.title': 'Dempsey Hill 和 Tanglin 区域',
    'sg.hotels.orchard': '乌节路',
    'sg.hotels.orchard.title': '购物中心区',
    'sg.hotels.marina': '滨海湾',
    'sg.hotels.marina.title': '标志性景观',
    'sg.hotels.midrange': '中等价位',
    'sg.hotels.midrange.title': '高性价比，好位置',
    'sg.hotels.tip': '<strong>提示：</strong>请尽早预订！12月是新加坡的旅游旺季。乌节路和滨海湾地区酒店选择最多，乘Grab到婚宴场地约15-20分钟。',

    // Travel Essentials
    'sg.essentials.title': '旅行须知',
    'sg.essentials.subtitle': '实用信息',
    'sg.essentials.visa.title': '签证',
    'sg.essentials.visa.text': '大多数国籍可享 <strong>30天免签入境</strong>。请在 <a href="https://www.ica.gov.sg/enter-transit/entering-singapore" target="_blank" rel="noopener noreferrer">ICA官网</a> 确认您的资格。',
    'sg.essentials.currency.title': '货币',
    'sg.essentials.currency.text': '新加坡元（SGD）。约1美元 = 1.35新元。<strong>信用卡被广泛接受</strong>。ATM机随处可见。',
    'sg.essentials.timezone.title': '时区',
    'sg.essentials.timezone.text': '新加坡标准时间（SGT）= UTC+8。<strong>比美西时间早13小时</strong>，<strong>比美东时间早16小时</strong>。建议留一天时间调整时差！',
    'sg.essentials.sim.title': 'SIM卡和WiFi',
    'sg.essentials.sim.text': '在<strong>樟宜机场购买旅游SIM卡</strong>（Singtel、StarHub或M1）。大多数商场、咖啡店和地铁站都有免费WiFi。',
    'sg.essentials.transport.title': '出行方式',
    'sg.essentials.transport.text': '<strong>地铁（MRT）</strong>快速且便宜。使用 <strong>Grab</strong> 叫车。在任何地铁站购买 <strong>EZ-Link卡</strong>，用 <strong>SimplyGo</strong> 应用充值和管理交通出行。',
    'sg.essentials.food.title': '美食',
    'sg.essentials.food.text': '新加坡是美食天堂！小贩中心的美食只需3-5新元。不要错过<strong>海南鸡饭、叻沙和辣椒螃蟹</strong>。',
    'sg.apps.title': '推荐下载的应用',
    'sg.apps.intro': '出发前请下载这些应用：',
    'sg.apps.grab.desc': '叫车和外卖服务（东南亚版Uber）',
    'sg.apps.maps.desc': '导航，内置地铁/公交路线',
    'sg.apps.translate.desc': '英语通用，但在小贩中心看菜单时很实用',
    'sg.apps.klook.desc': '景点门票、旅游体验折扣',
    'sg.apps.simplygo.desc': '充值EZ-Link交通卡，支付地铁和公交费用',
    'sg.apps.wise.desc': '低手续费换汇和国际借记卡',

    // Places to Explore
    'sg.places.title': '推荐景点',
    'sg.places.subtitle': '充分享受您的旅程',
    'sg.places.mbs.title': '滨海湾金沙和滨海湾花园',
    'sg.places.mbs.text': '标志性天际线。漫步超级树丛林、参观云雾林穹顶，并在海滨欣赏每晚的灯光秀。',
    'sg.places.hawker.title': '小贩中心',
    'sg.places.hawker.text': '体验新加坡著名的街头美食文化。推荐 <strong>麦士威熟食中心</strong>（牛车水）或 <strong>老巴刹</strong>（中央商务区）。物美价廉。',
    'sg.places.orchard.title': '乌节路',
    'sg.places.orchard.text': '新加坡首屈一指的购物大道。数英里的商场、百货公司和餐厅。12月的节日购物季尤为精彩！',
    'sg.places.cultural.title': '文化区',
    'sg.places.cultural.text': '探索<strong>牛车水</strong>的庙宇和街头美食、<strong>小印度</strong>的缤纷色彩和香料、以及<strong>甘榜格南</strong>的壮丽苏丹清真寺和哈芝巷精品店。',
    'sg.places.sentosa.title': '圣淘沙岛',
    'sg.places.sentosa.text': '一座度假胜地岛屿，拥有环球影城、海滩、S.E.A.海洋馆和众多适合家庭的活动。值得花一整天游玩。',
    'sg.places.zoo.title': '新加坡动物园和夜间野生动物园',
    'sg.places.zoo.text': '世界级的热带雨林动物园。<strong>夜间野生动物园</strong>是独特的夜间体验——新加坡必去景点之一。',
    'sg.places.botanic.title': '植物园',
    'sg.places.botanic.text': '距婚宴场地仅几分钟路程的<strong>联合国教科文组织世界遗产</strong>。漫步国家兰花园，享受160多年的热带绿意。',
    'sg.places.eastcoast.title': '东海岸公园',
    'sg.places.eastcoast.text': '美丽的海岸线，适合骑行、轮滑，或在附近的东海岸泻湖美食村享受海鲜。',

    // Extend Your Trip
    'sg.extend.title': '延长您的旅程',
    'sg.extend.subtitle': '趁此机会探索周边地区',
    'sg.extend.intro': '您已经飞越了半个地球——何不充分利用这次旅行？新加坡是探索东南亚的完美起点。航班短途且实惠，12月是游览该地区的绝佳时机。',
    'sg.extend.malaysia': '马来西亚',
    'sg.extend.malaysia.flight': '1-2小时飞行 · 或巴士/火车',
    'sg.extend.malaysia.text': '<strong>吉隆坡</strong>的双子塔、美食和黑风洞。<strong>槟城</strong>拥有亚洲最好的街头美食。<strong>兰卡威</strong>的免税岛屿海滩。还可以乘巴士到<strong>马六甲</strong>（2小时），来一场迷人的文化遗产一日游。',
    'sg.extend.bali': '巴厘岛，印度尼西亚',
    'sg.extend.bali.flight': '约2.5小时飞行',
    'sg.extend.bali.text': '寺庙、梯田、世界级冲浪、乌布和水明漾的绝美日落。与新加坡之旅完美搭配的超值热带度假胜地。',
    'sg.extend.thailand': '泰国',
    'sg.extend.thailand.flight': '约2小时飞行',
    'sg.extend.thailand.text': '<strong>曼谷</strong>的寺庙、街头美食和夜市。<strong>普吉岛</strong>或<strong>甲米</strong>的绝美海滩和跳岛游。单是泰国美食就值得一去。',
    'sg.extend.vietnam': '越南',
    'sg.extend.vietnam.flight': '约2小时飞行',
    'sg.extend.vietnam.text': '<strong>胡志明市</strong>的活力与河粉。<strong>河内</strong>的老城区和下龙湾游船。<strong>岘港/会安</strong>的灯笼街道和美丽海滩。',
    'sg.extend.cambodia': '柬埔寨',
    'sg.extend.cambodia.flight': '约2小时飞行',
    'sg.extend.cambodia.text': '在暹粒参观壮丽的<strong>吴哥窟</strong>寺庙群——世界奇迹之一。12月是旱季，非常适合游览。金边则有丰富的历史和河畔美食。',
    'sg.extend.philippines': '菲律宾',
    'sg.extend.philippines.flight': '约3.5小时飞行',
    'sg.extend.philippines.text': '超过7000座岛屿等你探索。<strong>巴拉望</strong>的水晶般清澈的泻湖、<strong>长滩岛</strong>的白沙滩、以及<strong>宿务</strong>的鲸鲨邂逅和瀑布。',
    'sg.extend.tip': '<strong>提示：</strong>酷航、亚航和捷星等廉价航空从樟宜机场出发，飞往大多数目的地都有优惠。12月出行请提前预订！',

    // CTA
    'sg.cta.title': '准备好加入我们了吗？',
    'sg.cta.text': '我们迫不及待想在新加坡与您共同庆祝！',
    'sg.cta.btn': '立即回复',
  }
};

// ========== Translation Engine ==========

function getLanguage() {
  return localStorage.getItem('wedding-lang') || 'en';
}

function setLanguage(lang) {
  localStorage.setItem('wedding-lang', lang);
  applyTranslations(lang);
  updateLangToggle(lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

function t(key) {
  const lang = getLanguage();
  return translations[lang][key] || translations['en'][key] || key;
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations['en'];

  // Translate elements with data-i18n (innerHTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

function updateLangToggle(lang) {
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    const enBtn = toggle.querySelector('[data-lang="en"]');
    const zhBtn = toggle.querySelector('[data-lang="zh"]');
    if (enBtn && zhBtn) {
      enBtn.classList.toggle('active', lang === 'en');
      zhBtn.classList.toggle('active', lang === 'zh');
    }
  });
}

function initI18n() {
  const lang = getLanguage();

  // Apply translations on load
  applyTranslations(lang);
  updateLangToggle(lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Bind toggle clicks
  document.querySelectorAll('.lang-toggle [data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initI18n);
