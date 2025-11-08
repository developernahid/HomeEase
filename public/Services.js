import axios from "axios"

export const serviceCategories = async () => {
    const res = await axios.get('/api/services');
    console.log(res?.data)
    return res?.data;
}
export const serviceCategories = [

    {
        id: "ac",
        title: "AC Repair & Servicing",
        featured: [
            { id: 1, title: "AC Servicing", description: "Professional AC maintenance and cleaning", image: "/AC-repair.webp"},
            { id: 2, title: "AC Repair", description: "Expert repair for all AC issues", image: "/AC-repair.webp" },
            { id: 3, title: "AC Installation", description: "Professional AC installation service", image: "/AC-repair.webp" },
        ],
        all: ["AC Servicing", "AC Repair", "AC Installation", "AC Gas Refill", "AC Uninstallation", "Deep Cleaning"],
    },
    {
        id: "appliance",
        title: "Appliance Repair",
        featured: [
            { id: 1, title: "Refrigerator Repair", description: "Fix all refrigerator issues quickly", image: "https://placehold.co/600x400/e2e8f0/334155?text=Fridge+Repair" },
            { id: 2, title: "Microwave Repair", description: "Expert microwave repair service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Microwave" },
            { id: 3, title: "TV Repair", description: "Professional TV repair and maintenance", image: "https://placehold.co/600x400/e2e8f0/334155?text=TV+Repair" },
        ],
        all: ["Refrigerator Repair", "Washing Machine Repair", "Microwave Repair", "TV Repair", "Oven Repair", "Dishwasher Repair"],
    },
    {
        id: "cleaning",
        title: "Cleaning Solutions",
        featured: [
            { id: 1, title: "Home Cleaning", description: "Complete home cleaning service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Home+Cleaning" },
            { id: 2, title: "Office Cleaning", description: "Professional office cleaning", image: "https://placehold.co/600x400/e2e8f0/334155?text=Office+Clean" },
            { id: 3, title: "Deep Cleaning", description: "Thorough deep cleaning service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Deep+Clean" },
        ],
        all: ["Home Cleaning", "Office Cleaning", "Deep Cleaning", "Carpet Cleaning", "Sofa Cleaning", "Kitchen Cleaning"],
    },
    {
        id: "beauty",
        title: "Beauty & Wellness",
        featured: [
            { id: 1, title: "Salon Services", description: "Professional hair and beauty care", image: "https://placehold.co/600x400/e2e8f0/334155?text=Salon" },
            { id: 2, title: "Spa & Massage", description: "Relaxing spa and massage treatments", image: "https://placehold.co/600x400/e2e8f0/334155?text=Spa" },
            { id: 3, title: "Makeup Services", description: "Professional makeup for all occasions", image: "https://placehold.co/600x400/e2e8f0/334155?text=Makeup" },
        ],
        all: ["Haircut & Styling", "Spa & Massage", "Makeup Services", "Facial Treatment", "Manicure & Pedicure", "Waxing Services"],
    },
    {
        id: "plumbing",
        title: "Plumbing Services",
        featured: [
            { id: 1, title: "Leak Repair", description: "Fix all types of water leaks", image: "https://placehold.co/600x400/e2e8f0/334155?text=Leak+Repair" },
            { id: 2, title: "Tap Installation", description: "Professional tap and faucet installation", image: "https://placehold.co/600x400/e2e8f0/334155?text=Tap+Install" },
            { id: 3, title: "Pipe Repair", description: "Complete pipe repair and replacement", image: "https://placehold.co/600x400/e2e8f0/334155?text=Pipe+Repair" },
        ],
        all: ["Leak Repair", "Tap Installation", "Pipe Repair", "Drain Cleaning", "Water Heater Repair", "Bathroom Plumbing"],
    },
    {
        id: "electrical",
        title: "Electrical Services",
        featured: [
            { id: 1, title: "Wiring Repair", description: "Professional electrical wiring services", image: "https://placehold.co/600x400/e2e8f0/334155?text=Wiring" },
            { id: 2, title: "Switchboard Repair", description: "Switchboard and fuse box repair", image: "https://placehold.co/600x400/e2e8f0/334155?text=Switchboard" },
            { id: 3, title: "Light Installation", description: "Light fixture and fan installation", image: "https://placehold.co/600x400/e2e8f0/334155?text=Light+Install" },
        ],
        all: ["Wiring Repair", "Switchboard Repair", "Light Installation", "Socket Repair", "Emergency Electrical", "Home Rewiring"],
    },
    {
        id: "pest",
        title: "Pest Control",
        featured: [
            { id: 1, title: "Cockroach Control", description: "Effective cockroach elimination", image: "https://placehold.co/600x400/e2e8f0/334155?text=Cockroach" },
            { id: 2, title: "Rodent Control", description: "Professional rodent removal", image: "https://placehold.co/600x400/e2e8f0/334155?text=Rodent" },
            { id: 3, title: "Termite Control", description: "Complete termite treatment", image: "https://placehold.co/600x400/e2e8f0/334155?text=Termite" },
        ],
        all: ["Cockroach Control", "Rodent Control", "Termite Control", "Mosquito Control", "Bed Bug Treatment", "General Pest Control"],
    },
    {
        id: "carpentry",
        title: "Carpentry Services",
        featured: [
            { id: 1, title: "Furniture Repair", description: "Professional furniture repair service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Furniture" },
            { id: 2, title: "Custom Furniture", description: "Custom made furniture solutions", image: "https://placehold.co/600x400/e2e8f0/334155?text=Custom+Wood" },
            { id: 3, title: "Door Repair", description: "Door and window repair services", image: "https://placehold.co/600x400/e2e8f0/334155?text=Door+Repair" },
        ],
        all: ["Furniture Repair", "Custom Furniture", "Door Repair", "Cabinet Making", "Wood Polishing", "Carpentry Installation"],
    },
    {
        id: "painting",
        title: "Painting Services",
        featured: [
            { id: 1, title: "Home Painting", description: "Complete home painting service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Home+Paint" },
            { id: 2, title: "Wall Texture", description: "Creative wall texture designs", image: "https://placehold.co/600x400/e2e8f0/334155?text=Wall+Texture" },
            { id: 3, title: "Waterproofing", description: "Professional waterproofing solutions", image: "https://placehold.co/600x400/e2e8f0/334155?text=Waterproofing" },
        ],
        all: ["Home Painting", "Wall Texture", "Waterproofing", "Exterior Painting", "Wallpaper Installation", "Color Consultation"],
    },
    {
        id: "shifting",
        title: "Moving & Shifting",
        featured: [
            { id: 1, title: "Home Shifting", description: "Complete home relocation service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Home+Move" },
            { id: 2, title: "Office Shifting", description: "Professional office relocation", image: "https://placehold.co/600x400/e2e8f0/334155?text=Office+Move" },
            { id: 3, title: "Packing Service", description: "Professional packing and unpacking", image: "https://placehold.co/600x400/e2e8f0/334155?text=Packing" },
        ],
        all: ["Home Shifting", "Office Shifting", "Packing Service", "Loading Unloading", "Vehicle Transport", "International Moving"],
    },
    {
        id: "computer",
        title: "Computer Services",
        featured: [
            { id: 1, title: "PC Repair", description: "Desktop computer repair service", image: "https://placehold.co/600x400/e2e8f0/334155?text=PC+Repair" },
            { id: 2, title: "Laptop Repair", description: "Professional laptop repair", image: "https://placehold.co/600x400/e2e8f0/334155?text=Laptop+Repair" },
            { id: 3, title: "Virus Removal", description: "Complete virus and malware removal", image: "https://placehold.co/600x400/e2e8f0/334155?text=Virus+Removal" },
        ],
        all: ["PC Repair", "Laptop Repair", "Virus Removal", "Software Installation", "Data Recovery", "Hardware Upgrade"],
    },
    {
        id: "fitness",
        title: "Fitness & Training",
        featured: [
            { id: 1, title: "Personal Training", description: "One-on-one fitness training", image: "https://placehold.co/600x400/e2e8f0/334155?text=Personal+Trainer" },
            { id: 2, title: "Yoga Classes", description: "Professional yoga instruction", image: "https://placehold.co/600x400/e2e8f0/334155?text=Yoga" },
            { id: 3, title: "Diet Planning", description: "Customized diet and nutrition plans", image: "https://placehold.co/600x400/e2e8f0/334155?text=Diet+Plan" },
        ],
        all: ["Personal Training", "Yoga Classes", "Diet Planning", "Gym Training", "Zumba Classes", "Weight Management"],
    },
    {
        id: "photography",
        title: "Photography Services",
        featured: [
            { id: 1, title: "Wedding Photography", description: "Professional wedding photography", image: "https://placehold.co/600x400/e2e8f0/334155?text=Wedding+Photo" },
            { id: 2, title: "Portrait Sessions", description: "Professional portrait photography", image: "https://placehold.co/600x400/e2e8f0/334155?text=Portrait" },
            { id: 3, title: "Event Coverage", description: "Complete event photography", image: "https://placehold.co/600x400/e2e8f0/334155?text=Event+Photo" },
        ],
        all: ["Wedding Photography", "Portrait Sessions", "Event Coverage", "Product Photography", "Video Shooting", "Photo Editing"],
    },
    {
        id: "tutoring",
        title: "Tutoring Services",
        featured: [
            { id: 1, title: "Math Tutoring", description: "Professional math tutoring", image: "https://placehold.co/600x400/e2e8f0/334155?text=Math+Tutor" },
            { id: 2, title: "Science Classes", description: "Science subject tutoring", image: "https://placehold.co/600x400/e2e8f0/334155?text=Science" },
            { id: 3, title: "Language Classes", description: "Foreign language tutoring", image: "https://placehold.co/600x400/e2e8f0/334155?text=Language" },
        ],
        all: ["Math Tutoring", "Science Classes", "Language Classes", "Computer Classes", "Music Lessons", "Test Preparation"],
    },
    {
        id: "gardening",
        title: "Gardening Services",
        featured: [
            { id: 1, title: "Lawn Care", description: "Professional lawn maintenance", image: "https://placehold.co/600x400/e2e8f0/334155?text=Lawn+Care" },
            { id: 2, title: "Garden Design", description: "Creative garden design service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Garden+Design" },
            { id: 3, title: "Tree Pruning", description: "Professional tree care service", image: "https://placehold.co/600x400/e2e8f0/334155?text=Tree+Care" },
        ],
        all: ["Lawn Care", "Garden Design", "Tree Pruning", "Irrigation System", "Weed Control", "Plant Maintenance"],
    }
];
