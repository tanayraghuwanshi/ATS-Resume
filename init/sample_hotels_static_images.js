const sampleListings = [
  {
    "title": "Royal Orchid Palace",
    "description": "Experience luxury with panoramic views and premium service.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "listing"
    },
    "price": 4947,
    "rating": 3.9,
    "location": "Mumbai",
    "country": "India"
  },
  
  {
    "title": "Serenity Bay Resort",
    "description": "A peaceful retreat with beachfront elegance and fine dining.",
    "image": {
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "listing"
    },
    "price": 5113,
    "rating": 4.0,
    "location": "Goa",
    "country": "India"
  },
  {
    "title": "Mountain Majesty Hotel",
    "description": "Cozy and elegant stay in the heart of the mountains.",
    "image": {
      "url": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "listing"
    },
    "price": 3936,
    "rating": 3.9,
    "location": "Jaipur",
    "country": "India"
  },
  {
    "title": "Palm Breeze Inn",
    "description": "Urban lifestyle with modern interiors and central location.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "filename": "listing"
    },
    "price": 5152,
    "rating": 4.3,
    "location": "Shimla",
    "country": "India"
  },
  {
    "title": "Heritage Grandeur",
    "description": "Classic heritage property with royal ambiance and charm.",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "filename": "listing"
    },
    "price": 8932,
    "rating": 4.8,
    "location": "Manali",
    "country": "India"
  },
  {
    "title": "Urban Nest Hotel",
    "description": "Modern rooms with top-notch facilities and rooftop lounge.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "filename": "listing"
    },
    "price": 9842,
    "rating": 4.6,
    "location": "Udaipur",
    "country": "India"
  },
  {
    "title": "Vista Verde Retreat",
    "description": "Nature-inspired suites with eco-friendly amenities.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "filename": "listing"
    },
    "price": 5470,
    "rating": 3.9,
    "location": "Delhi",
    "country": "India"
  },
  {
    "title": "The Pearl Residency",
    "description": "Ideal for business travelers with spacious conference halls.",
    "image": {
      "url": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "listing"
    },
    "price": 6010,
    "rating": 3.7,
    "location": "Pune",
    "country": "India"
  },
  {
    "title": "Sunset View Lodge",
    "description": "Perfect for family vacations near popular landmarks.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "filename": "listing"
    },
    "price": 2689,
    "rating": 4.3,
    "location": "Rishikesh",
    "country": "India"
  },
  {
    "title": "Blue Lagoon Hotel",
    "description": "Exclusive villa-style rooms with private pools and spas.",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "filename": "listing"
    },
    "price": 8980,
    "rating": 3.9,
    "location": "Bangalore",
    "country": "India"
  },
  {
    "title": "Amber Sands Haven",
    "description": "Luxury stay with private beachfront and premium dining.",
    "image": {
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "listing"
    },
    "price": 7873,
    "rating": 4.3,
    "location": "Chennai",
    "country": "India"
  },
  {
    "title": "The Lotus Courtyard",
    "description": "Elegant courtyard vibes with spa and wellness center.",
    "image": {
      "url": "https://images.unsplash.com/photo-1598598795009-f80c5072e665?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "listing"
    },
    "price": 8890,
    "rating": 3.7,
    "location": "Hyderabad",
    "country": "India"
  },
  {
    "title": "Zenith Cliff Resort",
    "description": "A secluded resort nestled in cliffside tranquility.",
    "image": {
      "url": "https://images.unsplash.com/photo-1614451153800-c141e95b9054?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "listing"
    },
    "price": 3668,
    "rating": 4.7,
    "location": "Dehradun",
    "country": "India"
  },
  {
    "title": "Maple Leaf Suites",
    "description": "Urban comfort with modern suites and amenities.",
    "image": {
      "url": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804",
      "filename": "listing"
    },
    "price": 5378,
    "rating": 4.9,
    "location": "Auli",
    "country": "India"
  },
  {
    "title": "Crystal Bay Hotel",
    "description": "Oceanfront luxury with infinity pool views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "filename": "listing"
    },
    "price": 7785,
    "rating": 4.6,
    "location": "Kochi",
    "country": "India"
  },
  {
    "title": "Riverview Royale",
    "description": "Riverfront rooms with serene ambiance and live music.",
    "image": {
      "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "filename": "listing"
    },
    "price": 7407,
    "rating": 4.2,
    "location": "Nagpur",
    "country": "India"
  },
  {
    "title": "Tranquil Treehouse",
    "description": "Unique stay experience in elevated wooden cabins.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "filename": "listing"
    },
    "price": 3588,
    "rating": 3.8,
    "location": "Lucknow",
    "country": "India"
  },
  {
    "title": "The Highland Edge",
    "description": "Adventure meets comfort at this hillside retreat.",
    "image": {
      "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "filename": "listing"
    },
    "price": 11064,
    "rating": 4.8,
    "location": "Chandigarh",
    "country": "India"
  },
  {
    "title": "Golden Fern Retreat",
    "description": "Eco-friendly luxury surrounded by greenery.",
    "image": {
      "url": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804",
      "filename": "listing"
    },
    "price": 4360,
    "rating": 4.8,
    "location": "Varanasi",
    "country": "India"
  },
  {
    "title": "Mirage Oasis",
    "description": "Desert-inspired oasis with stunning interiors.",
    "image": {
      "url": "https://images.unsplash.com/photo-1582719478190-ef42f1093f1f",
      "filename": "listing"
    },
    "price": 3993,
    "rating": 4.3,
    "location": "Kolkata",
    "country": "India"
  }
];

module.exports = { data: sampleListings };