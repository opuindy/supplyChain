export const products = [
  {
    productName: "Herbron Bread",
    productType: "Food",
    batchNumber: "8991bh",
    manufacturingDate: "2024-01-01",
    expiryDate: "2025-01-01",
    quantityProduced: 200,
    description: "A delicious and healthy bread.",
    source: "Herbron Bakery",
    ingredients: "Flour, Water, Yeast, Salt",
    treatmentMethods: "Baking",
    packagingType: "Plastic Bag",
    packagingDate: "2024-01-02",
    storageRequirements: "Store in a cool, dry place",
    specialInstructions: "Handle with care",
    rawMaterialSource: "Local Farmers",
    rawMaterialType: "Organic",
    supplierInfo: "Supplier ABC, Address, Contact",
    procurementDate: "2023-12-01",
    quantityProcured: 500,
    additionalInfo: "Best before 2025-01-01.",
  },
  {
    productName: "Herbron Sachet Water",
    productType: "Water",
    batchNumber: "8098vw",
    manufacturingDate: "2024-01-10",
    expiryDate: "2025-01-10",
    quantityProduced: 500,
    description: "Clean and purified drinking water.",
    source: "Herbron Water Plant",
    ingredients: "Water",
    treatmentMethods: "Filtration, UV treatment",
    packagingType: "Sachet",
    packagingDate: "2024-01-11",
    storageRequirements: "Store in a cool, dry place",
    specialInstructions: "Avoid direct sunlight",
    rawMaterialSource: "Local Water Source",
    rawMaterialType: "Natural",
    supplierInfo: "Supplier XYZ, Address, Contact",
    procurementDate: "2023-12-05",
    quantityProcured: 1000,
    additionalInfo: "Suitable for all ages.",
  },
  {
    productName: "Green Fertilizer",
    productType: "Fertilizer",
    batchNumber: "0001AA",
    manufacturingDate: "2024-04-06",
    expiryDate: "2025-04-06",
    quantityProduced: 80,
    description: "High quality organic fertilizer.",
    source: "Herbron Fertilizer Plant",
    ingredients: "Compost, Manure, Bone Meal",
    treatmentMethods: "Composting",
    packagingType: "Sack",
    packagingDate: "2024-04-07",
    storageRequirements: "Store in a cool, dry place",
    specialInstructions: "Use gloves while handling",
    rawMaterialSource: "Local Farms",
    rawMaterialType: "Organic",
    supplierInfo:
      "Supplier LMN, 22 green street salt lake city Nigeria, +2349135677229",
    procurementDate: "2023-12-10",
    quantityProcured: 200,
    additionalInfo: "Promotes plant growth.",
  },
];

export const orders = [
  {
    orderNumber: "ORD12345",
    customerName: "John Doe",
    productType: "Bread",
    quantityOrdered: 200,
    batchNumber: "BATCH123",
    orderDate: "2024-01-01",
    deliveryDate: "2024-01-05",
    transportationDetails: "Delivered via truck",
    storageConditions: "Store in a cool, dry place",
    receiptDate: "2024-01-06",
    transferDate: "2024-01-07",
    additionalInfo: "Handle with care during transfer.",
    id: "1",
  },
  {
    orderNumber: "ORD001",
    customerName: "Alice Johnson",
    productType: "Bread",
    quantityOrdered: 150,
    batchNumber: "BATCH001",
    orderDate: "2024-06-01",
    deliveryDate: "2024-06-05",
    transportationDetails: "Delivered via truck",
    storageConditions: "Store in a cool, dry place",
    receiptDate: "2024-06-06",
    transferDate: "2024-06-07",
    additionalInfo: "Handle with care during transfer.",
    id: "2",
  },
  {
    orderNumber: "ORD002",
    customerName: "Bob Smith",
    productType: "Bread",
    quantityOrdered: 200,
    batchNumber: "BATCH002",
    orderDate: "2024-06-02",
    deliveryDate: "2024-06-06",
    transportationDetails: "Delivered via truck",
    storageConditions: "Store in a cool, dry place",
    receiptDate: "2024-06-07",
    transferDate: "2024-06-08",
    additionalInfo: "Handle with care during transfer.",
    id: "3",
  },
  {
    orderNumber: "ORD003",
    customerName: "Catherine Lee",
    productType: "Bread",
    quantityOrdered: 250,
    batchNumber: "BATCH003",
    orderDate: "2024-06-03",
    deliveryDate: "2024-06-07",
    transportationDetails: "Delivered via truck",
    storageConditions: "Store in a cool, dry place",
    receiptDate: "2024-06-08",
    transferDate: "2024-06-09",
    additionalInfo: "Handle with care during transfer.",
    id: "4",
  },
  {
    orderNumber: "ORD004",
    customerName: "David Brown",
    productType: "Bread",
    quantityOrdered: 300,
    batchNumber: "BATCH004",
    orderDate: "2024-06-04",
    deliveryDate: "2024-06-08",
    transportationDetails: "Delivered via truck",
    storageConditions: "Store in a cool, dry place",
    receiptDate: "2024-06-09",
    transferDate: "2024-06-10",
    additionalInfo: "Handle with care during transfer.",
    id: "5",
  },
  {
    orderNumber: "ORD005",
    customerName: "Emma Wilson",
    productType: "Bread",
    quantityOrdered: 350,
    batchNumber: "BATCH005",
    orderDate: "2024-06-05",
    deliveryDate: "2024-06-09",
    transportationDetails: "Delivered via truck",
    storageConditions: "Store in a cool, dry place",
    receiptDate: "2024-06-10",
    transferDate: "2024-06-11",
    additionalInfo: "Handle with care during transfer.",
    id: "6",
  },
];

export const inventory = [
  {
    id: "1",
    productName: "Bread",
    productType: "Food",
    quantityInStock: 100,
    stockingDate: "2024-06-01",
    storageDetails: "Store in a cool, dry place",
    displayInformation: "Display at eye level",
    saleDate: "2024-06-05",
    customerName: "John Doe",
    customerContact: "1234567890",
    additionalInfo: "Handle with care",
  },
  // Add more items as needed
];
