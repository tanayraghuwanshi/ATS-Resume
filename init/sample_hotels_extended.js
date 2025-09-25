const sampleListings = [
    {
        "title": "Royal Orchid Palace",
        "description": "Experience luxury with panoramic views and premium service.",
        "image": {
            "url": "https://source.unsplash.com/800x600/?hotel,luxury",
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
            "url": "https://source.unsplash.com/800x600/?resort,beach",
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
            "url": "https://source.unsplash.com/800x600/?hotel,mountain",
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
            "url": "https://source.unsplash.com/800x600/?hotel,city",
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
            "url": "https://source.unsplash.com/800x600/?heritage,hotel",
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
            "url": "https://source.unsplash.com/800x600/?hotel,modern",
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
            "url": "https://source.unsplash.com/800x600/?hotel,green",
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
            "url": "https://source.unsplash.com/800x600/?business,hotel",
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
            "url": "https://source.unsplash.com/800x600/?family,hotel",
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
            "url": "https://source.unsplash.com/800x600/?villa,resort",
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
            "url": "https://source.unsplash.com/800x600/?beach,hotel",
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
            "url": "https://source.unsplash.com/800x600/?courtyard,hotel",
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
            "url": "https://source.unsplash.com/800x600/?cliff,resort",
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
            "url": "https://source.unsplash.com/800x600/?suites,hotel",
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
            "url": "https://source.unsplash.com/800x600/?oceanfront,hotel",
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
            "url": "https://source.unsplash.com/800x600/?river,hotel",
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
            "url": "https://source.unsplash.com/800x600/?treehouse,resort",
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
            "url": "https://source.unsplash.com/800x600/?hillside,hotel",
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
            "url": "https://source.unsplash.com/800x600/?green,retreat",
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
            "url": "https://source.unsplash.com/800x600/?oasis,hotel",
            "filename": "listing"
        },
        "price": 3993,
        "rating": 4.3,
        "location": "Kolkata",
        "country": "India"
    }
]


module.exports = { data: sampleListings };